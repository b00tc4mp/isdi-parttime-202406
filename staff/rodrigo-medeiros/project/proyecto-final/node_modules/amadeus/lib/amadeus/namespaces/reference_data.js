"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _urls = _interopRequireDefault(require("./reference_data/urls"));
var _locations = _interopRequireDefault(require("./reference_data/locations"));
var _location = _interopRequireDefault(require("./reference_data/location"));
var _airlines = _interopRequireDefault(require("./reference_data/airlines"));
var _recommended_locations = _interopRequireDefault(require("./reference_data/recommended_locations"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A namespaced client for the
 * `/v2/reference-data` endpoints
 *
 * Access via the {Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.urls;
 * ```
 *
 * @param {Client} client
 * @property {Urls} urls
 * @protected
 */
var ReferenceData = /*#__PURE__*/function () {
  function ReferenceData(client) {
    _classCallCheck(this, ReferenceData);
    this.client = client;
    this.urls = new _urls["default"](client);
    this.locations = new _locations["default"](client);
    this.airlines = new _airlines["default"](client);
    this.recommendedLocations = new _recommended_locations["default"](client);
  }

  /**
   * The namespace for the Location APIs - accessing a specific location
   *
   * @param  {string} [locationId]  The ID of the location to search for
   * @return {Location}
   **/
  return _createClass(ReferenceData, [{
    key: "location",
    value: function location(locationId) {
      return new _location["default"](this.client, locationId);
    }
  }]);
}();
var _default = exports["default"] = ReferenceData;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXJscyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2xvY2F0aW9ucyIsIl9sb2NhdGlvbiIsIl9haXJsaW5lcyIsIl9yZWNvbW1lbmRlZF9sb2NhdGlvbnMiLCJlIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwidCIsImxlbmd0aCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJpIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiU3RyaW5nIiwiTnVtYmVyIiwiUmVmZXJlbmNlRGF0YSIsImNsaWVudCIsInVybHMiLCJVcmxzIiwibG9jYXRpb25zIiwiTG9jYXRpb25zIiwiYWlybGluZXMiLCJBaXJsaW5lcyIsInJlY29tbWVuZGVkTG9jYXRpb25zIiwiUmVjb21tZW5kZWRMb2NhdGlvbnMiLCJ2YWx1ZSIsImxvY2F0aW9uIiwibG9jYXRpb25JZCIsIkxvY2F0aW9uIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVybHMgICAgICBmcm9tICcuL3JlZmVyZW5jZV9kYXRhL3VybHMnO1xuaW1wb3J0IExvY2F0aW9ucyBmcm9tICcuL3JlZmVyZW5jZV9kYXRhL2xvY2F0aW9ucyc7XG5pbXBvcnQgTG9jYXRpb24gIGZyb20gJy4vcmVmZXJlbmNlX2RhdGEvbG9jYXRpb24nO1xuaW1wb3J0IEFpcmxpbmVzIGZyb20gJy4vcmVmZXJlbmNlX2RhdGEvYWlybGluZXMnO1xuaW1wb3J0IFJlY29tbWVuZGVkTG9jYXRpb25zIGZyb20gJy4vcmVmZXJlbmNlX2RhdGEvcmVjb21tZW5kZWRfbG9jYXRpb25zJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjIvcmVmZXJlbmNlLWRhdGFgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLnVybHM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge1VybHN9IHVybHNcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuY2xhc3MgUmVmZXJlbmNlRGF0YSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ICAgID0gY2xpZW50O1xuICAgIHRoaXMudXJscyAgICAgID0gbmV3IFVybHMoY2xpZW50KTtcbiAgICB0aGlzLmxvY2F0aW9ucyA9IG5ldyBMb2NhdGlvbnMoY2xpZW50KTtcbiAgICB0aGlzLmFpcmxpbmVzICA9IG5ldyBBaXJsaW5lcyhjbGllbnQpO1xuICAgIHRoaXMucmVjb21tZW5kZWRMb2NhdGlvbnMgPSBuZXcgUmVjb21tZW5kZWRMb2NhdGlvbnMoY2xpZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZXNwYWNlIGZvciB0aGUgTG9jYXRpb24gQVBJcyAtIGFjY2Vzc2luZyBhIHNwZWNpZmljIGxvY2F0aW9uXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gW2xvY2F0aW9uSWRdICBUaGUgSUQgb2YgdGhlIGxvY2F0aW9uIHRvIHNlYXJjaCBmb3JcbiAgICogQHJldHVybiB7TG9jYXRpb259XG4gICAqKi9cbiAgbG9jYXRpb24obG9jYXRpb25JZCkge1xuICAgIHJldHVybiBuZXcgTG9jYXRpb24odGhpcy5jbGllbnQsIGxvY2F0aW9uSWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZmVyZW5jZURhdGE7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLEtBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFVBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLFNBQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFHLFNBQUEsR0FBQUosc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFJLHNCQUFBLEdBQUFMLHNCQUFBLENBQUFDLE9BQUE7QUFBMEUsU0FBQUQsdUJBQUFNLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLFFBQUFDLENBQUEsc0NBQUFELE9BQUEsd0JBQUFFLE1BQUEsdUJBQUFBLE1BQUEsQ0FBQUMsUUFBQSxhQUFBRixDQUFBLGtCQUFBQSxDQUFBLGdCQUFBQSxDQUFBLFdBQUFBLENBQUEseUJBQUFDLE1BQUEsSUFBQUQsQ0FBQSxDQUFBRyxXQUFBLEtBQUFGLE1BQUEsSUFBQUQsQ0FBQSxLQUFBQyxNQUFBLENBQUFHLFNBQUEscUJBQUFKLENBQUEsS0FBQUQsT0FBQSxDQUFBQyxDQUFBO0FBQUEsU0FBQUssZ0JBQUFDLENBQUEsRUFBQUMsQ0FBQSxVQUFBRCxDQUFBLFlBQUFDLENBQUEsYUFBQUMsU0FBQTtBQUFBLFNBQUFDLGtCQUFBWixDQUFBLEVBQUFhLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFYLENBQUEsR0FBQVUsQ0FBQSxDQUFBQyxDQUFBLEdBQUFYLENBQUEsQ0FBQWEsVUFBQSxHQUFBYixDQUFBLENBQUFhLFVBQUEsUUFBQWIsQ0FBQSxDQUFBYyxZQUFBLGtCQUFBZCxDQUFBLEtBQUFBLENBQUEsQ0FBQWUsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQXBCLENBQUEsRUFBQXFCLGNBQUEsQ0FBQWxCLENBQUEsQ0FBQW1CLEdBQUEsR0FBQW5CLENBQUE7QUFBQSxTQUFBb0IsYUFBQXZCLENBQUEsRUFBQWEsQ0FBQSxFQUFBQyxDQUFBLFdBQUFELENBQUEsSUFBQUQsaUJBQUEsQ0FBQVosQ0FBQSxDQUFBTyxTQUFBLEVBQUFNLENBQUEsR0FBQUMsQ0FBQSxJQUFBRixpQkFBQSxDQUFBWixDQUFBLEVBQUFjLENBQUEsR0FBQUssTUFBQSxDQUFBQyxjQUFBLENBQUFwQixDQUFBLGlCQUFBa0IsUUFBQSxTQUFBbEIsQ0FBQTtBQUFBLFNBQUFxQixlQUFBUCxDQUFBLFFBQUFVLENBQUEsR0FBQUMsWUFBQSxDQUFBWCxDQUFBLGdDQUFBWixPQUFBLENBQUFzQixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFYLENBQUEsRUFBQUQsQ0FBQSxvQkFBQVgsT0FBQSxDQUFBWSxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBZCxDQUFBLEdBQUFjLENBQUEsQ0FBQVYsTUFBQSxDQUFBc0IsV0FBQSxrQkFBQTFCLENBQUEsUUFBQXdCLENBQUEsR0FBQXhCLENBQUEsQ0FBQTJCLElBQUEsQ0FBQWIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBWCxPQUFBLENBQUFzQixDQUFBLFVBQUFBLENBQUEsWUFBQWIsU0FBQSx5RUFBQUUsQ0FBQSxHQUFBZSxNQUFBLEdBQUFDLE1BQUEsRUFBQWYsQ0FBQTtBQUUxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQSxJQWVNZ0IsYUFBYTtFQUNqQixTQUFBQSxjQUFZQyxNQUFNLEVBQUU7SUFBQXZCLGVBQUEsT0FBQXNCLGFBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQU1BLE1BQU07SUFDdkIsSUFBSSxDQUFDQyxJQUFJLEdBQVEsSUFBSUMsZ0JBQUksQ0FBQ0YsTUFBTSxDQUFDO0lBQ2pDLElBQUksQ0FBQ0csU0FBUyxHQUFHLElBQUlDLHFCQUFTLENBQUNKLE1BQU0sQ0FBQztJQUN0QyxJQUFJLENBQUNLLFFBQVEsR0FBSSxJQUFJQyxvQkFBUSxDQUFDTixNQUFNLENBQUM7SUFDckMsSUFBSSxDQUFDTyxvQkFBb0IsR0FBRyxJQUFJQyxpQ0FBb0IsQ0FBQ1IsTUFBTSxDQUFDO0VBQzlEOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFLE9BQUFSLFlBQUEsQ0FBQU8sYUFBQTtJQUFBUixHQUFBO0lBQUFrQixLQUFBLEVBTUEsU0FBQUMsUUFBUUEsQ0FBQ0MsVUFBVSxFQUFFO01BQ25CLE9BQU8sSUFBSUMsb0JBQVEsQ0FBQyxJQUFJLENBQUNaLE1BQU0sRUFBRVcsVUFBVSxDQUFDO0lBQzlDO0VBQUM7QUFBQTtBQUFBLElBQUFFLFFBQUEsR0FBQUMsT0FBQSxjQUdZZixhQUFhO0FBQUFnQixNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119