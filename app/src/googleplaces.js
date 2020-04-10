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
                        data.typeClass = "google " + data.types.join(" ");
                        data.dataType = "google";
                        data.searchedTerm = request.input;
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
                placeId: place_id,
                fields: this.fields
            };
            this.placesService.getDetails(request, (result, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    const lat = result.geometry.location.lat();
                    const lng = result.geometry.location.lng();
                    callback(result, {lat, lng});
                } else if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR || status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                    window.setTimeout(() => {
                        me.getDetails(request, callback);
                    }, 100);
                } else {
                    console.error(status);
                }
            });
        }

        _loadPlacesApi(callback) {
            let params = '';
            let urlPlacesApi = 'https://maps.googleapis.com/maps/api/js?';

            if (this.language) {
                params += `&language=${this.language}`;
            }
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
            if (this.librariesToLoad.length > 0) {
                params += `&libraries=${this.librariesToLoad.join(',')}`;
            }
            urlPlacesApi += params;
            const me = this;
            _.getScript(urlPlacesApi, () => {
                me.autocompleteService = new google.maps.places.AutocompleteService();
                me.placesService = new google.maps.places.PlacesService(document.createElement('div'));
                if (callback) {
                    callback();
                }
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