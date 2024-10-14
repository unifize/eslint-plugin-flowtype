"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _typeColonSpacing = _interopRequireDefault(require("./typeColonSpacing"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const schema = [{
  enum: ['always', 'never'],
  type: 'string'
}, {
  additionalProperties: false,
  properties: {
    allowLineBreak: {
      type: 'boolean'
    }
  },
  type: 'object'
}];
const create = context => {
  return (0, _typeColonSpacing.default)('after', context, {
    allowLineBreak: _lodash.default.get(context, ['options', '1', 'allowLineBreak'], false),
    always: _lodash.default.get(context, ['options', '0'], 'always') === 'always'
  });
};
var _default = exports.default = {
  create,
  meta: {
    fixable: 'code'
  },
  schema
};
module.exports = exports.default;