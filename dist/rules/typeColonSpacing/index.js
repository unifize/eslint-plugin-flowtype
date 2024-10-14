"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _evaluateFunctions = _interopRequireDefault(require("./evaluateFunctions"));
var _evaluateObjectTypeIndexer = _interopRequireDefault(require("./evaluateObjectTypeIndexer"));
var _evaluateObjectTypeProperty = _interopRequireDefault(require("./evaluateObjectTypeProperty"));
var _evaluateTypeCastExpression = _interopRequireDefault(require("./evaluateTypeCastExpression"));
var _evaluateTypical = _interopRequireDefault(require("./evaluateTypical"));
var _evaluateVariables = _interopRequireDefault(require("./evaluateVariables"));
var _reporter = _interopRequireDefault(require("./reporter"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = (direction, context, options) => {
  const report = (0, _reporter.default)(direction, context, options);
  return _objectSpread(_objectSpread({}, (0, _evaluateFunctions.default)(context, report)), {}, {
    ClassProperty: (0, _evaluateTypical.default)(context, report, 'class property'),
    ObjectTypeIndexer: (0, _evaluateObjectTypeIndexer.default)(context, report),
    ObjectTypeProperty: (0, _evaluateObjectTypeProperty.default)(context, report),
    TypeCastExpression: (0, _evaluateTypeCastExpression.default)(context, report),
    VariableDeclaration: (0, _evaluateVariables.default)(context, report)
  });
};
exports.default = _default;
module.exports = exports.default;