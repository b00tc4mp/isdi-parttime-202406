"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _airports = _interopRequireDefault(require("./locations/airports"));
var _cities = _interopRequireDefault(require("./locations/cities"));
var _hotel = _interopRequireDefault(require("./locations/hotel"));
var _hotels = _interopRequireDefault(require("./locations/hotels"));
var _poi = _interopRequireDefault(require("./locations/poi"));
var _pois = _interopRequireDefault(require("./locations/pois"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A namespaced client for the
 * `/v2/reference-data/locations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations;
 * ```
 *
 * @param {Client} client
 * @property {Airports} airports
 */
var Locations = /*#__PURE__*/function () {
  function Locations(client) {
    _classCallCheck(this, Locations);
    this.client = client;
    this.airports = new _airports["default"](client);
    this.cities = new _cities["default"](client);
    this.hotel = new _hotel["default"](client);
    this.hotels = new _hotels["default"](client);
    this.pointsOfInterest = new _pois["default"](client);
  }

  /**
   * Returns a list of airports and cities matching a given keyword.
   *
   * @param {Object} params
   * @param {string} params.keyword keyword that should represent the start of
   *   a word in a city or airport name or code
   * @param {string} params.subType the type of location to search for
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find any location starting with 'lon'
   *
   * ```js
   * amadeus.referenceData.locations.get({
   *   keyword: 'lon',
   *   subType: Amadeus.location.any
   * });
   * ```
   */
  return _createClass(Locations, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/reference-data/locations', params);
    }
  }, {
    key: "pointOfInterest",
    value: function pointOfInterest(poiId) {
      return new _poi["default"](this.client, poiId);
    }
  }]);
}();
var _default = exports["default"] = Locations;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYWlycG9ydHMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9jaXRpZXMiLCJfaG90ZWwiLCJfaG90ZWxzIiwiX3BvaSIsIl9wb2lzIiwiZSIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJhIiwibiIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiaSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlN0cmluZyIsIk51bWJlciIsIkxvY2F0aW9ucyIsImNsaWVudCIsImFpcnBvcnRzIiwiQWlycG9ydHMiLCJjaXRpZXMiLCJDaXRpZXMiLCJob3RlbCIsIkhvdGVsIiwiaG90ZWxzIiwiSG90ZWxzIiwicG9pbnRzT2ZJbnRlcmVzdCIsIlBvaW50c09mSW50ZXJlc3QiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInBvaW50T2ZJbnRlcmVzdCIsInBvaUlkIiwiUG9pbnRPZkludGVyZXN0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBaXJwb3J0cyBmcm9tICcuL2xvY2F0aW9ucy9haXJwb3J0cyc7XG5pbXBvcnQgQ2l0aWVzIGZyb20gJy4vbG9jYXRpb25zL2NpdGllcyc7XG5pbXBvcnQgSG90ZWwgZnJvbSAnLi9sb2NhdGlvbnMvaG90ZWwnO1xuaW1wb3J0IEhvdGVscyBmcm9tICcuL2xvY2F0aW9ucy9ob3RlbHMnO1xuaW1wb3J0IFBvaW50T2ZJbnRlcmVzdCBmcm9tICcuL2xvY2F0aW9ucy9wb2knO1xuaW1wb3J0IFBvaW50c09mSW50ZXJlc3QgZnJvbSAnLi9sb2NhdGlvbnMvcG9pcyc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9uc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHByb3BlcnR5IHtBaXJwb3J0c30gYWlycG9ydHNcbiAqL1xuY2xhc3MgTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5haXJwb3J0cyA9IG5ldyBBaXJwb3J0cyhjbGllbnQpO1xuICAgIHRoaXMuY2l0aWVzID0gbmV3IENpdGllcyhjbGllbnQpO1xuICAgIHRoaXMuaG90ZWwgPSBuZXcgSG90ZWwoY2xpZW50KTtcbiAgICB0aGlzLmhvdGVscyA9IG5ldyBIb3RlbHMoY2xpZW50KTtcbiAgICB0aGlzLnBvaW50c09mSW50ZXJlc3QgPSBuZXcgUG9pbnRzT2ZJbnRlcmVzdChjbGllbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIGFpcnBvcnRzIGFuZCBjaXRpZXMgbWF0Y2hpbmcgYSBnaXZlbiBrZXl3b3JkLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMua2V5d29yZCBrZXl3b3JkIHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgc3RhcnQgb2ZcbiAgICogICBhIHdvcmQgaW4gYSBjaXR5IG9yIGFpcnBvcnQgbmFtZSBvciBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuc3ViVHlwZSB0aGUgdHlwZSBvZiBsb2NhdGlvbiB0byBzZWFyY2ggZm9yXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogRmluZCBhbnkgbG9jYXRpb24gc3RhcnRpbmcgd2l0aCAnbG9uJ1xuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmdldCh7XG4gICAqICAga2V5d29yZDogJ2xvbicsXG4gICAqICAgc3ViVHlwZTogQW1hZGV1cy5sb2NhdGlvbi5hbnlcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucycsIHBhcmFtcyk7XG4gIH1cblxuICBwb2ludE9mSW50ZXJlc3QocG9pSWQpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50T2ZJbnRlcmVzdCh0aGlzLmNsaWVudCwgcG9pSWQpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25zO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxTQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxPQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxNQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRyxPQUFBLEdBQUFKLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSSxJQUFBLEdBQUFMLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSyxLQUFBLEdBQUFOLHNCQUFBLENBQUFDLE9BQUE7QUFBZ0QsU0FBQUQs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