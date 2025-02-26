"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _category_rated_areas = _interopRequireDefault(require("./analytics/category_rated_areas"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/**
 * A namespaced client for the
 * `/v1/location/analytics` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.location;
 * ```
 *
 * @param {Client} client
 * @property {analytics} CategoryRatedAreas
 */
var Analytics = /*#__PURE__*/_createClass(function Analytics(client) {
  _classCallCheck(this, Analytics);
  this.client = client;
  this.categoryRatedAreas = new _category_rated_areas["default"](client);
});
var _default = exports["default"] = Analytics;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2F0ZWdvcnlfcmF0ZWRfYXJlYXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwidCIsImxlbmd0aCIsIm8iLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG90eXBlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhIiwibiIsIkFuYWx5dGljcyIsImNsaWVudCIsImNhdGVnb3J5UmF0ZWRBcmVhcyIsIkNhdGVnb3J5UmF0ZWRBcmVhcyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2xvY2F0aW9uL2FuYWx5dGljcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2F0ZWdvcnlSYXRlZEFyZWFzICAgIGZyb20gJy4vYW5hbHl0aWNzL2NhdGVnb3J5X3JhdGVkX2FyZWFzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvbG9jYXRpb24vYW5hbHl0aWNzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMubG9jYXRpb247XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge2FuYWx5dGljc30gQ2F0ZWdvcnlSYXRlZEFyZWFzXG4gKi9cbmNsYXNzIEFuYWx5dGljcyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuY2F0ZWdvcnlSYXRlZEFyZWFzID0gbmV3IENhdGVnb3J5UmF0ZWRBcmVhcyhjbGllbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuYWx5dGljczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQXFFLFNBQUFELHVCQUFBRSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxrQkFBQUYsQ0FBQSxFQUFBRyxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBRSxDQUFBLEdBQUFILENBQUEsQ0FBQUMsQ0FBQSxHQUFBRSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxDQUFBQyxVQUFBLFFBQUFELENBQUEsQ0FBQUUsWUFBQSxrQkFBQUYsQ0FBQSxLQUFBQSxDQUFBLENBQUFHLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsRUFBQVksY0FBQSxDQUFBTixDQUFBLENBQUFPLEdBQUEsR0FBQVAsQ0FBQTtBQUFBLFNBQUFRLGFBQUFkLENBQUEsRUFBQUcsQ0FBQSxFQUFBQyxDQUFBLFdBQUFELENBQUEsSUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxDQUFBZSxTQUFBLEVBQUFaLENBQUEsR0FBQUMsQ0FBQSxJQUFBRixpQkFBQSxDQUFBRixDQUFBLEVBQUFJLENBQUEsR0FBQU0sTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsaUJBQUFTLFFBQUEsU0FBQVQsQ0FBQTtBQUFBLFNBQUFZLGVBQUFSLENBQUEsUUFBQVksQ0FBQSxHQUFBQyxZQUFBLENBQUFiLENBQUEsZ0NBQUFjLE9BQUEsQ0FBQUYsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBQyxhQUFBYixDQUFBLEVBQUFELENBQUEsb0JBQUFlLE9BQUEsQ0FBQWQsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUosQ0FBQSxHQUFBSSxDQUFBLENBQUFlLE1BQUEsQ0FBQUMsV0FBQSxrQkFBQXBCLENBQUEsUUFBQWdCLENBQUEsR0FBQWhCLENBQUEsQ0FBQXFCLElBQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxnQ0FBQWUsT0FBQSxDQUFBRixDQUFBLFVBQUFBLENBQUEsWUFBQU0sU0FBQSx5RUFBQW5CLENBQUEsR0FBQW9CLE1BQUEsR0FBQUMsTUFBQSxFQUFBcEIsQ0FBQTtBQUFBLFNBQUFxQixnQkFBQUMsQ0FBQSxFQUFBQyxDQUFBLFVBQUFELENBQUEsWUFBQUMsQ0FBQSxhQUFBTCxTQUFBO0FBRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQSxJQWNNTSxTQUFTLGdCQUFBZCxZQUFBLENBQ2IsU0FBQWMsVUFBWUMsTUFBTSxFQUFFO0VBQUFKLGVBQUEsT0FBQUcsU0FBQTtFQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUNwQixJQUFJLENBQUNDLGtCQUFrQixHQUFHLElBQUlDLGdDQUFrQixDQUFDRixNQUFNLENBQUM7QUFDMUQsQ0FBQztBQUFBLElBQUFHLFFBQUEsR0FBQUMsT0FBQSxjQUdZTCxTQUFTO0FBQUFNLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=