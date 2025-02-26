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
 * `/v1/reference-data/locations/hotels/by-hotels` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.hotels.byHotels;
 * ```
 *
 * @param {Client} client
 */
var byHotels = /*#__PURE__*/function () {
  function byHotels(client) {
    _classCallCheck(this, byHotels);
    this.client = client;
  }

  /**
  * Returns a list of hotels for a given area.
  *
  * @param {Object} params
  * @param {string} params.hotelIds Comma separated list of Amadeus hotel
  *   codes to request. Example: XKPARC12
  * @return {Promise.<Response,ResponseError>} a Promise
  *
  * Find relevant points of interest within an area in Barcelona
  * ```js
  * amadeus.referenceData.locations.hotels.byHotels.get({
  *   hotelIds: 'ACPAR245'
  * })
  * ```
  */
  return _createClass(byHotels, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/reference-data/locations/hotels/by-hotels', params);
    }
  }]);
}();
var _default = exports["default"] = byHotels;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJieUhvdGVscyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zL2hvdGVscy9ieS1ob3RlbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvcmVmZXJlbmNlLWRhdGEvbG9jYXRpb25zL2hvdGVscy9ieS1ob3RlbHNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5ob3RlbHMuYnlIb3RlbHM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIGJ5SG90ZWxzIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgKiBSZXR1cm5zIGEgbGlzdCBvZiBob3RlbHMgZm9yIGEgZ2l2ZW4gYXJlYS5cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmhvdGVsSWRzIENvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIEFtYWRldXMgaG90ZWxcbiAgKiAgIGNvZGVzIHRvIHJlcXVlc3QuIEV4YW1wbGU6IFhLUEFSQzEyXG4gICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAqXG4gICogRmluZCByZWxldmFudCBwb2ludHMgb2YgaW50ZXJlc3Qgd2l0aGluIGFuIGFyZWEgaW4gQmFyY2Vsb25hXG4gICogYGBganNcbiAgKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmhvdGVscy5ieUhvdGVscy5nZXQoe1xuICAqICAgaG90ZWxJZHM6ICdBQ1BBUjI0NSdcbiAgKiB9KVxuICAqIGBgYFxuICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvcmVmZXJlbmNlLWRhdGEvbG9jYXRpb25zL2hvdGVscy9ieS1ob3RlbHMnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ5SG90ZWxzOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxRQUFRO0VBQ1osU0FBQUEsU0FBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsUUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFkRSxPQUFBRSxZQUFBLENBQUFILFFBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBZUEsU0FBQUMsR0FBR0EsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMsK0NBQStDLEVBQUVDLE1BQU0sQ0FBQztJQUNqRjtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosUUFBUTtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119