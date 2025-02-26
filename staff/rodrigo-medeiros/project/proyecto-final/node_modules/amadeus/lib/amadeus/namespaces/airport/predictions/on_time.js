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
 * `/v1/airport/predictions/on-time` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.airport.predictions.onTime;
 * ```
 *
 * @param {Client} client
 */
var OnTime = /*#__PURE__*/function () {
  function OnTime(client) {
    _classCallCheck(this, OnTime);
    this.client = client;
  }

  /**
   * Get the percentage of on-time flight departures from a given airport
   *
   * @param {Object} params
   * @param {string} params.airportCode airport IATA code, e.g. BOS for Boston
   * @param {string} params.date the date on which the traveler will depart
   * from the give airport. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2019-12-25
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get the percentage of on-time flight departures from JFK
   *
   * ```js
   * amadeus.airport.predictions.onTime.get({
   *   airportCode: 'JFK',
   *   date: '2020-08-01'
   * })
   * ```
   */
  return _createClass(OnTime, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/airport/predictions/on-time', params);
    }
  }]);
}();
var _default = exports["default"] = OnTime;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPblRpbWUiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2FpcnBvcnQvcHJlZGljdGlvbnMvb25fdGltZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9haXJwb3J0L3ByZWRpY3Rpb25zL29uLXRpbWVgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5haXJwb3J0LnByZWRpY3Rpb25zLm9uVGltZTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgT25UaW1lIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwZXJjZW50YWdlIG9mIG9uLXRpbWUgZmxpZ2h0IGRlcGFydHVyZXMgZnJvbSBhIGdpdmVuIGFpcnBvcnRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmFpcnBvcnRDb2RlIGFpcnBvcnQgSUFUQSBjb2RlLCBlLmcuIEJPUyBmb3IgQm9zdG9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGF0ZSB0aGUgZGF0ZSBvbiB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnRcbiAgICogZnJvbSB0aGUgZ2l2ZSBhaXJwb3J0LiBEYXRlcyBhcmUgc3BlY2lmaWVkIGluIHRoZSBJU08gODYwMSBZWVlZLU1NLUREIGZvcm1hdCwgZS5nLiAyMDE5LTEyLTI1XG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogR2V0IHRoZSBwZXJjZW50YWdlIG9mIG9uLXRpbWUgZmxpZ2h0IGRlcGFydHVyZXMgZnJvbSBKRktcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5haXJwb3J0LnByZWRpY3Rpb25zLm9uVGltZS5nZXQoe1xuICAgKiAgIGFpcnBvcnRDb2RlOiAnSkZLJyxcbiAgICogICBkYXRlOiAnMjAyMC0wOC0wMSdcbiAgICogfSlcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvYWlycG9ydC9wcmVkaWN0aW9ucy9vbi10aW1lJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPblRpbWU7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLE1BQU07RUFDVixTQUFBQSxPQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixNQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQWpCRSxPQUFBRSxZQUFBLENBQUFILE1BQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBa0JBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLGlDQUFpQyxFQUFFQyxNQUFNLENBQUM7SUFDbkU7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLE1BQU07QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==