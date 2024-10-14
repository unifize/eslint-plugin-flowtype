"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeColonSpacing = _interopRequireDefault(require("./typeColonSpacing"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const schema = [{
  enum: ['always', 'never'],
  type: 'string'
}];
const create = context => {
  return (0, _typeColonSpacing.default)('before', context, {
    always: context.options[0] === 'always'
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