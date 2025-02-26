"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _itinerary_price_metrics = _interopRequireDefault(require("./analytics/itinerary_price_metrics"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/**
 * A namespaced client for the
 * `/v1/analytics` endpoints
 *
 * Access via the {Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.analytics;
 * ```
 *
 * @param {Client} client
 * @property {Flights} flights
 * @protected
 */
var Analytics = /*#__PURE__*/_createClass(function Analytics(client) {
  _classCallCheck(this, Analytics);
  this.client = client;
  this.itineraryPriceMetrics = new _itinerary_price_metrics["default"](client);
});
var _default = exports["default"] = Analytics;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRpbmVyYXJ5X3ByaWNlX21ldHJpY3MiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwidCIsImxlbmd0aCIsIm8iLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG90eXBlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhIiwibiIsIkFuYWx5dGljcyIsImNsaWVudCIsIml0aW5lcmFyeVByaWNlTWV0cmljcyIsIkl0aW5lcmFyeVByaWNlTWV0cmljcyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2FuYWx5dGljcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRpbmVyYXJ5UHJpY2VNZXRyaWNzIGZyb20gJy4vYW5hbHl0aWNzL2l0aW5lcmFyeV9wcmljZV9tZXRyaWNzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvYW5hbHl0aWNzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuYW5hbHl0aWNzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHByb3BlcnR5IHtGbGlnaHRzfSBmbGlnaHRzXG4gKiBAcHJvdGVjdGVkXG4gKi9cbmNsYXNzIEFuYWx5dGljcyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuaXRpbmVyYXJ5UHJpY2VNZXRyaWNzID0gbmV3IEl0aW5lcmFyeVByaWNlTWV0cmljcyhjbGllbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuYWx5dGljcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLHdCQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBd0UsU0FBQUQsdUJBQUFFLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLGtCQUFBRixDQUFBLEVBQUFHLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLENBQUEsR0FBQUgsQ0FBQSxDQUFBQyxDQUFBLEdBQUFFLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLENBQUFDLFVBQUEsUUFBQUQsQ0FBQSxDQUFBRSxZQUFBLGtCQUFBRixDQUFBLEtBQUFBLENBQUEsQ0FBQUcsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxFQUFBWSxjQUFBLENBQUFOLENBQUEsQ0FBQU8sR0FBQSxHQUFBUCxDQUFBO0FBQUEsU0FBQVEsYUFBQWQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFDLENBQUEsV0FBQUQsQ0FBQSxJQUFBRCxpQkFBQSxDQUFBRixDQUFBLENBQUFlLFNBQUEsRUFBQVosQ0FBQSxHQUFBQyxDQUFBLElBQUFGLGlCQUFBLENBQUFGLENBQUEsRUFBQUksQ0FBQSxHQUFBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxpQkFBQVMsUUFBQSxTQUFBVCxDQUFBO0FBQUEsU0FBQVksZUFBQVIsQ0FBQSxRQUFBWSxDQUFBLEdBQUFDLFlBQUEsQ0FBQWIsQ0FBQSxnQ0FBQWMsT0FBQSxDQUFBRixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFiLENBQUEsRUFBQUQsQ0FBQSxvQkFBQWUsT0FBQSxDQUFBZCxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSixDQUFBLEdBQUFJLENBQUEsQ0FBQWUsTUFBQSxDQUFBQyxXQUFBLGtCQUFBcEIsQ0FBQSxRQUFBZ0IsQ0FBQSxHQUFBaEIsQ0FBQSxDQUFBcUIsSUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBZSxPQUFBLENBQUFGLENBQUEsVUFBQUEsQ0FBQSxZQUFBTSxTQUFBLHlFQUFBbkIsQ0FBQSxHQUFBb0IsTUFBQSxHQUFBQyxNQUFBLEVBQUFwQixDQUFBO0FBQUEsU0FBQXFCLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFMLFNBQUE7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEEsSUFlTU0sU0FBUyxnQkFBQWQsWUFBQSxDQUNiLFNBQUFjLFVBQVlDLE1BQU0sRUFBRTtFQUFBSixlQUFBLE9BQUFHLFNBQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDcEIsSUFBSSxDQUFDQyxxQkFBcUIsR0FBRyxJQUFJQyxtQ0FBcUIsQ0FBQ0YsTUFBTSxDQUFDO0FBQ2hFLENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWUwsU0FBUztBQUFBTSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119