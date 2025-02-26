"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A namespaced client for the
 * `/v1/ordering/transfer-orders/XXX/transfers/cancellation` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrder('XXX').transfers.cancellation.post({}, '12345');;
 * ```
 *
 * @param {Client} client
 */
var Cancellation = /*#__PURE__*/function () {
  function Cancellation(client, orderId) {
    _classCallCheck(this, Cancellation);
    this.client = client;
    this.orderId = orderId;
  }

  /**
   * To cancel a transfer order based on its id
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To cancel a transfer order with ID 'XXX' and confirmation number '12345'
   *
   * ```js
   * amadeus.ordering.transferOrder('XXX').transfers.cancellation.post({}, '12345');;
   * ```
   */
  return _createClass(Cancellation, [{
    key: "post",
    value: function post(body, confirmNbr) {
      return this.client.post("/v1/ordering/transfer-orders/".concat(this.orderId, "/transfers/cancellation?confirmNbr=").concat(confirmNbr), body);
    }
  }]);
}();
var _default = exports["default"] = Cancellation;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDYW5jZWxsYXRpb24iLCJjbGllbnQiLCJvcmRlcklkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwb3N0IiwiYm9keSIsImNvbmZpcm1OYnIiLCJjb25jYXQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9vcmRlcmluZy90cmFuc2Zlcl9vcmRlcnMvdHJhbnNmZXJzL2NhbmNlbGxhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9vcmRlcmluZy90cmFuc2Zlci1vcmRlcnMvWFhYL3RyYW5zZmVycy9jYW5jZWxsYXRpb25gIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5vcmRlcmluZy50cmFuc2Zlck9yZGVyKCdYWFgnKS50cmFuc2ZlcnMuY2FuY2VsbGF0aW9uLnBvc3Qoe30sICcxMjM0NScpOztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgQ2FuY2VsbGF0aW9uIHtcbiAgY29uc3RydWN0b3IoY2xpZW50LCBvcmRlcklkKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5vcmRlcklkID0gb3JkZXJJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBjYW5jZWwgYSB0cmFuc2ZlciBvcmRlciBiYXNlZCBvbiBpdHMgaWRcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBUbyBjYW5jZWwgYSB0cmFuc2ZlciBvcmRlciB3aXRoIElEICdYWFgnIGFuZCBjb25maXJtYXRpb24gbnVtYmVyICcxMjM0NSdcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5vcmRlcmluZy50cmFuc2Zlck9yZGVyKCdYWFgnKS50cmFuc2ZlcnMuY2FuY2VsbGF0aW9uLnBvc3Qoe30sICcxMjM0NScpOztcbiAgICogYGBgXG4gICAqL1xuICBwb3N0KGJvZHksIGNvbmZpcm1OYnIpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdChcbiAgICAgIGAvdjEvb3JkZXJpbmcvdHJhbnNmZXItb3JkZXJzLyR7dGhpcy5vcmRlcklkfS90cmFuc2ZlcnMvY2FuY2VsbGF0aW9uP2NvbmZpcm1OYnI9JHtjb25maXJtTmJyfWAsIGJvZHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbGxhdGlvbjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsWUFBWTtFQUNoQixTQUFBQSxhQUFZQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtJQUFBQyxlQUFBLE9BQUFILFlBQUE7SUFDM0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87RUFDeEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFURSxPQUFBRSxZQUFBLENBQUFKLFlBQUE7SUFBQUssR0FBQTtJQUFBQyxLQUFBLEVBVUEsU0FBQUMsSUFBSUEsQ0FBQ0MsSUFBSSxFQUFFQyxVQUFVLEVBQUU7TUFDckIsT0FBTyxJQUFJLENBQUNSLE1BQU0sQ0FBQ00sSUFBSSxpQ0FBQUcsTUFBQSxDQUNXLElBQUksQ0FBQ1IsT0FBTyx5Q0FBQVEsTUFBQSxDQUFzQ0QsVUFBVSxHQUFJRCxJQUFJLENBQUM7SUFDekc7RUFBQztBQUFBO0FBQUEsSUFBQUcsUUFBQSxHQUFBQyxPQUFBLGNBR1laLFlBQVk7QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==