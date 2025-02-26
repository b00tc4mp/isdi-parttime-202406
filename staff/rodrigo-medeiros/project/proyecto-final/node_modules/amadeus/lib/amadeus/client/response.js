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
var JSON_CONTENT_TYPES = ['application/json', 'application/vnd.amadeus+json'];

/**
 * The response object returned for every API call.
 *
 * @param {Object} http_response the response object returned from the Node/HTTP
 *  request
 * @param {Request} request the request object used to make this API call
 *
 * @property {number} statusCode the HTTP status code for the response, if any
 * @property {string} body the raw body received from the API
 * @property {Object} result the parsed JSON received from the API
 * @property {Object} data the data attribute taken from the result
 * @property {boolean} parsed wether the raw body has been parsed into JSON
 * @property {Request} request the request object used to make this API call
 *
 */
var Response = /*#__PURE__*/function () {
  function Response(http_response, request) {
    _classCallCheck(this, Response);
    this.headers = http_response.headers || {};
    this.statusCode = http_response.statusCode;
    this.request = request;
    this.body = '';
    this.result = null;
    this.data = null;
    this.parsed = false;
  }

  // PROTECTED

  /**
   * Add a chunk received from the API to the body
   *
   * @param  {string} chunk a chunk of data
   * @protected
   */
  return _createClass(Response, [{
    key: "addChunk",
    value: function addChunk(chunk) {
      this.body += chunk;
    }

    /**
     * Tries to parse parse the raw data
     * @protected
     */
  }, {
    key: "parse",
    value: function parse() {
      try {
        if (this.statusCode === 204) {
          return;
        }
        if (this.isJson()) {
          this.result = JSON.parse(this.body);
          this.data = this.result.data;
          this.parsed = true;
        } else {
          this.parsed = false;
        }
      } catch (SyntaxError) {
        this.parsed = false;
      }
    }

    /**
     * Wether this API call can be considered a success. Used to wrap the response
     * into a ResponseError
     *
     * @return {boolean}
     * @protected
     */
  }, {
    key: "success",
    value: function success() {
      if (this.statusCode == 204) {
        return true;
      }
      if (this.parsed && this.statusCode < 300) {
        return true;
      }
    }

    // PRIVATE

    /**
     * Tests if the content is seemingly JSON
     *
     * @return {boolean}
     * @private
     */
  }, {
    key: "isJson",
    value: function isJson() {
      return JSON_CONTENT_TYPES.indexOf(this.headers['content-type']) !== -1;
    }
  }]);
}();
var _default = exports["default"] = Response;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJKU09OX0NPTlRFTlRfVFlQRVMiLCJSZXNwb25zZSIsImh0dHBfcmVzcG9uc2UiLCJyZXF1ZXN0IiwiX2NsYXNzQ2FsbENoZWNrIiwiaGVhZGVycyIsInN0YXR1c0NvZGUiLCJib2R5IiwicmVzdWx0IiwiZGF0YSIsInBhcnNlZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYWRkQ2h1bmsiLCJjaHVuayIsInBhcnNlIiwiaXNKc29uIiwiSlNPTiIsIlN5bnRheEVycm9yIiwic3VjY2VzcyIsImluZGV4T2YiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvY2xpZW50L3Jlc3BvbnNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBKU09OX0NPTlRFTlRfVFlQRVMgPSBbJ2FwcGxpY2F0aW9uL2pzb24nLCAnYXBwbGljYXRpb24vdm5kLmFtYWRldXMranNvbiddO1xuXG4vKipcbiAqIFRoZSByZXNwb25zZSBvYmplY3QgcmV0dXJuZWQgZm9yIGV2ZXJ5IEFQSSBjYWxsLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBodHRwX3Jlc3BvbnNlIHRoZSByZXNwb25zZSBvYmplY3QgcmV0dXJuZWQgZnJvbSB0aGUgTm9kZS9IVFRQXG4gKiAgcmVxdWVzdFxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0IHRoZSByZXF1ZXN0IG9iamVjdCB1c2VkIHRvIG1ha2UgdGhpcyBBUEkgY2FsbFxuICpcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGF0dXNDb2RlIHRoZSBIVFRQIHN0YXR1cyBjb2RlIGZvciB0aGUgcmVzcG9uc2UsIGlmIGFueVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGJvZHkgdGhlIHJhdyBib2R5IHJlY2VpdmVkIGZyb20gdGhlIEFQSVxuICogQHByb3BlcnR5IHtPYmplY3R9IHJlc3VsdCB0aGUgcGFyc2VkIEpTT04gcmVjZWl2ZWQgZnJvbSB0aGUgQVBJXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YSB0aGUgZGF0YSBhdHRyaWJ1dGUgdGFrZW4gZnJvbSB0aGUgcmVzdWx0XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHBhcnNlZCB3ZXRoZXIgdGhlIHJhdyBib2R5IGhhcyBiZWVuIHBhcnNlZCBpbnRvIEpTT05cbiAqIEBwcm9wZXJ0eSB7UmVxdWVzdH0gcmVxdWVzdCB0aGUgcmVxdWVzdCBvYmplY3QgdXNlZCB0byBtYWtlIHRoaXMgQVBJIGNhbGxcbiAqXG4gKi9cbmNsYXNzIFJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3IoaHR0cF9yZXNwb25zZSwgcmVxdWVzdCkge1xuICAgIHRoaXMuaGVhZGVycyA9IGh0dHBfcmVzcG9uc2UuaGVhZGVycyB8fCB7fTtcbiAgICB0aGlzLnN0YXR1c0NvZGUgID0gaHR0cF9yZXNwb25zZS5zdGF0dXNDb2RlO1xuICAgIHRoaXMucmVxdWVzdCAgICAgPSByZXF1ZXN0O1xuICAgIHRoaXMuYm9keSAgICAgICAgPSAnJztcbiAgICB0aGlzLnJlc3VsdCAgICAgID0gbnVsbDtcbiAgICB0aGlzLmRhdGEgICAgICAgID0gbnVsbDtcbiAgICB0aGlzLnBhcnNlZCAgICAgID0gZmFsc2U7XG4gIH1cblxuICAvLyBQUk9URUNURURcblxuICAvKipcbiAgICogQWRkIGEgY2h1bmsgcmVjZWl2ZWQgZnJvbSB0aGUgQVBJIHRvIHRoZSBib2R5XG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY2h1bmsgYSBjaHVuayBvZiBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGFkZENodW5rKGNodW5rKSB7XG4gICAgdGhpcy5ib2R5ICs9IGNodW5rO1xuICB9XG5cblxuICAvKipcbiAgICogVHJpZXMgdG8gcGFyc2UgcGFyc2UgdGhlIHJhdyBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHBhcnNlKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5zdGF0dXNDb2RlID09PSAyMDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNKc29uKCkpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSBKU09OLnBhcnNlKHRoaXMuYm9keSk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMucmVzdWx0LmRhdGE7XG4gICAgICAgIHRoaXMucGFyc2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFyc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoU3ludGF4RXJyb3IpIHtcbiAgICAgIHRoaXMucGFyc2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdldGhlciB0aGlzIEFQSSBjYWxsIGNhbiBiZSBjb25zaWRlcmVkIGEgc3VjY2Vzcy4gVXNlZCB0byB3cmFwIHRoZSByZXNwb25zZVxuICAgKiBpbnRvIGEgUmVzcG9uc2VFcnJvclxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBzdWNjZXNzKCkge1xuICAgIGlmICh0aGlzLnN0YXR1c0NvZGUgPT0gMjA0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFyc2VkICYmIHRoaXMuc3RhdHVzQ29kZSA8IDMwMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gUFJJVkFURVxuXG5cbiAgLyoqXG4gICAqIFRlc3RzIGlmIHRoZSBjb250ZW50IGlzIHNlZW1pbmdseSBKU09OXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc0pzb24oKSB7XG4gICAgcmV0dXJuIChKU09OX0NPTlRFTlRfVFlQRVMuaW5kZXhPZih0aGlzLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddKSAhPT0gLTEpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJ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