"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cancellation = _interopRequireDefault(require("./transfers/cancellation"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/**
 * A namespaced client for the
 * `/v1/ordering/transfer-orders/XXXXX/transfers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrders('XXX').transfers;
 * ```
 *
 * @param {Client} client
 */
var Transfers = /*#__PURE__*/_createClass(function Transfers(client, orderId) {
  _classCallCheck(this, Transfers);
  this.client = client;
  this.orderId = orderId;
  this.cancellation = new _cancellation["default"](client, orderId);
});
var _default = exports["default"] = Transfers;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2FuY2VsbGF0aW9uIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUcmFuc2ZlcnMiLCJjbGllbnQiLCJvcmRlcklkIiwiY2FuY2VsbGF0aW9uIiwiQ2FuY2VsbGF0aW9uIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvb3JkZXJpbmcvdHJhbnNmZXJfb3JkZXJzL3RyYW5zZmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FuY2VsbGF0aW9uIGZyb20gJy4vdHJhbnNmZXJzL2NhbmNlbGxhdGlvbic7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL29yZGVyaW5nL3RyYW5zZmVyLW9yZGVycy9YWFhYWC90cmFuc2ZlcnNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5vcmRlcmluZy50cmFuc2Zlck9yZGVycygnWFhYJykudHJhbnNmZXJzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBUcmFuc2ZlcnMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQsIG9yZGVySWQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLm9yZGVySWQgPSBvcmRlcklkO1xuICAgIHRoaXMuY2FuY2VsbGF0aW9uID0gbmV3IENhbmNlbGxhdGlvbihjbGllbnQsIG9yZGVySWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZmVyczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxhQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBb0QsU0FBQUQsdUJBQUFFLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLGtCQUFBRixDQUFBLEVBQUFHLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLENBQUEsR0FBQUgsQ0FBQSxDQUFBQyxDQUFBLEdBQUFFLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLENBQUFDLFVBQUEsUUFBQUQsQ0FBQSxDQUFBRSxZQUFBLGtCQUFBRixDQUFBLEtBQUFBLENBQUEsQ0FBQUcsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxFQUFBWSxjQUFBLENBQUFOLENBQUEsQ0FBQU8sR0FBQSxHQUFBUCxDQUFBO0FBQUEsU0FBQVEsYUFBQWQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFDLENBQUEsV0FBQUQsQ0FBQSxJQUFBRCxpQkFBQSxDQUFBRixDQUFBLENBQUFlLFNBQUEsRUFBQVosQ0FBQSxHQUFBQyxDQUFBLElBQUFGLGlCQUFBLENBQUFGLENBQUEsRUFBQUksQ0FBQSxHQUFBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxpQkFBQVMsUUFBQSxTQUFBVCxDQUFBO0FBQUEsU0FBQVksZUFBQVIsQ0FBQSxRQUFBWSxDQUFBLEdBQUFDLFlBQUEsQ0FBQWIsQ0FBQSxnQ0FBQWMsT0FBQSxDQUFBRixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFiLENBQUEsRUFBQUQsQ0FBQSxvQkFBQWUsT0FBQSxDQUFBZCxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSixDQUFBLEdBQUFJLENBQUEsQ0FBQWUsTUFBQSxDQUFBQyxXQUFBLGtCQUFBcEIsQ0FBQSxRQUFBZ0IsQ0FBQSxHQUFBaEIsQ0FBQSxDQUFBcUIsSUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBZSxPQUFBLENBQUFGLENBQUEsVUFBQUEsQ0FBQSxZQUFBTSxTQUFBLHlFQUFBbkIsQ0FBQSxHQUFBb0IsTUFBQSxHQUFBQyxNQUFBLEVBQUFwQixDQUFBO0FBQUEsU0FBQXFCLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFMLFNBQUE7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNTSxTQUFTLGdCQUFBZCxZQUFBLENBQ2IsU0FBQWMsVUFBWUMsTUFBTSxFQUFFQyxPQUFPLEVBQUU7RUFBQUwsZUFBQSxPQUFBRyxTQUFBO0VBQzNCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3BCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0VBQ3RCLElBQUksQ0FBQ0MsWUFBWSxHQUFHLElBQUlDLHdCQUFZLENBQUNILE1BQU0sRUFBRUMsT0FBTyxDQUFDO0FBQ3ZELENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWU4sU0FBUztBQUFBTyxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119