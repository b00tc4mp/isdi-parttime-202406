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
 * `/v1/booking/flight-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.flightOrders;
 * ```
 *
 * @param {Client} client
 */
var FlightOrders = /*#__PURE__*/function () {
  function FlightOrders(client) {
    _classCallCheck(this, FlightOrders);
    this.client = client;
  }

  /**
   * To book the selected flight-offer and create a flight-order
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the flight-offer(s) suggested by flightOffersSearch and create a flight-order
   *
   * ```js
   * amadeus.booking.flightOrders.post({
   *  'type': 'flight-order',
   *  'flightOffers': [],
   *  'travelers': []
   * });
   * ```
   */
  return _createClass(FlightOrders, [{
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.post('/v1/booking/flight-orders', params);
    }
  }]);
}();
var _default = exports["default"] = FlightOrders;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRPcmRlcnMiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInBvc3QiLCJwYXJhbXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9ib29raW5nL2ZsaWdodF9vcmRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvYm9va2luZy9mbGlnaHQtb3JkZXJzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuYm9va2luZy5mbGlnaHRPcmRlcnM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIEZsaWdodE9yZGVycyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIGJvb2sgdGhlIHNlbGVjdGVkIGZsaWdodC1vZmZlciBhbmQgY3JlYXRlIGEgZmxpZ2h0LW9yZGVyXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBUbyBib29rIHRoZSBmbGlnaHQtb2ZmZXIocykgc3VnZ2VzdGVkIGJ5IGZsaWdodE9mZmVyc1NlYXJjaCBhbmQgY3JlYXRlIGEgZmxpZ2h0LW9yZGVyXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuYm9va2luZy5mbGlnaHRPcmRlcnMucG9zdCh7XG4gICAqICAndHlwZSc6ICdmbGlnaHQtb3JkZXInLFxuICAgKiAgJ2ZsaWdodE9mZmVycyc6IFtdLFxuICAgKiAgJ3RyYXZlbGVycyc6IFtdXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIHBvc3QocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdCgnL3YxL2Jvb2tpbmcvZmxpZ2h0LW9yZGVycycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0T3JkZXJzOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxZQUFZO0VBQ2hCLFNBQUFBLGFBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFlBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFmRSxPQUFBRSxZQUFBLENBQUFILFlBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBZ0JBLFNBQUFDLElBQUlBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2QsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLDJCQUEyQixFQUFFQyxNQUFNLENBQUM7SUFDOUQ7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLFlBQVk7QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==