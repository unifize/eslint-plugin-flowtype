"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const schema = [];
const create = context => {
  return {
    MixedTypeAnnotation(node) {
      context.report({
        message: 'Unexpected use of mixed type',
        node
      });
    }
  };
};
var _default = exports.default = {
  create,
  schema
};
module.exports = exports.default;