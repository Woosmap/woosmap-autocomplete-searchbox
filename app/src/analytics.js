(() => {
    const _ = require('./utils.js');
    const defaultConfig = require('./defaultconfig.js').analytics;

    class Analytics {
        constructor(input, options) {
            this.input = _.$(input);
            _.configure(this, defaultConfig, options);
        }

        trackSearch(source, id, text_input, text_selected, type) {
            let session_id = _.getUUIDFromSessionStorage();
            if (session_id === null) {
                _.saveUUIDToSessionStorage(_.generateUUID());
            }
            session_id = _.getUUIDFromSessionStorage();
            let url = this.analyticsUrl
                .replace('{key}', this.key)
                .replace('{channel}', this.channel)
                .replace('{source}', source)
                .replace('{id}', id)
                .replace('{input}', text_input)
                .replace('{description}', text_selected)
                .replace('{type}', type)
                .replace('{session_id}', session_id);

            _.makeRequest({url: url}, function (response) {
                    console.log(response);
                }.bind(this),
                function (statusText) {
                    console.error('Error while recording analytics for ' + text_selected + ' (' + statusText + ')');
                });
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