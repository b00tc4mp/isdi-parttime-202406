"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _analytics = _interopRequireDefault(require("./travel/analytics"));
var _predictions = _interopRequireDefault(require("./travel/predictions"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/**
 * A namespaced client for the
 * `/v1/travel` & `/v2/travel` & `/v3/travel` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel;
 * ```
 *
 * @param {Client} client
 * @property {Analytics} analytics
 * @property {Predictions} predictions
 * @protected
 */
var Travel = /*#__PURE__*/_createClass(function Travel(client) {
  _classCallCheck(this, Travel);
  this.client = client;
  this.analytics = new _analytics["default"](client);
  this.predictions = new _predictions["default"](client);
});
var _default = exports["default"] = Travel;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYW5hbHl0aWNzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcHJlZGljdGlvbnMiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUcmF2ZWwiLCJjbGllbnQiLCJhbmFseXRpY3MiLCJBbmFseXRpY3MiLCJwcmVkaWN0aW9ucyIsIlByZWRpY3Rpb25zIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmFseXRpY3MgZnJvbSAnLi90cmF2ZWwvYW5hbHl0aWNzJztcbmltcG9ydCBQcmVkaWN0aW9ucyBmcm9tICcuL3RyYXZlbC9wcmVkaWN0aW9ucyc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3RyYXZlbGAgJiBgL3YyL3RyYXZlbGAgJiBgL3YzL3RyYXZlbGAgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnRyYXZlbDtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqIEBwcm9wZXJ0eSB7QW5hbHl0aWNzfSBhbmFseXRpY3NcbiAqIEBwcm9wZXJ0eSB7UHJlZGljdGlvbnN9IHByZWRpY3Rpb25zXG4gKiBAcHJvdGVjdGVkXG4gKi9cbmNsYXNzIFRyYXZlbCB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ICAgID0gY2xpZW50O1xuICAgIHRoaXMuYW5hbHl0aWNzID0gbmV3IEFuYWx5dGljcyhjbGllbnQpO1xuICAgIHRoaXMucHJlZGljdGlvbnMgPSBuZXcgUHJlZGljdGlvbnMoY2xpZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWw7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxVQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxZQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFBK0MsU0FBQUQsdUJBQUFHLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLGtCQUFBRixDQUFBLEVBQUFHLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLENBQUEsR0FBQUgsQ0FBQSxDQUFBQyxDQUFBLEdBQUFFLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLENBQUFDLFVBQUEsUUFBQUQsQ0FBQSxDQUFBRSxZQUFBLGtCQUFBRixDQUFBLEtBQUFBLENBQUEsQ0FBQUcsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxFQUFBWSxjQUFBLENBQUFOLENBQUEsQ0FBQU8sR0FBQSxHQUFBUCxDQUFBO0FBQUEsU0FBQVEsYUFBQWQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFDLENBQUEsV0FBQUQsQ0FBQSxJQUFBRCxpQkFBQSxDQUFBRixDQUFBLENBQUFlLFNBQUEsRUFBQVosQ0FBQSxHQUFBQyxDQUFBLElBQUFGLGlCQUFBLENBQUFGLENBQUEsRUFBQUksQ0FBQSxHQUFBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxpQkFBQVMsUUFBQSxTQUFBVCxDQUFBO0FBQUEsU0FBQVksZUFBQVIsQ0FBQSxRQUFBWSxDQUFBLEdBQUFDLFlBQUEsQ0FBQWIsQ0FBQSxnQ0FBQWMsT0FBQSxDQUFBRixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFiLENBQUEsRUFBQUQsQ0FBQSxvQkFBQWUsT0FBQSxDQUFBZCxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSixDQUFBLEdBQUFJLENBQUEsQ0FBQWUsTUFBQSxDQUFBQyxXQUFBLGtCQUFBcEIsQ0FBQSxRQUFBZ0IsQ0FBQSxHQUFBaEIsQ0FBQSxDQUFBcUIsSUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBZSxPQUFBLENBQUFGLENBQUEsVUFBQUEsQ0FBQSxZQUFBTSxTQUFBLHlFQUFBbkIsQ0FBQSxHQUFBb0IsTUFBQSxHQUFBQyxNQUFBLEVBQUFwQixDQUFBO0FBQUEsU0FBQXFCLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFMLFNBQUE7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQSxJQWdCTU0sTUFBTSxnQkFBQWQsWUFBQSxDQUNWLFNBQUFjLE9BQVlDLE1BQU0sRUFBRTtFQUFBSixlQUFBLE9BQUFHLE1BQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQU1BLE1BQU07RUFDdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUcsSUFBSUMscUJBQVMsQ0FBQ0YsTUFBTSxDQUFDO0VBQ3RDLElBQUksQ0FBQ0csV0FBVyxHQUFHLElBQUlDLHVCQUFXLENBQUNKLE1BQU0sQ0FBQztBQUM1QyxDQUFDO0FBQUEsSUFBQUssUUFBQSxHQUFBQyxPQUFBLGNBR1lQLE1BQU07QUFBQVEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==