"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _events = _interopRequireDefault(require("events"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// The number of seconds before the token expires, when
// we will already try to refresh it
var TOKEN_BUFFER = 10;

/**
  * A helper library to create and maintain the OAuth2 AccessTokens between
  * requests. Keeps track of the expiry time and automatically tries to fetch
  * a new token if needed.
  *
  * @property {string} accessToken the cached current access token (bearer)
  * @property {number} expiresAt the aproximate time this token expires at
  * @protected
  */
var AccessToken = /*#__PURE__*/function () {
  function AccessToken() {
    _classCallCheck(this, AccessToken);
    this.accessToken;
    this.expiresAt;
  }

  // PROTECTED

  /**
   * Fetches or returns a cached bearer token. Used by the Client to get a
   * token before making an API call.
   *
   * @param  {Client} client the Amadeus Client to make an API call with
   * @return {Promise.<Response,ResponseError>} a Promise
   * @protected
   */
  return _createClass(AccessToken, [{
    key: "bearerToken",
    value: function bearerToken(client) {
      var emitter = new _events["default"]();
      var promise = this.promise(emitter);
      this.emitOrLoadAccessToken(client, emitter);
      return promise;
    }

    // PRIVATE

    /**
     * Builds a promise to be returned to the API user
     *
     * @param  {type} emitter the EventEmitter used to notify the Promise of
     * @return {Promise} a promise
     * @private
     */
  }, {
    key: "promise",
    value: function promise(emitter) {
      return new Promise(function (resolve, reject) {
        emitter.on('resolve', function (response) {
          return resolve(response);
        });
        emitter.on('reject', function (error) {
          return reject(error);
        });
      });
    }

    /**
     * Checks if the token needs a refresh, if not emits the cached token,
     * otherwise tries to load a new access token
     *
     * @param  {Client} client the Amadeus Client to make an API call with
     * @param  {type} emitter the EventEmitter used to emit the token
     * @private
     */
  }, {
    key: "emitOrLoadAccessToken",
    value: function emitOrLoadAccessToken(client, emitter) {
      if (this.needsLoadOrRefresh()) {
        this.loadAccessToken(client, emitter);
      } else {
        emitter.emit('resolve', this.accessToken);
      }
    }

    /**
     * Checks if the token needs a refresh or first load
     *
     * @return {boolean} wether the token needs a refresh
     * @private
     */
  }, {
    key: "needsLoadOrRefresh",
    value: function needsLoadOrRefresh() {
      return !this.accessToken || Date.now() + TOKEN_BUFFER > this.expiresAt;
    }

    /**
     * Loads the access token using the client, emits the token when it's loaded
     *
     * @param  {Client} client the Amadeus Client to make an API call with
     * @param  {type} emitter the EventEmitter used to emit the token
     * @private
     */
  }, {
    key: "loadAccessToken",
    value: function loadAccessToken(client, emitter) {
      var _this = this;
      client.unauthenticatedRequest('POST', '/v1/security/oauth2/token', {
        'grant_type': 'client_credentials',
        'client_id': client.clientId,
        'client_secret': client.clientSecret
      }).then(function (response) {
        _this.storeAccessToken(response);
        _this.emitOrLoadAccessToken(client, emitter);
      })["catch"](function (error) {
        emitter.emit('reject', error);
      });
    }

    /**
     * Stores a loaded access token, calculating the expiry date
     *
     * @param  {Response} response the response object received from the client
     * @private
     */
  }, {
    key: "storeAccessToken",
    value: function storeAccessToken(response) {
      this.accessToken = response.result['access_token'];
      this.expiresAt = Date.now() + response.result['expires_in'] * 1000;
    }
  }]);
}();
var _default = exports["default"] = AccessToken;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwidCIsImxlbmd0aCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJpIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiU3RyaW5nIiwiTnVtYmVyIiwiVE9LRU5fQlVGRkVSIiwiQWNjZXNzVG9rZW4iLCJhY2Nlc3NUb2tlbiIsImV4cGlyZXNBdCIsInZhbHVlIiwiYmVhcmVyVG9rZW4iLCJjbGllbnQiLCJlbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwicHJvbWlzZSIsImVtaXRPckxvYWRBY2Nlc3NUb2tlbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib24iLCJyZXNwb25zZSIsImVycm9yIiwibmVlZHNMb2FkT3JSZWZyZXNoIiwibG9hZEFjY2Vzc1Rva2VuIiwiZW1pdCIsIkRhdGUiLCJub3ciLCJfdGhpcyIsInVuYXV0aGVudGljYXRlZFJlcXVlc3QiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsInRoZW4iLCJzdG9yZUFjY2Vzc1Rva2VuIiwicmVzdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL2NsaWVudC9hY2Nlc3NfdG9rZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudHMnO1xuXG4vLyBUaGUgbnVtYmVyIG9mIHNlY29uZHMgYmVmb3JlIHRoZSB0b2tlbiBleHBpcmVzLCB3aGVuXG4vLyB3ZSB3aWxsIGFscmVhZHkgdHJ5IHRvIHJlZnJlc2ggaXRcbmNvbnN0IFRPS0VOX0JVRkZFUiA9IDEwO1xuXG4vKipcbiAgKiBBIGhlbHBlciBsaWJyYXJ5IHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gdGhlIE9BdXRoMiBBY2Nlc3NUb2tlbnMgYmV0d2VlblxuICAqIHJlcXVlc3RzLiBLZWVwcyB0cmFjayBvZiB0aGUgZXhwaXJ5IHRpbWUgYW5kIGF1dG9tYXRpY2FsbHkgdHJpZXMgdG8gZmV0Y2hcbiAgKiBhIG5ldyB0b2tlbiBpZiBuZWVkZWQuXG4gICpcbiAgKiBAcHJvcGVydHkge3N0cmluZ30gYWNjZXNzVG9rZW4gdGhlIGNhY2hlZCBjdXJyZW50IGFjY2VzcyB0b2tlbiAoYmVhcmVyKVxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBleHBpcmVzQXQgdGhlIGFwcm94aW1hdGUgdGltZSB0aGlzIHRva2VuIGV4cGlyZXMgYXRcbiAgKiBAcHJvdGVjdGVkXG4gICovXG5jbGFzcyBBY2Nlc3NUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWNjZXNzVG9rZW47XG4gICAgdGhpcy5leHBpcmVzQXQ7XG4gIH1cblxuICAvLyBQUk9URUNURURcblxuICAvKipcbiAgICogRmV0Y2hlcyBvciByZXR1cm5zIGEgY2FjaGVkIGJlYXJlciB0b2tlbi4gVXNlZCBieSB0aGUgQ2xpZW50IHRvIGdldCBhXG4gICAqIHRva2VuIGJlZm9yZSBtYWtpbmcgYW4gQVBJIGNhbGwuXG4gICAqXG4gICAqIEBwYXJhbSAge0NsaWVudH0gY2xpZW50IHRoZSBBbWFkZXVzIENsaWVudCB0byBtYWtlIGFuIEFQSSBjYWxsIHdpdGhcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBiZWFyZXJUb2tlbihjbGllbnQpIHtcbiAgICBsZXQgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBsZXQgcHJvbWlzZSA9IHRoaXMucHJvbWlzZShlbWl0dGVyKTtcbiAgICB0aGlzLmVtaXRPckxvYWRBY2Nlc3NUb2tlbihjbGllbnQsIGVtaXR0ZXIpO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgLy8gUFJJVkFURVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgYSBwcm9taXNlIHRvIGJlIHJldHVybmVkIHRvIHRoZSBBUEkgdXNlclxuICAgKlxuICAgKiBAcGFyYW0gIHt0eXBlfSBlbWl0dGVyIHRoZSBFdmVudEVtaXR0ZXIgdXNlZCB0byBub3RpZnkgdGhlIFByb21pc2Ugb2ZcbiAgICogQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcm9taXNlKGVtaXR0ZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZW1pdHRlci5vbigncmVzb2x2ZScsIHJlc3BvbnNlID0+IHJlc29sdmUocmVzcG9uc2UpKTtcbiAgICAgIGVtaXR0ZXIub24oJ3JlamVjdCcsIGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSB0b2tlbiBuZWVkcyBhIHJlZnJlc2gsIGlmIG5vdCBlbWl0cyB0aGUgY2FjaGVkIHRva2VuLFxuICAgKiBvdGhlcndpc2UgdHJpZXMgdG8gbG9hZCBhIG5ldyBhY2Nlc3MgdG9rZW5cbiAgICpcbiAgICogQHBhcmFtICB7Q2xpZW50fSBjbGllbnQgdGhlIEFtYWRldXMgQ2xpZW50IHRvIG1ha2UgYW4gQVBJIGNhbGwgd2l0aFxuICAgKiBAcGFyYW0gIHt0eXBlfSBlbWl0dGVyIHRoZSBFdmVudEVtaXR0ZXIgdXNlZCB0byBlbWl0IHRoZSB0b2tlblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZW1pdE9yTG9hZEFjY2Vzc1Rva2VuKGNsaWVudCwgZW1pdHRlcikge1xuICAgIGlmICh0aGlzLm5lZWRzTG9hZE9yUmVmcmVzaCgpKSB7IHRoaXMubG9hZEFjY2Vzc1Rva2VuKGNsaWVudCwgZW1pdHRlcik7IH1cbiAgICBlbHNlIHsgZW1pdHRlci5lbWl0KCdyZXNvbHZlJywgdGhpcy5hY2Nlc3NUb2tlbik7IH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHRva2VuIG5lZWRzIGEgcmVmcmVzaCBvciBmaXJzdCBsb2FkXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHdldGhlciB0aGUgdG9rZW4gbmVlZHMgYSByZWZyZXNoXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBuZWVkc0xvYWRPclJlZnJlc2goKSB7XG4gICAgcmV0dXJuICF0aGlzLmFjY2Vzc1Rva2VuIHx8ICgoRGF0ZS5ub3coKSArIFRPS0VOX0JVRkZFUikgPiB0aGlzLmV4cGlyZXNBdCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgYWNjZXNzIHRva2VuIHVzaW5nIHRoZSBjbGllbnQsIGVtaXRzIHRoZSB0b2tlbiB3aGVuIGl0J3MgbG9hZGVkXG4gICAqXG4gICAqIEBwYXJhbSAge0NsaWVudH0gY2xpZW50IHRoZSBBbWFkZXVzIENsaWVudCB0byBtYWtlIGFuIEFQSSBjYWxsIHdpdGhcbiAgICogQHBhcmFtICB7dHlwZX0gZW1pdHRlciB0aGUgRXZlbnRFbWl0dGVyIHVzZWQgdG8gZW1pdCB0aGUgdG9rZW5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGxvYWRBY2Nlc3NUb2tlbihjbGllbnQsIGVtaXR0ZXIpIHtcbiAgICBjbGllbnQudW5hdXRoZW50aWNhdGVkUmVxdWVzdCgnUE9TVCcsICcvdjEvc2VjdXJpdHkvb2F1dGgyL3Rva2VuJywge1xuICAgICAgJ2dyYW50X3R5cGUnIDogJ2NsaWVudF9jcmVkZW50aWFscycsXG4gICAgICAnY2xpZW50X2lkJyA6IGNsaWVudC5jbGllbnRJZCxcbiAgICAgICdjbGllbnRfc2VjcmV0JyA6IGNsaWVudC5jbGllbnRTZWNyZXRcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5zdG9yZUFjY2Vzc1Rva2VuKHJlc3BvbnNlKTtcbiAgICAgIHRoaXMuZW1pdE9yTG9hZEFjY2Vzc1Rva2VuKGNsaWVudCwgZW1pdHRlcik7XG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ3JlamVjdCcsIGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZXMgYSBsb2FkZWQgYWNjZXNzIHRva2VuLCBjYWxjdWxhdGluZyB0aGUgZXhwaXJ5IGRhdGVcbiAgICpcbiAgICogQHBhcmFtICB7UmVzcG9uc2V9IHJlc3BvbnNlIHRoZSByZXNwb25zZSBvYmplY3QgcmVjZWl2ZWQgZnJvbSB0aGUgY2xpZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdG9yZUFjY2Vzc1Rva2VuKHJlc3BvbnNlKSB7XG4gICAgdGhpcy5hY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLnJlc3VsdFsnYWNjZXNzX3Rva2VuJ107XG4gICAgdGhpcy5leHBpcmVzQXQgPSBEYXRlLm5vdygpICsgKHJlc3BvbnNlLnJlc3VsdFsnZXhwaXJlc19pbiddICogMTAwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjZXNzVG9rZW47XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFrQyxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLGdCQUFBQSxDQUFBO0FBQUEsU0FBQUUsUUFBQUMsQ0FBQSxzQ0FBQUQsT0FBQSx3QkFBQUUsTUFBQSx1QkFBQUEsTUFBQSxDQUFBQyxRQUFBLGFBQUFGLENBQUEsa0JBQUFBLENBQUEsZ0JBQUFBLENBQUEsV0FBQUEsQ0FBQSx5QkFBQUMsTUFBQSxJQUFBRCxDQUFBLENBQUFHLFdBQUEsS0FBQUYs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