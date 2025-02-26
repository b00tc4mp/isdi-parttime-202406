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
 * `/v1/booking/flight-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.flightOrder;
 * ```
 *
 * @param {Client} client
 */
var FlightOrder = /*#__PURE__*/function () {
  function FlightOrder(client, orderId) {
    _classCallCheck(this, FlightOrder);
    this.client = client;
    this._orderId = orderId;
  }

  /**
   * To retrieve a flight order based on its id.
   *
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To retrieve a flight order with ID 'XXX'
   *
   * ```js
   * amadeus.booking.flightOrder('XXX').get();
   * ```
   */
  return _createClass(FlightOrder, [{
    key: "get",
    value: function get() {
      if (this._orderId) return this.client.get('/v1/booking/flight-orders/' + this._orderId);else throw new Error('MISSING_REQUIRED_PARAMETER');
    }

    /**
     * To cancel a flight order based on its id.
     *
     * @return {Promise.<Response,ResponseError>} a Promise
     *
     * To cancel a flight order with ID 'XXX'
     *
     * ```js
     * amadeus.booking.flightOrder('XXX').delete();
     * ```
     */
  }, {
    key: "delete",
    value: function _delete() {
      if (this._orderId) return this.client["delete"]('/v1/booking/flight-orders/' + this._orderId);else throw new Error('MISSING_REQUIRED_PARAMETER');
    }
  }]);
}();
var _default = exports["default"] = FlightOrder;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRPcmRlciIsImNsaWVudCIsIm9yZGVySWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfb3JkZXJJZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwiRXJyb3IiLCJkZWxldGUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9ib29raW5nL2ZsaWdodF9vcmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9ib29raW5nL2ZsaWdodC1vcmRlcnNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5ib29raW5nLmZsaWdodE9yZGVyO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBGbGlnaHRPcmRlciB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCwgb3JkZXJJZCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuX29yZGVySWQgPSBvcmRlcklkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIHJldHJpZXZlIGEgZmxpZ2h0IG9yZGVyIGJhc2VkIG9uIGl0cyBpZC5cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBUbyByZXRyaWV2ZSBhIGZsaWdodCBvcmRlciB3aXRoIElEICdYWFgnXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuYm9va2luZy5mbGlnaHRPcmRlcignWFhYJykuZ2V0KCk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KCkge1xuICAgIGlmICh0aGlzLl9vcmRlcklkKVxuICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL2Jvb2tpbmcvZmxpZ2h0LW9yZGVycy8nICsgdGhpcy5fb3JkZXJJZCk7XG4gICAgZWxzZVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNSVNTSU5HX1JFUVVJUkVEX1BBUkFNRVRFUicpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIGNhbmNlbCBhIGZsaWdodCBvcmRlciBiYXNlZCBvbiBpdHMgaWQuXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogVG8gY2FuY2VsIGEgZmxpZ2h0IG9yZGVyIHdpdGggSUQgJ1hYWCdcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5ib29raW5nLmZsaWdodE9yZGVyKCdYWFgnKS5kZWxldGUoKTtcbiAgICogYGBgXG4gICAqL1xuICBkZWxldGUoKSB7XG4gICAgaWYgKHRoaXMuX29yZGVySWQpXG4gICAgICByZXR1cm4gdGhpcy5jbGllbnQuZGVsZXRlKCcvdjEvYm9va2luZy9mbGlnaHQtb3JkZXJzLycgKyB0aGlzLl9vcmRlcklkKTtcbiAgICBlbHNlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01JU1NJTkdfUkVRVUlSRURfUEFSQU1FVEVSJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0T3JkZXI7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLFdBQVc7RUFDZixTQUFBQSxZQUFZQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtJQUFBQyxlQUFBLE9BQUFILFdBQUE7SUFDM0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDRyxRQUFRLEdBQUdGLE9BQU87RUFDekI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQVZFLE9BQUFHLFlBQUEsQ0FBQUwsV0FBQTtJQUFBTSxHQUFBO0lBQUFDLEtBQUEsRUFXQSxTQUFBQyxHQUFHQSxDQUFBLEVBQUc7TUFDSixJQUFJLElBQUksQ0FBQ0osUUFBUSxFQUNmLE9BQU8sSUFBSSxDQUFDSCxNQUFNLENBQUNPLEdBQUcsQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUNKLFFBQVEsQ0FBQyxDQUFDLEtBRXJFLE1BQU0sSUFBSUssS0FBSyxDQUFDLDRCQUE0QixDQUFDO0lBQ2pEOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFWRTtJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUFXQSxTQUFBRyxPQUFNQSxDQUFBLEVBQUc7TUFDUCxJQUFJLElBQUksQ0FBQ04sUUFBUSxFQUNmLE9BQU8sSUFBSSxDQUFDSCxNQUFNLFVBQU8sQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUNHLFFBQVEsQ0FBQyxDQUFDLEtBRXhFLE1BQU0sSUFBSUssS0FBSyxDQUFDLDRCQUE0QixDQUFDO0lBQ2pEO0VBQUM7QUFBQTtBQUFBLElBQUFFLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixXQUFXO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=