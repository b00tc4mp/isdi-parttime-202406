"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _traveled = _interopRequireDefault(require("./air_traffic/traveled.js"));
var _booked = _interopRequireDefault(require("./air_traffic/booked.js"));
var _busiest_period = _interopRequireDefault(require("./air_traffic/busiest_period.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.airTraffic;
 * ```
 *
 * @param {Client} client
 */
var AirTraffic = /*#__PURE__*/_createClass(function AirTraffic(client) {
  _classCallCheck(this, AirTraffic);
  this.client = client;
  this.traveled = new _traveled["default"](client);
  this.booked = new _booked["default"](client);
  this.busiestPeriod = new _busiest_period["default"](client);
});
var _default = exports["default"] = AirTraffic;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHJhdmVsZWQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9ib29rZWQiLCJfYnVzaWVzdF9wZXJpb2QiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJBaXJUcmFmZmljIiwiY2xpZW50IiwidHJhdmVsZWQiLCJUcmF2ZWxlZCIsImJvb2tlZCIsIkJvb2tlZCIsImJ1c2llc3RQZXJpb2QiLCJCdXNpZXN0UGVyaW9kIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsL2FuYWx5dGljcy9haXJfdHJhZmZpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhdmVsZWQgZnJvbSAnLi9haXJfdHJhZmZpYy90cmF2ZWxlZC5qcyc7XG5pbXBvcnQgQm9va2VkIGZyb20gJy4vYWlyX3RyYWZmaWMvYm9va2VkLmpzJztcbmltcG9ydCBCdXNpZXN0UGVyaW9kIGZyb20gJy4vYWlyX3RyYWZmaWMvYnVzaWVzdF9wZXJpb2QuanMnO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS90cmF2ZWwvYW5hbHl0aWNzL2Fpci10cmFmZmljYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMudHJhdmVsLmFuYWx5dGljcy5haXJUcmFmZmljO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBBaXJUcmFmZmljIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgICA9IGNsaWVudDtcbiAgICB0aGlzLnRyYXZlbGVkID0gbmV3IFRyYXZlbGVkKGNsaWVudCk7XG4gICAgdGhpcy5ib29rZWQgPSBuZXcgQm9va2VkKGNsaWVudCk7XG4gICAgdGhpcy5idXNpZXN0UGVyaW9kID0gbmV3IEJ1c2llc3RQZXJpb2QoY2xpZW50KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFpclRyYWZmaWM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxTQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxPQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxlQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFBNEQsU0FBQUQsdUJBQUFJLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLGtCQUFBRixDQUFBLEVBQUFHLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLENBQUEsR0FBQUgsQ0FBQSxDQUFBQyxDQUFBLEdBQUFFLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLENBQUFDLFVBQUEsUUFBQUQsQ0FBQSxDQUFBRSxZQUFBLGtCQUFBRixDQUFBLEtBQUFBLENBQUEsQ0FBQUcsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxFQUFBWSxjQUFBLENBQUFOLENBQUEsQ0FBQU8sR0FBQSxHQUFBUCxDQUFBO0FBQUEsU0FBQVEsYUFBQWQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFDLENBQUEsV0FBQUQsQ0FBQSxJQUFBRCxpQkFBQSxDQUFBRixDQUFBLENBQUFlLFNBQUEsRUFBQVosQ0FBQSxHQUFBQyxDQUFBLElBQUFGLGlCQUFBLENBQUFGLENBQUEsRUFBQUksQ0FBQSxHQUFBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxpQkFBQVMsUUFBQSxTQUFBVCxDQUFBO0FBQUEsU0FBQVksZUFBQVIsQ0FBQSxRQUFBWSxDQUFBLEdBQUFDLFlBQUEsQ0FBQWIsQ0FBQSxnQ0FBQWMsT0FBQSxDQUFBRixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFiLENBQUEsRUFBQUQsQ0FBQSxvQkFBQWUsT0FBQSxDQUFBZCxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSixDQUFBLEdBQUFJLENBQUEsQ0FBQWUsTUFBQSxDQUFBQyxXQUFBLGtCQUFBcEIsQ0FBQSxRQUFBZ0IsQ0FBQSxHQUFBaEIsQ0FBQSxDQUFBcUIsSUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBZSxPQUFBLENBQUFGLENBQUEsVUFBQUEsQ0FBQSxZQUFBTSxTQUFBLHlFQUFBbkIsQ0FBQSxHQUFBb0IsTUFBQSxHQUFBQyxNQUFBLEVBQUFwQixDQUFBO0FBQUEsU0FBQXFCLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFMLFNBQUE7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNTSxVQUFVLGdCQUFBZCxZQUFBLENBQ2QsU0FBQWMsV0FBWUMsTUFBTSxFQUFFO0VBQUFKLGVBQUEsT0FBQUcsVUFBQTtFQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBS0EsTUFBTTtFQUN0QixJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJQyxvQkFBUSxDQUFDRixNQUFNLENBQUM7RUFDcEMsSUFBSSxDQUFDRyxNQUFNLEdBQUcsSUFBSUMsa0JBQU0sQ0FBQ0osTUFBTSxDQUFDO0VBQ2hDLElBQUksQ0FBQ0ssYUFBYSxHQUFHLElBQUlDLDBCQUFhLENBQUNOLE1BQU0sQ0FBQztBQUNoRCxDQUFDO0FBQUEsSUFBQU8sUUFBQSxHQUFBQyxPQUFBLGNBSVlULFVBQVU7QUFBQVUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==