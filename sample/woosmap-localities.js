(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.AutocompleteService = factory());
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function generateParams(params) {
    return encodeURI(Object.keys(params).reduce(function (acum, key) {
      var value = params[key];

      if (value) {
        if (key === 'components') {
          acum += "".concat(key, "=").concat(getComponentValueTransformed(value));
        } else {
          acum += "".concat(key, "=").concat(getValueTransformed(value));
        }

        acum += '&';
      }

      return acum;
    }, '?').slice(0, -1));
  }

  function getValueTransformed(value) {
    if (_typeof(value) === 'object') {
      return JSON.stringify(value);
    }

    return value;
  }

  function getComponentValueTransformed(data) {
    return Object.keys(data).reduce(function (acum, key) {
      var current = data[key];

      if (Array.isArray(current)) {
        acum = current.map(function (v) {
          return "".concat(key, ":").concat(v);
        }).join('|');
      } else {
        acum += "".concat(key, ":").concat(current);
      }

      return acum;
    }, '');
  }

  /**
   * @typedef {Object} AutocompleteParameters
   * @property {string} input Value to search for predictions
   * @property {string} types requested prediction type ('locality', 'postal_code', or undefined for both)
   * @property {ComponentRestrictions} components restricts predictions to selected components
   * @property {String} language expected response language
   **/

  /**
   * @typedef {Object} ComponentRestrictions
   * @property {String|String[]} country Restricts predictions to the specified country (ISO 3166-1 Alpha-2 country code, case insensitive). For example, 'fr', 'gb', or 'es'. You can provide a single one, or an array of country code strings.
   **/

  /**
   * Callback executed when query is successful
   * @callback successCallback
   * @param {AutocompleteResponse} autocompleteResponse
   */

  /**
   * Callback executed when query fails
   * @callback errorCallback
   * @param {int} errorCode the http error code
   * @param {string} errorText the error description
   */

  /**
   * woosmapApi
   * Method to call the woosmap api
   *
   * @private
   * @param {AutocompleteParameters} params Params with the request values
   * @param {successCallback} callback executed on success
   * @param {errorCallback} errorCallback executed on failure
   */

  function woosmapApi(_ref, callback, errorCallback) {
    var input = _ref.input,
        types = _ref.types,
        components = _ref.components,
        language = _ref.language,
        apiKey = _ref.apiKey,
        apiUrl = _ref.apiUrl;
    var url = "".concat(apiUrl).concat(generateParams({
      input: input,
      types: types,
      components: components,
      language: language,
      key: apiKey
    }));
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function (e) {
      return xhrSuccess(e, callback);
    };

    xhr.onerror = function (e) {
      return xhrError(e, errorCallback);
    };

    xhr.ontimeout = function () {
      return xhrTimeout(errorCallback);
    };

    xhr.send(null);

    function xhrSuccess(response, callback) {
      var res = response.target;

      if (res.readyState === 4) {
        if (res.status === 200) {
          var _response;

          if (res.responseText) {
            _response = JSON.parse(res.responseText);
          }

          callback(_response);
        } else {
          xhrError(response);
        }
      }
    }

    function xhrTimeout(errorCallback) {
      errorCallback(504, 'A timeout occurred connecting to the API');
    }

    function xhrError(response, errorCallback) {
      if (xhr.status === 0) {
        errorCallback(401, 'Unauthorized request');
      } else {
        errorCallback(response.target.errorCode, response.target.errorText);
      }
    }
  }

  /**
   *  Config file by default
   *
   */

  /**
   *  WOOSMAP_API_URL
   *  Api url of woosmap service to request call
   */
  var WOOSMAP_API_URL = 'https://api.woosmap.com';
  var WOOSMAP_LOCALITIES_ENDPOINT = '/localities/autocomplete';

  /**
   * @typedef {Object} AutocompleteRequest
   * @property {String} input User input
   * @property {ComponentRestrictions} components restricts predictions to selected components
   * @property {String} types The types queried (supports 'locality' and 'postal_code' ; omit param for both)
   * @property {String} language expected response language. Default is the country local or browser language
   **/

  /**
   * @typedef {Object} ComponentRestrictions
   * @property {String|String[]} country Restricts predictions to the specified country (ISO 3166-1 Alpha-2 country code, case insensitive). For example, 'fr', 'gb', or 'es'. You can provide a single one, or an array of country code strings.
   **/

  /**
   * @typedef {Object} AutocompleteLocalities
   * @property {String} admin_0 The country name associated to the prediction
   * @property {String} admin_1 The area name associated to the prediction
   * @property {String} description The suggested formatted answer
   * @property {LatLngLiteral} location The location object
   * @property {String} name The location name
   * @property {String|String[]} postal_codes Array of postal codes for suggested location (only returned for localities predictions)
   * @property {String} type requested prediction type ('locality' or 'postal_code')
   * @property {LatLngBoundsLiteral} viewpoint The preferred viewpoint when displaying this Locality on a map. This property will be null if the preferred viewport for the Locality is not known.
   **/

  /**
   * @typedef {Object} AutocompleteResponse
   * @property {AutocompleteLocalities} localities Array with Autocomplete Localities
   **/

  /**
   * @typedef {Object} LatLngLiteral
   * @property {String} lat The latitude value
   * @property {String} lng The longitude value
   **/

  /**
   * @typedef {Object} LatLngBoundsLiteral
   * @property {String} east The east value
   * @property {String} north The north value
   * @property {String} south The south value
   * @property {String} west The west value
   **/

  /**
   * Callback executed when query is successful
   * @callback successCallback
   * @param {AutocompleteResponse} autocompleteResponse
   */

  /**
   * Callback executed when query fails
   * @callback errorCallback
   * @param {int} errorCode the http error code
   * @param {string} errorText the error description
   */

  /**
   * AutocompleteService
   * @memberof woosmap.localities
   **/

  var AutocompleteService =
  /*#__PURE__*/
  function () {
    /**
     * Instantiate a new AutocompleteService Object
     * @methodOf AutocompleteService
     * @param {string} apiKey : Woosmap Public Key of your project
     */
    function AutocompleteService(apiKey) {
      _classCallCheck(this, AutocompleteService);

      if (window.woosmap && (window.woosmap.api_url || window.woosmap.apiUrl)) {
        this.apiUrl = window.woosmap.api_url || window.woosmap.apiUrl;
      } else {
        this.apiUrl = WOOSMAP_API_URL;
      }

      if (apiKey) {
        this.apiKey = apiKey;
      } else if (window.woosmap && (window.woosmap.public_key || window.woosmap.publicKey)) {
        this.apiKey = window.woosmap.public_key || window.woosmap.publicKey;
      } else {
        throw new Error('Undefined API public key');
      }
    }
    /**
     * Get the predictions array from an input value.
     * @methodOf AutocompleteService
     * @param {AutocompleteRequest} params query parameters
     * @param {successCallback} callback executed on success
     * @param {errorCallback} errorCallback executed on failure
     */


    _createClass(AutocompleteService, [{
      key: "getQueryPredictions",
      value: function getQueryPredictions(params, callback, errorCallback) {
        if (!params) {
          errorCallback(400, 'No params');
          return;
        }

        var isBrowser = !!(typeof window === "undefined" ? "undefined" : _typeof(window));
        var input = params.input,
            types = params.types,
            components = params.components;
        var language = params.language;
        /* Check if every params is setted */

        if (!input || !input.length) {
          // don't make a call for an empty input
          return;
        }

        if (types) {
          if (types !== 'locality' && types !== 'postal_code') {
            errorCallback(400, 'Type parameter has an incorrect value: ' + types);
            return;
          }
        }

        if (!language) {
          language = 'en';

          if (isBrowser) {
            language = window.navigator.language.substr(0, 2);
          }
        }

        return woosmapApi({
          input: input,
          types: types,
          components: components,
          language: language,
          apiKey: this.apiKey,
          apiUrl: this.apiUrl + WOOSMAP_LOCALITIES_ENDPOINT
        }, callback, errorCallback);
      }
    }]);

    return AutocompleteService;
  }();

  return AutocompleteService;

}));
