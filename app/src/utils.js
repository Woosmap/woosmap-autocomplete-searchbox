module.exports = {
    debounce: function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    configure: function (instance, properties, options) {
        for (var i in properties) {
            var initial = properties[i],
                attrValue = instance.input.getAttribute("data-" + i.toLowerCase());

            if (typeof initial === "number") {
                instance[i] = parseInt(attrValue);
            } else if (initial === false) { // Boolean options must be false by default anyway
                instance[i] = attrValue !== null;
            } else if (initial instanceof Function) {
                instance[i] = null;
            } else {
                instance[i] = attrValue;
            }

            if (!instance[i] && instance[i] !== 0) {
                instance[i] = (i in options) ? options[i] : initial;
            }
        }
    },
    getScript: function (scriptUrl, callback) {
        var scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.async = true;

        scriptElement.src = scriptUrl;

        var firstScript = document.getElementsByTagName('head')[0];
        firstScript.appendChild(scriptElement, firstScript);

        if (scriptElement.readyState) {
            scriptElement.onreadystatechange = function () {
                if (this.readyState === 'complete' || this.readyState === 'loaded') {
                    callback();
                } else {
                    console.error('Error when loading script ' + scriptUrl);
                }
            };
        } else {
            scriptElement.onload = function () {
                callback();
            };
            scriptElement.onerror = function () {
                console.error('Error when loading script ' + scriptUrl);
            };
        }
    },
    buildQueryString: function (parameters) {
        let queryStringParts = [];
        for (let key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                let value = parameters[key];
                if (value !== undefined) {
                    queryStringParts.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
                }
            }
        }
        return queryStringParts.join('&');
    },
    makeRequest: function ({method, url, headers, body}, resolve, reject) {
        const xhr = new window.XMLHttpRequest();
        xhr.open(method || "GET", url);
        if (headers) {
            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => {
            reject(xhr.statusText);
        };
        xhr.send(body);

        return xhr;
    },

    $: function (expr, con) {
        return typeof expr === "string" ? (con || document).querySelector(expr) : expr || null;
    },
    $$: function (expr, con) {
        return Array.prototype.slice.call((con || document).querySelectorAll(expr));
    }

};