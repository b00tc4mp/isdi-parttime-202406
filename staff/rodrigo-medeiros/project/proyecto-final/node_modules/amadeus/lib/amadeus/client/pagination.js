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
 * A helper library for handling pagination.
 *
 * @param {Client} client the client to make the API calls against
 * @protected
 */
var Pagination = /*#__PURE__*/function () {
  function Pagination(client) {
    _classCallCheck(this, Pagination);
    this.client = client;
  }

  /**
   * Fetch the page for the given page name, and make the next API call based on
   * the previous request made.
   *
   * @param  {type} pageName the name of the page to fetch, should be available
   *    as a link in the meta links in the response
   * @param  {type} response the response containing the links to the next pages,
   *   and the request used to make the previous call
   * @return {Promise.<Response,ResponseError>} a Promise
   * @protected
   */
  return _createClass(Pagination, [{
    key: "page",
    value: function page(pageName, response) {
      var pageNumber = this.pageNumber(response, pageName);
      if (pageNumber) {
        return this.call(response.request, pageNumber);
      } else {
        return this.nullPromise();
      }
    }

    // PRIVATE

    /**
     * Makes a new call for the new page number
     *
     * @param  {type} request    the request used to make the previous call
     * @param  {type} pageNumber the page number to fetch
     * @return {Promise.<Response,ResponseError>} a Promise
     * @private
     */
  }, {
    key: "call",
    value: function call(request, pageNumber) {
      var params = request.params || {};
      params['page'] = params['page'] || {};
      params['page']['offset'] = pageNumber;
      return this.client.request(request.verb, request.path, params);
    }

    /**
     * Tries to determine the page number from the page name. If not present, it
     * just returns null
     *
     * @param  {type} response the response containing the links to the next pages
     * @param  {type} pageName the name of the page to fetch
     * @return {number}
     * @private
     */
  }, {
    key: "pageNumber",
    value: function pageNumber(response, pageName) {
      try {
        return response.result['meta']['links'][pageName].split('page%5Boffset%5D=')[1].split('&')[0];
      } catch (TypeError) {
        return null;
      }
    }

    /**
     * Returns a Promise that always resolves to null
     *
     * @return {Promise} a Promise that always resolves to null
     * @private
     */
  }, {
    key: "nullPromise",
    value: function nullPromise() {
      return new Promise(function (resolve) {
        resolve(null);
      });
    }
  }]);
}();
var _default = exports["default"] = Pagination;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQYWdpbmF0aW9uIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwYWdlIiwicGFnZU5hbWUiLCJyZXNwb25zZSIsInBhZ2VOdW1iZXIiLCJjYWxsIiwicmVxdWVzdCIsIm51bGxQcm9taXNlIiwicGFyYW1zIiwidmVyYiIsInBhdGgiLCJyZXN1bHQiLCJzcGxpdCIsIlR5cGVFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL2NsaWVudC9wYWdpbmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBoZWxwZXIgbGlicmFyeSBmb3IgaGFuZGxpbmcgcGFnaW5hdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50IHRoZSBjbGllbnQgdG8gbWFrZSB0aGUgQVBJIGNhbGxzIGFnYWluc3RcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuY2xhc3MgUGFnaW5hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIHRoZSBwYWdlIGZvciB0aGUgZ2l2ZW4gcGFnZSBuYW1lLCBhbmQgbWFrZSB0aGUgbmV4dCBBUEkgY2FsbCBiYXNlZCBvblxuICAgKiB0aGUgcHJldmlvdXMgcmVxdWVzdCBtYWRlLlxuICAgKlxuICAgKiBAcGFyYW0gIHt0eXBlfSBwYWdlTmFtZSB0aGUgbmFtZSBvZiB0aGUgcGFnZSB0byBmZXRjaCwgc2hvdWxkIGJlIGF2YWlsYWJsZVxuICAgKiAgICBhcyBhIGxpbmsgaW4gdGhlIG1ldGEgbGlua3MgaW4gdGhlIHJlc3BvbnNlXG4gICAqIEBwYXJhbSAge3R5cGV9IHJlc3BvbnNlIHRoZSByZXNwb25zZSBjb250YWluaW5nIHRoZSBsaW5rcyB0byB0aGUgbmV4dCBwYWdlcyxcbiAgICogICBhbmQgdGhlIHJlcXVlc3QgdXNlZCB0byBtYWtlIHRoZSBwcmV2aW91cyBjYWxsXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcGFnZShwYWdlTmFtZSwgcmVzcG9uc2UpIHtcbiAgICBsZXQgcGFnZU51bWJlciA9IHRoaXMucGFnZU51bWJlcihyZXNwb25zZSwgcGFnZU5hbWUpO1xuXG4gICAgaWYgKHBhZ2VOdW1iZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGwocmVzcG9uc2UucmVxdWVzdCwgcGFnZU51bWJlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm51bGxQcm9taXNlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUFJJVkFURVxuXG5cbiAgLyoqXG4gICAqIE1ha2VzIGEgbmV3IGNhbGwgZm9yIHRoZSBuZXcgcGFnZSBudW1iZXJcbiAgICpcbiAgICogQHBhcmFtICB7dHlwZX0gcmVxdWVzdCAgICB0aGUgcmVxdWVzdCB1c2VkIHRvIG1ha2UgdGhlIHByZXZpb3VzIGNhbGxcbiAgICogQHBhcmFtICB7dHlwZX0gcGFnZU51bWJlciB0aGUgcGFnZSBudW1iZXIgdG8gZmV0Y2hcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsbChyZXF1ZXN0LCBwYWdlTnVtYmVyKSB7XG4gICAgbGV0IHBhcmFtcyA9IHJlcXVlc3QucGFyYW1zIHx8IHt9O1xuICAgIHBhcmFtc1sncGFnZSddID0gcGFyYW1zWydwYWdlJ10gfHwge307XG4gICAgcGFyYW1zWydwYWdlJ11bJ29mZnNldCddID0gcGFnZU51bWJlcjtcblxuICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KFxuICAgICAgcmVxdWVzdC52ZXJiLFxuICAgICAgcmVxdWVzdC5wYXRoLFxuICAgICAgcGFyYW1zXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byBkZXRlcm1pbmUgdGhlIHBhZ2UgbnVtYmVyIGZyb20gdGhlIHBhZ2UgbmFtZS4gSWYgbm90IHByZXNlbnQsIGl0XG4gICAqIGp1c3QgcmV0dXJucyBudWxsXG4gICAqXG4gICAqIEBwYXJhbSAge3R5cGV9IHJlc3BvbnNlIHRoZSByZXNwb25zZSBjb250YWluaW5nIHRoZSBsaW5rcyB0byB0aGUgbmV4dCBwYWdlc1xuICAgKiBAcGFyYW0gIHt0eXBlfSBwYWdlTmFtZSB0aGUgbmFtZSBvZiB0aGUgcGFnZSB0byBmZXRjaFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwYWdlTnVtYmVyKHJlc3BvbnNlLCBwYWdlTmFtZSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0WydtZXRhJ11bJ2xpbmtzJ11bcGFnZU5hbWVdXG4gICAgICAgIC5zcGxpdCgncGFnZSU1Qm9mZnNldCU1RD0nKVsxXS5zcGxpdCgnJicpWzBdO1xuICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBQcm9taXNlIHRoYXQgYWx3YXlzIHJlc29sdmVzIHRvIG51bGxcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZX0gYSBQcm9taXNlIHRoYXQgYWx3YXlzIHJlc29sdmVzIHRvIG51bGxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG51bGxQcm9taXNlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUobnVsbCk7IH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBLElBTU1BLFVBQVU7RUFDZCxTQUFBQSxXQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixVQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFWRSxPQUFBRSxZQUFBLENBQUFILFVBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBV0EsU0FBQUMsSUFBSUEsQ0FBQ0MsUUFBUSxFQUFFQyxRQUFRLEVBQUU7TUFDdkIsSUFBSUMsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxDQUFDRCxRQUFRLEVBQUVELFFBQVEsQ0FBQztNQUVwRCxJQUFJRSxVQUFVLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixRQUFRLENBQUNHLE9BQU8sRUFBRUYsVUFBVSxDQUFDO01BQ2hELENBQUMsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDRyxXQUFXLENBQUMsQ0FBQztNQUMzQjtJQUNGOztJQUVBOztJQUdBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFQRTtJQUFBUixHQUFBO0lBQUFDLEtBQUEsRUFRQSxTQUFBSyxJQUFJQSxDQUFDQyxPQUFPLEVBQUVGLFVBQVUsRUFBRTtNQUN4QixJQUFJSSxNQUFNLEdBQUdGLE9BQU8sQ0FBQ0UsTUFBTSxJQUFJLENBQUMsQ0FBQztNQUNqQ0EsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQ3JDQSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUdKLFVBQVU7TUFFckMsT0FBTyxJQUFJLENBQUNSLE1BQU0sQ0FBQ1UsT0FBTyxDQUN4QkEsT0FBTyxDQUFDRyxJQUFJLEVBQ1pILE9BQU8sQ0FBQ0ksSUFBSSxFQUNaRixNQUNGLENBQUM7SUFDSDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFSRTtJQUFBVCxHQUFBO0lBQUFDLEtBQUEsRUFTQSxTQUFBSSxVQUFVQSxDQUFDRCxRQUFRLEVBQUVELFFBQVEsRUFBRTtNQUM3QixJQUFJO1FBQ0YsT0FBT0MsUUFBUSxDQUFDUSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUNULFFBQVEsQ0FBQyxDQUM5Q1UsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDaEQsQ0FBQyxDQUFDLE9BQU9DLFNBQVMsRUFBRTtRQUNsQixPQUFPLElBQUk7TUFDYjtJQUNGOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUFkLEdBQUE7SUFBQUMsS0FBQSxFQU1BLFNBQUFPLFdBQVdBLENBQUEsRUFBRztNQUNaLE9BQU8sSUFBSU8sT0FBTyxDQUFDLFVBQVNDLE9BQU8sRUFBRTtRQUFFQSxPQUFPLENBQUMsSUFBSSxDQUFDO01BQUUsQ0FBQyxDQUFDO0lBQzFEO0VBQUM7QUFBQTtBQUFBLElBQUFDLFFBQUEsR0FBQUMsT0FBQSxjQUdZdEIsVUFBVTtBQUFBdUIsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==