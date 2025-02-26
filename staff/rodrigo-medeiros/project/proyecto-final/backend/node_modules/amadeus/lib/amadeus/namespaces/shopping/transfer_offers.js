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
 * `/v1/shopping/transfer-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.transferOffers;
 * ```
 *
 * @param {Client} client
 */
var TransferOffers = /*#__PURE__*/function () {
  function TransferOffers(client) {
    _classCallCheck(this, TransferOffers);
    this.client = client;
  }

  /**
   * To search the list of transfer offers.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To search the list of transfer offers
   *
   * ```js
   * amadeus.shopping.transferOffers.post(body)
    * ```
  */
  return _createClass(TransferOffers, [{
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.post('/v1/shopping/transfer-offers', params);
    }
  }]);
}();
var _default = exports["default"] = TransferOffers;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmFuc2Zlck9mZmVycyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicG9zdCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL3RyYW5zZmVyX29mZmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3Nob3BwaW5nL3RyYW5zZmVyLW9mZmVyc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNob3BwaW5nLnRyYW5zZmVyT2ZmZXJzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBUcmFuc2Zlck9mZmVycyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIHNlYXJjaCB0aGUgbGlzdCBvZiB0cmFuc2ZlciBvZmZlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBUbyBzZWFyY2ggdGhlIGxpc3Qgb2YgdHJhbnNmZXIgb2ZmZXJzXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuc2hvcHBpbmcudHJhbnNmZXJPZmZlcnMucG9zdChib2R5KVxuXG4gICAqIGBgYFxuICAqL1xuICBwb3N0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnBvc3QoJy92MS9zaG9wcGluZy90cmFuc2Zlci1vZmZlcnMnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZmVyT2ZmZXJzOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxjQUFjO0VBQ2xCLFNBQUFBLGVBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLGNBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBWEUsT0FBQUUsWUFBQSxDQUFBSCxjQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQWFBLFNBQUFDLElBQUlBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2QsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLDhCQUE4QixFQUFFQyxNQUFNLENBQUM7SUFDakU7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLGNBQWM7QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==