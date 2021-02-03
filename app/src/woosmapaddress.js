(() => {
    const _ = require('./utils.js');
    const fuzz = require('fuzzball');
    const defaultConfig = require('./defaultconfig.js').woosmap;

    class WoosmapAddress {
        constructor(input, options) {
            this.input = _.$(input);
            _.configure(this, defaultConfig, options);
        }

        buildComponents(components) {
            if (components !== undefined) {
                let componentParts = [];
                for (let key of Object.keys(components)) {
                    let value = components[key];
                    if (Array.isArray(value)) {
                        for (let subValue of value) {
                            componentParts.push(`${key}:${subValue}`);
                        }
                    } else {
                        componentParts.push(`${key}:${value}`);
                    }
                }
                return componentParts.join('|');
            }
        }

        buildParams() {
            const components = this.buildComponents(this.addressComponentRestrictions);
            const urlParams = {
                key: this.projectKey
            };
            if (this.language.length > 0) {
                urlParams.language = this.language;
            }
            if (components.length > 0) {
                urlParams.components = components;
            }
            return urlParams;
        }

        getQueryPredictions(searchTerm, callback) {
            const urlParams = this.buildParams();
            urlParams.input = searchTerm;
            let url = `${this.addressApiUrl}autocomplete/json?${_.buildQueryString(urlParams)}`;
            _.makeRequest({url: url}, function (response) {
                    const list = JSON.parse(response)["predictions"].map((data, index) => {
                        data.index = index + 5;
                        data.label = data.description;
                        data.typeClass = "woosmap " + data.type;
                        data.dataType = "woosmapaddress";
                        data.searchedTerm = searchTerm;
                        data.ratio = fuzz.partial_ratio(fuzz.full_process(searchTerm), data.label);
                        return {label: data.label, value: data.description, metadata: data};
                    });
                    callback(list, searchTerm);
                }.bind(this),
                function (statusText) {
                    console.error('Error while recording analytics for ' + text_selected + ' (' + statusText + ')');
                });
        }

        getAddressDetails(address, callback) {
            const urlParams = this.buildParams(address);
            urlParams.address = address;
            let url = `${this.addressApiUrl}geocode/json?${_.buildQueryString(urlParams)}`;
            _.makeRequest({url: url}, function (response) {
                    const geocodedAddress = JSON.parse(response).results[0];
                    callback(geocodedAddress, address);
                }.bind(this),
                function (statusText) {
                    console.error('Error while recording analytics for ' + text_selected + ' (' + statusText + ')');
                });
        }
    }

    if (typeof self !== "undefined") {
        self.WoosmapAddress = WoosmapAddress;
    }

    if (typeof module === "object" && module.exports) {
        module.exports = WoosmapAddress;
    }

    return WoosmapAddress;
})();