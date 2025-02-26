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
 * `/v2/reference-data/locations/:location_id` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations('ALHR');
 * ```
 *
 * @param {Client} client
 * @property {number} locationId
 */
var Location = /*#__PURE__*/function () {
  function Location(client, locationId) {
    _classCallCheck(this, Location);
    this.client = client;
    this.locationId = locationId;
  }

  /**
   * Returns details for a specific airport
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find details for location with ID 'ALHR'
   *
   * ```js
   * amadeus.referenceData.location('ALHR').get();
   * ```
   */
  return _createClass(Location, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get("/v1/reference-data/locations/".concat(this.locationId), params);
    }
  }]);
}();
var _default = exports["default"] = Location;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJMb2NhdGlvbiIsImNsaWVudCIsImxvY2F0aW9uSWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbmNhdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3JlZmVyZW5jZV9kYXRhL2xvY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy86bG9jYXRpb25faWRgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucygnQUxIUicpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxvY2F0aW9uSWRcbiAqL1xuY2xhc3MgTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihjbGllbnQsIGxvY2F0aW9uSWQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLmxvY2F0aW9uSWQgPSBsb2NhdGlvbklkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZGV0YWlscyBmb3IgYSBzcGVjaWZpYyBhaXJwb3J0XG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBGaW5kIGRldGFpbHMgZm9yIGxvY2F0aW9uIHdpdGggSUQgJ0FMSFInXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbignQUxIUicpLmdldCgpO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoXG4gICAgICBgL3YxL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy8ke3RoaXMubG9jYXRpb25JZH1gLCBwYXJhbXNcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkEsSUFjTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLE1BQU0sRUFBRUMsVUFBVSxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsUUFBQTtJQUM5QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVTtFQUM5Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFYRSxPQUFBRSxZQUFBLENBQUFKLFFBQUE7SUFBQUssR0FBQTtJQUFBQyxLQUFBLEVBWUEsU0FBQUMsR0FBR0EsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1IsTUFBTSxDQUFDTSxHQUFHLGlDQUFBSyxNQUFBLENBQ1ksSUFBSSxDQUFDVixVQUFVLEdBQUlNLE1BQ3JELENBQUM7SUFDSDtFQUFDO0FBQUE7QUFBQSxJQUFBSyxRQUFBLEdBQUFDLE9BQUEsY0FHWWQsUUFBUTtBQUFBZSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119