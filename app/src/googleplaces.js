(() => {
    const _ = require('./utils.js');
    const defaultConfig = require('./defaultconfig.js').google;
    const fuzz = require('fuzzball');

    class GooglePlaces {
        constructor(input, options) {
            this.input = _.$(input);
            _.configure(this, defaultConfig, options);
            if (typeof google === "object" && typeof google.maps === "object" && typeof google.maps.places === "object") {
                this.autocompleteService = new google.maps.places.AutocompleteService();
                this.placesService = new google.maps.places.PlacesService(document.createElement('div'));
            } else {
                this._loadPlacesApi();
            }
        }

        getPredictions(request, callback) {
            const me = this;
            request.componentRestrictions = this.componentRestrictions;
            this.autocompleteService.getPlacePredictions(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    const list = results.map((data, index) => {
                        data.index = index + 5;
                        data.label = data.structured_formatting.main_text;
                        data.typeClass = "google";
                        if (typeof data.structured_formatting.secondary_text !== 'undefined') {
                            data.label += ` ${data.structured_formatting.secondary_text}`;
                        }
                        data.ratio = fuzz.partial_ratio(fuzz.full_process(request.input), data.label);
                        return {label: data.label, value: data.description, metadata: data};
                    });
                    callback(list, request.input);
                } else if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR || status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                    window.setTimeout(() => {
                        me.getPredictions(request);
                    }, 100);
                } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                    callback([], request.input);
                } else {
                    console.error(status);
                }
            });
        }

        getDetails(place_id, callback) {
            const me = this;
            const request = {
                placeId: place_id
            };
            this.placesService.getDetails(request, (result, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    const lat = result.geometry.location.lat();
                    const lng = result.geometry.location.lng();
                    callback(result, {lat, lng});
                } else if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR || status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                    window.setTimeout(() => {
                        me.getDetails(place_id, callback);
                    }, 100);
                } else {
                    console.error(status);
                }
            });
        }

        _loadPlacesApi(callback) {
            let librariesParams = '';
            if (this.librariesToLoad.length > 0) {
                librariesParams = `&libraries=${this.librariesToLoad.join(',')}`;
            }
            _.getScript('https://www.google.com/jsapi', () => {
                let params = `language=${this.language}`;
                if (this.region) {
                    params += `&region=${this.region}`;
                }
                if (this.clientId) {
                    params += `&client=${this.clientId}`;
                }
                if (this.apiKey) {
                    params += `&key=${this.apiKey}`;
                }
                if (this.channel) {
                    params += `&channel=${this.channel}`;
                }
                const me = this;
                google.load('maps', this.version, {
                    other_params: params + librariesParams,
                    callback() {
                        me.autocompleteService = new google.maps.places.AutocompleteService();
                        me.placesService = new google.maps.places.PlacesService(document.createElement('div'));
                        if (callback) {
                            callback();
                        }
                    }
                });
            });

        }
    }

    if (typeof self !== "undefined") {
        self.GooglePlaces = GooglePlaces;
    }

    if (typeof module === "object" && module.exports) {
        module.exports = GooglePlaces;
    }

    return GooglePlaces;
})();