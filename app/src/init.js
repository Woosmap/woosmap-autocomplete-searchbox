(function () {
    var GooglePlaces = require('./googleplaces');
    var Autocomplete = require('./autocomplete.js');
    var Woosmap = require('./woosmap.js');
    var _ = require('./utils.js');
    var defaultConfig = require('./defaultconfig.js').search;

    var AutocompleteWoosmapSearchBox = function (input, options) {
        var me = this;
        this.input = input;

        options = options || {};
        var googleOptions = options.google || {};
        var searchOptions = options.search || {};
        var woosmapOptions = options.woosmap || {};
        var autocompleteOptions = options.autocomplete || {};

        defaultConfig.inputEvt = this.autocompleteAddressInputEvt;
        defaultConfig.selectComplete = this.autocompleteAddressSelectComplete;
        _.configure(this, defaultConfig, searchOptions);
        if (this.woosmapOnly) {
            this.inputEvt = this.autocompleteWoosmapInputEvt;
            this.selectComplete = this.autocompleteWoosmapSelectComplete;
        }
        else {
            this.google = new GooglePlaces(input, googleOptions);
        }

        this.woosmap = new Woosmap(input, woosmapOptions);
        this.autocomplete = new Autocomplete(input, autocompleteOptions);
        this.currentSearch = '';

        _.$(this.input).addEventListener("click", function () {
            me.autocompleteClickEvt();
        });
        _.$(this.input).addEventListener("input", function () {
            me.inputEvt();
        });
        _.$(this.input).addEventListener('autocomplete-selectcomplete', function (evt) {
            me.selectComplete(evt);
        });
    };
    AutocompleteWoosmapSearchBox.prototype = {
        autocompleteAddressInputEvt: function () {
            if (this.input.value.length >= this.autocomplete.minChars) {
                this.request = {
                    input: this.input.value
                };
                this.currentSearch = this.input.value;
                var me = this;
                this.google.getPredictions(this.request, function (list) {
                    if (list.length > 0) {
                        me.autocomplete.item = function (suggestion) {
                            var offset = suggestion.metadata.matched_substrings[0].offset;
                            var length = suggestion.metadata.matched_substrings[0].length;
                            var matched_text = suggestion.label.substring(offset, offset + length);
                            var secondary_text = suggestion.metadata.structured_formatting.secondary_text;
                            var item_id = suggestion.metadata.index;
                            return Autocomplete.ITEM(suggestion, matched_text, item_id, secondary_text);
                        };
                        me.autocomplete.filter = function () {
                            return true;
                        };
                    }
                    else {
                        while (me.autocomplete.ul.firstChild) {
                            me.autocomplete.ul.removeChild(me.autocomplete.ul.firstChild);
                        }
                    }
                    me.autocomplete.list = list;
                });
            }
            else {
                while (this.autocomplete.ul.firstChild) {
                    this.autocomplete.ul.removeChild(this.autocomplete.ul.firstChild);
                }
            }
        },
        autocompleteAddressSelectComplete: function (evt) {
            var me = this;
            this.google.getDetails(evt.text.metadata.place_id, function (placeDetail, latlngObj) {
                Autocomplete.$.fire(me.input, "autocomplete-woosmap-selectcomplete", {
                    placeDetails: placeDetail
                });
                me.woosmap.searchNearbyStores(latlngObj, function (assetsDetails) {
                    Autocomplete.$.fire(me.input, "autocomplete-woosmap-assetcomplete", {
                        woosmapAssets: assetsDetails
                    });
                });
            });
        },
        autocompleteWoosmapSelectComplete: function (evt) {
            Autocomplete.$.fire(this.input, "autocomplete-woosmap-assetcomplete", {
                woosmapAsset: evt.text.metadata
            });
        },
        autocompleteWoosmapInputEvt: function () {
            if (this.input.value.length >= this.autocomplete.minChars) {
                var me = this;
                this.woosmap.searchStoresByName(this.input.value, function (list) {
                    if (list.length > 0) {
                        me.autocomplete.filter = function () {
                            return true;
                        };
                    }
                    else {
                        while (me.autocomplete.ul.firstChild) {
                            me.autocomplete.ul.removeChild(me.autocomplete.ul.firstChild);
                        }
                    }
                    me.autocomplete.list = list;
                });
            }
            else {
                while (this.autocomplete.ul.firstChild) {
                    this.autocomplete.ul.removeChild(this.autocomplete.ul.firstChild);
                }
            }
        },
        autocompleteClickEvt: function () {
            if (this.autocomplete.ul.childNodes.length !== 0 && this.autocomplete.ul.hasAttribute('hidden')) {
                if (this.currentSearch !== this.input.value) {
                    this.inputEvt();
                }
                else {
                    this.autocomplete.open();
                }
            }
            else {
                this.autocomplete.close();
            }
        }
    };

    function start() {
        _.$$("input.autocomplete-woosmap").forEach(function (input) {
            new AutocompleteWoosmapSearchBox(input);
        });
    }

    if (typeof Document !== "undefined") {
        if (document.readyState !== "loading") {
            start();
        }
        else {
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

}());
