"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers/prediction` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers.prediction;
 * ```
 *
 * @param {Client} client
 */
var FlightChoicePrediction = /*#__PURE__*/function () {
  function FlightChoicePrediction(client) {
    _classCallCheck(this, FlightChoicePrediction);
    this.client = client;
  }

  /**
   * Returns a list of flight offers with the probability to be chosen.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Returns flights from NYC to MAD with the probability to be chosen.
   *
   * ```js
   * amadeus.shopping.flightOffersSearch.get({
   *     originLocationCode: 'SYD',
   *     destinationLocationCode: 'BKK',
   *     departureDate: '2020-08-01',
   *     adults: '2'
   * }).then(function(response){
   *     return amadeus.shopping.flightOffers.prediction.post(response);
   * }).then(function(response){
   *     console.log(response.data);
   * }).catch(function(responseError){
   *     console.log(responseError);
   * });
   * ```
   */
  return _createClass(FlightChoicePrediction, [{
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.post('/v2/shopping/flight-offers/prediction', params);
    }
  }]);
}();
var _default = exports["default"] = FlightChoicePrediction;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRDaG9pY2VQcmVkaWN0aW9uIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwb3N0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2hvcHBpbmcvZmxpZ2h0X29mZmVycy9mbGlnaHRfY2hvaWNlX3ByZWRpY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmcvZmxpZ2h0LW9mZmVycy9wcmVkaWN0aW9uYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzLnByZWRpY3Rpb247XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIEZsaWdodENob2ljZVByZWRpY3Rpb24ge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBmbGlnaHQgb2ZmZXJzIHdpdGggdGhlIHByb2JhYmlsaXR5IHRvIGJlIGNob3Nlbi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFJldHVybnMgZmxpZ2h0cyBmcm9tIE5ZQyB0byBNQUQgd2l0aCB0aGUgcHJvYmFiaWxpdHkgdG8gYmUgY2hvc2VuLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVyc1NlYXJjaC5nZXQoe1xuICAgKiAgICAgb3JpZ2luTG9jYXRpb25Db2RlOiAnU1lEJyxcbiAgICogICAgIGRlc3RpbmF0aW9uTG9jYXRpb25Db2RlOiAnQktLJyxcbiAgICogICAgIGRlcGFydHVyZURhdGU6ICcyMDIwLTA4LTAxJyxcbiAgICogICAgIGFkdWx0czogJzInXG4gICAqIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgKiAgICAgcmV0dXJuIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzLnByZWRpY3Rpb24ucG9zdChyZXNwb25zZSk7XG4gICAqIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgKiAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAqIH0pLmNhdGNoKGZ1bmN0aW9uKHJlc3BvbnNlRXJyb3Ipe1xuICAgKiAgICAgY29uc29sZS5sb2cocmVzcG9uc2VFcnJvcik7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIHBvc3QocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdCgnL3YyL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMvcHJlZGljdGlvbicsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0Q2hvaWNlUHJlZGljdGlvbjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxzQkFBc0I7RUFDMUIsU0FBQUEsdUJBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLHNCQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUF0QkUsT0FBQUUsWUFBQSxDQUFBSCxzQkFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUF1QkEsU0FBQUMsSUFBSUEsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDZCxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxJQUFJLENBQUMsdUNBQXVDLEVBQUVDLE1BQU0sQ0FBQztJQUMxRTtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosc0JBQXNCO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=