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
 * `/v1/airport/direct-destinations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.airport.directDestinations;
 * ```
 *
 * @param {Client} client
 */
var DirectDestinations = /*#__PURE__*/function () {
  function DirectDestinations(client) {
    _classCallCheck(this, DirectDestinations);
    this.client = client;
  }

  /**
   * Get the percentage of on-time flight departures from a given airport
   *
   * @param {Object} params
   * @param {string} params.departureAirportCode airport IATA code, e.g. BOS for Boston
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * What destinations are served by this airport?
   *  ```js
   * amadeus.airport.directDestinations.get({
   *   departureAirportCode: 'JFK',
   * })
   * ```
   */
  return _createClass(DirectDestinations, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/airport/direct-destinations', params);
    }
  }]);
}();
var _default = exports["default"] = DirectDestinations;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEaXJlY3REZXN0aW5hdGlvbnMiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2FpcnBvcnQvZGlyZWN0LWRlc3RpbmF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9haXJwb3J0L2RpcmVjdC1kZXN0aW5hdGlvbnNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5haXJwb3J0LmRpcmVjdERlc3RpbmF0aW9ucztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgRGlyZWN0RGVzdGluYXRpb25zIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwZXJjZW50YWdlIG9mIG9uLXRpbWUgZmxpZ2h0IGRlcGFydHVyZXMgZnJvbSBhIGdpdmVuIGFpcnBvcnRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRlcGFydHVyZUFpcnBvcnRDb2RlIGFpcnBvcnQgSUFUQSBjb2RlLCBlLmcuIEJPUyBmb3IgQm9zdG9uXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogV2hhdCBkZXN0aW5hdGlvbnMgYXJlIHNlcnZlZCBieSB0aGlzIGFpcnBvcnQ/XG4gICAqICBgYGBqc1xuICAgKiBhbWFkZXVzLmFpcnBvcnQuZGlyZWN0RGVzdGluYXRpb25zLmdldCh7XG4gICAqICAgZGVwYXJ0dXJlQWlycG9ydENvZGU6ICdKRksnLFxuICAgKiB9KVxuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9haXJwb3J0L2RpcmVjdC1kZXN0aW5hdGlvbnMnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdERlc3RpbmF0aW9uczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsa0JBQWtCO0VBQ3RCLFNBQUFBLG1CQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixrQkFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBYkUsT0FBQUUsWUFBQSxDQUFBSCxrQkFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFjQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRUMsTUFBTSxDQUFDO0lBQ25FO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixrQkFBa0I7QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==