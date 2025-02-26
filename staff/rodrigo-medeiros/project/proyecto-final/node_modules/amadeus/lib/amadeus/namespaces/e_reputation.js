"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _hotel_sentiments = _interopRequireDefault(require("./e_reputation/hotel_sentiments"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/**
 * A namespaced client for the
 * `/v2/e-reputation` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.eReputation;
 * ```
 *
 * @param {Client} client
 * @property {hotelSentiments} hotel_sentiments
 */
var EReputation = /*#__PURE__*/_createClass(function EReputation(client) {
  _classCallCheck(this, EReputation);
  this.client = client;
  this.hotelSentiments = new _hotel_sentiments["default"](client);
});
var _default = exports["default"] = EReputation;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG90ZWxfc2VudGltZW50cyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwibyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b3R5cGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiRVJlcHV0YXRpb24iLCJjbGllbnQiLCJob3RlbFNlbnRpbWVudHMiLCJIb3RlbFNlbnRpbWVudHMiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9lX3JlcHV0YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhvdGVsU2VudGltZW50cyAgICBmcm9tICcuL2VfcmVwdXRhdGlvbi9ob3RlbF9zZW50aW1lbnRzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjIvZS1yZXB1dGF0aW9uYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuZVJlcHV0YXRpb247XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge2hvdGVsU2VudGltZW50c30gaG90ZWxfc2VudGltZW50c1xuICovXG5jbGFzcyBFUmVwdXRhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ICAgICAgICAgICAgID0gY2xpZW50O1xuICAgIHRoaXMuaG90ZWxTZW50aW1lbnRzID0gbmV3IEhvdGVsU2VudGltZW50cyhjbGllbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVSZXB1dGF0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsaUJBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFpRSxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLGdCQUFBQSxDQUFBO0FBQUEsU0FBQUUsa0JBQUFGLENBQUEsRUFBQUcsQ0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsQ0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsQ0FBQSxHQUFBSCxDQUFBLENBQUFDLENBQUEsR0FBQUUsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsQ0FBQUMsVUFBQSxRQUFBRCxDQUFBLENBQUFFLFlBQUEsa0JBQUFGLENBQUEsS0FBQUEsQ0FBQSxDQUFBRyxRQUFBLFFBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLEVBQUFZLGNBQUEsQ0FBQU4sQ0FBQSxDQUFBTyxHQUFBLEdBQUFQLENBQUE7QUFBQSxTQUFBUSxhQUFBZCxDQUFBLEVBQUFHLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLElBQUFELGlCQUFBLENBQUFGLENBQUEsQ0FBQWUsU0FBQSxFQUFBWixDQUFBLEdBQUFDLENBQUEsSUFBQUYsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBSSxDQUFBLEdBQUFNLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLGlCQUFBUyxRQUFBLFNBQUFULENBQUE7QUFBQSxTQUFBWSxlQUFBUixDQUFBLFFBQUFZLENBQUEsR0FBQUMsWUFBQSxDQUFBYixDQUFBLGdDQUFBYyxPQUFBLENBQUFGLENBQUEsSUFBQUEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQUMsYUFBQWIsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBZSxPQUFBLENBQUFkLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFKLENBQUEsR0FBQUksQ0FBQSxDQUFBZSxNQUFBLENBQUFDLFdBQUEsa0JBQUFwQixDQUFBLFFBQUFnQixDQUFBLEdBQUFoQixDQUFBLENBQUFxQixJQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsZ0NBQUFlLE9BQUEsQ0FBQUYsQ0FBQSxVQUFBQSxDQUFBLFlBQUFNLFNBQUEseUVBQUFuQixDQUFBLEdBQUFvQixNQUFBLEdBQUFDLE1BQUEsRUFBQXBCLENBQUE7QUFBQSxTQUFBcUIsZ0JBQUFDLENBQUEsRUFBQUMsQ0FBQSxVQUFBRCxDQUFBLFlBQUFDLENBQUEsYUFBQUwsU0FBQTtBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkEsSUFjTU0sV0FBVyxnQkFBQWQsWUFBQSxDQUNmLFNBQUFjLFlBQVlDLE1BQU0sRUFBRTtFQUFBSixlQUFBLE9BQUFHLFdBQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQWVBLE1BQU07RUFDaEMsSUFBSSxDQUFDQyxlQUFlLEdBQUcsSUFBSUMsNEJBQWUsQ0FBQ0YsTUFBTSxDQUFDO0FBQ3BELENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWUwsV0FBVztBQUFBTSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119