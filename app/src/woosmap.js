(function () {
    var _ = require('./utils.js');
    var defaultConfig = require('./defaultconfig.js').woosmap;
    var Woosmap = function (input, options) {
        var me = this;
        this.input = _.$(input);
        _.configure(this, defaultConfig, options);
        this._loadWoosmapReco(function () {
            me.woosmapReco.setProjectKey(me.projectKey);
        });
    };

    Woosmap.prototype = {
        searchStoresByName: function (searchTerm, callback) {
            woosmapRecommendation.searchStores({
                successCallback: function (resp) {
                    var list = resp.features.map(function (data, index) {
                        data.index = index;
                        data.label = data.properties.name;
                        if (typeof data.properties.address !== 'undefined' && typeof data.properties.address.city !== 'undefined') {
                            data.label += ' ' + data.properties.address.city;
                        }
                        return {label: data.label, value: data.properties.name, metadata: data};
                    });
                    callback(list, searchTerm);
                },
                errorCallback: function () {
                    callback([], searchTerm);
                },
                query: this.queryPattern.split(this.queryReplaceKey).join(searchTerm),
                storesByPage: this.storesByPage,
                maxDistance: this.maxDistance
            });
        },
        searchNearbyStores: function (latlngObj, callback) {
            var me = this;
            this.woosmapReco.searchStores({
                lat: latlngObj.lat,
                lng: latlngObj.lng,
                successCallback: function (resp) {
                    callback(resp.features);
                    me.woosmapReco.sendUserSearchedPosition(latlngObj);
                },
                errorCallback: function () {
                    callback([]);
                },
                storesByPage: this.storesByPage,
                maxDistance: this.maxDistance
            });
        },
        _loadWoosmapReco: function (callback) {
            if (typeof this.woosmapReco !== 'undefined')
                return;
            _.getScript('https://recommendation-js.woosmap.com/recommendation.js', function () {
                this.woosmapReco = window.woosmapRecommendation;
                if (callback) {
                    callback();
                }
            }.bind(this));

        }
    };

    if (typeof self !== "undefined") {
        self.Woosmap = Woosmap;
    }

    if (typeof module === "object" && module.exports) {
        module.exports = Woosmap;
    }

    return Woosmap;

}());