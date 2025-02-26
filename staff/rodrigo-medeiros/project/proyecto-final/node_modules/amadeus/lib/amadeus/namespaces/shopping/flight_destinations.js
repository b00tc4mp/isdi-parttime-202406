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
 * `/v1/shopping/flight-destinations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightDestinations;
 * ```
 *
 * @param {Client} client
 */
var FlightDestinations = /*#__PURE__*/function () {
  function FlightDestinations(client) {
    _classCallCheck(this, FlightDestinations);
    this.client = client;
  }

  /**
   * Find the cheapest destinations where you can fly to.
   *
   * @param {Object} params
   * @param {string} params.origin City/Airport IATA code from which the flight
   *   will depart. BOS, for example.
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the cheapest destination from Madrid
   *
   * ```js
   * amadeus.shopping.flightDestinations.get({
   *   origin: 'MAD'
   * });
   * ```
   */
  return _createClass(FlightDestinations, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/shopping/flight-destinations', params);
    }
  }]);
}();
var _default = exports["default"] = FlightDestinations;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHREZXN0aW5hdGlvbnMiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL2ZsaWdodF9kZXN0aW5hdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmcvZmxpZ2h0LWRlc3RpbmF0aW9uc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodERlc3RpbmF0aW9ucztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgRmxpZ2h0RGVzdGluYXRpb25zIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgY2hlYXBlc3QgZGVzdGluYXRpb25zIHdoZXJlIHlvdSBjYW4gZmx5IHRvLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMub3JpZ2luIENpdHkvQWlycG9ydCBJQVRBIGNvZGUgZnJvbSB3aGljaCB0aGUgZmxpZ2h0XG4gICAqICAgd2lsbCBkZXBhcnQuIEJPUywgZm9yIGV4YW1wbGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogRmluZCB0aGUgY2hlYXBlc3QgZGVzdGluYXRpb24gZnJvbSBNYWRyaWRcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zaG9wcGluZy5mbGlnaHREZXN0aW5hdGlvbnMuZ2V0KHtcbiAgICogICBvcmlnaW46ICdNQUQnXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9zaG9wcGluZy9mbGlnaHQtZGVzdGluYXRpb25zJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGlnaHREZXN0aW5hdGlvbnM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsa0JBQWtCO0VBQ3RCLFNBQUFBLG1CQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixrQkFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQWZFLE9BQUFFLFlBQUEsQ0FBQUgsa0JBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBZ0JBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLGtDQUFrQyxFQUFFQyxNQUFNLENBQUM7SUFDcEU7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLGtCQUFrQjtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119