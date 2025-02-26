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
 * `/v2/reference-data/locations/airports` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.airports;
 * ```
 *
 * @param {Client} client
 */
var Airports = /*#__PURE__*/function () {
  function Airports(client) {
    _classCallCheck(this, Airports);
    this.client = client;
  }

  /**
   * Returns a list of relevant airports near to a given point.
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the nearest airport to the 49.0000,2.55 lat/long
   *
   * ```js
   * amadeus.referenceData.locations.airports.get({
   *   longitude: 49.0000,
   *   latitude: 2.55
   * });
   * ```
   */
  return _createClass(Airports, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/reference-data/locations/airports', params);
    }
  }]);
}();
var _default = exports["default"] = Airports;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBaXJwb3J0cyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zL2FpcnBvcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy9haXJwb3J0c2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmFpcnBvcnRzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBBaXJwb3J0cyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHJlbGV2YW50IGFpcnBvcnRzIG5lYXIgdG8gYSBnaXZlbiBwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmxhdGl0dWRlIGxhdGl0dWRlIGxvY2F0aW9uIHRvIGJlIGF0IHRoZSBjZW50ZXIgb2ZcbiAgICogICB0aGUgc2VhcmNoIGNpcmNsZSAtIHJlcXVpcmVkXG4gICAqIEBwYXJhbSB7RG91YmxlfSBwYXJhbXMubG9uZ2l0dWRlIGxvbmdpdHVkZSBsb2NhdGlvbiB0byBiZSBhdCB0aGUgY2VudGVyIG9mXG4gICAqICAgdGhlIHNlYXJjaCBjaXJjbGUgLSByZXF1aXJlZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIEZpbmQgdGhlIG5lYXJlc3QgYWlycG9ydCB0byB0aGUgNDkuMDAwMCwyLjU1IGxhdC9sb25nXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMuYWlycG9ydHMuZ2V0KHtcbiAgICogICBsb25naXR1ZGU6IDQ5LjAwMDAsXG4gICAqICAgbGF0aXR1ZGU6IDIuNTVcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy9haXJwb3J0cycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWlycG9ydHM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFFBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFsQkUsT0FBQUUsWUFBQSxDQUFBSCxRQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQW1CQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRUMsTUFBTSxDQUFDO0lBQ3pFO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixRQUFRO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=