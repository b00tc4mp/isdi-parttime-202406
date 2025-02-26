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
 * `/v2/shopping/flight-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffersSeach;
 * ```
 *
 * @param {Client} client
 */
var FlightOffersSearch = /*#__PURE__*/function () {
  function FlightOffersSearch(client) {
    _classCallCheck(this, FlightOffersSearch);
    this.client = client;
  }

  /**
   * Get cheapest flight recommendations and prices on a given journey.
   *
   * @param {Object} params
   * @param {string} params.originLocationCode city/airport IATA code from which the traveler will depart, e.g. BOS for Boston
   * @param {string} params.destinationLocationCode city/airport IATA code to which the traveler is going, e.g. PAR for Paris
   * @param {string} params.departureDate the date on which the traveler will depart
   * from the origin to go to the destination. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2017-12-25
   * @param {string} params.adults the number of adult travelers (age 12 or older on date of departure)
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get cheapest flight recommendations and prices for SYD-BKK on 2020-08-01 for 2 adults
   *
   * ```js
   * amadeus.shopping.flightOffers.get({
   *    originLocationCode: 'SYD',
   *    destinationLocationCode: 'BKK',
   *    departureDate: '2020-08-01',
   *    adults: '2'
   * });
   * ```
   */
  return _createClass(FlightOffersSearch, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v2/shopping/flight-offers', params);
    }

    /**
     * To do a customized search with every option available.
     *
     * @param {Object} params
     * @param {Double} params.getFlightOffersBody list of criteria to retrieve a list of flight offers
     * @return {Promise.<Response,ResponseError>} a Promise
     *
     * To do a customized search with given options.
     *
     * ```js
     * amadeus.shopping.flightOffersSearch.post({
          "currencyCode": "USD",
          "originDestinations": [
            {
              "id": "1",
              "originLocationCode": "RIO",
              "destinationLocationCode": "MAD",
              "departureDateTimeRange": {
                "date": "2020-03-01",
                "time": "10:00:00"
              }
            },
            {
              "id": "2",
              "originLocationCode": "MAD",
              "destinationLocationCode": "RIO",
              "departureDateTimeRange": {
                "date": "2020-03-05",
                "time": "17:00:00"
              }
            }
          ],
          "travelers": [
            {
              "id": "1",
              "travelerType": "ADULT",
              "fareOptions": [
                "STANDARD"
              ]
            },
            {
              "id": "2",
              "travelerType": "CHILD",
              "fareOptions": [
                "STANDARD"
              ]
            }
          ],
          "sources": [
            "GDS"
          ],
          "searchCriteria": {
            "maxFlightOffers": 50,
            "flightFilters": {
              "cabinRestrictions": [
                {
                  "cabin": "BUSINESS",
                  "coverage": "MOST_SEGMENTS",
                  "originDestinationIds": [
                    "1"
                  ]
                }
              ],
              "carrierRestrictions": {
                "excludedCarrierCodes": [
                  "AA",
                  "TP",
                  "AZ"
                ]
              }
            }
          }
        });
      * ```
      */
  }, {
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.post('/v2/shopping/flight-offers', params);
    }
  }]);
}();
var _default = exports["default"] = FlightOffersSearch;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRPZmZlcnNTZWFyY2giLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInBvc3QiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9zaG9wcGluZy9mbGlnaHRfb2ZmZXJzX3NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92Mi9zaG9wcGluZy9mbGlnaHQtb2ZmZXJzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzU2VhY2g7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIEZsaWdodE9mZmVyc1NlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGVhcGVzdCBmbGlnaHQgcmVjb21tZW5kYXRpb25zIGFuZCBwcmljZXMgb24gYSBnaXZlbiBqb3VybmV5LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMub3JpZ2luTG9jYXRpb25Db2RlIGNpdHkvYWlycG9ydCBJQVRBIGNvZGUgZnJvbSB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnQsIGUuZy4gQk9TIGZvciBCb3N0b25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZSBjaXR5L2FpcnBvcnQgSUFUQSBjb2RlIHRvIHdoaWNoIHRoZSB0cmF2ZWxlciBpcyBnb2luZywgZS5nLiBQQVIgZm9yIFBhcmlzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVwYXJ0dXJlRGF0ZSB0aGUgZGF0ZSBvbiB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnRcbiAgICogZnJvbSB0aGUgb3JpZ2luIHRvIGdvIHRvIHRoZSBkZXN0aW5hdGlvbi4gRGF0ZXMgYXJlIHNwZWNpZmllZCBpbiB0aGUgSVNPIDg2MDEgWVlZWS1NTS1ERCBmb3JtYXQsIGUuZy4gMjAxNy0xMi0yNVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmFkdWx0cyB0aGUgbnVtYmVyIG9mIGFkdWx0IHRyYXZlbGVycyAoYWdlIDEyIG9yIG9sZGVyIG9uIGRhdGUgb2YgZGVwYXJ0dXJlKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIEdldCBjaGVhcGVzdCBmbGlnaHQgcmVjb21tZW5kYXRpb25zIGFuZCBwcmljZXMgZm9yIFNZRC1CS0sgb24gMjAyMC0wOC0wMSBmb3IgMiBhZHVsdHNcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zaG9wcGluZy5mbGlnaHRPZmZlcnMuZ2V0KHtcbiAgICogICAgb3JpZ2luTG9jYXRpb25Db2RlOiAnU1lEJyxcbiAgICogICAgZGVzdGluYXRpb25Mb2NhdGlvbkNvZGU6ICdCS0snLFxuICAgKiAgICBkZXBhcnR1cmVEYXRlOiAnMjAyMC0wOC0wMScsXG4gICAqICAgIGFkdWx0czogJzInXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92Mi9zaG9wcGluZy9mbGlnaHQtb2ZmZXJzJywgcGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBkbyBhIGN1c3RvbWl6ZWQgc2VhcmNoIHdpdGggZXZlcnkgb3B0aW9uIGF2YWlsYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmdldEZsaWdodE9mZmVyc0JvZHkgbGlzdCBvZiBjcml0ZXJpYSB0byByZXRyaWV2ZSBhIGxpc3Qgb2YgZmxpZ2h0IG9mZmVyc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFRvIGRvIGEgY3VzdG9taXplZCBzZWFyY2ggd2l0aCBnaXZlbiBvcHRpb25zLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVyc1NlYXJjaC5wb3N0KHtcbiAgICAgICAgXCJjdXJyZW5jeUNvZGVcIjogXCJVU0RcIixcbiAgICAgICAgXCJvcmlnaW5EZXN0aW5hdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICAgICAgICBcIm9yaWdpbkxvY2F0aW9uQ29kZVwiOiBcIlJJT1wiLFxuICAgICAgICAgICAgXCJkZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiOiBcIk1BRFwiLFxuICAgICAgICAgICAgXCJkZXBhcnR1cmVEYXRlVGltZVJhbmdlXCI6IHtcbiAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMjAyMC0wMy0wMVwiLFxuICAgICAgICAgICAgICBcInRpbWVcIjogXCIxMDowMDowMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxuICAgICAgICAgICAgXCJvcmlnaW5Mb2NhdGlvbkNvZGVcIjogXCJNQURcIixcbiAgICAgICAgICAgIFwiZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIjogXCJSSU9cIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlRGF0ZVRpbWVSYW5nZVwiOiB7XG4gICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMjAtMDMtMDVcIixcbiAgICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMTc6MDA6MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJ0cmF2ZWxlcnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICAgICAgICBcInRyYXZlbGVyVHlwZVwiOiBcIkFEVUxUXCIsXG4gICAgICAgICAgICBcImZhcmVPcHRpb25zXCI6IFtcbiAgICAgICAgICAgICAgXCJTVEFOREFSRFwiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxuICAgICAgICAgICAgXCJ0cmF2ZWxlclR5cGVcIjogXCJDSElMRFwiLFxuICAgICAgICAgICAgXCJmYXJlT3B0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIFwiU1RBTkRBUkRcIlxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzb3VyY2VzXCI6IFtcbiAgICAgICAgICBcIkdEU1wiXG4gICAgICAgIF0sXG4gICAgICAgIFwic2VhcmNoQ3JpdGVyaWFcIjoge1xuICAgICAgICAgIFwibWF4RmxpZ2h0T2ZmZXJzXCI6IDUwLFxuICAgICAgICAgIFwiZmxpZ2h0RmlsdGVyc1wiOiB7XG4gICAgICAgICAgICBcImNhYmluUmVzdHJpY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiY2FiaW5cIjogXCJCVVNJTkVTU1wiLFxuICAgICAgICAgICAgICAgIFwiY292ZXJhZ2VcIjogXCJNT1NUX1NFR01FTlRTXCIsXG4gICAgICAgICAgICAgICAgXCJvcmlnaW5EZXN0aW5hdGlvbklkc1wiOiBbXG4gICAgICAgICAgICAgICAgICBcIjFcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2FycmllclJlc3RyaWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgIFwiZXhjbHVkZWRDYXJyaWVyQ29kZXNcIjogW1xuICAgICAgICAgICAgICAgIFwiQUFcIixcbiAgICAgICAgICAgICAgICBcIlRQXCIsXG4gICAgICAgICAgICAgICAgXCJBWlwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICogYGBgXG4gICAgKi9cbiAgcG9zdChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5wb3N0KCcvdjIvc2hvcHBpbmcvZmxpZ2h0LW9mZmVycycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0T2ZmZXJzU2VhcmNoO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLGtCQUFrQjtFQUN0QixTQUFBQSxtQkFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsa0JBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFyQkUsT0FBQUUsWUFBQSxDQUFBSCxrQkFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFzQkEsU0FBQUMsR0FBR0EsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMsNEJBQTRCLEVBQUVDLE1BQU0sQ0FBQztJQUM5RDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUExRUU7SUFBQUgsR0FBQTtJQUFBQyxLQUFBLEVBMkVBLFNBQUFNLElBQUlBLENBQUEsRUFBYztNQUFBLElBQWJKLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2QsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ1UsSUFBSSxDQUFDLDRCQUE0QixFQUFFSixNQUFNLENBQUM7SUFDL0Q7RUFBQztBQUFBO0FBQUEsSUFBQUssUUFBQSxHQUFBQyxPQUFBLGNBR1liLGtCQUFrQjtBQUFBYyxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119