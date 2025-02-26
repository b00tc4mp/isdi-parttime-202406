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
 * `/v1/reference-data/recommended-locations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.recommendedLocations;
 * ```
 *
 * @param {Client} client
 */
var RecommendedLocations = /*#__PURE__*/function () {
  function RecommendedLocations(client) {
    _classCallCheck(this, RecommendedLocations);
    this.client = client;
  }

  /**
   * Returns the recommended locations (destinations).
   *
   * @param {Object} params
   * @param {string} params.cityCodes Code of the city following IATA standard.
   * @param {string} params.travelerCountryCode Origin country of the traveler following IATA standard.
   * @param {string} params.destinationCountryCodes Country codes follow IATA standard.
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get recommended destinations from a given origin
   *
   * ```js
   * amadeus.referenceData.recommendedDestinations.get({
   *   cityCodes: 'PAR',
   *   travelerCountryCode: 'FR'
   * });
   * ```
   */
  return _createClass(RecommendedLocations, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/reference-data/recommended-locations', params);
    }
  }]);
}();
var _default = exports["default"] = RecommendedLocations;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWNvbW1lbmRlZExvY2F0aW9ucyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvcmVjb21tZW5kZWRfbG9jYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3JlZmVyZW5jZS1kYXRhL3JlY29tbWVuZGVkLWxvY2F0aW9uc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEucmVjb21tZW5kZWRMb2NhdGlvbnM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIFJlY29tbWVuZGVkTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVjb21tZW5kZWQgbG9jYXRpb25zIChkZXN0aW5hdGlvbnMpLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuY2l0eUNvZGVzIENvZGUgb2YgdGhlIGNpdHkgZm9sbG93aW5nIElBVEEgc3RhbmRhcmQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMudHJhdmVsZXJDb3VudHJ5Q29kZSBPcmlnaW4gY291bnRyeSBvZiB0aGUgdHJhdmVsZXIgZm9sbG93aW5nIElBVEEgc3RhbmRhcmQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVzdGluYXRpb25Db3VudHJ5Q29kZXMgQ291bnRyeSBjb2RlcyBmb2xsb3cgSUFUQSBzdGFuZGFyZC5cbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBHZXQgcmVjb21tZW5kZWQgZGVzdGluYXRpb25zIGZyb20gYSBnaXZlbiBvcmlnaW5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLnJlY29tbWVuZGVkRGVzdGluYXRpb25zLmdldCh7XG4gICAqICAgY2l0eUNvZGVzOiAnUEFSJyxcbiAgICogICB0cmF2ZWxlckNvdW50cnlDb2RlOiAnRlInXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9yZWZlcmVuY2UtZGF0YS9yZWNvbW1lbmRlZC1sb2NhdGlvbnMnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29tbWVuZGVkTG9jYXRpb25zO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLG9CQUFvQjtFQUN4QixTQUFBQSxxQkFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsb0JBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBakJFLE9BQUFFLFlBQUEsQ0FBQUgsb0JBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBa0JBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLDBDQUEwQyxFQUFFQyxNQUFNLENBQUM7SUFDNUU7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLG9CQUFvQjtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119