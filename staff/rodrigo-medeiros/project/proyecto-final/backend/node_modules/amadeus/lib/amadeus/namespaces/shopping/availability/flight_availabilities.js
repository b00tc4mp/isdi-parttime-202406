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
 * `/v1/shopping/availability/flight-availabilities` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.availability.flightAvailabilities;
 * ```
 *
 * @param {Client} client
 */
var FlightAvailabilities = /*#__PURE__*/function () {
  function FlightAvailabilities(client) {
    _classCallCheck(this, FlightAvailabilities);
    this.client = client;
  }

  /**
   * Get available seats in different fare classes
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * ```js
   * amadeus.shopping.availability.flightAvailabilities.post(body);
   * ```
   */
  return _createClass(FlightAvailabilities, [{
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.post('/v1/shopping/availability/flight-availabilities', params);
    }
  }]);
}();
var _default = exports["default"] = FlightAvailabilities;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRBdmFpbGFiaWxpdGllcyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicG9zdCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL2F2YWlsYWJpbGl0eS9mbGlnaHRfYXZhaWxhYmlsaXRpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmcvYXZhaWxhYmlsaXR5L2ZsaWdodC1hdmFpbGFiaWxpdGllc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLmF2YWlsYWJpbGl0eS5mbGlnaHRBdmFpbGFiaWxpdGllcztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgRmxpZ2h0QXZhaWxhYmlsaXRpZXMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXZhaWxhYmxlIHNlYXRzIGluIGRpZmZlcmVudCBmYXJlIGNsYXNzZXNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuc2hvcHBpbmcuYXZhaWxhYmlsaXR5LmZsaWdodEF2YWlsYWJpbGl0aWVzLnBvc3QoYm9keSk7XG4gICAqIGBgYFxuICAgKi9cbiAgcG9zdChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5wb3N0KCcvdjEvc2hvcHBpbmcvYXZhaWxhYmlsaXR5L2ZsaWdodC1hdmFpbGFiaWxpdGllcycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0QXZhaWxhYmlsaXRpZXM7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLG9CQUFvQjtFQUN4QixTQUFBQSxxQkFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsb0JBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFURSxPQUFBRSxZQUFBLENBQUFILG9CQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQVVBLFNBQUFDLElBQUlBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2QsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLGlEQUFpRCxFQUFFQyxNQUFNLENBQUM7SUFDcEY7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLG9CQUFvQjtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119