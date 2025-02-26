"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _analytics = _interopRequireDefault(require("./location/analytics"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/**
 * A namespaced client for the
 * `/v1/location` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.location;
 * ```
 *
 * @param {Client} client
 * @property {analytics} analytics
 */
var Location = /*#__PURE__*/_createClass(function Location(client) {
  _classCallCheck(this, Location);
  this.client = client;
  this.analytics = new _analytics["default"](client);
});
var _default = exports["default"] = Location;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYW5hbHl0aWNzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJMb2NhdGlvbiIsImNsaWVudCIsImFuYWx5dGljcyIsIkFuYWx5dGljcyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2xvY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmFseXRpY3MgICAgZnJvbSAnLi9sb2NhdGlvbi9hbmFseXRpY3MnO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9sb2NhdGlvbmAgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLmxvY2F0aW9uO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHByb3BlcnR5IHthbmFseXRpY3N9IGFuYWx5dGljc1xuICovXG5jbGFzcyBMb2NhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ICAgICAgICAgICAgID0gY2xpZW50O1xuICAgIHRoaXMuYW5hbHl0aWNzID0gbmV3IEFuYWx5dGljcyhjbGllbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLFVBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFnRCxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLGdCQUFBQSxDQUFBO0FBQUEsU0FBQUUsa0JBQUFGLENBQUEsRUFBQUcsQ0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsQ0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsQ0FBQSxHQUFBSCxDQUFBLENBQUFDLENBQUEsR0FBQUUsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsQ0FBQUMsVUFBQSxRQUFBRCxDQUFBLENBQUFFLFlBQUEsa0JBQUFGLENBQUEsS0FBQUEsQ0FBQSxDQUFBRyxRQUFBLFFBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLEVBQUFZLGNBQUEsQ0FBQU4sQ0FBQSxDQUFBTyxHQUFBLEdBQUFQLENBQUE7QUFBQSxTQUFBUSxhQUFBZCxDQUFBLEVBQUFHLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLElBQUFELGlCQUFBLENBQUFGLENBQUEsQ0FBQWUsU0FBQSxFQUFBWixDQUFBLEdBQUFDLENBQUEsSUFBQUYsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBSSxDQUFBLEdBQUFNLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLGlCQUFBUyxRQUFBLFNBQUFULENBQUE7QUFBQSxTQUFBWSxlQUFBUixDQUFBLFFBQUFZLENBQUEsR0FBQUMsWUFBQSxDQUFBYixDQUFBLGdDQUFBYyxPQUFBLENBQUFGLENBQUEsSUFBQUEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQUMsYUFBQWIsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBZSxPQUFBLENBQUFkLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFKLENBQUEsR0FBQUksQ0FBQSxDQUFBZSxNQUFBLENBQUFDLFdBQUEsa0JBQUFwQixDQUFBLFFBQUFnQixDQUFBLEdBQUFoQixDQUFBLENBQUFxQixJQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsZ0NBQUFlLE9BQUEsQ0FBQUYsQ0FBQSxVQUFBQSxDQUFBLFlBQUFNLFNBQUEseUVBQUFuQixDQUFBLEdBQUFvQixNQUFBLEdBQUFDLE1BQUEsRUFBQXBCLENBQUE7QUFBQSxTQUFBcUIsZ0JBQUFDLENBQUEsRUFBQUMsQ0FBQSxVQUFBRCxDQUFBLFlBQUFDLENBQUEsYUFBQUwsU0FBQTtBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkEsSUFjTU0sUUFBUSxnQkFBQWQsWUFBQSxDQUNaLFNBQUFjLFNBQVlDLE1BQU0sRUFBRTtFQUFBSixlQUFBLE9BQUFHLFFBQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQWVBLE1BQU07RUFDaEMsSUFBSSxDQUFDQyxTQUFTLEdBQUcsSUFBSUMscUJBQVMsQ0FBQ0YsTUFBTSxDQUFDO0FBQ3hDLENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWUwsUUFBUTtBQUFBTSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119