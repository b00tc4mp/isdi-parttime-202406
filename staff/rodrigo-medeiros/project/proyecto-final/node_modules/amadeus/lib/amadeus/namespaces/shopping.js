"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _flight_destinations = _interopRequireDefault(require("./shopping/flight_destinations"));
var _flight_offers = _interopRequireDefault(require("./shopping/flight_offers"));
var _flight_offers_search = _interopRequireDefault(require("./shopping/flight_offers_search"));
var _flight_dates = _interopRequireDefault(require("./shopping/flight_dates"));
var _seatmaps = _interopRequireDefault(require("./shopping/seatmaps"));
var _hotel_offer_search = _interopRequireDefault(require("./shopping/hotel_offer_search"));
var _hotel_offers_search = _interopRequireDefault(require("./shopping/hotel_offers_search"));
var _activities = _interopRequireDefault(require("./shopping/activities"));
var _activity = _interopRequireDefault(require("./shopping/activity"));
var _availability = _interopRequireDefault(require("./shopping/availability"));
var _transfer_offers = _interopRequireDefault(require("./shopping/transfer_offers"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A namespaced client for the
 * `/v1/shopping`, `/v2/shopping` and `/v3/shopping` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping;
 * ```
 *
 * @param {Client} client
 * @property {FlightDestinations} flightDestinations
 * @property {FlightOffers} flightOffers
 * @property {FlightOffersSearch} flightOffersSearch
 * @property {FlightDates} flightDates
 * @property {Seatmaps} seatmaps
 * @property {HotelOfferSearch} hotelOffers
 * @property {HotelOffersSearch} hotelOffers
 * @property {Availability} availability
 * @property {TransferOffers} transferOffers
 */
var Shopping = /*#__PURE__*/function () {
  function Shopping(client) {
    _classCallCheck(this, Shopping);
    this.client = client;
    this.flightDestinations = new _flight_destinations["default"](client);
    this.flightOffers = new _flight_offers["default"](client);
    this.flightOffersSearch = new _flight_offers_search["default"](client);
    this.flightDates = new _flight_dates["default"](client);
    this.seatmaps = new _seatmaps["default"](client);
    this.hotelOffersSearch = new _hotel_offers_search["default"](client);
    this.activities = new _activities["default"](client);
    this.availability = new _availability["default"](client);
    this.transferOffers = new _transfer_offers["default"](client);
  }

  /**
   * Loads a namespaced path for a specific offer ID for Hotel Search V3
   *
   * @param  {string} [offerId]  The ID of the offer for a dedicated hotel
   * @return {HotelOfferSearch}
   **/
  return _createClass(Shopping, [{
    key: "hotelOfferSearch",
    value: function hotelOfferSearch(offerId) {
      return new _hotel_offer_search["default"](this.client, offerId);
    }

    /**
     * Loads a namespaced path for a specific activity ID
     *
     * @param  {string} [activityId]  The ID of the activity for a dedicated tour or activity
     * @return {Activity}
     **/
  }, {
    key: "activity",
    value: function activity(activityId) {
      return new _activity["default"](this.client, activityId);
    }
  }]);
}();
var _default = exports["default"] = Shopping;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmxpZ2h0X2Rlc3RpbmF0aW9ucyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ZsaWdodF9vZmZlcnMiLCJfZmxpZ2h0X29mZmVyc19zZWFyY2giLCJfZmxpZ2h0X2RhdGVzIiwiX3NlYXRtYXBzIiwiX2hvdGVsX29mZmVyX3NlYXJjaCIsIl9ob3RlbF9vZmZlcnNfc2VhcmNoIiwiX2FjdGl2aXRpZXMiLCJfYWN0aXZpdHkiLCJfYXZhaWxhYmlsaXR5IiwiX3RyYW5zZmVyX29mZmVycyIsImUiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsImkiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJTaG9wcGluZyIsImNsaWVudCIsImZsaWdodERlc3RpbmF0aW9ucyIsIkZsaWdodERlc3RpbmF0aW9ucyIsImZsaWdodE9mZmVycyIsIkZsaWdodE9mZmVycyIsImZsaWdodE9mZmVyc1NlYXJjaCIsIkZsaWdodE9mZmVyc1NlYXJjaCIsImZsaWdodERhdGVzIiwiRmxpZ2h0RGF0ZXMiLCJzZWF0bWFwcyIsIlNlYXRtYXBzIiwiaG90ZWxPZmZlcnNTZWFyY2giLCJIb3RlbE9mZmVyc1NlYXJjaCIsImFjdGl2aXRpZXMiLCJBY3Rpdml0aWVzIiwiYXZhaWxhYmlsaXR5IiwiQXZhaWxhYmlsaXR5IiwidHJhbnNmZXJPZmZlcnMiLCJUcmFuc2Zlck9mZmVycyIsInZhbHVlIiwiaG90ZWxPZmZlclNlYXJjaCIsIm9mZmVySWQiLCJIb3RlbE9mZmVyU2VhcmNoIiwiYWN0aXZpdHkiLCJhY3Rpdml0eUlkIiwiQWN0aXZpdHkiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9zaG9wcGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmxpZ2h0RGVzdGluYXRpb25zIGZyb20gJy4vc2hvcHBpbmcvZmxpZ2h0X2Rlc3RpbmF0aW9ucyc7XG5pbXBvcnQgRmxpZ2h0T2ZmZXJzICAgICAgIGZyb20gJy4vc2hvcHBpbmcvZmxpZ2h0X29mZmVycyc7XG5pbXBvcnQgRmxpZ2h0T2ZmZXJzU2VhcmNoIGZyb20gJy4vc2hvcHBpbmcvZmxpZ2h0X29mZmVyc19zZWFyY2gnO1xuaW1wb3J0IEZsaWdodERhdGVzICAgICAgICBmcm9tICcuL3Nob3BwaW5nL2ZsaWdodF9kYXRlcyc7XG5pbXBvcnQgU2VhdG1hcHMgICAgICAgICAgIGZyb20gJy4vc2hvcHBpbmcvc2VhdG1hcHMnO1xuaW1wb3J0IEhvdGVsT2ZmZXJTZWFyY2ggICBmcm9tICcuL3Nob3BwaW5nL2hvdGVsX29mZmVyX3NlYXJjaCc7XG5pbXBvcnQgSG90ZWxPZmZlcnNTZWFyY2ggIGZyb20gJy4vc2hvcHBpbmcvaG90ZWxfb2ZmZXJzX3NlYXJjaCc7XG5pbXBvcnQgQWN0aXZpdGllcyAgICAgICAgIGZyb20gJy4vc2hvcHBpbmcvYWN0aXZpdGllcyc7XG5pbXBvcnQgQWN0aXZpdHkgICAgICAgICAgIGZyb20gJy4vc2hvcHBpbmcvYWN0aXZpdHknO1xuaW1wb3J0IEF2YWlsYWJpbGl0eSAgICAgICBmcm9tICcuL3Nob3BwaW5nL2F2YWlsYWJpbGl0eSc7XG5pbXBvcnQgVHJhbnNmZXJPZmZlcnMgICAgIGZyb20gJy4vc2hvcHBpbmcvdHJhbnNmZXJfb2ZmZXJzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmdgLCBgL3YyL3Nob3BwaW5nYCBhbmQgYC92My9zaG9wcGluZ2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNob3BwaW5nO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHByb3BlcnR5IHtGbGlnaHREZXN0aW5hdGlvbnN9IGZsaWdodERlc3RpbmF0aW9uc1xuICogQHByb3BlcnR5IHtGbGlnaHRPZmZlcnN9IGZsaWdodE9mZmVyc1xuICogQHByb3BlcnR5IHtGbGlnaHRPZmZlcnNTZWFyY2h9IGZsaWdodE9mZmVyc1NlYXJjaFxuICogQHByb3BlcnR5IHtGbGlnaHREYXRlc30gZmxpZ2h0RGF0ZXNcbiAqIEBwcm9wZXJ0eSB7U2VhdG1hcHN9IHNlYXRtYXBzXG4gKiBAcHJvcGVydHkge0hvdGVsT2ZmZXJTZWFyY2h9IGhvdGVsT2ZmZXJzXG4gKiBAcHJvcGVydHkge0hvdGVsT2ZmZXJzU2VhcmNofSBob3RlbE9mZmVyc1xuICogQHByb3BlcnR5IHtBdmFpbGFiaWxpdHl9IGF2YWlsYWJpbGl0eVxuICogQHByb3BlcnR5IHtUcmFuc2Zlck9mZmVyc30gdHJhbnNmZXJPZmZlcnNcbiAqL1xuY2xhc3MgU2hvcHBpbmcge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCAgICAgICAgICAgICA9IGNsaWVudDtcbiAgICB0aGlzLmZsaWdodERlc3RpbmF0aW9ucyA9IG5ldyBGbGlnaHREZXN0aW5hdGlvbnMoY2xpZW50KTtcbiAgICB0aGlzLmZsaWdodE9mZmVycyAgICAgICA9IG5ldyBGbGlnaHRPZmZlcnMoY2xpZW50KTtcbiAgICB0aGlzLmZsaWdodE9mZmVyc1NlYXJjaCA9IG5ldyBGbGlnaHRPZmZlcnNTZWFyY2goY2xpZW50KTtcbiAgICB0aGlzLmZsaWdodERhdGVzICAgICAgICA9IG5ldyBGbGlnaHREYXRlcyhjbGllbnQpO1xuICAgIHRoaXMuc2VhdG1hcHMgICAgICAgICAgID0gbmV3IFNlYXRtYXBzKGNsaWVudCk7XG4gICAgdGhpcy5ob3RlbE9mZmVyc1NlYXJjaCAgPSBuZXcgSG90ZWxPZmZlcnNTZWFyY2goY2xpZW50KTtcbiAgICB0aGlzLmFjdGl2aXRpZXMgICAgICAgICA9IG5ldyBBY3Rpdml0aWVzKGNsaWVudCk7XG4gICAgdGhpcy5hdmFpbGFiaWxpdHkgICAgICAgPSBuZXcgQXZhaWxhYmlsaXR5KGNsaWVudCk7XG4gICAgdGhpcy50cmFuc2Zlck9mZmVycyAgICAgPSBuZXcgVHJhbnNmZXJPZmZlcnMoY2xpZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIG5hbWVzcGFjZWQgcGF0aCBmb3IgYSBzcGVjaWZpYyBvZmZlciBJRCBmb3IgSG90ZWwgU2VhcmNoIFYzXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gW29mZmVySWRdICBUaGUgSUQgb2YgdGhlIG9mZmVyIGZvciBhIGRlZGljYXRlZCBob3RlbFxuICAgKiBAcmV0dXJuIHtIb3RlbE9mZmVyU2VhcmNofVxuICAgKiovXG4gIGhvdGVsT2ZmZXJTZWFyY2gob2ZmZXJJZCkge1xuICAgIHJldHVybiBuZXcgSG90ZWxPZmZlclNlYXJjaCh0aGlzLmNsaWVudCwgb2ZmZXJJZCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgYSBuYW1lc3BhY2VkIHBhdGggZm9yIGEgc3BlY2lmaWMgYWN0aXZpdHkgSURcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBbYWN0aXZpdHlJZF0gIFRoZSBJRCBvZiB0aGUgYWN0aXZpdHkgZm9yIGEgZGVkaWNhdGVkIHRvdXIgb3IgYWN0aXZpdHlcbiAgICogQHJldHVybiB7QWN0aXZpdHl9XG4gICAqKi9cbiAgYWN0aXZpdHkoYWN0aXZpdHlJZCkge1xuICAgIHJldHVybiBuZXcgQWN0aXZpdHkodGhpcy5jbGllbnQsIGFj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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkEsSUFzQk1nQixRQUFRO0VBQ1osU0FBQUEsU0FBWUMsTUFBTSxFQUFFO0lBQUF2QixlQUFBLE9BQUFzQixRQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFlQSxNQUFNO0lBQ2hDLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUcsSUFBSUMsK0JBQWtCLENBQUNGLE1BQU0sQ0FBQztJQUN4RCxJQUFJLENBQUNHLFlBQVksR0FBUyxJQUFJQyx5QkFBWSxDQUFDSixNQUFNLENBQUM7SUFDbEQsSUFBSSxDQUFDSyxrQkFBa0IsR0FBRyxJQUFJQyxnQ0FBa0IsQ0FBQ04sTUFBTSxDQUFDO0lBQ3hELElBQUksQ0FBQ08sV0FBVyxHQUFVLElBQUlDLHdCQUFXLENBQUNSLE1BQU0sQ0FBQztJQUNqRCxJQUFJLENBQUNTLFFBQVEsR0FBYSxJQUFJQyxvQkFBUSxDQUFDVixNQUFNLENBQUM7SUFDOUMsSUFBSSxDQUFDVyxpQkFBaUIsR0FBSSxJQUFJQywrQkFBaUIsQ0FBQ1osTUFBTSxDQUFDO0lBQ3ZELElBQUksQ0FBQ2EsVUFBVSxHQUFXLElBQUlDLHNCQUFVLENBQUNkLE1BQU0sQ0FBQztJQUNoRCxJQUFJLENBQUNlLFlBQVksR0FBUyxJQUFJQyx3QkFBWSxDQUFDaEIsTUFBTSxDQUFDO0lBQ2xELElBQUksQ0FBQ2lCLGNBQWMsR0FBTyxJQUFJQywyQkFBYyxDQUFDbEIsTUFBTSxDQUFDO0VBQ3REOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFLE9BQUFSLFlBQUEsQ0FBQU8sUUFBQTtJQUFBUixHQUFBO0lBQUE0QixLQUFBLEVBTUEsU0FBQUMsZ0JBQWdCQSxDQUFDQyxPQUFPLEVBQUU7TUFDeEIsT0FBTyxJQUFJQyw4QkFBZ0IsQ0FBQyxJQUFJLENBQUN0QixNQUFNLEVBQUVxQixPQUFPLENBQUM7SUFDbkQ7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTEU7SUFBQTlCLEdBQUE7SUFBQTRCLEtBQUEsRUFNQSxTQUFBSSxRQUFRQSxDQUFDQyxVQUFVLEVBQUU7TUFDbkIsT0FBTyxJQUFJQyxvQkFBUSxDQUFDLElBQUksQ0FBQ3pCLE1BQU0sRUFBRXdCLFVBQVUsQ0FBQztJQUM5QztFQUFDO0FBQUE7QUFBQSxJQUFBRSxRQUFBLEdBQUFDLE9BQUEsY0FJWTVCLFFBQVE7QUFBQTZCLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=