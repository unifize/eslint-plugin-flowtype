"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = _interopRequireDefault(require("lodash/"));
var _utilities = require("../utilities");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const schema = [];
const create = context => {
  const report = node => {
    context.report({
      loc: node.loc,
      message: 'Duplicate property.',
      node
    });
  };
  const analizeElement = element => {
    const {
      type
    } = element;
    let value;
    switch (type) {
      case 'GenericTypeAnnotation':
        value = element.id.name;
        break;
      case 'ObjectTypeAnnotation':
        // eslint-disable-next-line no-use-before-define
        value = builObjectStructure(element.properties);
        break;
      case 'TupleTypeAnnotation':
        // eslint-disable-next-line no-use-before-define
        value = buildArrayStructure(element.types);
        break;
      default:
        value = element.value;
        break;
    }
    return {
      type,
      value
    };
  };
  const buildArrayStructure = elements => {
    return _lodash.default.map(elements, element => {
      return analizeElement(element);
    });
  };
  const builObjectStructure = properties => {
    return _lodash.default.map(properties, property => {
      const element = analizeElement(property.type === 'ObjectTypeSpreadProperty' ? property.argument : property.value);
      return _objectSpread(_objectSpread({}, element), {}, {
        name: (0, _utilities.getParameterName)(property, context)
      });
    });
  };
  const checkForDuplicates = node => {
    const haystack = [];

    // filter out complex object types, like ObjectTypeSpreadProperty
    const identifierNodes = _lodash.default.filter(node.properties, {
      type: 'ObjectTypeProperty'
    });
    for (const identifierNode of identifierNodes) {
      const needle = {
        name: (0, _utilities.getParameterName)(identifierNode, context)
      };
      if (identifierNode.value.type === 'FunctionTypeAnnotation') {
        needle.args = _lodash.default.map(identifierNode.value.params, param => {
          return analizeElement(param.typeAnnotation);
        });
      }
      const match = _lodash.default.some(haystack, existingNeedle => {
        return _lodash.default.isEqual(existingNeedle, needle);
      });
      if (match) {
        report(identifierNode);
      } else {
        haystack.push(needle);
      }
    }
  };
  return {
    ObjectTypeAnnotation: checkForDuplicates
  };
};
var _default = exports.default = {
  create,
  schema
};
module.exports = exports.default;