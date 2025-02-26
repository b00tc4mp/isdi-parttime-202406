"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _transfers = _interopRequireDefault(require("./transfer_orders/transfers"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/**
 * A namespaced client for the
 * `/v1/ordering/transfer-orders/XXXXX` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrder('XXX');
 * ```
 *
 * @param {Client} client
 * @param {string} orderId
 */
var TransferOrder = /*#__PURE__*/_createClass(function TransferOrder(client, orderId) {
  _classCallCheck(this, TransferOrder);
  this.client = client;
  this.orderId = orderId;
  this.transfers = new _transfers["default"](client, orderId);
});
var _default = exports["default"] = TransferOrder;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHJhbnNmZXJzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUcmFuc2Zlck9yZGVyIiwiY2xpZW50Iiwib3JkZXJJZCIsInRyYW5zZmVycyIsIlRyYW5zZmVycyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL29yZGVyaW5nL3RyYW5zZmVyX29yZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFuc2ZlcnMgZnJvbSAnLi90cmFuc2Zlcl9vcmRlcnMvdHJhbnNmZXJzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvb3JkZXJpbmcvdHJhbnNmZXItb3JkZXJzL1hYWFhYYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMub3JkZXJpbmcudHJhbnNmZXJPcmRlcignWFhYJyk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gb3JkZXJJZFxuICovXG5jbGFzcyBUcmFuc2Zlck9yZGVyIHtcbiAgY29uc3RydWN0b3IoY2xpZW50LCBvcmRlcklkKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5vcmRlcklkID0gb3JkZXJJZDtcbiAgICB0aGlzLnRyYW5zZmVycyA9IG5ldyBUcmFuc2ZlcnMoY2xpZW50LCBvcmRlcklkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zlck9yZGVyOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLFVBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFvRCxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLGdCQUFBQSxDQUFBO0FBQUEsU0FBQUUsa0JBQUFGLENBQUEsRUFBQUcsQ0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsQ0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsQ0FBQSxHQUFBSCxDQUFBLENBQUFDLENBQUEsR0FBQUUsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsQ0FBQUMsVUFBQSxRQUFBRCxDQUFBLENBQUFFLFlBQUEsa0JBQUFGLENBQUEsS0FBQUEsQ0FBQSxDQUFBRyxRQUFBLFFBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLEVBQUFZLGNBQUEsQ0FBQU4sQ0FBQSxDQUFBTyxHQUFBLEdBQUFQLENBQUE7QUFBQSxTQUFBUSxhQUFBZCxDQUFBLEVBQUFHLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLElBQUFELGlCQUFBLENBQUFGLENBQUEsQ0FBQWUsU0FBQSxFQUFBWixDQUFBLEdBQUFDLENBQUEsSUFBQUYsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBSSxDQUFBLEdBQUFNLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLGlCQUFBUyxRQUFBLFNBQUFULENBQUE7QUFBQSxTQUFBWSxlQUFBUixDQUFBLFFBQUFZLENBQUEsR0FBQUMsWUFBQSxDQUFBYixDQUFBLGdDQUFBYyxPQUFBLENBQUFGLENBQUEsSUFBQUEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQUMsYUFBQWIsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBZSxPQUFBLENBQUFkLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFKLENBQUEsR0FBQUksQ0FBQSxDQUFBZSxNQUFBLENBQUFDLFdBQUEsa0JBQUFwQixDQUFBLFFBQUFnQixDQUFBLEdBQUFoQixDQUFBLENBQUFxQixJQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsZ0NBQUFlLE9BQUEsQ0FBQUYsQ0FBQSxVQUFBQSxDQUFBLFlBQUFNLFNBQUEseUVBQUFuQixDQUFBLEdBQUFvQixNQUFBLEdBQUFDLE1BQUEsRUFBQXBCLENBQUE7QUFBQSxTQUFBcUIsZ0JBQUFDLENBQUEsRUFBQUMsQ0FBQSxVQUFBRCxDQUFBLFlBQUFDLENBQUEsYUFBQUwsU0FBQTtBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkEsSUFjTU0sYUFBYSxnQkFBQWQsWUFBQSxDQUNqQixTQUFBYyxjQUFZQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtFQUFBTCxlQUFBLE9BQUFHLGFBQUE7RUFDM0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDcEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87RUFDdEIsSUFBSSxDQUFDQyxTQUFTLEdBQUcsSUFBSUMscUJBQVMsQ0FBQ0gsTUFBTSxFQUFFQyxPQUFPLENBQUM7QUFDakQsQ0FBQztBQUFBLElBQUFHLFFBQUEsR0FBQUMsT0FBQSxjQUdZTixhQUFhO0FBQUFPLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=