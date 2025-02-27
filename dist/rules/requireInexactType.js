"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const schema = [{
  enum: ['always', 'never'],
  type: 'string'
}];
const create = context => {
  const always = (context.options[0] || 'always') === 'always';
  return {
    ObjectTypeAnnotation(node) {
      const {
        inexact,
        exact
      } = node;
      if (!Object.prototype.hasOwnProperty.call(node, 'inexact')) {
        return;
      }
      if (always && !inexact && !exact) {
        context.report({
          message: 'Type must be explicit inexact.',
          node
        });
      }
      if (!always && inexact) {
        context.report({
          message: 'Type must not be explicit inexact.',
          node
        });
      }
    }
  };
};
var _default = exports.default = {
  create,
  schema
};
module.exports = exports.default;