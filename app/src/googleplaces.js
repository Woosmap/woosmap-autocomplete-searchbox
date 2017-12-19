(function () {
    var _ = require('./utils.js');
    var defaultConfig = require('./defaultconfig.js').google;
    var GooglePlaces = function (input, options) {
        this.input = _.$(input);
        _.configure(this, defaultConfig, options);
        if (typeof google === "object" && typeof google.maps === "object" && typeof google.maps.places === "object") {
            this.autocompleteService = new google.maps.places.AutocompleteService();
            this.placesService = new google.maps.places.PlacesService(document.createElement('div'));
        }
        else {
            this._loadPlacesApi();
        }
    };

    GooglePlaces.prototype = {
        getPredictions: function (request, callback) {
            var me = this;
            this.autocompleteService.getPlacePredictions(request, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    var list = results.map(function (data, index) {
                        data.index = index;
                        data.label = data.structured_formatting.main_text;
                        if (typeof data.structured_formatting.secondary_text !== 'undefined') {
                            data.label += ' ' + data.structured_formatting.secondary_text;
                        }
                        return {label: data.label, value: data.description, metadata: data};
                    });
                    callback(list, request.input);
                }
                else if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR || status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                    window.setTimeout(function () {
                        me.getPredictions(request);
                    }, 100);
                }
                else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                    callback([], request.input);
                } else {
                    console.error(status);
                }
            });
        },

        getDetails: function (place_id, callback) {
            var me = this;
            var request = {
                placeId: place_id
            };
            this.placesService.getDetails(request, function (result, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    var lat = result.geometry.location.lat();
                    var lng = result.geometry.location.lng();
                    callback(result, {lat: lat, lng: lng});
                }
                else if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR || status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                    window.setTimeout(function () {
                        me.getDetails(place_id, callback);
                    }, 100);
                }
                else {
                    console.error(status);
                }
            });
        },

        _loadPlacesApi: function (callback) {
            var librariesParams = '';
            if (this.librariesToLoad.length > 0) {
                librariesParams = '&libraries=' + this.librariesToLoad.join(',');
            }
            _.getScript('https://www.google.com/jsapi', function () {
                var params = 'language=' + this.language;
                if (this.region) {
                    params += '&region=' + this.region;
                }
                if (this.clientId) {
                    params += '&client=' + this.clientId;
                }
                if (this.apiKey) {
                    params += '&key=' + this.apiKey;
                }
                if (this.channel) {
                    params += '&channel=' + this.channel;
                }
                var me = this;
                google.load('maps', this.version, {
                    other_params: params + librariesParams,
                    callback: function () {
                        me.autocompleteService = new google.maps.places.AutocompleteService();
                        me.placesService = new google.maps.places.PlacesService(document.createElement('div'));
                        if (callback) {
                            callback();
                        }
                    }
                });
            }.bind(this));

        }
    };

    if (typeof self !== "undefined") {
        self.GooglePlaces = GooglePlaces;
    }

    if (typeof module === "object" && module.exports) {
        module.exports = GooglePlaces;
    }

    return GooglePlaces;

}());