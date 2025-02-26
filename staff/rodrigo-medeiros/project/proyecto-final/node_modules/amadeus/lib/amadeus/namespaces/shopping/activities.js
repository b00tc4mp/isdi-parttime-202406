"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _by_square = _interopRequireDefault(require("./activities/by_square"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A namespaced client for the
 * `/v1/shopping/activities` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.activities
 * ```
 *
 * @param {Client} client
 */
var Activities = /*#__PURE__*/function () {
  function Activities(client) {
    _classCallCheck(this, Activities);
    this.client = client;
    this.bySquare = new _by_square["default"](client);
  }

  /**
   * /shopping/activities
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.radius radius of the search in Kilometer - optional
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * What are the best tours and activities in Barcelona? (based a geo location and a radius)
   *
   * ```js
   * amadeus.shopping.activities.get({
   *   longitude: 2.160873,
   *   latitude: 41.397158
   * });
   * ```
   */
  return _createClass(Activities, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/shopping/activities', params);
    }
  }]);
}();
var _default = exports["default"] = Activities;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYnlfc3F1YXJlIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwidCIsImxlbmd0aCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJpIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiU3RyaW5nIiwiTnVtYmVyIiwiQWN0aXZpdGllcyIsImNsaWVudCIsImJ5U3F1YXJlIiwiQnlTcXVhcmUiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL2FjdGl2aXRpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ5U3F1YXJlIGZyb20gJy4vYWN0aXZpdGllcy9ieV9zcXVhcmUnO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9zaG9wcGluZy9hY3Rpdml0aWVzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2hvcHBpbmcuYWN0aXZpdGllc1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBBY3Rpdml0aWVzIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5ieVNxdWFyZSA9IG5ldyBCeVNxdWFyZShjbGllbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIC9zaG9wcGluZy9hY3Rpdml0aWVzXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy5sYXRpdHVkZSBsYXRpdHVkZSBsb2NhdGlvbiB0byBiZSBhdCB0aGUgY2VudGVyIG9mXG4gICAqICAgdGhlIHNlYXJjaCBjaXJjbGUgLSByZXF1aXJlZFxuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmxvbmdpdHVkZSBsb25naXR1ZGUgbG9jYXRpb24gdG8gYmUgYXQgdGhlIGNlbnRlciBvZlxuICAgKiAgIHRoZSBzZWFyY2ggY2lyY2xlIC0gcmVxdWlyZWRcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy5yYWRpdXMgcmFkaXVzIG9mIHRoZSBzZWFyY2ggaW4gS2lsb21ldGVyIC0gb3B0aW9uYWxcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBXaGF0IGFyZSB0aGUgYmVzdCB0b3VycyBhbmQgYWN0aXZpdGllcyBpbiBCYXJjZWxvbmE/IChiYXNlZCBhIGdlbyBsb2NhdGlvbiBhbmQgYSByYWRpdXMpXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuc2hvcHBpbmcuYWN0aXZpdGllcy5nZXQoe1xuICAgKiAgIGxvbmdpdHVkZTogMi4xNjA4NzMsXG4gICAqICAgbGF0aXR1ZGU6IDQxLjM5NzE1OFxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvc2hvcHBpbmcvYWN0aXZpdGllcycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdGllcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsVUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQThDLFNBQUFELHVCQUFBRSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxRQUFBQyxDQUFBLHNDQUFBRCxPQUFBLHdCQUFBRSxNQUFBLHVCQUFBQSxNQUFBLENBQUFDLFFBQUEsYUFBQUYsQ0FBQSxrQkFBQUEsQ0FBQSxnQkFBQUEsQ0FBQSxXQUFBQSxDQUFBLHlCQUFBQyxNQUFBLElBQUFELENBQUEsQ0FBQUcsV0FBQSxLQUFBRixNQUFBLElBQUFELENBQUEsS0FBQUMsTUFBQSxDQUFBRyxTQUFBLHFCQUFBSixDQUFBLEtBQUFELE9BQUEsQ0FBQUMsQ0FBQTtBQUFBLFNBQUFLLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFDLFNBQUE7QUFBQSxTQUFBQyxrQkFBQVosQ0FBQSxFQUFBYSxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBWCxDQUFBLEdBQUFVLENBQUEsQ0FBQUMsQ0FBQSxHQUFBWCxDQUFBLENBQUFhLFVBQUEsR0FBQWIsQ0FBQSxDQUFBYSxVQUFBLFFBQUFiLENBQUEsQ0FBQWMsWUFBQSxrQkFBQWQsQ0FBQSxLQUFBQSxDQUFBLENBQUFlLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFwQixDQUFBLEVBQUFxQixjQUFBLENBQUFsQixDQUFBLENBQUFtQixHQUFBLEdBQUFuQixDQUFBO0FBQUEsU0FBQW9CLGFBQUF2QixDQUFBLEVBQUFhLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLElBQUFELGlCQUFBLENBQUFaLENBQUEsQ0FBQU8sU0FBQSxFQUFBTSxDQUFBLEdBQUFDLENBQUEsSUFBQUYsaUJBQUEsQ0FBQVosQ0FBQSxFQUFBYyxDQUFBLEdBQUFLLE1BQUEsQ0FBQUMsY0FBQSxDQUFBcEIsQ0FBQSxpQkFBQWtCLFFBQUEsU0FBQWxCLENBQUE7QUFBQSxTQUFBcUIsZUFBQVAsQ0FBQSxRQUFBVSxDQUFBLEdBQUFDLFlBQUEsQ0FBQVgsQ0FBQSxnQ0FBQVosT0FBQSxDQUFBc0IsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBQyxhQUFBWCxDQUFBLEVBQUFELENBQUEsb0JBQUFYLE9BQUEsQ0FBQVksQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQWQsQ0FBQSxHQUFBYyxDQUFBLENBQUFWLE1BQUEsQ0FBQXNCLFdBQUEsa0JBQUExQixDQUFBLFFBQUF3QixDQUFBLEdBQUF4QixDQUFBLENBQUEyQixJQUFBLENBQUFiLENBQUEsRUFBQUQsQ0FBQSxnQ0FBQVgsT0FBQSxDQUFBc0IsQ0FBQSxVQUFBQSxDQUFBLFlBQUFiLFNBQUEseUVBQUFFLENBQUEsR0FBQWUsTUFBQSxHQUFBQyxNQUFBLEVBQUFmLENBQUE7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNZ0IsVUFBVTtFQUNkLFNBQUFBLFdBQVlDLE1BQU0sRUFBRTtJQUFBdkIsZUFBQSxPQUFBc0IsVUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJQyxxQkFBUSxDQUFDRixNQUFNLENBQUM7RUFDdEM7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQW5CRSxPQUFBUixZQUFBLENBQUFPLFVBQUE7SUFBQVIsR0FBQTtJQUFBWSxLQUFBLEVBb0JBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBdEIsTUFBQSxRQUFBc0IsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ04sTUFBTSxDQUFDSSxHQUFHLENBQUMseUJBQXlCLEVBQUVDLE1BQU0sQ0FBQztJQUMzRDtFQUFDO0FBQUE7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWVYsVUFBVTtBQUFBVyxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119