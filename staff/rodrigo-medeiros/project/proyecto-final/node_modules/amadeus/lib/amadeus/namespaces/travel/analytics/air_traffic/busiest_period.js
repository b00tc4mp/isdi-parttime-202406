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
 * `/v1/travel/analytics/air-traffic/busiest-period` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.AirTraffic.BusiestPeriod;
 * ```
 *
 * @param {Client} client
 */
var BusiestPeriod = /*#__PURE__*/function () {
  function BusiestPeriod(client) {
    _classCallCheck(this, BusiestPeriod);
    this.client = client;
  }

  /**
   * Returns a list of air traffic reports.
   *
   * @param {Object} params
   * @param {string} params.cityCode IATA code of the origin city - e.g. MAD for
   *   Madrid - required
   * @param {string} params.period period when consumers are travelling in
   *   YYYY-MM format
   * @param {string} params.direction to select between arrivals and departures (default: arrivals)
   *   YYYY-MM format
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * What were the busiest months for Madrid in 2017?
   *
   * ```js
   * amadeus.travel.analytics.AirTraffic.BusiestPeriod.get({
   *   cityCode: 'MAD',
   *   period: '2017',
   *   direction: Amadeus.direction.arriving
   * });
   * ```
   */
  return _createClass(BusiestPeriod, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/travel/analytics/air-traffic/busiest-period', params);
    }
  }]);
}();
var _default = exports["default"] = BusiestPeriod;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCdXNpZXN0UGVyaW9kIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJnZXQiLCJwYXJhbXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy90cmF2ZWwvYW5hbHl0aWNzL2Fpcl90cmFmZmljL2J1c2llc3RfcGVyaW9kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3RyYXZlbC9hbmFseXRpY3MvYWlyLXRyYWZmaWMvYnVzaWVzdC1wZXJpb2RgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy50cmF2ZWwuYW5hbHl0aWNzLkFpclRyYWZmaWMuQnVzaWVzdFBlcmlvZDtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgQnVzaWVzdFBlcmlvZHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgYWlyIHRyYWZmaWMgcmVwb3J0cy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNpdHlDb2RlIElBVEEgY29kZSBvZiB0aGUgb3JpZ2luIGNpdHkgLSBlLmcuIE1BRCBmb3JcbiAgICogICBNYWRyaWQgLSByZXF1aXJlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnBlcmlvZCBwZXJpb2Qgd2hlbiBjb25zdW1lcnMgYXJlIHRyYXZlbGxpbmcgaW5cbiAgICogICBZWVlZLU1NIGZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRpcmVjdGlvbiB0byBzZWxlY3QgYmV0d2VlbiBhcnJpdmFscyBhbmQgZGVwYXJ0dXJlcyAoZGVmYXVsdDogYXJyaXZhbHMpXG4gICAqICAgWVlZWS1NTSBmb3JtYXRcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBXaGF0IHdlcmUgdGhlIGJ1c2llc3QgbW9udGhzIGZvciBNYWRyaWQgaW4gMjAxNz9cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy50cmF2ZWwuYW5hbHl0aWNzLkFpclRyYWZmaWMuQnVzaWVzdFBlcmlvZC5nZXQoe1xuICAgKiAgIGNpdHlDb2RlOiAnTUFEJyxcbiAgICogICBwZXJpb2Q6ICcyMDE3JyxcbiAgICogICBkaXJlY3Rpb246IEFtYWRldXMuZGlyZWN0aW9uLmFycml2aW5nXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS90cmF2ZWwvYW5hbHl0aWNzL2Fpci10cmFmZmljL2J1c2llc3QtcGVyaW9kJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXNpZXN0UGVyaW9kO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLGFBQWE7RUFDakIsU0FBQUEsY0FBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsYUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQXJCRSxPQUFBRSxZQUFBLENBQUFILGFBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBc0JBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLGlEQUFpRCxFQUFFQyxNQUFNLENBQUM7SUFDbkY7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLGFBQWE7QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==