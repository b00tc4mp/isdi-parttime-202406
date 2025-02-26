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
 * `/v1/ordering/transfer-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrders;
 * ```
 *
 * @param {Client} client
 */
var TransferOrders = /*#__PURE__*/function () {
  function TransferOrders(client) {
    _classCallCheck(this, TransferOrders);
    this.client = client;
  }

  /**
   * To book the selected transfer-offer and create a transfer-order
   *
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the transfer-offer(s) suggested by transferOffers and create a transfer-order
   *
   * ```js
   * amadeus.ordering.transferOrders.post(body, '2094123123');
   * ```
   */
  return _createClass(TransferOrders, [{
    key: "post",
    value: function post(body, offerId) {
      return this.client.post("/v1/ordering/transfer-orders?offerId=".concat(offerId), body);
    }
  }]);
}();
var _default = exports["default"] = TransferOrders;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmFuc2Zlck9yZGVycyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicG9zdCIsImJvZHkiLCJvZmZlcklkIiwiY29uY2F0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvb3JkZXJpbmcvdHJhbnNmZXJfb3JkZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL29yZGVyaW5nL3RyYW5zZmVyLW9yZGVyc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLm9yZGVyaW5nLnRyYW5zZmVyT3JkZXJzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBUcmFuc2Zlck9yZGVycyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuXG4gIH1cblxuICAvKipcbiAgICogVG8gYm9vayB0aGUgc2VsZWN0ZWQgdHJhbnNmZXItb2ZmZXIgYW5kIGNyZWF0ZSBhIHRyYW5zZmVyLW9yZGVyXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogVG8gYm9vayB0aGUgdHJhbnNmZXItb2ZmZXIocykgc3VnZ2VzdGVkIGJ5IHRyYW5zZmVyT2ZmZXJzIGFuZCBjcmVhdGUgYSB0cmFuc2Zlci1vcmRlclxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLm9yZGVyaW5nLnRyYW5zZmVyT3JkZXJzLnBvc3QoYm9keSwgJzIwOTQxMjMxMjMnKTtcbiAgICogYGBgXG4gICAqL1xuICBwb3N0KGJvZHksIG9mZmVySWQpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdChgL3YxL29yZGVyaW5nL3RyYW5zZmVyLW9yZGVycz9vZmZlcklkPSR7b2ZmZXJJZH1gLCBib2R5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zlck9yZGVyczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsY0FBYztFQUNsQixTQUFBQSxlQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixjQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBRXRCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFWRSxPQUFBRSxZQUFBLENBQUFILGNBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBV0EsU0FBQUMsSUFBSUEsQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLEVBQUU7TUFDbEIsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssSUFBSSx5Q0FBQUcsTUFBQSxDQUF5Q0QsT0FBTyxHQUFJRCxJQUFJLENBQUM7SUFDbEY7RUFBQztBQUFBO0FBQUEsSUFBQUcsUUFBQSxHQUFBQyxPQUFBLGNBR1lYLGNBQWM7QUFBQVksTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==