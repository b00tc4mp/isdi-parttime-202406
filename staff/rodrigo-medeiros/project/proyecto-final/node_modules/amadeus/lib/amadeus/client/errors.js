"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnknownError = exports.ServerError = exports.ResponseError = exports.ParserError = exports.NotFoundError = exports.NetworkError = exports.ClientError = exports.AuthenticationError = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * The error that is passed to the Promise when the API call fails.
 *
 * @param {Response} response the {@link Response} object containing the raw
 *  http response and the {@link Request} instance that made the API call.
 * @property {Response} response the {@link Response} object containing the raw
 *  http response and the {@link Request} instance that made the API call.
 * @property {string} code a unique code for this type of error. Options include
 *  `NetworkError`, `ParserError`, `ResponseError`, `ServerError`,
 *  `AuthenticationError`, `NotFoundError` and `UnknownError`
 *  from the  {@link Response}'s parsed data
 */
var ResponseError = exports.ResponseError = /*#__PURE__*/function () {
  function ResponseError(response) {
    _classCallCheck(this, ResponseError);
    this.response = response;
    this.determineDescription();
  }

  // PRIVATE
  return _createClass(ResponseError, [{
    key: "determineDescription",
    value: function determineDescription() {
      if (!this.response || !this.response.parsed) {
        this.description = null;
        return;
      }
      var result = this.response.result;
      if (result && result.errors) {
        this.description = result.errors;
      } else if (result) {
        this.description = result;
      }
      return;
    }
  }]);
}(); // Protected
var NetworkError = exports.NetworkError = /*#__PURE__*/function (_ResponseError) {
  function NetworkError() {
    var _this;
    _classCallCheck(this, NetworkError);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, NetworkError, [].concat(args));
    _this.code = 'NetworkError';
    return _this;
  }
  _inherits(NetworkError, _ResponseError);
  return _createClass(NetworkError);
}(ResponseError);
var ParserError = exports.ParserError = /*#__PURE__*/function (_ResponseError2) {
  function ParserError() {
    var _this2;
    _classCallCheck(this, ParserError);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this2 = _callSuper(this, ParserError, [].concat(args));
    _this2.code = 'ParserError';
    return _this2;
  }
  _inherits(ParserError, _ResponseError2);
  return _createClass(ParserError);
}(ResponseError);
var ServerError = exports.ServerError = /*#__PURE__*/function (_ResponseError3) {
  function ServerError() {
    var _this3;
    _classCallCheck(this, ServerError);
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    _this3 = _callSuper(this, ServerError, [].concat(args));
    _this3.code = 'ServerError';
    return _this3;
  }
  _inherits(ServerError, _ResponseError3);
  return _createClass(ServerError);
}(ResponseError);
var ClientError = exports.ClientError = /*#__PURE__*/function (_ResponseError4) {
  function ClientError() {
    var _this4;
    _classCallCheck(this, ClientError);
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    _this4 = _callSuper(this, ClientError, [].concat(args));
    _this4.code = 'ClientError';
    return _this4;
  }
  _inherits(ClientError, _ResponseError4);
  return _createClass(ClientError);
}(ResponseError);
var AuthenticationError = exports.AuthenticationError = /*#__PURE__*/function (_ResponseError5) {
  function AuthenticationError() {
    var _this5;
    _classCallCheck(this, AuthenticationError);
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    _this5 = _callSuper(this, AuthenticationError, [].concat(args));
    _this5.code = 'AuthenticationError';
    return _this5;
  }
  _inherits(AuthenticationError, _ResponseError5);
  return _createClass(AuthenticationError);
}(ResponseError);
var NotFoundError = exports.NotFoundError = /*#__PURE__*/function (_ResponseError6) {
  function NotFoundError() {
    var _this6;
    _classCallCheck(this, NotFoundError);
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    _this6 = _callSuper(this, NotFoundError, [].concat(args));
    _this6.code = 'NotFoundError';
    return _this6;
  }
  _inherits(NotFoundError, _ResponseError6);
  return _createClass(NotFoundError);
}(ResponseError);
var UnknownError = exports.UnknownError = /*#__PURE__*/function (_ResponseError7) {
  function UnknownError() {
    var _this7;
    _classCallCheck(this, UnknownError);
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }
    _this7 = _callSuper(this, UnknownError, [].concat(args));
    _this7.code = 'UnknownError';
    return _this7;
  }
  _inherits(UnknownError, _ResponseError7);
  return _createClass(UnknownError);
}(ResponseError);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZXNwb25zZUVycm9yIiwiZXhwb3J0cyIsInJlc3BvbnNlIiwiX2NsYXNzQ2FsbENoZWNrIiwiZGV0ZXJtaW5lRGVzY3JpcHRpb24iLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInBhcnNlZCIsImRlc2NyaXB0aW9uIiwicmVzdWx0IiwiZXJyb3JzIiwiTmV0d29ya0Vycm9yIiwiX1Jlc3BvbnNlRXJyb3IiLCJfdGhpcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiX2NhbGxTdXBlciIsImNvbmNhdCIsImNvZGUiLCJfaW5oZXJpdHMiLCJQYXJzZXJFcnJvciIsIl9SZXNwb25zZUVycm9yMiIsIl90aGlzMiIsIl9sZW4yIiwiX2tleTIiLCJTZXJ2ZXJFcnJvciIsIl9SZXNwb25zZUVycm9yMyIsIl90aGlzMyIsIl9sZW4zIiwiX2tleTMiLCJDbGllbnRFcnJvciIsIl9SZXNwb25zZUVycm9yNCIsIl90aGlzNCIsIl9sZW40IiwiX2tleTQiLCJBdXRoZW50aWNhdGlvbkVycm9yIiwiX1Jlc3BvbnNlRXJyb3I1IiwiX3RoaXM1IiwiX2xlbjUiLCJfa2V5NSIsIk5vdEZvdW5kRXJyb3IiLCJfUmVzcG9uc2VFcnJvcjYiLCJfdGhpczYiLCJfbGVuNiIsIl9rZXk2IiwiVW5rbm93bkVycm9yIiwiX1Jlc3BvbnNlRXJyb3I3IiwiX3RoaXM3IiwiX2xlbjciLCJfa2V5NyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL2NsaWVudC9lcnJvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFRoZSBlcnJvciB0aGF0IGlzIHBhc3NlZCB0byB0aGUgUHJvbWlzZSB3aGVuIHRoZSBBUEkgY2FsbCBmYWlscy5cbiAqXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNwb25zZSB0aGUge0BsaW5rIFJlc3BvbnNlfSBvYmplY3QgY29udGFpbmluZyB0aGUgcmF3XG4gKiAgaHR0cCByZXNwb25zZSBhbmQgdGhlIHtAbGluayBSZXF1ZXN0fSBpbnN0YW5jZSB0aGF0IG1hZGUgdGhlIEFQSSBjYWxsLlxuICogQHByb3BlcnR5IHtSZXNwb25zZX0gcmVzcG9uc2UgdGhlIHtAbGluayBSZXNwb25zZX0gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJhd1xuICogIGh0dHAgcmVzcG9uc2UgYW5kIHRoZSB7QGxpbmsgUmVxdWVzdH0gaW5zdGFuY2UgdGhhdCBtYWRlIHRoZSBBUEkgY2FsbC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb2RlIGEgdW5pcXVlIGNvZGUgZm9yIHRoaXMgdHlwZSBvZiBlcnJvci4gT3B0aW9ucyBpbmNsdWRlXG4gKiAgYE5ldHdvcmtFcnJvcmAsIGBQYXJzZXJFcnJvcmAsIGBSZXNwb25zZUVycm9yYCwgYFNlcnZlckVycm9yYCxcbiAqICBgQXV0aGVudGljYXRpb25FcnJvcmAsIGBOb3RGb3VuZEVycm9yYCBhbmQgYFVua25vd25FcnJvcmBcbiAqICBmcm9tIHRoZSAge0BsaW5rIFJlc3BvbnNlfSdzIHBhcnNlZCBkYXRhXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNwb25zZUVycm9yIHtcbiAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgdGhpcy5kZXRlcm1pbmVEZXNjcmlwdGlvbigpO1xuICB9XG5cbiAgLy8gUFJJVkFURVxuXG4gIGRldGVybWluZURlc2NyaXB0aW9uKCkge1xuICAgIGlmICghdGhpcy5yZXNwb25zZSB8fCAhdGhpcy5yZXNwb25zZS5wYXJzZWQpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5yZXNwb25zZS5yZXN1bHQ7XG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZXJyb3JzKSB7IHRoaXMuZGVzY3JpcHRpb24gPSByZXN1bHQuZXJyb3JzOyB9XG4gICAgZWxzZSBpZiAocmVzdWx0KSB7IHRoaXMuZGVzY3JpcHRpb24gPSByZXN1bHQ7IH1cbiAgICByZXR1cm47XG4gIH1cbn1cblxuLy8gUHJvdGVjdGVkXG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrRXJyb3IgZXh0ZW5kcyBSZXNwb25zZUVycm9yIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29kZSA9ICdOZXR3b3JrRXJyb3InO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXJFcnJvciBleHRlbmRzIFJlc3BvbnNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb2RlID0gJ1BhcnNlckVycm9yJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3IgZXh0ZW5kcyBSZXNwb25zZUVycm9yIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29kZSA9ICdTZXJ2ZXJFcnJvcic7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsaWVudEVycm9yIGV4dGVuZHMgUmVzcG9uc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvZGUgPSAnQ2xpZW50RXJyb3InO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkVycm9yIGV4dGVuZHMgUmVzcG9uc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvZGUgPSAnQXV0aGVudGljYXRpb25FcnJvcic7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBSZXNwb25zZUVycm9yIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29kZSA9ICdOb3RGb3VuZEVycm9yJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVW5rbm93bkVycm9yIGV4dGVuZHMgUmVzcG9uc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvZGUgPSAnVW5rbm93bkVycm9yJztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEEsSUFZYUEsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUE7RUFDeEIsU0FBQUEsY0FBWUUsUUFBUSxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsYUFBQTtJQUNwQixJQUFJLENBQUNFLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNFLG9CQUFvQixDQUFDLENBQUM7RUFDN0I7O0VBRUE7RUFBQSxPQUFBQyxZQUFBLENBQUFMLGFBQUE7SUFBQU0sR0FBQTtJQUFBQyxLQUFBLEVBRUEsU0FBQUgsb0JBQW9CQSxDQUFBLEVBQUc7TUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQ0YsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDQSxRQUFRLENBQUNNLE1BQU0sRUFBRTtRQUMzQyxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJO1FBQ3ZCO01BQ0Y7TUFDQSxJQUFJQyxNQUFNLEdBQUcsSUFBSSxDQUFDUixRQUFRLENBQUNRLE1BQU07TUFDakMsSUFBSUEsTUFBTSxJQUFJQSxNQUFNLENBQUNDLE1BQU0sRUFBRTtRQUFFLElBQUksQ0FBQ0YsV0FBVyxHQUFHQyxNQUFNLENBQUNDLE1BQU07TUFBRSxDQUFDLE1BQzdELElBQUlELE1BQU0sRUFBRTtRQUFFLElBQUksQ0FBQ0QsV0FBVyxHQUFHQyxNQUFNO01BQUU7TUFDOUM7SUFDRjtFQUFDO0FBQUEsS0FHSDtBQUFBLElBRWFFLFlBQVksR0FBQVgsT0FBQSxDQUFBVyxZQUFBLDBCQUFBQyxjQUFBO0VBQ3ZCLFNBQUFELGFBQUEsRUFBcUI7SUFBQSxJQUFBRSxLQUFBO0lBQUFYLGVBQUEsT0FBQVMsWUFBQTtJQUFBLFNBQUFHLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQU5DLElBQUksT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBSkYsSUFBSSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQ2pCTixLQUFBLEdBQUFPLFVBQUEsT0FBQVQsWUFBQSxLQUFBVSxNQUFBLENBQVNKLElBQUk7SUFDYkosS0FBQSxDQUFLUyxJQUFJLEdBQUcsY0FBYztJQUFDLE9BQUFULEtBQUE7RUFDN0I7RUFBQ1UsU0FBQSxDQUFBWixZQUFBLEVBQUFDLGNBQUE7RUFBQSxPQUFBUixZQUFBLENBQUFPLFlBQUE7QUFBQSxFQUorQlosYUFBYTtBQUFBLElBT2xDeUIsV0FBVyxHQUFBeEIsT0FBQSxDQUFBd0IsV0FBQSwwQkFBQUMsZUFBQTtFQUN0QixTQUFBRCxZQUFBLEVBQXFCO0lBQUEsSUFBQUUsTUFBQTtJQUFBeEIsZUFBQSxPQUFBc0IsV0FBQTtJQUFBLFNBQUFHLEtBQUEsR0FBQVosU0FBQSxDQUFBQyxNQUFBLEVBQU5DLElBQUksT0FBQUMsS0FBQSxDQUFBUyxLQUFBLEdBQUFDLEtBQUEsTUFBQUEsS0FBQSxHQUFBRCxLQUFBLEVBQUFDLEtBQUE7TUFBSlgsSUFBSSxDQUFBVyxLQUFBLElBQUFiLFNBQUEsQ0FBQWEsS0FBQTtJQUFBO0lBQ2pCRixNQUFBLEdBQUFOLFVBQUEsT0FBQUksV0FBQSxLQUFBSCxNQUFBLENBQVNKLElBQUk7SUFDYlMsTUFBQSxDQUFLSixJQUFJLEdBQUcsYUFBYTtJQUFDLE9BQUFJLE1BQUE7RUFDNUI7RUFBQ0gsU0FBQSxDQUFBQyxXQUFBLEVBQUFDLGVBQUE7RUFBQSxPQUFBckIsWUFBQSxDQUFBb0IsV0FBQTtBQUFBLEVBSjhCekIsYUFBYTtBQUFBLElBT2pDOEIsV0FBVyxHQUFBN0IsT0FBQSxDQUFBNkIsV0FBQSwwQkFBQUMsZUFBQTtFQUN0QixTQUFBRCxZQUFBLEVBQXFCO0lBQUEsSUFBQUUsTUFBQTtJQUFBN0IsZUFBQSxPQUFBMkIsV0FBQTtJQUFBLFNBQUFHLEtBQUEsR0FBQWpCLFNBQUEsQ0FBQUMsTUFBQSxFQUFOQyxJQUFJLE9BQUFDLEtBQUEsQ0FBQWMsS0FBQSxHQUFBQyxLQUFBLE1BQUFBLEtBQUEsR0FBQUQsS0FBQSxFQUFBQyxLQUFBO01BQUpoQixJQUFJLENBQUFnQixLQUFBLElBQUFsQixTQUFBLENBQUFrQixLQUFBO0lBQUE7SUFDakJGLE1BQUEsR0FBQVgsVUFBQSxPQUFBUyxXQUFBLEtBQUFSLE1BQUEsQ0FBU0osSUFBSTtJQUNiYyxNQUFBLENBQUtULElBQUksR0FBRyxhQUFhO0lBQUMsT0FBQVMsTUFBQTtFQUM1QjtFQUFDUixTQUFBLENBQUFNLFdBQUEsRUFBQUMsZUFBQTtFQUFBLE9BQUExQixZQUFBLENBQUF5QixXQUFBO0FBQUEsRUFKOEI5QixhQUFhO0FBQUEsSUFPakNtQyxXQUFXLEdBQUFsQyxPQUFBLENBQUFrQyxXQUFBLDBCQUFBQyxlQUFBO0VBQ3RCLFNBQUFELFlBQUEsRUFBcUI7SUFBQSxJQUFBRSxNQUFBO0lBQUFsQyxlQUFBLE9BQUFnQyxXQUFBO0lBQUEsU0FBQUcsS0FBQSxHQUFBdEIsU0FBQSxDQUFBQyxNQUFBLEVBQU5DLElBQUksT0FBQUMsS0FBQSxDQUFBbUIsS0FBQSxHQUFBQyxLQUFBLE1BQUFBLEtBQUEsR0FBQUQsS0FBQSxFQUFBQyxLQUFBO01BQUpyQixJQUFJLENBQUFxQixLQUFBLElBQUF2QixTQUFBLENBQUF1QixLQUFBO0lBQUE7SUFDakJGLE1BQUEsR0FBQWhCLFVBQUEsT0FBQWMsV0FBQSxLQUFBYixNQUFBLENBQVNKLElBQUk7SUFDYm1CLE1BQUEsQ0FBS2QsSUFBSSxHQUFHLGFBQWE7SUFBQyxPQUFBYyxNQUFBO0VBQzVCO0VBQUNiLFNBQUEsQ0FBQVcsV0FBQSxFQUFBQyxlQUFBO0VBQUEsT0FBQS9CLFlBQUEsQ0FBQThCLFdBQUE7QUFBQSxFQUo4Qm5DLGFBQWE7QUFBQSxJQU9qQ3dDLG1CQUFtQixHQUFBdkMsT0FBQSxDQUFBdUMsbUJBQUEsMEJBQUFDLGVBQUE7RUFDOUIsU0FBQUQsb0JBQUEsRUFBcUI7SUFBQSxJQUFBRSxNQUFBO0lBQUF2QyxlQUFBLE9BQUFxQyxtQkFBQTtJQUFBLFNBQUFHLEtBQUEsR0FBQTNCLFNBQUEsQ0FBQUMsTUFBQSxFQUFOQyxJQUFJLE9BQUFDLEtBQUEsQ0FBQXdCLEtBQUEsR0FBQUMsS0FBQSxNQUFBQSxLQUFBLEdBQUFELEtBQUEsRUFBQUMsS0FBQTtNQUFKMUIsSUFBSSxDQUFBMEIsS0FBQSxJQUFBNUIsU0FBQSxDQUFBNEIsS0FBQTtJQUFBO0lBQ2pCRixNQUFBLEdBQUFyQixVQUFBLE9BQUFtQixtQkFBQSxLQUFBbEIsTUFBQSxDQUFTSixJQUFJO0lBQ2J3QixNQUFBLENBQUtuQixJQUFJLEdBQUcscUJBQXFCO0lBQUMsT0FBQW1CLE1BQUE7RUFDcEM7RUFBQ2xCLFNBQUEsQ0FBQWdCLG1CQUFBLEVBQUFDLGVBQUE7RUFBQSxPQUFBcEMsWUFBQSxDQUFBbUMsbUJBQUE7QUFBQSxFQUpzQ3hDLGFBQWE7QUFBQSxJQU96QzZDLGFBQWEsR0FBQTVDLE9BQUEsQ0FBQTRDLGFBQUEsMEJBQUFDLGVBQUE7RUFDeEIsU0FBQUQsY0FBQSxFQUFxQjtJQUFBLElBQUFFLE1BQUE7SUFBQTVDLGVBQUEsT0FBQTBDLGFBQUE7SUFBQSxTQUFBRyxLQUFBLEdBQUFoQyxTQUFBLENBQUFDLE1BQUEsRUFBTkMsSUFBSSxPQUFBQyxLQUFBLENBQUE2QixLQUFBLEdBQUFDLEtBQUEsTUFBQUEsS0FBQSxHQUFBRCxLQUFBLEVBQUFDLEtBQUE7TUFBSi9CLElBQUksQ0FBQStCLEtBQUEsSUFBQWpDLFNBQUEsQ0FBQWlDLEtBQUE7SUFBQTtJQUNqQkYsTUFBQSxHQUFBMUIsVUFBQSxPQUFBd0IsYUFBQSxLQUFBdkIsTUFBQSxDQUFTSixJQUFJO0lBQ2I2QixNQUFBLENBQUt4QixJQUFJLEdBQUcsZUFBZTtJQUFDLE9BQUF3QixNQUFBO0VBQzlCO0VBQUN2QixTQUFBLENBQUFxQixhQUFBLEVBQUFDLGVBQUE7RUFBQSxPQUFBekMsWUFBQSxDQUFBd0MsYUFBQTtBQUFBLEVBSmdDN0MsYUFBYTtBQUFBLElBT25Da0QsWUFBWSxHQUFBakQsT0FBQSxDQUFBaUQsWUFBQSwwQkFBQUMsZUFBQTtFQUN2QixTQUFBRCxhQUFBLEVBQXFCO0lBQUEsSUFBQUUsTUFBQTtJQUFBakQsZUFBQSxPQUFBK0MsWUFBQTtJQUFBLFNBQUFHLEtBQUEsR0FBQXJDLFNBQUEsQ0FBQUMsTUFBQSxFQUFOQyxJQUFJLE9BQUFDLEtBQUEsQ0FBQWtDLEtBQUEsR0FBQUMsS0FBQSxNQUFBQSxLQUFBLEdBQUFELEtBQUEsRUFBQUMsS0FBQTtNQUFKcEMsSUFBSSxDQUFBb0MsS0FBQSxJQUFBdEMsU0FBQSxDQUFBc0MsS0FBQTtJQUFBO0lBQ2pCRixNQUFBLEdBQUEvQixVQUFBLE9BQUE2QixZQUFBLEtBQUE1QixNQUFBLENBQVNKLElBQUk7SUFDYmtDLE1BQUEsQ0FBSzdCLElBQUksR0FBRyxjQUFjO0lBQUMsT0FBQTZCLE1BQUE7RUFDN0I7RUFBQzVCLFNBQUEsQ0FBQTBCLFlBQUEsRUFBQUMsZUFBQTtFQUFBLE9BQUE5QyxZQUFBLENBQUE2QyxZQUFBO0FBQUEsRUFKK0JsRCxhQUFhIiwiaWdub3JlTGlzdCI6W119