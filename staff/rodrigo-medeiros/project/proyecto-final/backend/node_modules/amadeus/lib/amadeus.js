"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _client = _interopRequireDefault(require("./amadeus/client"));
var _pagination = _interopRequireDefault(require("./amadeus/client/pagination"));
var _reference_data = _interopRequireDefault(require("./amadeus/namespaces/reference_data"));
var _shopping = _interopRequireDefault(require("./amadeus/namespaces/shopping"));
var _booking = _interopRequireDefault(require("./amadeus/namespaces/booking"));
var _travel = _interopRequireDefault(require("./amadeus/namespaces/travel"));
var _e_reputation = _interopRequireDefault(require("./amadeus/namespaces/e_reputation"));
var _media = _interopRequireDefault(require("./amadeus/namespaces/media"));
var _ordering = _interopRequireDefault(require("./amadeus/namespaces/ordering"));
var _airport = _interopRequireDefault(require("./amadeus/namespaces/airport"));
var _schedule = _interopRequireDefault(require("./amadeus/namespaces/schedule"));
var _analytics = _interopRequireDefault(require("./amadeus/namespaces/analytics"));
var _location = _interopRequireDefault(require("./amadeus/namespaces/location"));
var _airline = _interopRequireDefault(require("./amadeus/namespaces/airline"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * The Amadeus client library for accessing the travel APIs.
 *
 * Initialize using your credentials:
 *
 * ```js
 * var Amadeus = require('amadeus');
 * var amadeus = new Amadeus({
 *     clientId:    'YOUR_CLIENT_ID',
 *     clientSecret: 'YOUR_CLIENT_SECRET'
 * });
 * ```
 *
 * Alternatively, initialize the library using
 * the environment variables `AMADEUS_CLIENT_ID`
 * and `AMADEUS_CLIENT_SECRET`
 *
 * ```js
 * var amadeus = new Amadeus();
 * ```
 *
 * @param {Object} params
 * @param {string} params.clientId the API key used to authenticate the API
 * @param {string} params.clientSecret the API secret used to authenticate
 *  the API
 * @param {Object} [params.logger=console] a `console`-compatible logger that
 *  accepts `log`, `error` and `debug` calls.
 * @param {string} [params.logLevel='warn'] the log level for the client,
 *  available options are `debug`, `warn`, and `silent`
 * @param {string} [params.hostname='production'] the name of the server API
 *  calls are made to (`production` or `test`)
 * @param {string} [params.host] the full domain or IP for a server to make the
 *  API clal to. Only use this if you don't want to use the provided servers
 * @param {boolean} [params.ssl=true] wether to use SSL for this API call
 * @param {number} [params.port=443] the port to make the API call to
 * @param {string} [params.customAppId=null] a custom App ID to be passed in
 * the User Agent to the server.
 * @param {string} [params.customAppVersion=null] a custom App Version number to
 * be passed in the User Agent to the server.
 * @param {Object} [params.http=https] an optional Node/HTTP(S)-compatible client
 *  that accepts a 'request()' call with an array of options.
 *
 * @property {Client} client The client for making authenticated HTTP calls
 * @property {number} version The version of this API client
 */
var Amadeus = /*#__PURE__*/function () {
  function Amadeus() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Amadeus);
    this.client = new _client["default"](params);
    this.version = this.client.version;
    this.referenceData = new _reference_data["default"](this.client);
    this.shopping = new _shopping["default"](this.client);
    this.booking = new _booking["default"](this.client);
    this.travel = new _travel["default"](this.client);
    this.eReputation = new _e_reputation["default"](this.client);
    this.media = new _media["default"](this.client);
    this.ordering = new _ordering["default"](this.client);
    this.airport = new _airport["default"](this.client);
    this.pagination = new _pagination["default"](this.client);
    this.schedule = new _schedule["default"](this.client);
    this.analytics = new _analytics["default"](this.client);
    this.location = new _location["default"](this.client);
    this.airline = new _airline["default"](this.client);
  }

  /**
   * The previous page for the given response. Resolves to null if the page
   * could not be found.
   *
   * ```js
   * amadeus.referenceData.locations.get({
   *   keyword: 'LON',
   *   subType: 'AIRPORT,CITY',
   *   page: { offset: 2 }
   * }).then(function(response){
   *   console.log(response);
   *   return amadeus.previous(response);
   * }).then(function(previousPage){
   *   console.log(previousPage);
   * });
   * ```
   *
   * @param response the previous response for an API call
   * @return {Promise.<Response,ResponseError>} a Promise
   */
  return _createClass(Amadeus, [{
    key: "previous",
    value: function previous(response) {
      return this.pagination.page('previous', response);
    }

    /**
     * The next page for the given response. Resolves to null if the page could
     * not be found.
     *
     * ```js
     * amadeus.referenceData.locations.get({
     *   keyword: 'LON',
     *   subType: 'AIRPORT,CITY'
     * }).then(function(response){
     *   console.log(response);
     *   return amadeus.next(response);
     * }).then(function(nextPage){
     *   console.log(nextPage);
     * });
     * ```
     *
     * @param response the previous response for an API call
     * @return {Promise.<Response,ResponseError>} a Promise
     */
  }, {
    key: "next",
    value: function next(response) {
      return this.pagination.page('next', response);
    }

    /**
     * The first page for the given response. Resolves to null if the page
     * could not be found.
     *
     * ```js
     * amadeus.referenceData.locations.get({
     *   keyword: 'LON',
     *   subType: 'AIRPORT,CITY',
     *   page: { offset: 2 }
     * }).then(function(response){
     *   console.log(response);
     *   return amadeus.first(response);
     * }).then(function(firstPage){
     *   console.log(firstPage);
     * });
     * ```
     *
     * @param response the previous response for an API call
     * @return {Promise.<Response,ResponseError>} a Promise
     */
  }, {
    key: "first",
    value: function first(response) {
      return this.pagination.page('first', response);
    }

    /**
     * The last page for the given response. Resolves to null if the page
     * could not be found.
     *
     * ```js
     * amadeus.referenceData.locations.get({
     *   keyword: 'LON',
     *   subType: 'AIRPORT,CITY'
     * }).then(function(response){
     *   console.log(response);
     *   return amadeus.last(response);
     * }).then(function(lastPage){
     *   console.log(lastPage);
     * });
     * ```
     *
     * @param response the previous response for an API call
     * @return {Promise.<Response,ResponseError>} a Promise
     */
  }, {
    key: "last",
    value: function last(response) {
      return this.pagination.page('last', response);
    }
  }]);
}();
/**
 * A handy list of location types, to be used in the locations API:
 *
 * ```js
 * amadeus.referenceData.location.get({
 *   keyword: 'lon',
 *   subType: Amadeus.location.any
 * });
 * ```
 *
 * Currently available are the types `.airport`, `.city`, and `.any`
 */
Amadeus.location = {
  airport: 'AIRPORT',
  city: 'CITY',
  any: 'AIRPORT,CITY'
};

/**
 * A handy list of direction types, to be used in the Flight Busiest Period API:
 *
 * ```js
 * amadeus.travel.analytics.airTraffic.busiestPeriod.get({
 *   cityCode: 'par',
 *   perdiod: 2015,
 *   direction: Amadeus.direction.arriving
 * });
 * ```
 *
 * Currently available are the types `.arriving` and `.departing`
 */

Amadeus.direction = {
  arriving: 'ARRIVING',
  departing: 'DEPARTING'
};
var _default = exports["default"] = Amadeus;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2xpZW50IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcGFnaW5hdGlvbiIsIl9yZWZlcmVuY2VfZGF0YSIsIl9zaG9wcGluZyIsIl9ib29raW5nIiwiX3RyYXZlbCIsIl9lX3JlcHV0YXRpb24iLCJfbWVkaWEiLCJfb3JkZXJpbmciLCJfYWlycG9ydCIsIl9zY2hlZHVsZSIsIl9hbmFseXRpY3MiLCJfbG9jYXRpb24iLCJfYWlybGluZSIsImUiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsImkiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJBbWFkZXVzIiwicGFyYW1zIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY2xpZW50IiwiQ2xpZW50IiwidmVyc2lvbiIsInJlZmVyZW5jZURhdGEiLCJSZWZlcmVuY2VEYXRhIiwic2hvcHBpbmciLCJTaG9wcGluZyIsImJvb2tpbmciLCJCb29raW5nIiwidHJhdmVsIiwiVHJhdmVsIiwiZVJlcHV0YXRpb24iLCJFUmVwdXRhdGlvbiIsIm1lZGlhIiwiTWVkaWEiLCJvcmRlcmluZyIsIk9yZGVyaW5nIiwiYWlycG9ydCIsIkFpcnBvcnQiLCJwYWdpbmF0aW9uIiwiUGFnaW5hdGlvbiIsInNjaGVkdWxlIiwiU2NoZWR1bGUiLCJhbmFseXRpY3MiLCJBbmFseXRpY3MiLCJsb2NhdGlvbiIsIkxvY2F0aW9uIiwiYWlybGluZSIsIkFpcmxpbmUiLCJ2YWx1ZSIsInByZXZpb3VzIiwicmVzcG9uc2UiLCJwYWdlIiwibmV4dCIsImZpcnN0IiwibGFzdCIsImNpdHkiLCJhbnkiLCJkaXJlY3Rpb24iLCJhcnJpdmluZyIsImRlcGFydGluZyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvYW1hZGV1cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50ICAgICAgICBmcm9tICcuL2FtYWRldXMvY2xpZW50JztcbmltcG9ydCBQYWdpbmF0aW9uICAgIGZyb20gJy4vYW1hZGV1cy9jbGllbnQvcGFnaW5hdGlvbic7XG5cbmltcG9ydCBSZWZlcmVuY2VEYXRhIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL3JlZmVyZW5jZV9kYXRhJztcbmltcG9ydCBTaG9wcGluZyAgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nJztcbmltcG9ydCBCb29raW5nICAgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL2Jvb2tpbmcnO1xuaW1wb3J0IFRyYXZlbCAgICAgICAgZnJvbSAnLi9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsJztcbmltcG9ydCBFUmVwdXRhdGlvbiAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL2VfcmVwdXRhdGlvbic7XG5pbXBvcnQgTWVkaWEgICAgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9tZWRpYSc7XG5pbXBvcnQgT3JkZXJpbmcgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9vcmRlcmluZyc7XG5pbXBvcnQgQWlycG9ydCAgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9haXJwb3J0JztcbmltcG9ydCBTY2hlZHVsZSAgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL3NjaGVkdWxlJztcbmltcG9ydCBBbmFseXRpY3MgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL2FuYWx5dGljcyc7XG5pbXBvcnQgTG9jYXRpb24gICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9sb2NhdGlvbic7XG5pbXBvcnQgQWlybGluZSAgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9haXJsaW5lJztcblxuXG4vKipcbiAqIFRoZSBBbWFkZXVzIGNsaWVudCBsaWJyYXJ5IGZvciBhY2Nlc3NpbmcgdGhlIHRyYXZlbCBBUElzLlxuICpcbiAqIEluaXRpYWxpemUgdXNpbmcgeW91ciBjcmVkZW50aWFsczpcbiAqXG4gKiBgYGBqc1xuICogdmFyIEFtYWRldXMgPSByZXF1aXJlKCdhbWFkZXVzJyk7XG4gKiB2YXIgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKHtcbiAqICAgICBjbGllbnRJZDogICAgJ1lPVVJfQ0xJRU5UX0lEJyxcbiAqICAgICBjbGllbnRTZWNyZXQ6ICdZT1VSX0NMSUVOVF9TRUNSRVQnXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEFsdGVybmF0aXZlbHksIGluaXRpYWxpemUgdGhlIGxpYnJhcnkgdXNpbmdcbiAqIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYEFNQURFVVNfQ0xJRU5UX0lEYFxuICogYW5kIGBBTUFERVVTX0NMSUVOVF9TRUNSRVRgXG4gKlxuICogYGBganNcbiAqIHZhciBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuY2xpZW50SWQgdGhlIEFQSSBrZXkgdXNlZCB0byBhdXRoZW50aWNhdGUgdGhlIEFQSVxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5jbGllbnRTZWNyZXQgdGhlIEFQSSBzZWNyZXQgdXNlZCB0byBhdXRoZW50aWNhdGVcbiAqICB0aGUgQVBJXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcy5sb2dnZXI9Y29uc29sZV0gYSBgY29uc29sZWAtY29tcGF0aWJsZSBsb2dnZXIgdGhhdFxuICogIGFjY2VwdHMgYGxvZ2AsIGBlcnJvcmAgYW5kIGBkZWJ1Z2AgY2FsbHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy5sb2dMZXZlbD0nd2FybiddIHRoZSBsb2cgbGV2ZWwgZm9yIHRoZSBjbGllbnQsXG4gKiAgYXZhaWxhYmxlIG9wdGlvbnMgYXJlIGBkZWJ1Z2AsIGB3YXJuYCwgYW5kIGBzaWxlbnRgXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy5ob3N0bmFtZT0ncHJvZHVjdGlvbiddIHRoZSBuYW1lIG9mIHRoZSBzZXJ2ZXIgQVBJXG4gKiAgY2FsbHMgYXJlIG1hZGUgdG8gKGBwcm9kdWN0aW9uYCBvciBgdGVzdGApXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy5ob3N0XSB0aGUgZnVsbCBkb21haW4gb3IgSVAgZm9yIGEgc2VydmVyIHRvIG1ha2UgdGhlXG4gKiAgQVBJIGNsYWwgdG8uIE9ubHkgdXNlIHRoaXMgaWYgeW91IGRvbid0IHdhbnQgdG8gdXNlIHRoZSBwcm92aWRlZCBzZXJ2ZXJzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwYXJhbXMuc3NsPXRydWVdIHdldGhlciB0byB1c2UgU1NMIGZvciB0aGlzIEFQSSBjYWxsXG4gKiBAcGFyYW0ge251bWJlcn0gW3BhcmFtcy5wb3J0PTQ0M10gdGhlIHBvcnQgdG8gbWFrZSB0aGUgQVBJIGNhbGwgdG9cbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1zLmN1c3RvbUFwcElkPW51bGxdIGEgY3VzdG9tIEFwcCBJRCB0byBiZSBwYXNzZWQgaW5cbiAqIHRoZSBVc2VyIEFnZW50IHRvIHRoZSBzZXJ2ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy5jdXN0b21BcHBWZXJzaW9uPW51bGxdIGEgY3VzdG9tIEFwcCBWZXJzaW9uIG51bWJlciB0b1xuICogYmUgcGFzc2VkIGluIHRoZSBVc2VyIEFnZW50IHRvIHRoZSBzZXJ2ZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcy5odHRwPWh0dHBzXSBhbiBvcHRpb25hbCBOb2RlL0hUVFAoUyktY29tcGF0aWJsZSBjbGllbnRcbiAqICB0aGF0IGFjY2VwdHMgYSAncmVxdWVzdCgpJyBjYWxsIHdpdGggYW4gYXJyYXkgb2Ygb3B0aW9ucy5cbiAqXG4gKiBAcHJvcGVydHkge0NsaWVudH0gY2xpZW50IFRoZSBjbGllbnQgZm9yIG1ha2luZyBhdXRoZW50aWNhdGVkIEhUVFAgY2FsbHNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB2ZXJzaW9uIFRoZSB2ZXJzaW9uIG9mIHRoaXMgQVBJIGNsaWVudFxuICovXG5jbGFzcyBBbWFkZXVzIHtcbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICB0aGlzLmNsaWVudCA9IG5ldyBDbGllbnQocGFyYW1zKTtcbiAgICB0aGlzLnZlcnNpb24gPSB0aGlzLmNsaWVudC52ZXJzaW9uO1xuXG4gICAgdGhpcy5yZWZlcmVuY2VEYXRhICA9IG5ldyBSZWZlcmVuY2VEYXRhKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLnNob3BwaW5nICAgICAgID0gbmV3IFNob3BwaW5nKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLmJvb2tpbmcgICAgICAgID0gbmV3IEJvb2tpbmcodGhpcy5jbGllbnQpO1xuICAgIHRoaXMudHJhdmVsICAgICAgICAgPSBuZXcgVHJhdmVsKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLmVSZXB1dGF0aW9uICAgID0gbmV3IEVSZXB1dGF0aW9uKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLm1lZGlhICAgICAgICAgID0gbmV3IE1lZGlhKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLm9yZGVyaW5nICAgICAgID0gbmV3IE9yZGVyaW5nKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLmFpcnBvcnQgICAgICAgID0gbmV3IEFpcnBvcnQodGhpcy5jbGllbnQpO1xuICAgIHRoaXMucGFnaW5hdGlvbiAgICAgPSBuZXcgUGFnaW5hdGlvbih0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5zY2hlZHVsZSAgICAgICA9IG5ldyBTY2hlZHVsZSh0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5hbmFseXRpY3MgICAgICA9IG5ldyBBbmFseXRpY3ModGhpcy5jbGllbnQpO1xuICAgIHRoaXMubG9jYXRpb24gICAgICAgPSBuZXcgTG9jYXRpb24odGhpcy5jbGllbnQpO1xuICAgIHRoaXMuYWlybGluZSAgICAgICAgPSBuZXcgQWlybGluZSh0aGlzLmNsaWVudCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHByZXZpb3VzIHBhZ2UgZm9yIHRoZSBnaXZlbiByZXNwb25zZS4gUmVzb2x2ZXMgdG8gbnVsbCBpZiB0aGUgcGFnZVxuICAgKiBjb3VsZCBub3QgYmUgZm91bmQuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMuZ2V0KHtcbiAgICogICBrZXl3b3JkOiAnTE9OJyxcbiAgICogICBzdWJUeXBlOiAnQUlSUE9SVCxDSVRZJyxcbiAgICogICBwYWdlOiB7IG9mZnNldDogMiB9XG4gICAqIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgKiAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICogICByZXR1cm4gYW1hZGV1cy5wcmV2aW91cyhyZXNwb25zZSk7XG4gICAqIH0pLnRoZW4oZnVuY3Rpb24ocHJldmlvdXNQYWdlKXtcbiAgICogICBjb25zb2xlLmxvZyhwcmV2aW91c1BhZ2UpO1xuICAgKiB9KTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSByZXNwb25zZSB0aGUgcHJldmlvdXMgcmVzcG9uc2UgZm9yIGFuIEFQSSBjYWxsXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICovXG4gIHByZXZpb3VzKHJlc3BvbnNlKSB7IHJldHVybiB0aGlzLnBhZ2luYXRpb24ucGFnZSgncHJldmlvdXMnLCByZXNwb25zZSk7IH1cblxuICAvKipcbiAgICogVGhlIG5leHQgcGFnZSBmb3IgdGhlIGdpdmVuIHJlc3BvbnNlLiBSZXNvbHZlcyB0byBudWxsIGlmIHRoZSBwYWdlIGNvdWxkXG4gICAqIG5vdCBiZSBmb3VuZC5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5nZXQoe1xuICAgKiAgIGtleXdvcmQ6ICdMT04nLFxuICAgKiAgIHN1YlR5cGU6ICdBSVJQT1JULENJVFknXG4gICAqIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgKiAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICogICByZXR1cm4gYW1hZGV1cy5uZXh0KHJlc3BvbnNlKTtcbiAgICogfSkudGhlbihmdW5jdGlvbihuZXh0UGFnZSl7XG4gICAqICAgY29uc29sZS5sb2cobmV4dFBhZ2UpO1xuICAgKiB9KTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSByZXNwb25zZSB0aGUgcHJldmlvdXMgcmVzcG9uc2UgZm9yIGFuIEFQSSBjYWxsXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICovXG4gIG5leHQocmVzcG9uc2UpICAgICB7IHJldHVybiB0aGlzLnBhZ2luYXRpb24ucGFnZSgnbmV4dCcsIHJlc3BvbnNlKTsgfVxuXG4gIC8qKlxuICAgKiBUaGUgZmlyc3QgcGFnZSBmb3IgdGhlIGdpdmVuIHJlc3BvbnNlLiBSZXNvbHZlcyB0byBudWxsIGlmIHRoZSBwYWdlXG4gICAqIGNvdWxkIG5vdCBiZSBmb3VuZC5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5nZXQoe1xuICAgKiAgIGtleXdvcmQ6ICdMT04nLFxuICAgKiAgIHN1YlR5cGU6ICdBSVJQT1JULENJVFknLFxuICAgKiAgIHBhZ2U6IHsgb2Zmc2V0OiAyIH1cbiAgICogfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAqICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgKiAgIHJldHVybiBhbWFkZXVzLmZpcnN0KHJlc3BvbnNlKTtcbiAgICogfSkudGhlbihmdW5jdGlvbihmaXJzdFBhZ2Upe1xuICAgKiAgIGNvbnNvbGUubG9nKGZpcnN0UGFnZSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHJlc3BvbnNlIHRoZSBwcmV2aW91cyByZXNwb25zZSBmb3IgYW4gQVBJIGNhbGxcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKi9cbiAgZmlyc3QocmVzcG9uc2UpICAgIHsgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5wYWdlKCdmaXJzdCcsIHJlc3BvbnNlKTsgfVxuXG4gIC8qKlxuICAgKiBUaGUgbGFzdCBwYWdlIGZvciB0aGUgZ2l2ZW4gcmVzcG9uc2UuIFJlc29sdmVzIHRvIG51bGwgaWYgdGhlIHBhZ2VcbiAgICogY291bGQgbm90IGJlIGZvdW5kLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmdldCh7XG4gICAqICAga2V5d29yZDogJ0xPTicsXG4gICAqICAgc3ViVHlwZTogJ0FJUlBPUlQsQ0lUWSdcbiAgICogfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAqICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgKiAgIHJldHVybiBhbWFkZXVzLmxhc3QocmVzcG9uc2UpO1xuICAgKiB9KS50aGVuKGZ1bmN0aW9uKGxhc3RQYWdlKXtcbiAgICogICBjb25zb2xlLmxvZyhsYXN0UGFnZSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHJlc3BvbnNlIHRoZSBwcmV2aW91cyByZXNwb25zZSBmb3IgYW4gQVBJIGNhbGxcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKi9cbiAgbGFzdChyZXNwb25zZSkgICAgIHsgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5wYWdlKCdsYXN0JywgcmVzcG9uc2UpOyB9XG59XG5cblxuLyoqXG4gKiBBIGhhbmR5IGxpc3Qgb2YgbG9jYXRpb24gdHlwZXMsIHRvIGJlIHVzZWQgaW4gdGhlIGxvY2F0aW9ucyBBUEk6XG4gKlxuICogYGBganNcbiAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbi5nZXQoe1xuICogICBrZXl3b3JkOiAnbG9uJyxcbiAqICAgc3ViVHlwZTogQW1hZGV1cy5sb2NhdGlvbi5hbnlcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQ3VycmVudGx5IGF2YWlsYWJsZSBhcmUgdGhlIHR5cGVzIGAuYWlycG9ydGAsIGAuY2l0eWAsIGFuZCBgLmFueWBcbiAqL1xuQW1hZGV1cy5sb2NhdGlvbiA9IHtcbiAgYWlycG9ydDogJ0FJUlBPUlQnLFxuICBjaXR5OiAnQ0lUWScsXG4gIGFueTogJ0FJUlBPUlQsQ0lUWSdcbn07XG5cbi8qKlxuICogQSBoYW5keSBsaXN0IG9mIGRpcmVjdGlvbiB0eXBlcywgdG8gYmUgdXNlZCBpbiB0aGUgRmxpZ2h0IEJ1c2llc3QgUGVyaW9kIEFQSTpcbiAqXG4gKiBgYGBqc1xuICogYW1hZGV1cy50cmF2ZWwuYW5hbHl0aWNzLmFpclRyYWZmaWMuYnVzaWVzdFBlcmlvZC5nZXQoe1xuICogICBjaXR5Q29kZTogJ3BhcicsXG4gKiAgIHBlcmRpb2Q6IDIwMTUsXG4gKiAgIGRpcmVjdGlvbjogQW1hZGV1cy5kaXJlY3Rpb24uYXJyaXZpbmdcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQ3VycmVudGx5IGF2YWlsYWJsZSBhcmUgdGhlIHR5cGVzIGAuYXJyaXZpbmdgIGFuZCBgLmRlcGFydGluZ2BcbiAqL1xuXG5BbWFkZXVzLmRpcmVjdGlvbiA9IHtcbiAgYXJyaXZpbmc6ICdBUlJJVklORycsXG4gIGRlcGFydGluZzogJ0RFUEFSVElORydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFtYWRldXM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFB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