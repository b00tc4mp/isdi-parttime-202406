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
 * `/v1/booking/hotel-bookings` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.hotelBookings;
 * ```
 *
 * @param {Client} client
 */
var HotelBookings = /*#__PURE__*/function () {
  function HotelBookings(client) {
    _classCallCheck(this, HotelBookings);
    this.client = client;
  }

  /**
   * To book the offer retrieved from Hotel Shopping API.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the hotel offer with ID 'XXX' with guests & payments info
   *
   * ```js
   * amadeus.booking.hotelBookings.post(
   * {
   * 'data': {
   *   'offerId': 'XXXX',
   *   'guests': [],
   *   'payments': [],
   *   'rooms': []
   * }}
   * )
   * ```
   */
  return _createClass(HotelBookings, [{
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.post('/v1/booking/hotel-bookings', params);
    }
  }]);
}();
var _default = exports["default"] = HotelBookings;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIb3RlbEJvb2tpbmdzIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwb3N0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvYm9va2luZy9ob3RlbF9ib29raW5ncy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9ib29raW5nL2hvdGVsLWJvb2tpbmdzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuYm9va2luZy5ob3RlbEJvb2tpbmdzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBIb3RlbEJvb2tpbmdzIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogVG8gYm9vayB0aGUgb2ZmZXIgcmV0cmlldmVkIGZyb20gSG90ZWwgU2hvcHBpbmcgQVBJLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogVG8gYm9vayB0aGUgaG90ZWwgb2ZmZXIgd2l0aCBJRCAnWFhYJyB3aXRoIGd1ZXN0cyAmIHBheW1lbnRzIGluZm9cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5ib29raW5nLmhvdGVsQm9va2luZ3MucG9zdChcbiAgICoge1xuICAgKiAnZGF0YSc6IHtcbiAgICogICAnb2ZmZXJJZCc6ICdYWFhYJyxcbiAgICogICAnZ3Vlc3RzJzogW10sXG4gICAqICAgJ3BheW1lbnRzJzogW10sXG4gICAqICAgJ3Jvb21zJzogW11cbiAgICogfX1cbiAgICogKVxuICAgKiBgYGBcbiAgICovXG4gIHBvc3QocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdCgnL3YxL2Jvb2tpbmcvaG90ZWwtYm9va2luZ3MnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsQm9va2luZ3M7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLGFBQWE7RUFDakIsU0FBQUEsY0FBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsYUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBbkJFLE9BQUFFLFlBQUEsQ0FBQUgsYUFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFvQkEsU0FBQUMsSUFBSUEsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDZCxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxJQUFJLENBQUMsNEJBQTRCLEVBQUVDLE1BQU0sQ0FBQztJQUMvRDtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosYUFBYTtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119