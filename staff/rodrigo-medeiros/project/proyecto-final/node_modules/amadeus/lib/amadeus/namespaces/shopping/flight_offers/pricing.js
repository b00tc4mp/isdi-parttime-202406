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
 * `/v1/shopping/flight-offers/pricing` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers.pricing;
 * ```
 *
 * @param {Client} client
 */
var Pricing = /*#__PURE__*/function () {
  function Pricing(client) {
    _classCallCheck(this, Pricing);
    this.client = client;
  }

  /**
   * To get or confirm the price of a flight and obtain information
   * about taxes and fees to be applied to the entire journey. It also
   * retrieves ancillary information (e.g. additional bag or extra legroom
   * seats pricing) and the payment information details requested at booking time.
   *
   * @param {Object} params
   * @param {Object} params.data
   * @param {string} params.data.type 'flight-offers-pricing' for Flight Offer Pricing
   * @param {Array} params.data.flightOffers list of flight offers for which the
   * pricing needs to be retrieved
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * ```js
   * amadeus.shopping.flightOffers.pricing.post({
   *  'data': {
   *      'type': 'flight-offers-pricing',
   *      'flightOffers': []
   *  }
   * });
   * ```
   */
  return _createClass(Pricing, [{
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var additionalParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Convert additionalParams object to query string
      var queryString = Object.keys(additionalParams).map(function (key) {
        return key + '=' + additionalParams[key];
      }).join('&');

      // Check if queryString is empty before appending it to the URL
      var url = '/v1/shopping/flight-offers/pricing';
      if (queryString !== '') {
        url += '?' + queryString;
      }
      return this.client.post(url, params);
    }
  }]);
}();
var _default = exports["default"] = Pricing;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcmljaW5nIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwb3N0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWRkaXRpb25hbFBhcmFtcyIsInF1ZXJ5U3RyaW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImpvaW4iLCJ1cmwiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9zaG9wcGluZy9mbGlnaHRfb2ZmZXJzL3ByaWNpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmcvZmxpZ2h0LW9mZmVycy9wcmljaW5nYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzLnByaWNpbmc7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIFByaWNpbmcge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBnZXQgb3IgY29uZmlybSB0aGUgcHJpY2Ugb2YgYSBmbGlnaHQgYW5kIG9idGFpbiBpbmZvcm1hdGlvblxuICAgKiBhYm91dCB0YXhlcyBhbmQgZmVlcyB0byBiZSBhcHBsaWVkIHRvIHRoZSBlbnRpcmUgam91cm5leS4gSXQgYWxzb1xuICAgKiByZXRyaWV2ZXMgYW5jaWxsYXJ5IGluZm9ybWF0aW9uIChlLmcuIGFkZGl0aW9uYWwgYmFnIG9yIGV4dHJhIGxlZ3Jvb21cbiAgICogc2VhdHMgcHJpY2luZykgYW5kIHRoZSBwYXltZW50IGluZm9ybWF0aW9uIGRldGFpbHMgcmVxdWVzdGVkIGF0IGJvb2tpbmcgdGltZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zLmRhdGFcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5kYXRhLnR5cGUgJ2ZsaWdodC1vZmZlcnMtcHJpY2luZycgZm9yIEZsaWdodCBPZmZlciBQcmljaW5nXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcy5kYXRhLmZsaWdodE9mZmVycyBsaXN0IG9mIGZsaWdodCBvZmZlcnMgZm9yIHdoaWNoIHRoZVxuICAgKiBwcmljaW5nIG5lZWRzIHRvIGJlIHJldHJpZXZlZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzLnByaWNpbmcucG9zdCh7XG4gICAqICAnZGF0YSc6IHtcbiAgICogICAgICAndHlwZSc6ICdmbGlnaHQtb2ZmZXJzLXByaWNpbmcnLFxuICAgKiAgICAgICdmbGlnaHRPZmZlcnMnOiBbXVxuICAgKiAgfVxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuICBwb3N0KHBhcmFtcyA9IHt9LCBhZGRpdGlvbmFsUGFyYW1zID0ge30pIHtcbiAgICAvLyBDb252ZXJ0IGFkZGl0aW9uYWxQYXJhbXMgb2JqZWN0IHRvIHF1ZXJ5IHN0cmluZ1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMoYWRkaXRpb25hbFBhcmFtcykubWFwKGtleSA9PiBrZXkgKyAnPScgKyBhZGRpdGlvbmFsUGFyYW1zW2tleV0pLmpvaW4oJyYnKTtcblxuICAgIC8vIENoZWNrIGlmIHF1ZXJ5U3RyaW5nIGlzIGVtcHR5IGJlZm9yZSBhcHBlbmRpbmcgaXQgdG8gdGhlIFVSTFxuICAgIGxldCB1cmwgPSAnL3YxL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMvcHJpY2luZyc7XG4gICAgaWYgKHF1ZXJ5U3RyaW5nICE9PSAnJykge1xuICAgICAgdXJsICs9ICc/JyArIHF1ZXJ5U3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNsaWVudC5wb3N0KHVybCwgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxPQUFPO0VBQ1gsU0FBQUEsUUFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsT0FBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQXJCRSxPQUFBRSxZQUFBLENBQUFILE9BQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBc0JBLFNBQUFDLElBQUlBLENBQUEsRUFBcUM7TUFBQSxJQUFwQ0MsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFBQSxJQUFFRyxnQkFBZ0IsR0FBQUgsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ3JDO01BQ0EsSUFBTUksV0FBVyxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ0gsZ0JBQWdCLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLFVBQUFYLEdBQUc7UUFBQSxPQUFJQSxHQUFHLEdBQUcsR0FBRyxHQUFHTyxnQkFBZ0IsQ0FBQ1AsR0FBRyxDQUFDO01BQUEsRUFBQyxDQUFDWSxJQUFJLENBQUMsR0FBRyxDQUFDOztNQUV6RztNQUNBLElBQUlDLEdBQUcsR0FBRyxvQ0FBb0M7TUFDOUMsSUFBSUwsV0FBVyxLQUFLLEVBQUUsRUFBRTtRQUN0QkssR0FBRyxJQUFJLEdBQUcsR0FBR0wsV0FBVztNQUMxQjtNQUVBLE9BQU8sSUFBSSxDQUFDWCxNQUFNLENBQUNLLElBQUksQ0FBQ1csR0FBRyxFQUFFVixNQUFNLENBQUM7SUFDdEM7RUFBQztBQUFBO0FBQUEsSUFBQVcsUUFBQSxHQUFBQyxPQUFBLGNBR1luQixPQUFPO0FBQUFvQixNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119