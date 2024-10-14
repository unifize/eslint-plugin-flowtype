"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "checkFlowFileAnnotation", {
  enumerable: true,
  get: function () {
    return _checkFlowFileAnnotation.default;
  }
});
Object.defineProperty(exports, "fuzzyStringMatch", {
  enumerable: true,
  get: function () {
    return _fuzzyStringMatch.default;
  }
});
Object.defineProperty(exports, "getParameterName", {
  enumerable: true,
  get: function () {
    return _getParameterName.default;
  }
});
Object.defineProperty(exports, "getTokenAfterParens", {
  enumerable: true,
  get: function () {
    return _getTokenAfterParens.default;
  }
});
Object.defineProperty(exports, "getTokenBeforeParens", {
  enumerable: true,
  get: function () {
    return _getTokenBeforeParens.default;
  }
});
Object.defineProperty(exports, "isFlowFile", {
  enumerable: true,
  get: function () {
    return _isFlowFile.default;
  }
});
Object.defineProperty(exports, "isFlowFileAnnotation", {
  enumerable: true,
  get: function () {
    return _isFlowFileAnnotation.default;
  }
});
Object.defineProperty(exports, "isNoFlowFile", {
  enumerable: true,
  get: function () {
    return _isNoFlowFile.default;
  }
});
Object.defineProperty(exports, "iterateFunctionNodes", {
  enumerable: true,
  get: function () {
    return _iterateFunctionNodes.default;
  }
});
Object.defineProperty(exports, "quoteName", {
  enumerable: true,
  get: function () {
    return _quoteName.default;
  }
});
exports.spacingFixers = void 0;
var spacingFixers = _interopRequireWildcard(require("./spacingFixers"));
exports.spacingFixers = spacingFixers;
var _checkFlowFileAnnotation = _interopRequireDefault(require("./checkFlowFileAnnotation"));
var _fuzzyStringMatch = _interopRequireDefault(require("./fuzzyStringMatch"));
var _getParameterName = _interopRequireDefault(require("./getParameterName"));
var _getTokenAfterParens = _interopRequireDefault(require("./getTokenAfterParens"));
var _getTokenBeforeParens = _interopRequireDefault(require("./getTokenBeforeParens"));
var _isFlowFile = _interopRequireDefault(require("./isFlowFile"));
var _isNoFlowFile = _interopRequireDefault(require("./isNoFlowFile"));
var _isFlowFileAnnotation = _interopRequireDefault(require("./isFlowFileAnnotation"));
var _iterateFunctionNodes = _interopRequireDefault(require("./iterateFunctionNodes"));
var _quoteName = _interopRequireDefault(require("./quoteName"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }