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
 * `/v1/reference-data/locations/pois` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.pointOfInterest;
 * ```
 *
 * @param {Client} client
 */
var PointOfInterest = /*#__PURE__*/function () {
  function PointOfInterest(client, poiId) {
    _classCallCheck(this, PointOfInterest);
    this.client = client;
    this._poiId = poiId;
  }

  /**
   * Extracts the information about point of interest with given ID
   *
   * Extract the information about point of interest with ID '9CB40CB5D0'
   * ```js
   * amadeus.referenceData.locations.pointOfInterest('9CB40CB5D0').get();
   * ```
   */
  return _createClass(PointOfInterest, [{
    key: "get",
    value: function get() {
      return this.client.get("/v1/reference-data/locations/pois/".concat(this._poiId));
    }
  }]);
}();
var _default = exports["default"] = PointOfInterest;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQb2ludE9mSW50ZXJlc3QiLCJjbGllbnQiLCJwb2lJZCIsIl9jbGFzc0NhbGxDaGVjayIsIl9wb2lJZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwiY29uY2F0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zL3BvaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9yZWZlcmVuY2UtZGF0YS9sb2NhdGlvbnMvcG9pc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLnBvaW50T2ZJbnRlcmVzdDtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgUG9pbnRPZkludGVyZXN0IHtcbiAgY29uc3RydWN0b3IoY2xpZW50LCBwb2lJZCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuX3BvaUlkID0gcG9pSWQ7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIGluZm9ybWF0aW9uIGFib3V0IHBvaW50IG9mIGludGVyZXN0IHdpdGggZ2l2ZW4gSURcbiAgICpcbiAgICogRXh0cmFjdCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgcG9pbnQgb2YgaW50ZXJlc3Qgd2l0aCBJRCAnOUNCNDBDQjVEMCdcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5wb2ludE9mSW50ZXJlc3QoJzlDQjQwQ0I1RDAnKS5nZXQoKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldChgL3YxL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy9wb2lzLyR7dGhpcy5fcG9pSWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRPZkludGVyZXN0O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLGVBQWU7RUFDbkIsU0FBQUEsZ0JBQVlDLE1BQU0sRUFBRUMsS0FBSyxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsZUFBQTtJQUN6QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNHLE1BQU0sR0FBR0YsS0FBSztFQUNyQjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEUsT0FBQUcsWUFBQSxDQUFBTCxlQUFBO0lBQUFNLEdBQUE7SUFBQUMsS0FBQSxFQVFBLFNBQUFDLEdBQUdBLENBQUEsRUFBRztNQUNKLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNPLEdBQUcsc0NBQUFDLE1BQUEsQ0FBc0MsSUFBSSxDQUFDTCxNQUFNLENBQUUsQ0FBQztJQUM1RTtFQUFDO0FBQUE7QUFBQSxJQUFBTSxRQUFBLEdBQUFDLE9BQUEsY0FHWVgsZUFBZTtBQUFBWSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119