(() => {
    const _ = require('./utils.js');
    const defaultConfig = require('./defaultconfig.js').analytics;

    class Analytics {
        constructor(input, options) {
            this.input = _.$(input);
            _.configure(this, defaultConfig, options);
            if (this.tracking) {
                const ga = window[window['GoogleAnalyticsObject'] || 'ga'];
                if (typeof ga !== 'function') {
                    this._loadGoogleAnalytics();
                }
            }
        }

        trackSearch(source, id, text_input, text_selected, type) {
            if (window.ga) {
                ga('send', {
                    hitType: 'event',
                    eventCategory: `${source}`,
                    eventAction: `${type[0]}`,
                    eventLabel: `${text_input} ({label:"${text_selected}",id:"${id}")`
                });
            }
        }

        _loadGoogleAnalytics(callback) {
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments);
                };
                i[r].l = 1 * new Date();
                a = s.createElement(o);
                m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
            if (window.ga) {
                window.ga('create', this.analyticsKey, 'auto');
            }
            if (callback) {
                callback();
            }
        }
    }

    if (typeof self !== "undefined") {
        self.Analytics = Analytics;
    }

    if (typeof module === "object" && module.exports) {
        module.exports = Analytics;
    }

    return Analytics;
})();