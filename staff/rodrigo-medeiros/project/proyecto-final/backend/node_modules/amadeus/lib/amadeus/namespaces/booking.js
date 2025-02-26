"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _flight_orders = _interopRequireDefault(require("./booking/flight_orders"));
var _flight_order = _interopRequireDefault(require("./booking/flight_order"));
var _hotel_bookings = _interopRequireDefault(require("./booking/hotel_bookings"));
var _hotel_orders = _interopRequireDefault(require("./booking/hotel_orders"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A namespaced client for the
 * `/v1/booking` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking;
 * ```
 *
 * @param {Client} client
 * @property {FlightOrders} flightOrders
 * @property {FlightOrder} flightOrder
 * @property {HotelBookings} hotelBookings
 * @property {HotelOrders} hotelOrders
 * @protected
 */
var Booking = /*#__PURE__*/function () {
  function Booking(client) {
    _classCallCheck(this, Booking);
    this.client = client;
    this.flightOrders = new _flight_orders["default"](client);
    this.hotelBookings = new _hotel_bookings["default"](client);
    this.hotelOrders = new _hotel_orders["default"](client);
  }
  return _createClass(Booking, [{
    key: "flightOrder",
    value: function flightOrder(orderId) {
      return new _flight_order["default"](this.client, orderId);
    }
  }]);
}();
var _default = exports["default"] = Booking;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmxpZ2h0X29yZGVycyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ZsaWdodF9vcmRlciIsIl9ob3RlbF9ib29raW5ncyIsIl9ob3RlbF9vcmRlcnMiLCJlIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwidCIsImxlbmd0aCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJpIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiU3RyaW5nIiwiTnVtYmVyIiwiQm9va2luZyIsImNsaWVudCIsImZsaWdodE9yZGVycyIsIkZsaWdodE9yZGVycyIsImhvdGVsQm9va2luZ3MiLCJIb3RlbEJvb2tpbmdzIiwiaG90ZWxPcmRlcnMiLCJIb3RlbE9yZGVycyIsInZhbHVlIiwiZmxpZ2h0T3JkZXIiLCJvcmRlcklkIiwiRmxpZ2h0T3JkZXIiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9ib29raW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbGlnaHRPcmRlcnMgZnJvbSAnLi9ib29raW5nL2ZsaWdodF9vcmRlcnMnO1xuaW1wb3J0IEZsaWdodE9yZGVyIGZyb20gJy4vYm9va2luZy9mbGlnaHRfb3JkZXInO1xuaW1wb3J0IEhvdGVsQm9va2luZ3MgZnJvbSAnLi9ib29raW5nL2hvdGVsX2Jvb2tpbmdzJztcbmltcG9ydCBIb3RlbE9yZGVycyBmcm9tICcuL2Jvb2tpbmcvaG90ZWxfb3JkZXJzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvYm9va2luZ2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLmJvb2tpbmc7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge0ZsaWdodE9yZGVyc30gZmxpZ2h0T3JkZXJzXG4gKiBAcHJvcGVydHkge0ZsaWdodE9yZGVyfSBmbGlnaHRPcmRlclxuICogQHByb3BlcnR5IHtIb3RlbEJvb2tpbmdzfSBob3RlbEJvb2tpbmdzXG4gKiBAcHJvcGVydHkge0hvdGVsT3JkZXJzfSBob3RlbE9yZGVyc1xuICogQHByb3RlY3RlZFxuICovXG5jbGFzcyBCb29raW5nIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgICAgPSBjbGllbnQ7XG4gICAgdGhpcy5mbGlnaHRPcmRlcnMgPSBuZXcgRmxpZ2h0T3JkZXJzKGNsaWVudCk7XG4gICAgdGhpcy5ob3RlbEJvb2tpbmdzID0gbmV3IEhvdGVsQm9va2luZ3MoY2xpZW50KTtcbiAgICB0aGlzLmhvdGVsT3JkZXJzID0gbmV3IEhvdGVsT3JkZXJzKGNsaWVudCk7XG4gIH1cblxuICBmbGlnaHRPcmRlciAob3JkZXJJZCkge1xuICAgIHJldHVybiBuZXcgRmxpZ2h0T3JkZXIodGhpcy5jbGllbnQsIG9yZGVySWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmc7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxjQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxhQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxlQUFBLEdBQUFILHNCQUFBLENBQUFD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