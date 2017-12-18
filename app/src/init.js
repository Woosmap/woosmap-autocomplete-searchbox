(function () {
    var GooglePlaces = require('./googleplaces');
    var Autocomplete = require('./autocomplete.js');
    var Woosmap = require('./woosmap.js');
    var _ = require('./utils.js');

    var AutocompleteWoosmapSearchBox = function (input) {
        var me = this;
        this.google = new GooglePlaces(input, {});
        this.woosmap = new Woosmap(input, {});
        this.autocomplete = new Autocomplete(input, {minChars: 2, sort: false});
        this.currentSearch = '';

        _.$(input).addEventListener("click", function () {
            me.autocompleteClickEvt();
        });
        _.$(input).addEventListener("input", function () {
            me.autocompleteAddressInputEvt();
        });
        _.$(input).addEventListener('autocomplete-selectcomplete', function (evt) {
            me.google.getDetails(evt.text.metadata.place_id, function (placeDetail, latlngObj) {
                Autocomplete.$.fire(me.autocomplete.input, "autocomplete-woosmap-selectcomplete", {
                    placeDetails: placeDetail
                });
                me.woosmap.searchNearbyStores(latlngObj, function (assetsDetails) {
                    Autocomplete.$.fire(me.autocomplete.input, "autocomplete-woosmap-assetcomplete", {
                        woosmapAssets: assetsDetails
                    });
                });
            });
        });
    };
    AutocompleteWoosmapSearchBox.prototype = {
        autocompleteAddressInputEvt: function () {
            if (this.autocomplete.input.value.length >= this.autocomplete.minChars) {
                this.request = {
                    input: this.autocomplete.input.value
                };
                this.currentSearch = this.autocomplete.input.value;
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
        autocompleteWoosmapInputEvt: function () {
            if (this.autocomplete.input.value.length >= this.autocomplete.minChars) {
                var me = this;
                this.woosmap.searchStoresByName(this.autocomplete.input.value, function (list) {
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
                if (this.currentSearch !== this.autocomplete.input.value) {
                    this.autocompleteAddressInputEvt();
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
