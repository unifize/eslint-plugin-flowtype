"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _recommended = _interopRequireDefault(require("./configs/recommended.json"));
var _arrayStyleComplexType = _interopRequireDefault(require("./rules/arrayStyleComplexType"));
var _arrayStyleSimpleType = _interopRequireDefault(require("./rules/arrayStyleSimpleType"));
var _arrowParens = _interopRequireDefault(require("./rules/arrowParens"));
var _booleanStyle = _interopRequireDefault(require("./rules/booleanStyle"));
var _defineFlowType = _interopRequireDefault(require("./rules/defineFlowType"));
var _delimiterDangle = _interopRequireDefault(require("./rules/delimiterDangle"));
var _enforceLineBreak = _interopRequireDefault(require("./rules/enforceLineBreak"));
var _genericSpacing = _interopRequireDefault(require("./rules/genericSpacing"));
var _interfaceIdMatch = _interopRequireDefault(require("./rules/interfaceIdMatch"));
var _newlineAfterFlowAnnotation = _interopRequireDefault(require("./rules/newlineAfterFlowAnnotation"));
var _noDupeKeys = _interopRequireDefault(require("./rules/noDupeKeys"));
var _noDuplicateTypeUnionIntersectionMembers = _interopRequireDefault(require("./rules/noDuplicateTypeUnionIntersectionMembers"));
var _noExistentialType = _interopRequireDefault(require("./rules/noExistentialType"));
var _noFlowFixMeComments = _interopRequireDefault(require("./rules/noFlowFixMeComments"));
var _noInternalFlowType = _interopRequireDefault(require("./rules/noInternalFlowType"));
var _noMixed = _interopRequireDefault(require("./rules/noMixed"));
var _noMutableArray = _interopRequireDefault(require("./rules/noMutableArray"));
var _noPrimitiveConstructorTypes = _interopRequireDefault(require("./rules/noPrimitiveConstructorTypes"));
var _noTypesMissingFileAnnotation = _interopRequireDefault(require("./rules/noTypesMissingFileAnnotation"));
var _noUnusedExpressions = _interopRequireDefault(require("./rules/noUnusedExpressions"));
var _noWeakTypes = _interopRequireDefault(require("./rules/noWeakTypes"));
var _objectTypeCurlySpacing = _interopRequireDefault(require("./rules/objectTypeCurlySpacing"));
var _objectTypeDelimiter = _interopRequireDefault(require("./rules/objectTypeDelimiter"));
var _quotes = _interopRequireDefault(require("./rules/quotes"));
var _requireCompoundTypeAlias = _interopRequireDefault(require("./rules/requireCompoundTypeAlias"));
var _requireExactType = _interopRequireDefault(require("./rules/requireExactType"));
var _requireIndexerName = _interopRequireDefault(require("./rules/requireIndexerName"));
var _requireInexactType = _interopRequireDefault(require("./rules/requireInexactType"));
var _requireParameterType = _interopRequireDefault(require("./rules/requireParameterType"));
var _requireReadonlyReactProps = _interopRequireDefault(require("./rules/requireReadonlyReactProps"));
var _requireReturnType = _interopRequireDefault(require("./rules/requireReturnType"));
var _requireTypesAtTop = _interopRequireDefault(require("./rules/requireTypesAtTop"));
var _requireValidFileAnnotation = _interopRequireDefault(require("./rules/requireValidFileAnnotation"));
var _requireVariableType = _interopRequireDefault(require("./rules/requireVariableType"));
var _semi = _interopRequireDefault(require("./rules/semi"));
var _sortKeys = _interopRequireDefault(require("./rules/sortKeys"));
var _sortTypeUnionIntersectionMembers = _interopRequireDefault(require("./rules/sortTypeUnionIntersectionMembers"));
var _spaceAfterTypeColon = _interopRequireDefault(require("./rules/spaceAfterTypeColon"));
var _spaceBeforeGenericBracket = _interopRequireDefault(require("./rules/spaceBeforeGenericBracket"));
var _spaceBeforeTypeColon = _interopRequireDefault(require("./rules/spaceBeforeTypeColon"));
var _spreadExactType = _interopRequireDefault(require("./rules/spreadExactType"));
var _typeIdMatch = _interopRequireDefault(require("./rules/typeIdMatch"));
var _typeImportStyle = _interopRequireDefault(require("./rules/typeImportStyle"));
var _unionIntersectionSpacing = _interopRequireDefault(require("./rules/unionIntersectionSpacing"));
var _useFlowType = _interopRequireDefault(require("./rules/useFlowType"));
var _useReadOnlySpread = _interopRequireDefault(require("./rules/useReadOnlySpread"));
var _validSyntax = _interopRequireDefault(require("./rules/validSyntax"));
var _utilities = require("./utilities");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const rules = {
  'array-style-complex-type': _arrayStyleComplexType.default,
  'array-style-simple-type': _arrayStyleSimpleType.default,
  'arrow-parens': _arrowParens.default,
  'boolean-style': _booleanStyle.default,
  'define-flow-type': _defineFlowType.default,
  'delimiter-dangle': _delimiterDangle.default,
  'enforce-line-break': _enforceLineBreak.default,
  'generic-spacing': _genericSpacing.default,
  'interface-id-match': _interfaceIdMatch.default,
  'newline-after-flow-annotation': _newlineAfterFlowAnnotation.default,
  'no-dupe-keys': _noDupeKeys.default,
  'no-duplicate-type-union-intersection-members': _noDuplicateTypeUnionIntersectionMembers.default,
  'no-existential-type': _noExistentialType.default,
  'no-flow-fix-me-comments': _noFlowFixMeComments.default,
  'no-internal-flow-type': _noInternalFlowType.default,
  'no-mixed': _noMixed.default,
  'no-mutable-array': _noMutableArray.default,
  'no-primitive-constructor-types': _noPrimitiveConstructorTypes.default,
  'no-types-missing-file-annotation': _noTypesMissingFileAnnotation.default,
  'no-unused-expressions': _noUnusedExpressions.default,
  'no-weak-types': _noWeakTypes.default,
  'object-type-curly-spacing': _objectTypeCurlySpacing.default,
  'object-type-delimiter': _objectTypeDelimiter.default,
  quotes: _quotes.default,
  'require-compound-type-alias': _requireCompoundTypeAlias.default,
  'require-exact-type': _requireExactType.default,
  'require-indexer-name': _requireIndexerName.default,
  'require-inexact-type': _requireInexactType.default,
  'require-parameter-type': _requireParameterType.default,
  'require-readonly-react-props': _requireReadonlyReactProps.default,
  'require-return-type': _requireReturnType.default,
  'require-types-at-top': _requireTypesAtTop.default,
  'require-valid-file-annotation': _requireValidFileAnnotation.default,
  'require-variable-type': _requireVariableType.default,
  semi: _semi.default,
  'sort-keys': _sortKeys.default,
  'sort-type-union-intersection-members': _sortTypeUnionIntersectionMembers.default,
  'space-after-type-colon': _spaceAfterTypeColon.default,
  'space-before-generic-bracket': _spaceBeforeGenericBracket.default,
  'space-before-type-colon': _spaceBeforeTypeColon.default,
  'spread-exact-type': _spreadExactType.default,
  'type-id-match': _typeIdMatch.default,
  'type-import-style': _typeImportStyle.default,
  'union-intersection-spacing': _unionIntersectionSpacing.default,
  'use-flow-type': _useFlowType.default,
  'use-read-only-spread': _useReadOnlySpread.default,
  'valid-syntax': _validSyntax.default
};
var _default = exports.default = {
  configs: {
    recommended: _recommended.default
  },
  rules: _lodash.default.mapValues(rules, (rule, key) => {
    if (['no-types-missing-file-annotation', 'require-valid-file-annotation'].includes(key)) {
      return rule;
    }
    return _objectSpread(_objectSpread({}, rule), {}, {
      create: _lodash.default.partial(_utilities.checkFlowFileAnnotation, rule.create)
    });
  }),
  rulesConfig: {
    'boolean-style': 0,
    'define-flow-type': 0,
    'delimiter-dangle': 0,
    'generic-spacing': 0,
    'interface-id-match': 0,
    'newline-after-flow-annotation': 0,
    'no-dupe-keys': 0,
    'no-duplicate-type-union-intersection-members': 0,
    'no-flow-fix-me-comments': 0,
    'no-mixed': 0,
    'no-mutable-array': 0,
    'no-weak-types': 0,
    'object-type-curly-spacing': 0,
    'object-type-delimiter': 0,
    quotes: 0,
    'require-compound-type-alias': 0,
    'require-exact-type': 0,
    'require-parameter-type': 0,
    'require-readonly-react-props': 0,
    'require-return-type': 0,
    'require-variable-type': 0,
    semi: 0,
    'sort-keys': 0,
    'sort-type-union-intersection-members': 0,
    'space-after-type-colon': 0,
    'space-before-generic-bracket': 0,
    'space-before-type-colon': 0,
    'spread-exact-type': 0,
    'type-id-match': 0,
    'type-import-style': 0,
    'union-intersection-spacing': 0,
    'use-flow-type': 0,
    'valid-syntax': 0
  }
};
module.exports = exports.default;