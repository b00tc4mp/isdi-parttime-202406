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
 * `/v1/shopping/seatmaps` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.seatmaps;
 * ```
 *
 * @param {Client} client
 */
var Seatmaps = /*#__PURE__*/function () {
  function Seatmaps(client) {
    _classCallCheck(this, Seatmaps);
    this.client = client;
  }

  /**
   * To retrieve the seat map of each flight present in an order.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Retrieve the seat map for flight order with ID 'XXX'
   *
   * ```js
   * amadeus.shopping.seatmaps.get({
   *    'flight-orderId': 'XXX'}
   * );
   * ```
   */
  return _createClass(Seatmaps, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/shopping/seatmaps', params);
    }

    /**
     * To retrieve the seat map of each flight included in a flight offer.
     *
     * @param {Object} params
     * @return {Promise.<Response,ResponseError>} a Promise
     *
     * To retrieve the seat map of each flight included in flight offers
     * for MAD-NYC flight on 2020-08-01.
     *
     * ```js
     * amadeus.shopping.flightOffers.get({
     *    origin: 'MAD',
     *    destination: 'NYC',
     *    departureDate: '2020-08-01'
     * }).then(function(response){
     *    return amadeus.shopping.flightOffers.seatmaps.post(
     *        {
     *            data: response.data
     *        }
     *    );
     * });
     * ```
    */
  }, {
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.post('/v1/shopping/seatmaps', params);
    }
  }]);
}();
var _default = exports["default"] = Seatmaps;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZWF0bWFwcyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicG9zdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL3NlYXRtYXBzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmcvc2VhdG1hcHNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zaG9wcGluZy5zZWF0bWFwcztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgU2VhdG1hcHMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyByZXRyaWV2ZSB0aGUgc2VhdCBtYXAgb2YgZWFjaCBmbGlnaHQgcHJlc2VudCBpbiBhbiBvcmRlci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFJldHJpZXZlIHRoZSBzZWF0IG1hcCBmb3IgZmxpZ2h0IG9yZGVyIHdpdGggSUQgJ1hYWCdcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zaG9wcGluZy5zZWF0bWFwcy5nZXQoe1xuICAgKiAgICAnZmxpZ2h0LW9yZGVySWQnOiAnWFhYJ31cbiAgICogKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvc2hvcHBpbmcvc2VhdG1hcHMnLCBwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIHJldHJpZXZlIHRoZSBzZWF0IG1hcCBvZiBlYWNoIGZsaWdodCBpbmNsdWRlZCBpbiBhIGZsaWdodCBvZmZlci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFRvIHJldHJpZXZlIHRoZSBzZWF0IG1hcCBvZiBlYWNoIGZsaWdodCBpbmNsdWRlZCBpbiBmbGlnaHQgb2ZmZXJzXG4gICAqIGZvciBNQUQtTllDIGZsaWdodCBvbiAyMDIwLTA4LTAxLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVycy5nZXQoe1xuICAgKiAgICBvcmlnaW46ICdNQUQnLFxuICAgKiAgICBkZXN0aW5hdGlvbjogJ05ZQycsXG4gICAqICAgIGRlcGFydHVyZURhdGU6ICcyMDIwLTA4LTAxJ1xuICAgKiB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICogICAgcmV0dXJuIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzLnNlYXRtYXBzLnBvc3QoXG4gICAqICAgICAgICB7XG4gICAqICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YVxuICAgKiAgICAgICAgfVxuICAgKiAgICApO1xuICAgKiB9KTtcbiAgICogYGBgXG4gICovXG4gIHBvc3QocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdCgnL3YxL3Nob3BwaW5nL3NlYXRtYXBzJywgcGFyYW1zKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXRtYXBzOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxRQUFRO0VBQ1osU0FBQUEsU0FBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsUUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBYkUsT0FBQUUsWUFBQSxDQUFBSCxRQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQWNBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLHVCQUF1QixFQUFFQyxNQUFNLENBQUM7SUFDekQ7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQXRCRTtJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUF1QkEsU0FBQU0sSUFBSUEsQ0FBQSxFQUFjO01BQUEsSUFBYkosTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDZCxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDVSxJQUFJLENBQUMsdUJBQXVCLEVBQUVKLE1BQU0sQ0FBQztJQUMxRDtFQUFDO0FBQUE7QUFBQSxJQUFBSyxRQUFBLEdBQUFDLE9BQUEsY0FJWWIsUUFBUTtBQUFBYyxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119