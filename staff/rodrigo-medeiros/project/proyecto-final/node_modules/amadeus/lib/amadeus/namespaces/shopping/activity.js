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
 * `/v1/shopping/activities/{activityId}` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.activity
 * ```
 *
 * @param {Client} client
 */
var Activity = /*#__PURE__*/function () {
  function Activity(client, activityId) {
    _classCallCheck(this, Activity);
    this.client = client;
    this.activityId = activityId;
  }

  /**
   * Retieve information of an activity by its Id.
   *
   * What is the activity information with Id 3216547684?
   * ```js
   * amadeus.shopping.activity('3216547684').get();
   * ```
   */
  return _createClass(Activity, [{
    key: "get",
    value: function get() {
      return this.client.get("/v1/shopping/activities/".concat(this.activityId));
    }
  }]);
}();
var _default = exports["default"] = Activity;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBY3Rpdml0eSIsImNsaWVudCIsImFjdGl2aXR5SWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsImNvbmNhdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL2FjdGl2aXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3Nob3BwaW5nL2FjdGl2aXRpZXMve2FjdGl2aXR5SWR9YCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2hvcHBpbmcuYWN0aXZpdHlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgQWN0aXZpdHkge1xuICBjb25zdHJ1Y3RvcihjbGllbnQsIGFjdGl2aXR5SWQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLmFjdGl2aXR5SWQgPSBhY3Rpdml0eUlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldGlldmUgaW5mb3JtYXRpb24gb2YgYW4gYWN0aXZpdHkgYnkgaXRzIElkLlxuICAgKlxuICAgKiBXaGF0IGlzIHRoZSBhY3Rpdml0eSBpbmZvcm1hdGlvbiB3aXRoIElkIDMyMTY1NDc2ODQ/XG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuc2hvcHBpbmcuYWN0aXZpdHkoJzMyMTY1NDc2ODQnKS5nZXQoKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldChgL3YxL3Nob3BwaW5nL2FjdGl2aXRpZXMvJHt0aGlzLmFjdGl2aXR5SWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLE1BQU0sRUFBRUMsVUFBVSxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsUUFBQTtJQUM5QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVTtFQUM5Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEUsT0FBQUUsWUFBQSxDQUFBSixRQUFBO0lBQUFLLEdBQUE7SUFBQUMsS0FBQSxFQVFBLFNBQUFDLEdBQUdBLENBQUEsRUFBRztNQUNKLE9BQU8sSUFBSSxDQUFDTixNQUFNLENBQUNNLEdBQUcsNEJBQUFDLE1BQUEsQ0FBNEIsSUFBSSxDQUFDTixVQUFVLENBQUUsQ0FBQztJQUN0RTtFQUFDO0FBQUE7QUFBQSxJQUFBTyxRQUFBLEdBQUFDLE9BQUEsY0FHWVYsUUFBUTtBQUFBVyxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119