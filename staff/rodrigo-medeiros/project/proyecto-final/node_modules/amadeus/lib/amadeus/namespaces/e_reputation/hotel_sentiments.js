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
 * `/v2/e-reputation/hotel-sentiments` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.eReputation.hotelSentiments;
 * ```
 *
 * @param {Client} client
 */
var HotelSentiments = /*#__PURE__*/function () {
  function HotelSentiments(client) {
    _classCallCheck(this, HotelSentiments);
    this.client = client;
  }

  /**
   * Get the sentiment analysis of hotel reviews
   *
   * @param {Object} params
   * @param {string} params.hotelIds Comma separated list of Amadeus hotel
   *   codes to request. Example: XKPARC12
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get Sentiment Analysis of reviews about Holiday Inn Paris Notre Dame.
   *
   * ```js
   * amadeus.eReputation.hotelSentiments.get({
   *   hotelIds: 'XKPARC12'
   * })
   * ```
   */
  return _createClass(HotelSentiments, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v2/e-reputation/hotel-sentiments', params);
    }
  }]);
}();
var _default = exports["default"] = HotelSentiments;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIb3RlbFNlbnRpbWVudHMiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2VfcmVwdXRhdGlvbi9ob3RlbF9zZW50aW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL2UtcmVwdXRhdGlvbi9ob3RlbC1zZW50aW1lbnRzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuZVJlcHV0YXRpb24uaG90ZWxTZW50aW1lbnRzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBIb3RlbFNlbnRpbWVudHMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNlbnRpbWVudCBhbmFseXNpcyBvZiBob3RlbCByZXZpZXdzXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5ob3RlbElkcyBDb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBBbWFkZXVzIGhvdGVsXG4gICAqICAgY29kZXMgdG8gcmVxdWVzdC4gRXhhbXBsZTogWEtQQVJDMTJcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBHZXQgU2VudGltZW50IEFuYWx5c2lzIG9mIHJldmlld3MgYWJvdXQgSG9saWRheSBJbm4gUGFyaXMgTm90cmUgRGFtZS5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5lUmVwdXRhdGlvbi5ob3RlbFNlbnRpbWVudHMuZ2V0KHtcbiAgICogICBob3RlbElkczogJ1hLUEFSQzEyJ1xuICAgKiB9KVxuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92Mi9lLXJlcHV0YXRpb24vaG90ZWwtc2VudGltZW50cycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG90ZWxTZW50aW1lbnRzOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxlQUFlO0VBQ25CLFNBQUFBLGdCQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixlQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBZkUsT0FBQUUsWUFBQSxDQUFBSCxlQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQWdCQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRUMsTUFBTSxDQUFDO0lBQ3JFO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixlQUFlO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=