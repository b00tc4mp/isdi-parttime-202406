"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _flight_choice_prediction = _interopRequireDefault(require("./flight_offers/flight_choice_prediction.js"));
var _pricing = _interopRequireDefault(require("./flight_offers/pricing.js"));
var _upselling = _interopRequireDefault(require("./flight_offers/upselling.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers;
 * ```
 *
 * @param {Client} client
 */
var FlightOffers = /*#__PURE__*/_createClass(function FlightOffers(client) {
  _classCallCheck(this, FlightOffers);
  this.client = client;
  this.prediction = new _flight_choice_prediction["default"](client);
  this.pricing = new _pricing["default"](client);
  this.upselling = new _upselling["default"](client);
});
var _default = exports["default"] = FlightOffers;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmxpZ2h0X2Nob2ljZV9wcmVkaWN0aW9uIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcHJpY2luZyIsIl91cHNlbGxpbmciLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJGbGlnaHRPZmZlcnMiLCJjbGllbnQiLCJwcmVkaWN0aW9uIiwiRmxpZ2h0Q2hvaWNlUHJlZGljdGlvbiIsInByaWNpbmciLCJQcmljaW5nIiwidXBzZWxsaW5nIiwiVXBzZWxsaW5nIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2hvcHBpbmcvZmxpZ2h0X29mZmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmxpZ2h0Q2hvaWNlUHJlZGljdGlvbiBmcm9tICcuL2ZsaWdodF9vZmZlcnMvZmxpZ2h0X2Nob2ljZV9wcmVkaWN0aW9uLmpzJztcbmltcG9ydCBQcmljaW5nIGZyb20gJy4vZmxpZ2h0X29mZmVycy9wcmljaW5nLmpzJztcbmltcG9ydCBVcHNlbGxpbmcgZnJvbSAnLi9mbGlnaHRfb2ZmZXJzL3Vwc2VsbGluZy5qcyc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zaG9wcGluZy5mbGlnaHRPZmZlcnM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIEZsaWdodE9mZmVycyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMucHJlZGljdGlvbiA9IG5ldyBGbGlnaHRDaG9pY2VQcmVkaWN0aW9uKGNsaWVudCk7XG4gICAgdGhpcy5wcmljaW5nID0gbmV3IFByaWNpbmcoY2xpZW50KTtcbiAgICB0aGlzLnVwc2VsbGluZyA9IG5ldyBVcHNlbGxpbmcoY2xpZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGlnaHRPZmZlcnM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSx5QkFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsVUFBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQXFELFNBQUFELHVCQUFBSSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxrQkFBQUYsQ0FBQSxFQUFBRyxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBRSxDQUFBLEdBQUFILENBQUEsQ0FBQUMsQ0FBQSxHQUFBRSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxDQUFBQyxVQUFBLFFBQUFELENBQUEsQ0FBQUUsWUFBQSxrQkFBQUYsQ0FBQSxLQUFBQSxDQUFBLENBQUFHLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsRUFBQVksY0FBQSxDQUFBTixDQUFBLENBQUFPLEdBQUEsR0FBQVAsQ0FBQTtBQUFBLFNBQUFRLGFBQUFkLENBQUEsRUFBQUcsQ0FBQSxFQUFBQyxDQUFBLFdBQUFELENBQUEsSUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxDQUFBZSxTQUFBLEVBQUFaLENBQUEsR0FBQUMsQ0FBQSxJQUFBRixpQkFBQSxDQUFBRixDQUFBLEVBQUFJLENBQUEsR0FBQU0sTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsaUJBQUFTLFFBQUEsU0FBQVQsQ0FBQTtBQUFBLFNBQUFZLGVBQUFSLENBQUEsUUFBQVksQ0FBQSxHQUFBQyxZQUFBLENBQUFiLENBQUEsZ0NBQUFjLE9BQUEsQ0FBQUYsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBQyxhQUFBYixDQUFBLEVBQUFELENBQUEsb0JBQUFlLE9BQUEsQ0FBQWQsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUosQ0FBQSxHQUFBSSxDQUFBLENBQUFlLE1BQUEsQ0FBQUMsV0FBQSxrQkFBQXBCLENBQUEsUUFBQWdCLENBQUEsR0FBQWhCLENBQUEsQ0FBQXFCLElBQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxnQ0FBQWUsT0FBQSxDQUFBRixDQUFBLFVBQUFBLENBQUEsWUFBQU0sU0FBQSx5RUFBQW5CLENBQUEsR0FBQW9CLE1BQUEsR0FBQUMsTUFBQSxFQUFBcEIsQ0FBQTtBQUFBLFNBQUFxQixnQkFBQUMsQ0FBQSxFQUFBQyxDQUFBLFVBQUFELENBQUEsWUFBQUMsQ0FBQSxhQUFBTCxTQUFBO0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTU0sWUFBWSxnQkFBQWQsWUFBQSxDQUNoQixTQUFBYyxhQUFZQyxNQUFNLEVBQUU7RUFBQUosZUFBQSxPQUFBRyxZQUFBO0VBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3BCLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUlDLG9DQUFzQixDQUFDRixNQUFNLENBQUM7RUFDcEQsSUFBSSxDQUFDRyxPQUFPLEdBQUcsSUFBSUMsbUJBQU8sQ0FBQ0osTUFBTSxDQUFDO0VBQ2xDLElBQUksQ0FBQ0ssU0FBUyxHQUFHLElBQUlDLHFCQUFTLENBQUNOLE1BQU0sQ0FBQztBQUN4QyxDQUFDO0FBQUEsSUFBQU8sUUFBQSxHQUFBQyxPQUFBLGNBR1lULFlBQVk7QUFBQVUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==