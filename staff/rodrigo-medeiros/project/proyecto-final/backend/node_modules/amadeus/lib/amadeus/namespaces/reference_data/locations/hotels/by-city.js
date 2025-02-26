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
 * `/v1/reference-data/locations/hotels/by-city` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.hotels.byCity;
 * ```
 *
 * @param {Client} client
 */
var byCity = /*#__PURE__*/function () {
  function byCity(client) {
    _classCallCheck(this, byCity);
    this.client = client;
  }

  /**
   * Returns a list of hotels for a given area.
   *
   * @param {Object} params
   * @param {string} params.cityCode City IATA code
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find list of hotels in Barcelona
   *
   * ```js
   * amadeus.referenceData.locations.hotels.byCity.get({
   *   cityCode: 'BCN'
   * });
   * ```
   */
  return _createClass(byCity, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/reference-data/locations/hotels/by-city', params);
    }
  }]);
}();
var _default = exports["default"] = byCity;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJieUNpdHkiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3JlZmVyZW5jZV9kYXRhL2xvY2F0aW9ucy9ob3RlbHMvYnktY2l0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9yZWZlcmVuY2UtZGF0YS9sb2NhdGlvbnMvaG90ZWxzL2J5LWNpdHlgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5ob3RlbHMuYnlDaXR5O1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBieUNpdHkge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBob3RlbHMgZm9yIGEgZ2l2ZW4gYXJlYS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNpdHlDb2RlIENpdHkgSUFUQSBjb2RlXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogRmluZCBsaXN0IG9mIGhvdGVscyBpbiBCYXJjZWxvbmFcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5ob3RlbHMuYnlDaXR5LmdldCh7XG4gICAqICAgY2l0eUNvZGU6ICdCQ04nXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9yZWZlcmVuY2UtZGF0YS9sb2NhdGlvbnMvaG90ZWxzL2J5LWNpdHknLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ5Q2l0eTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsTUFBTTtFQUNWLFNBQUFBLE9BQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLE1BQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBZEUsT0FBQUUsWUFBQSxDQUFBSCxNQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQWVBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLDZDQUE2QyxFQUFFQyxNQUFNLENBQUM7SUFDL0U7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLE1BQU07QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==