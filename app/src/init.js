(() => {
    const GooglePlaces = require('./googleplaces');
    const Autocomplete = require('./autocomplete.js');
    const Woosmap = require('./woosmap.js');
    const _ = require('./utils.js');
    const defaultSearchConfig = require('./defaultconfig.js').search;

    class AutocompleteWoosmapSearchBox {
        constructor(input, options) {
            const self = this;
            this.input = input;

            options = options || {};
            const googleOptions = options.google || {};
            const searchOptions = options.search || {};
            const woosmapOptions = options.woosmap || {};
            const autocompleteOptions = options.autocomplete || {};

            defaultSearchConfig.inputEvt = this.autocompleteWoosmapInputEvt;
            defaultSearchConfig.selectComplete = this.autocompleteSelectComplete;
            _.configure(this, defaultSearchConfig, searchOptions);

            this.google = new GooglePlaces(input, googleOptions);
            this.woosmap = new Woosmap(input, woosmapOptions);
            this.autocomplete = new Autocomplete(input, autocompleteOptions);

            this.currentSearch = '';

            _.$(this.input).addEventListener("click", () => {
                self.autocompleteClickEvt();
            });
            _.$(this.input).addEventListener("input", _.debounce(() => {
                self.inputEvt();
            }, this.autocomplete.debounceTime, false));
            _.$(this.input).addEventListener('autocomplete-selectcomplete', evt => {
                self.selectComplete(evt);
            });
        }

        autocompleteSelectComplete({text}) {
            switch (text.metadata.typeClass) {
                case 'woosmap':
                    Autocomplete.$.fire(this.input, "autocomplete-woosmap-selectcomplete", {
                        woosmapAsset: text.metadata
                    });
                    break;
                case 'google':
                    this.google.getDetails(text.metadata.place_id,
                        placeDetails =>
                            Autocomplete.$.fire(this.input, "autocomplete-google-selectcomplete",
                                {placeDetails}));
                    break;
                default:
                    break;
            }
        }

        autocompleteWoosmapInputEvt() {
            const listLocalitiesItems = [];
            let listTotalItems = [];
            let onlyFullRatio = true;
            if (this.input.value.length >= this.autocomplete.minChars) {
                this.currentSearch = this.input.value;
                this.request = {
                    input: this.input.value
                };
                const self = this;
                this.woosmap.getQueryPredictions(this.input.value, (list, query) => {
                    if (query !== self.autocomplete.input.value) {
                        return;
                    }
                    if (list.length > 0) {
                        self.autocomplete.filter = ({metadata}) => metadata.ratio >= self.minRatio;
                        if (self.autocomplete.sort) {
                            self.autocomplete.sort = (a, b) => b.metadata.ratio - a.metadata.ratio;
                        }
                        for (let i = 0, x = list.length; i < x; i++) {
                            if (self.searchGoogleWhenFullRatio && list[i].metadata.ratio <= 100) {
                                onlyFullRatio = false;
                            }
                            listLocalitiesItems.push(list[i]);
                        }
                        listTotalItems = listLocalitiesItems.filter(({metadata}) => metadata.ratio >= self.minRatio);
                    }
                    if ((listTotalItems.length < self.autocomplete.maxItems && (self.searchGoogleWhenPartialResults || onlyFullRatio)) || listTotalItems.length === 0) {
                        const that = self;
                        self.google.getPredictions(self.request, (listGooglePlacesItems, queryInput) => {
                            if (queryInput !== that.autocomplete.input.value) {
                                return;
                            }
                            that.autocomplete.filter = () => true;
                            if (listGooglePlacesItems.length > 0) {
                                const indexes = listGooglePlacesItems.length - listTotalItems.length;
                                for (let i = indexes - 1, x = 0; i >= x; i--) {
                                    listTotalItems.unshift(listGooglePlacesItems[i]);
                                }
                                that.autocomplete.list = listTotalItems;
                            } else {
                                while (that.autocomplete.ul.firstChild) {
                                    that.autocomplete.ul.removeChild(that.autocomplete.ul.firstChild);
                                }
                                if (that.fallbackWoosmap) {
                                    that.autocomplete.list = listLocalitiesItems;
                                }
                            }
                        });
                    } else {
                        self.autocomplete.list = listLocalitiesItems;
                    }

                });

            } else {
                this.autocomplete.list = [];
            }
        }

        autocompleteClickEvt() {
            if (this.autocomplete.ul.childNodes.length !== 0 && this.autocomplete.ul.hasAttribute('hidden')) {
                if (this.currentSearch !== this.input.value) {
                    this.inputEvt();
                } else {
                    this.autocomplete.open();
                }
            } else {
                this.autocomplete.close();
            }
        }
    }

    function start() {
        _.$$("input.autocomplete-woosmap").forEach(input => {
            new AutocompleteWoosmapSearchBox(input);
        });
    }

    if (typeof Document !== "undefined") {
        if (document.readyState !== "loading") {
            start();
        } else {
            document.addEventListener("DOMContentLoaded", start);
        }
    }

    if (typeof self !== "undefined") {
        self.AutocompleteWoosmapSearchBox = AutocompleteWoosmapSearchBox;
    }

    if (typeof module === "object" && module.exports) {
        module.exports = AutocompleteWoosmapSearchBox;
    }

    return AutocompleteWoosmapSearchBox;
})();
