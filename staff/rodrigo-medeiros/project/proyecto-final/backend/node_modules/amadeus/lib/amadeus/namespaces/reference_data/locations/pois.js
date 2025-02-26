"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _bySquare = _interopRequireDefault(require("./points_of_interest/by-square"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A namespaced client for the
 * `/v1/reference-data/locations/pois` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.pointsOfInterest;
 * ```
 *
 * @param {Client} client
 */
var PointsOfInterest = /*#__PURE__*/function () {
  function PointsOfInterest(client) {
    _classCallCheck(this, PointsOfInterest);
    this.client = client;
    this.bySquare = new _bySquare["default"](client);
  }

  /**
   * Returns a list of relevant points of interest near to a given point
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.radius radius of the search in Kilometer - optional
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find relevant points of interest close to Barcelona
   *
   * ```js
   * amadeus.referenceData.locations.pointsOfInterest.get({
   *   longitude: 2.160873,
   *   latitude: 41.397158
   * });
   * ```
   */
  return _createClass(PointsOfInterest, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/reference-data/locations/pois', params);
    }
  }]);
}();
var _default = exports["default"] = PointsOfInterest;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYnlTcXVhcmUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsImkiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJQb2ludHNPZkludGVyZXN0IiwiY2xpZW50IiwiYnlTcXVhcmUiLCJCeVNxdWFyZSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zL3BvaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ5U3F1YXJlIGZyb20gJy4vcG9pbnRzX29mX2ludGVyZXN0L2J5LXNxdWFyZSc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy9wb2lzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMucG9pbnRzT2ZJbnRlcmVzdDtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgUG9pbnRzT2ZJbnRlcmVzdCB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuYnlTcXVhcmUgPSBuZXcgQnlTcXVhcmUoY2xpZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiByZWxldmFudCBwb2ludHMgb2YgaW50ZXJlc3QgbmVhciB0byBhIGdpdmVuIHBvaW50XG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy5sYXRpdHVkZSBsYXRpdHVkZSBsb2NhdGlvbiB0byBiZSBhdCB0aGUgY2VudGVyIG9mXG4gICAqICAgdGhlIHNlYXJjaCBjaXJjbGUgLSByZXF1aXJlZFxuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmxvbmdpdHVkZSBsb25naXR1ZGUgbG9jYXRpb24gdG8gYmUgYXQgdGhlIGNlbnRlciBvZlxuICAgKiAgIHRoZSBzZWFyY2ggY2lyY2xlIC0gcmVxdWlyZWRcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy5yYWRpdXMgcmFkaXVzIG9mIHRoZSBzZWFyY2ggaW4gS2lsb21ldGVyIC0gb3B0aW9uYWxcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBGaW5kIHJlbGV2YW50IHBvaW50cyBvZiBpbnRlcmVzdCBjbG9zZSB0byBCYXJjZWxvbmFcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5wb2ludHNPZkludGVyZXN0LmdldCh7XG4gICAqICAgbG9uZ2l0dWRlOiAyLjE2MDg3MyxcbiAgICogICBsYXRpdHVkZTogNDEuMzk3MTU4XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9yZWZlcmVuY2UtZGF0YS9sb2NhdGlvbnMvcG9pcycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRzT2ZJbnRlcmVzdDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsU0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQXNELFNBQUFELHVCQUFBRSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxRQUFBQyxDQUFBLHNDQUFBRCxPQUFBLHdCQUFBRSxNQUFBLHVCQUFBQSxNQUFBLENBQUFDLFFBQUEsYUFBQUYsQ0FBQSxrQkFBQUEsQ0FBQSxnQkFBQUEsQ0FBQSxXQUFBQSxDQUFBLHlCQUFBQyxNQUFBLElBQUFELENBQUEsQ0FBQUcsV0FBQSxLQUFBRixNQUFBLElBQUFELENBQUEsS0FBQUMsTUFBQSxDQUFBRyxTQUFBLHFCQUFBSixDQUFBLEtBQUFELE9BQUEsQ0FBQUMsQ0FBQTtBQUFBLFNBQUFLLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFDLFNBQUE7QUFBQSxTQUFBQyxrQkFBQVosQ0FBQSxFQUFBYSxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBWCxDQUFBLEdBQUFVLENBQUEsQ0FBQUMsQ0FBQSxHQUFBWCxDQUFBLENBQUFhLFVBQUEsR0FBQWIsQ0FBQSxDQUFBYSxVQUFBLFFBQUFiLENBQUEsQ0FBQWMsWUFBQSxrQkFBQWQsQ0FBQSxLQUFBQSxDQUFBLENBQUFlLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFwQixDQUFBLEVBQUFxQixjQUFBLENBQUFsQixDQUFBLENBQUFtQixHQUFBLEdBQUFuQixDQUFBO0FBQUEsU0FBQW9CLGFBQUF2QixDQUFBLEVBQUFhLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLElBQUFELGlCQUFBLENBQUFaLENBQUEsQ0FBQU8sU0FBQSxFQUFBTSxDQUFBLEdBQUFDLENBQUEsSUFBQUYsaUJBQUEsQ0FBQVosQ0FBQSxFQUFBYyxDQUFBLEdBQUFLLE1BQUEsQ0FBQUMsY0FBQSxDQUFBcEIsQ0FBQSxpQkFBQWtCLFFBQUEsU0FBQWxCLENBQUE7QUFBQSxTQUFBcUIsZUFBQVAsQ0FBQSxRQUFBVSxDQUFBLEdBQUFDLFlBQUEsQ0FBQVgsQ0FBQSxnQ0FBQVosT0FBQSxDQUFBc0IsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBQyxhQUFBWCxDQUFBLEVBQUFELENBQUEsb0JBQUFYLE9BQUEsQ0FBQVksQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQWQsQ0FBQSxHQUFBYyxDQUFBLENBQUFWLE1BQUEsQ0FBQXNCLFdBQUEsa0JBQUExQixDQUFBLFFBQUF3QixDQUFBLEdBQUF4QixDQUFBLENBQUEyQixJQUFBLENBQUFiLENBQUEsRUFBQUQsQ0FBQSxnQ0FBQVgsT0FBQSxDQUFBc0IsQ0FBQSxVQUFBQSxDQUFBLFlBQUFiLFNBQUEseUVBQUFFLENBQUEsR0FBQWUsTUFBQSxHQUFBQyxNQUFBLEVBQUFmLENBQUE7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNZ0IsZ0JBQWdCO0VBQ3BCLFNBQUFBLGlCQUFZQyxNQUFNLEVBQUU7SUFBQXZCLGVBQUEsT0FBQXNCLGdCQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUlDLG9CQUFRLENBQUNGLE1BQU0sQ0FBQztFQUN0Qzs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBbkJFLE9BQUFSLFlBQUEsQ0FBQU8sZ0JBQUE7SUFBQVIsR0FBQTtJQUFBWSxLQUFBLEVBb0JBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBdEIsTUFBQSxRQUFBc0IsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ04sTUFBTSxDQUFDSSxHQUFHLENBQUMsbUNBQW1DLEVBQUVDLE1BQU0sQ0FBQztJQUNyRTtFQUFDO0FBQUE7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWVYsZ0JBQWdCO0FBQUFXLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=