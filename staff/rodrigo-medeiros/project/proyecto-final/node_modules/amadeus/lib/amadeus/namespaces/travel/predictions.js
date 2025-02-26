"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _trip_purpose = _interopRequireDefault(require("./predictions/trip_purpose"));
var _flight_delay = _interopRequireDefault(require("./predictions/flight_delay"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/**
 * A namespaced client for the
 * `/v1/travel/predictions/trip-purpose` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.predictions;
 * ```
 *
 * @param {Client} client
 * @property {TripPurpose} tripPurpose
 * @property {FlightDelay} flightDelay
 */
var Predictions = /*#__PURE__*/_createClass(function Predictions(client) {
  _classCallCheck(this, Predictions);
  this.client = client;
  this.tripPurpose = new _trip_purpose["default"](client);
  this.flightDelay = new _flight_delay["default"](client);
});
var _default = exports["default"] = Predictions;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHJpcF9wdXJwb3NlIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfZmxpZ2h0X2RlbGF5IiwiZSIsIl9fZXNNb2R1bGUiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwibyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b3R5cGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiUHJlZGljdGlvbnMiLCJjbGllbnQiLCJ0cmlwUHVycG9zZSIsIlRyaXBQdXJwb3NlIiwiZmxpZ2h0RGVsYXkiLCJGbGlnaHREZWxheSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3RyYXZlbC9wcmVkaWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJpcFB1cnBvc2UgZnJvbSAnLi9wcmVkaWN0aW9ucy90cmlwX3B1cnBvc2UnO1xuaW1wb3J0IEZsaWdodERlbGF5IGZyb20gJy4vcHJlZGljdGlvbnMvZmxpZ2h0X2RlbGF5JztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvdHJhdmVsL3ByZWRpY3Rpb25zL3RyaXAtcHVycG9zZWAgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnRyYXZlbC5wcmVkaWN0aW9ucztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqIEBwcm9wZXJ0eSB7VHJpcFB1cnBvc2V9IHRyaXBQdXJwb3NlXG4gKiBAcHJvcGVydHkge0ZsaWdodERlbGF5fSBmbGlnaHREZWxheVxuICovXG5jbGFzcyBQcmVkaWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMudHJpcFB1cnBvc2UgPSBuZXcgVHJpcFB1cnBvc2UoY2xpZW50KTtcbiAgICB0aGlzLmZsaWdodERlbGF5ID0gbmV3IEZsaWdodERlbGF5KGNsaWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlZGljdGlvbnM7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsYUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsYUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQXFELFNBQUFELHVCQUFBRyxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxrQkFBQUYsQ0FBQSxFQUFBRyxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBRSxDQUFBLEdBQUFILENBQUEsQ0FBQUMsQ0FBQSxHQUFBRSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxDQUFBQyxVQUFBLFFBQUFELENBQUEsQ0FBQUUsWUFBQSxrQkFBQUYsQ0FBQSxLQUFBQSxDQUFBLENBQUFHLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsRUFBQVksY0FBQSxDQUFBTixDQUFBLENBQUFPLEdBQUEsR0FBQVAsQ0FBQTtBQUFBLFNBQUFRLGFBQUFkLENBQUEsRUFBQUcsQ0FBQSxFQUFBQyxDQUFBLFdBQUFELENBQUEsSUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxDQUFBZSxTQUFBLEVBQUFaLENBQUEsR0FBQUMsQ0FBQSxJQUFBRixpQkFBQSxDQUFBRixDQUFBLEVBQUFJLENBQUEsR0FBQU0sTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsaUJBQUFTLFFBQUEsU0FBQVQsQ0FBQTtBQUFBLFNBQUFZLGVBQUFSLENBQUEsUUFBQVksQ0FBQSxHQUFBQyxZQUFBLENBQUFiLENBQUEsZ0NBQUFjLE9BQUEsQ0FBQUYsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBQyxhQUFBYixDQUFBLEVBQUFELENBQUEsb0JBQUFlLE9BQUEsQ0FBQWQsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUosQ0FBQSxHQUFBSSxDQUFBLENBQUFlLE1BQUEsQ0FBQUMsV0FBQSxrQkFBQXBCLENBQUEsUUFBQWdCLENBQUEsR0FBQWhCLENBQUEsQ0FBQXFCLElBQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxnQ0FBQWUsT0FBQSxDQUFBRixDQUFBLFVBQUFBLENBQUEsWUFBQU0sU0FBQSx5RUFBQW5CLENBQUEsR0FBQW9CLE1BQUEsR0FBQUMsTUFBQSxFQUFBcEIsQ0FBQTtBQUFBLFNBQUFxQixnQkFBQUMsQ0FBQSxFQUFBQyxDQUFBLFVBQUFELENBQUEsWUFBQUMsQ0FBQSxhQUFBTCxTQUFBO0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBLElBZU1NLFdBQVcsZ0JBQUFkLFlBQUEsQ0FDZixTQUFBYyxZQUFZQyxNQUFNLEVBQUU7RUFBQUosZUFBQSxPQUFBRyxXQUFBO0VBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3BCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUlDLHdCQUFXLENBQUNGLE1BQU0sQ0FBQztFQUMxQyxJQUFJLENBQUNHLFdBQVcsR0FBRyxJQUFJQyx3QkFBVyxDQUFDSixNQUFNLENBQUM7QUFDNUMsQ0FBQztBQUFBLElBQUFLLFFBQUEsR0FBQUMsT0FBQSxjQUdZUCxXQUFXO0FBQUFRLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=