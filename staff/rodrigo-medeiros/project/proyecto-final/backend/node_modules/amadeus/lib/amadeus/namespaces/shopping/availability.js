"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _flight_availabilities = _interopRequireDefault(require("./availability/flight_availabilities"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/**
 * A namespaced client for the
 * `/v1/shopping/availability` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.availability;
 * ```
 *
 * @param {Client} client
 * @property {Availability} availability
 * @protected
 */
var Availability = /*#__PURE__*/_createClass(function Availability(client) {
  _classCallCheck(this, Availability);
  this.client = client;
  this.flightAvailabilities = new _flight_availabilities["default"](client);
});
var _default = exports["default"] = Availability;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmxpZ2h0X2F2YWlsYWJpbGl0aWVzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJBdmFpbGFiaWxpdHkiLCJjbGllbnQiLCJmbGlnaHRBdmFpbGFiaWxpdGllcyIsIkZsaWdodEF2YWlsYWJpbGl0aWVzIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2hvcHBpbmcvYXZhaWxhYmlsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbGlnaHRBdmFpbGFiaWxpdGllcyBmcm9tICcuL2F2YWlsYWJpbGl0eS9mbGlnaHRfYXZhaWxhYmlsaXRpZXMnO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9zaG9wcGluZy9hdmFpbGFiaWxpdHlgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zaG9wcGluZy5hdmFpbGFiaWxpdHk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge0F2YWlsYWJpbGl0eX0gYXZhaWxhYmlsaXR5XG4gKiBAcHJvdGVjdGVkXG4gKi9cbmNsYXNzIEF2YWlsYWJpbGl0eSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuZmxpZ2h0QXZhaWxhYmlsaXRpZXMgPSBuZXcgRmxpZ2h0QXZhaWxhYmlsaXRpZXMoY2xpZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdmFpbGFiaWxpdHk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxzQkFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQXdFLFNBQUFELHVCQUFBRSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxrQkFBQUYsQ0FBQSxFQUFBRyxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBRSxDQUFBLEdBQUFILENBQUEsQ0FBQUMsQ0FBQSxHQUFBRSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxDQUFBQyxVQUFBLFFBQUFELENBQUEsQ0FBQUUsWUFBQSxrQkFBQUYsQ0FBQSxLQUFBQSxDQUFBLENBQUFHLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsRUFBQVksY0FBQSxDQUFBTixDQUFBLENBQUFPLEdBQUEsR0FBQVAsQ0FBQTtBQUFBLFNBQUFRLGFBQUFkLENBQUEsRUFBQUcsQ0FBQSxFQUFBQyxDQUFBLFdBQUFELENBQUEsSUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxDQUFBZSxTQUFBLEVBQUFaLENBQUEsR0FBQUMsQ0FBQSxJQUFBRixpQkFBQSxDQUFBRixDQUFBLEVBQUFJLENBQUEsR0FBQU0sTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsaUJBQUFTLFFBQUEsU0FBQVQsQ0FBQTtBQUFBLFNBQUFZLGVBQUFSLENBQUEsUUFBQVksQ0FBQSxHQUFBQyxZQUFBLENBQUFiLENBQUEsZ0NBQUFjLE9BQUEsQ0FBQUYsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBQyxhQUFBYixDQUFBLEVBQUFELENBQUEsb0JBQUFlLE9BQUEsQ0FBQWQsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUosQ0FBQSxHQUFBSSxDQUFBLENBQUFlLE1BQUEsQ0FBQUMsV0FBQSxrQkFBQXBCLENBQUEsUUFBQWdCLENBQUEsR0FBQWhCLENBQUEsQ0FBQXFCLElBQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxnQ0FBQWUsT0FBQSxDQUFBRixDQUFBLFVBQUFBLENBQUEsWUFBQU0sU0FBQSx5RUFBQW5CLENBQUEsR0FBQW9CLE1BQUEsR0FBQUMsTUFBQSxFQUFBcEIsQ0FBQTtBQUFBLFNBQUFxQixnQkFBQUMsQ0FBQSxFQUFBQyxDQUFBLFVBQUFELENBQUEsWUFBQUMsQ0FBQSxhQUFBTCxTQUFBO0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBLElBZU1NLFlBQVksZ0JBQUFkLFlBQUEsQ0FDaEIsU0FBQWMsYUFBWUMsTUFBTSxFQUFFO0VBQUFKLGVBQUEsT0FBQUcsWUFBQTtFQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUNwQixJQUFJLENBQUNDLG9CQUFvQixHQUFHLElBQUlDLGlDQUFvQixDQUFDRixNQUFNLENBQUM7QUFDOUQsQ0FBQztBQUFBLElBQUFHLFFBQUEsR0FBQUMsT0FBQSxjQUdZTCxZQUFZO0FBQUFNLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=