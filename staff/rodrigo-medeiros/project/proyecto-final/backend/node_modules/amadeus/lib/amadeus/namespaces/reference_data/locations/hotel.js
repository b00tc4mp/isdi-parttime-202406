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
 * `/v1/reference-data/locations/hotel` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.hotel;
 * ```
 *
 * @param {Client} client
 */
var Hotel = /*#__PURE__*/function () {
  function Hotel(client) {
    _classCallCheck(this, Hotel);
    this.client = client;
  }
  /**
   * Returns a list of hotels for a given area.
   *
   * @param {Object} params
   * @param {string} params.keyword Location query keyword Example: PARI
   * @param {string} params.subType Category of search - To enter several value, repeat the query parameter    * Use HOTEL_LEISURE to target aggregators or HOTEL_GDS to target directly the chains
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   *  Find relevant points of interest within an area in Barcelona
   * ```js
   * amadeus.referenceData.locations.hotel.get({
   *   keyword: 'PARI',
   *   subType: 'HOTEL_GDS'
   * })
    */
  return _createClass(Hotel, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/reference-data/locations/hotel', params);
    }
  }]);
}();
var _default = exports["default"] = Hotel;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIb3RlbCIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zL2hvdGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy9ob3RlbGAgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmhvdGVsO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBIb3RlbCB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBob3RlbHMgZm9yIGEgZ2l2ZW4gYXJlYS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmtleXdvcmQgTG9jYXRpb24gcXVlcnkga2V5d29yZCBFeGFtcGxlOiBQQVJJXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuc3ViVHlwZSBDYXRlZ29yeSBvZiBzZWFyY2ggLSBUbyBlbnRlciBzZXZlcmFsIHZhbHVlLCByZXBlYXQgdGhlIHF1ZXJ5IHBhcmFtZXRlciAgICAqIFVzZSBIT1RFTF9MRUlTVVJFIHRvIHRhcmdldCBhZ2dyZWdhdG9ycyBvciBIT1RFTF9HRFMgdG8gdGFyZ2V0IGRpcmVjdGx5IHRoZSBjaGFpbnNcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiAgRmluZCByZWxldmFudCBwb2ludHMgb2YgaW50ZXJlc3Qgd2l0aGluIGFuIGFyZWEgaW4gQmFyY2Vsb25hXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMuaG90ZWwuZ2V0KHtcbiAgICogICBrZXl3b3JkOiAnUEFSSScsXG4gICAqICAgc3ViVHlwZTogJ0hPVEVMX0dEUydcbiAgICogfSlcbiAgICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvcmVmZXJlbmNlLWRhdGEvbG9jYXRpb25zL2hvdGVsJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3RlbDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxLQUFLO0VBQ1QsU0FBQUEsTUFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsS0FBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0QjtFQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQWRFLE9BQUFFLFlBQUEsQ0FBQUgsS0FBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFlQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRUMsTUFBTSxDQUFDO0lBQ3RFO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixLQUFLO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=