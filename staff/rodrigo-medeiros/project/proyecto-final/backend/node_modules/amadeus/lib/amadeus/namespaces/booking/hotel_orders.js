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
 * `/v2/booking/hotel-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.hotelOrders;
 * ```
 *
 * @param {Client} client
 */
var HotelOrders = /*#__PURE__*/function () {
  function HotelOrders(client) {
    _classCallCheck(this, HotelOrders);
    this.client = client;
  }

  /**
   * To book the offer retrieved from Hotel Search API.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the hotel offer with ID 'XXX' with guests, travel agents and payment info
   *
   * ```js
   * amadeus.booking.hotelOrders.post(
   * {
   * 'data': {
   *     'type': 'hotel-order',
   *     'guests': [],
   *     'travelAgent': {},
   *     'roomAssociations': [],
   *     'payment': {}
   *   }
   * })
   * ```
    */
  return _createClass(HotelOrders, [{
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.post('/v2/booking/hotel-orders', params);
    }
  }]);
}();
var _default = exports["default"] = HotelOrders;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIb3RlbE9yZGVycyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicG9zdCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2Jvb2tpbmcvaG90ZWxfb3JkZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL2Jvb2tpbmcvaG90ZWwtb3JkZXJzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuYm9va2luZy5ob3RlbE9yZGVycztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgSG90ZWxPcmRlcnMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBib29rIHRoZSBvZmZlciByZXRyaWV2ZWQgZnJvbSBIb3RlbCBTZWFyY2ggQVBJLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogVG8gYm9vayB0aGUgaG90ZWwgb2ZmZXIgd2l0aCBJRCAnWFhYJyB3aXRoIGd1ZXN0cywgdHJhdmVsIGFnZW50cyBhbmQgcGF5bWVudCBpbmZvXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuYm9va2luZy5ob3RlbE9yZGVycy5wb3N0KFxuICAgKiB7XG4gICAqICdkYXRhJzoge1xuICAgKiAgICAgJ3R5cGUnOiAnaG90ZWwtb3JkZXInLFxuICAgKiAgICAgJ2d1ZXN0cyc6IFtdLFxuICAgKiAgICAgJ3RyYXZlbEFnZW50Jzoge30sXG4gICAqICAgICAncm9vbUFzc29jaWF0aW9ucyc6IFtdLFxuICAgKiAgICAgJ3BheW1lbnQnOiB7fVxuICAgKiAgIH1cbiAgICogfSlcbiAgICogYGBgXG5cbiAgICovXG4gIHBvc3QocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdCgnL3YyL2Jvb2tpbmcvaG90ZWwtb3JkZXJzJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3RlbE9yZGVyczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsV0FBVztFQUNmLFNBQUFBLFlBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFdBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBcEJFLE9BQUFFLFlBQUEsQ0FBQUgsV0FBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFzQkEsU0FBQUMsSUFBSUEsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDZCxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxJQUFJLENBQUMsMEJBQTBCLEVBQUVDLE1BQU0sQ0FBQztJQUM3RDtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosV0FBVztBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119