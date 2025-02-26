"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _response = _interopRequireDefault(require("./response"));
var _util = _interopRequireDefault(require("util"));
var _errors = require("./errors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Listen to changes in the HTTP request and build Response/ResponseError
 * objects accordingly.
 *
 * @param {Request} request the request object used to make the call
 * @param {EventEmitter} emitter a Node event emitter
 * @param {Client} client the client instance to log results to
 * @protected
 */
var Listener = /*#__PURE__*/function () {
  function Listener(request, emitter, client) {
    _classCallCheck(this, Listener);
    this.request = request;
    this.emitter = emitter;
    this.client = client;
  }

  // PROTECTED

  /**
   * Listens to various events on the http_response object, listening for data,
   * connections closing for bad reasons, and the end of the response.
   *
   * Used by the Client when making an API call.
   *
   * @param  {Object} http_response a Node http response object
   * @protected
   */
  return _createClass(Listener, [{
    key: "onResponse",
    value: function onResponse(http_response) {
      var response = new _response["default"](http_response, this.request);
      http_response.on('data', response.addChunk.bind(response));
      http_response.on('end', this.onEnd(response).bind(this));
      http_response.on('close', this.onNetworkError(response).bind(this));
      http_response.on('error', this.onNetworkError(response).bind(this));
    }

    /**
     * Listens to a network error when making an API call.
     *
     * Used by the Client when making an API call.
     *
     * @param  {Object} http_response a Node http response object
     * @protected
     */
  }, {
    key: "onError",
    value: function onError(http_response) {
      var response = new _response["default"](http_response, this.request);
      this.onNetworkError(response)();
    }

    // PRIVATE

    /**
     * When the connection ends, check if the response can be parsed or not and
     * act accordingly.
     *
     * @param  {Response} response
     */
  }, {
    key: "onEnd",
    value: function onEnd(response) {
      var _this = this;
      return function () {
        response.parse();
        if (response.success()) {
          _this.onSuccess(response);
        } else {
          _this.onFail(response);
        }
      };
    }

    /**
     * When the response was successful, resolve the promise and return the
     * response object
     *
     * @param  {Response} response
     */
  }, {
    key: "onSuccess",
    value: function onSuccess(response) {
      this.log(response);
      this.emitter.emit('resolve', response);
    }

    /**
     * When the connection was not successful, determine the reason and resolve
     * the promise accordingly.
     *
     * @param  {Response} response
     */
  }, {
    key: "onFail",
    value: function onFail(response) {
      var Error = this.errorFor(response);
      var error = new Error(response);
      this.log(response, error);
      this.emitter.emit('reject', error);
    }

    /**
     * Find the right error for the given response.
     *
     * @param {Response} reponse
     * @returns {ResponseError}
     */
  }, {
    key: "errorFor",
    value: function errorFor(_ref) {
      var statusCode = _ref.statusCode,
        parsed = _ref.parsed;
      var error = null;
      if (statusCode >= 500) {
        error = _errors.ServerError;
      } else if (statusCode === 401) {
        error = _errors.AuthenticationError;
      } else if (statusCode === 404) {
        error = _errors.NotFoundError;
      } else if (statusCode >= 400) {
        error = _errors.ClientError;
      } else if (!parsed) {
        error = _errors.ParserError;
      } else {
        error = _errors.UnknownError;
      }
      return error;
    }

    /**
     * When the connection ran into a network error, reject the promise with a
     * NetworkError.
     *
     * @param  {Response} response
     */
  }, {
    key: "onNetworkError",
    value: function onNetworkError(response) {
      var _this2 = this;
      return function () {
        response.parse();
        var error = new _errors.NetworkError(response);
        _this2.log(response, error);
        _this2.emitter.emit('reject', error);
      };
    }

    /**
     * Logs the response, when in debug mode
     *
     * @param  {Response} response the response object to log
     * @private
     */
  }, {
    key: "log",
    value: function log(response, error) {
      if (this.client.debug()) {
        /* istanbul ignore next */
        this.client.logger.log(_util["default"].inspect(response, false, null));
      }
      if (!this.client.debug() && this.client.warn() && error) {
        /* istanbul ignore next */
        this.client.logger.log('Amadeus', error.code, error.description);
      }
    }
  }]);
}();
var _default = exports["default"] = Listener;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVzcG9uc2UiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl91dGlsIiwiX2Vycm9ycyIsImUiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsImkiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJMaXN0ZW5lciIsInJlcXVlc3QiLCJlbWl0dGVyIiwiY2xpZW50IiwidmFsdWUiLCJvblJlc3BvbnNlIiwiaHR0cF9yZXNwb25zZSIsInJlc3BvbnNlIiwiUmVzcG9uc2UiLCJvbiIsImFkZENodW5rIiwiYmluZCIsIm9uRW5kIiwib25OZXR3b3JrRXJyb3IiLCJvbkVycm9yIiwiX3RoaXMiLCJwYXJzZSIsInN1Y2Nlc3MiLCJvblN1Y2Nlc3MiLCJvbkZhaWwiLCJsb2ciLCJlbWl0IiwiRXJyb3IiLCJlcnJvckZvciIsImVycm9yIiwiX3JlZiIsInN0YXR1c0NvZGUiLCJwYXJzZWQiLCJTZXJ2ZXJFcnJvciIsIkF1dGhlbnRpY2F0aW9uRXJyb3IiLCJOb3RGb3VuZEVycm9yIiwiQ2xpZW50RXJyb3IiLCJQYXJzZXJFcnJvciIsIlVua25vd25FcnJvciIsIl90aGlzMiIsIk5ldHdvcmtFcnJvciIsImRlYnVnIiwibG9nZ2VyIiwidXRpbCIsImluc3BlY3QiLCJ3YXJuIiwiY29kZSIsImRlc2NyaXB0aW9uIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL2NsaWVudC9saXN0ZW5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzcG9uc2UgZnJvbSAnLi9yZXNwb25zZSc7XG5pbXBvcnQgdXRpbCAgICAgZnJvbSAndXRpbCc7XG5cbmltcG9ydCB7XG4gIFNlcnZlckVycm9yLFxuICBOb3RGb3VuZEVycm9yLFxuICBDbGllbnRFcnJvcixcbiAgUGFyc2VyRXJyb3IsXG4gIFVua25vd25FcnJvcixcbiAgTmV0d29ya0Vycm9yLFxuICBBdXRoZW50aWNhdGlvbkVycm9yXG59IGZyb20gJy4vZXJyb3JzJztcblxuXG4vKipcbiAqIExpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSBIVFRQIHJlcXVlc3QgYW5kIGJ1aWxkIFJlc3BvbnNlL1Jlc3BvbnNlRXJyb3JcbiAqIG9iamVjdHMgYWNjb3JkaW5nbHkuXG4gKlxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0IHRoZSByZXF1ZXN0IG9iamVjdCB1c2VkIHRvIG1ha2UgdGhlIGNhbGxcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIGEgTm9kZSBldmVudCBlbWl0dGVyXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50IHRoZSBjbGllbnQgaW5zdGFuY2UgdG8gbG9nIHJlc3VsdHMgdG9cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuY2xhc3MgTGlzdGVuZXIge1xuICBjb25zdHJ1Y3RvcihyZXF1ZXN0LCBlbWl0dGVyLCBjbGllbnQpIHtcbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICAgIHRoaXMuZW1pdHRlciA9IGVtaXR0ZXI7XG4gICAgdGhpcy5jbGllbnQgID0gY2xpZW50O1xuICB9XG5cbiAgLy8gUFJPVEVDVEVEXG5cblxuICAvKipcbiAgICogTGlzdGVucyB0byB2YXJpb3VzIGV2ZW50cyBvbiB0aGUgaHR0cF9yZXNwb25zZSBvYmplY3QsIGxpc3RlbmluZyBmb3IgZGF0YSxcbiAgICogY29ubmVjdGlvbnMgY2xvc2luZyBmb3IgYmFkIHJlYXNvbnMsIGFuZCB0aGUgZW5kIG9mIHRoZSByZXNwb25zZS5cbiAgICpcbiAgICogVXNlZCBieSB0aGUgQ2xpZW50IHdoZW4gbWFraW5nIGFuIEFQSSBjYWxsLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGh0dHBfcmVzcG9uc2UgYSBOb2RlIGh0dHAgcmVzcG9uc2Ugb2JqZWN0XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIG9uUmVzcG9uc2UoaHR0cF9yZXNwb25zZSkge1xuICAgIGxldCByZXNwb25zZSA9IG5ldyBSZXNwb25zZShodHRwX3Jlc3BvbnNlLCB0aGlzLnJlcXVlc3QpO1xuXG4gICAgaHR0cF9yZXNwb25zZS5vbignZGF0YScsICByZXNwb25zZS5hZGRDaHVuay5iaW5kKHJlc3BvbnNlKSk7XG4gICAgaHR0cF9yZXNwb25zZS5vbignZW5kJywgICB0aGlzLm9uRW5kKHJlc3BvbnNlKS5iaW5kKHRoaXMpKTtcbiAgICBodHRwX3Jlc3BvbnNlLm9uKCdjbG9zZScsIHRoaXMub25OZXR3b3JrRXJyb3IocmVzcG9uc2UpLmJpbmQodGhpcykpO1xuICAgIGh0dHBfcmVzcG9uc2Uub24oJ2Vycm9yJywgdGhpcy5vbk5ldHdvcmtFcnJvcihyZXNwb25zZSkuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBhIG5ldHdvcmsgZXJyb3Igd2hlbiBtYWtpbmcgYW4gQVBJIGNhbGwuXG4gICAqXG4gICAqIFVzZWQgYnkgdGhlIENsaWVudCB3aGVuIG1ha2luZyBhbiBBUEkgY2FsbC5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBodHRwX3Jlc3BvbnNlIGEgTm9kZSBodHRwIHJlc3BvbnNlIG9iamVjdFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuXG4gIG9uRXJyb3IoaHR0cF9yZXNwb25zZSkge1xuICAgIGxldCByZXNwb25zZSA9IG5ldyBSZXNwb25zZShodHRwX3Jlc3BvbnNlLCB0aGlzLnJlcXVlc3QpO1xuICAgIHRoaXMub25OZXR3b3JrRXJyb3IocmVzcG9uc2UpKCk7XG4gIH1cblxuICAvLyBQUklWQVRFXG5cblxuICAvKipcbiAgICogV2hlbiB0aGUgY29ubmVjdGlvbiBlbmRzLCBjaGVjayBpZiB0aGUgcmVzcG9uc2UgY2FuIGJlIHBhcnNlZCBvciBub3QgYW5kXG4gICAqIGFjdCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQHBhcmFtICB7UmVzcG9uc2V9IHJlc3BvbnNlXG4gICAqL1xuICBvbkVuZChyZXNwb25zZSkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXNwb25zZS5wYXJzZSgpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MoKSkgeyB0aGlzLm9uU3VjY2VzcyhyZXNwb25zZSk7IH1cbiAgICAgIGVsc2UgeyB0aGlzLm9uRmFpbChyZXNwb25zZSk7ICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSByZXNwb25zZSB3YXMgc3VjY2Vzc2Z1bCwgcmVzb2x2ZSB0aGUgcHJvbWlzZSBhbmQgcmV0dXJuIHRoZVxuICAgKiByZXNwb25zZSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtICB7UmVzcG9uc2V9IHJlc3BvbnNlXG4gICAqL1xuICBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICB0aGlzLmxvZyhyZXNwb25zZSk7XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoJ3Jlc29sdmUnLCByZXNwb25zZSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGUgY29ubmVjdGlvbiB3YXMgbm90IHN1Y2Nlc3NmdWwsIGRldGVybWluZSB0aGUgcmVhc29uIGFuZCByZXNvbHZlXG4gICAqIHRoZSBwcm9taXNlIGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAcGFyYW0gIHtSZXNwb25zZX0gcmVzcG9uc2VcbiAgICovXG4gIG9uRmFpbChyZXNwb25zZSkge1xuICAgIGxldCBFcnJvciA9IHRoaXMuZXJyb3JGb3IocmVzcG9uc2UpO1xuICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZSk7XG4gICAgdGhpcy5sb2cocmVzcG9uc2UsIGVycm9yKTtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgncmVqZWN0JywgZXJyb3IpO1xuICB9XG5cblxuICAvKipcbiAgICogRmluZCB0aGUgcmlnaHQgZXJyb3IgZm9yIHRoZSBnaXZlbiByZXNwb25zZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVwb25zZVxuICAgKiBAcmV0dXJucyB7UmVzcG9uc2VFcnJvcn1cbiAgICovXG4gIGVycm9yRm9yKHtzdGF0dXNDb2RlLCBwYXJzZWR9KSB7XG4gICAgbGV0IGVycm9yID0gbnVsbDtcbiAgICBpZiAoc3RhdHVzQ29kZSA+PSA1MDApIHsgZXJyb3IgPSBTZXJ2ZXJFcnJvcjsgfVxuICAgIGVsc2UgaWYgKHN0YXR1c0NvZGUgPT09IDQwMSkgeyBlcnJvciA9IEF1dGhlbnRpY2F0aW9uRXJyb3I7IH1cbiAgICBlbHNlIGlmIChzdGF0dXNDb2RlID09PSA0MDQpIHsgZXJyb3IgPSBOb3RGb3VuZEVycm9yOyB9XG4gICAgZWxzZSBpZiAoc3RhdHVzQ29kZSA+PSA0MDApIHsgZXJyb3IgPSBDbGllbnRFcnJvcjsgfVxuICAgIGVsc2UgaWYgKCFwYXJzZWQpIHsgZXJyb3IgPSBQYXJzZXJFcnJvcjsgfVxuICAgIGVsc2UgeyBlcnJvciA9IFVua25vd25FcnJvcjsgfVxuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBjb25uZWN0aW9uIHJhbiBpbnRvIGEgbmV0d29yayBlcnJvciwgcmVqZWN0IHRoZSBwcm9taXNlIHdpdGggYVxuICAgKiBOZXR3b3JrRXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSAge1Jlc3BvbnNlfSByZXNwb25zZVxuICAgKi9cbiAgb25OZXR3b3JrRXJyb3IocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmVzcG9uc2UucGFyc2UoKTtcbiAgICAgIGxldCBlcnJvciA9IG5ldyBOZXR3b3JrRXJyb3IocmVzcG9uc2UpO1xuICAgICAgdGhpcy5sb2cocmVzcG9uc2UsIGVycm9yKTtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdyZWplY3QnLCBlcnJvcik7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dzIHRoZSByZXNwb25zZSwgd2hlbiBpbiBkZWJ1ZyBtb2RlXG4gICAqXG4gICAqIEBwYXJhbSAge1Jlc3BvbnNlfSByZXNwb25zZSB0aGUgcmVzcG9uc2Ugb2JqZWN0IHRvIGxvZ1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgbG9nKHJlc3BvbnNlLCBlcnJvcikge1xuICAgIGlmICh0aGlzLmNsaWVudC5kZWJ1ZygpKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgdGhpcy5jbGllbnQubG9nZ2VyLmxvZyh1dGlsLmluc3BlY3QocmVzcG9uc2UsIGZhbHNlLCBudWxsKSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5jbGllbnQuZGVidWcoKSAmJiB0aGlzLmNsaWVudC53YXJuKCkgJiYgZXJyb3IpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICB0aGlzLmNsaWVudC5sb2dnZXIubG9nKCdBbWFkZXVzJywgZXJyb3IuY29kZSwgZXJyb3IuZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0ZW5lcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsU0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsS0FBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBRUEsSUFBQUUsT0FBQSxHQUFBRixPQUFBO0FBUWtCLFNBQUFELHVCQUFBSSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxRQUFBQyxDQUFBLHNDQUFBRCxPQUFBLHdCQUFBRSxNQUFBLHVCQUFBQSxNQUFBLENBQUFDLFFBQUEsYUFBQUYs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