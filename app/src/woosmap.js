(() => {
    const _ = require('./utils.js');
    const fuzz = require('fuzzball');
    const defaultConfig = require('./defaultconfig.js').woosmap;

    class Woosmap {
        constructor(input, options) {
            const me = this;
            this.input = _.$(input);
            _.configure(this, defaultConfig, options);
            this._loadWoosmapLocalities(() => {
                me.woosmapLocalities = new woosmap.localities.AutocompleteService(me.projectKey);
            });
        }

        getQueryPredictions(searchTerm, callback) {
            this.woosmapLocalities.getQueryPredictions({
                input: searchTerm,
                types: this.types,
                data: this.data,
                components: this.componentRestrictions
            }, ({localities}) => {
                const list = localities.map((data, index) => {
                    data.index = index;
                    data.label = data.description;
                    data.value = data.description;
                    data.typeClass = "woosmap";
                    data.searchedTerm = searchTerm;
                    data.ratio = fuzz.partial_ratio(searchTerm, data.label, {useCollator: true});
                    return {label: data.label, value: data.value, metadata: data};
                });
                callback(list, searchTerm);
            });
        }

        _loadWoosmapLocalities(callback) {
            if (typeof this.woosmapLocalities !== 'undefined')
                return;
            _.getScript(defaultConfig.localitiesLibUrl, () => {
                if (callback) {
                    callback();
                }
            });

        }
    }

    if (typeof self !== "undefined") {
        self.Woosmap = Woosmap;
    }

    if (typeof module === "object" && module.exports) {
        module.exports = Woosmap;
    }

    return Woosmap;
})();