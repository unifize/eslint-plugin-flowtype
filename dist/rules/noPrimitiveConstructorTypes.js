"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const schema = [];
const create = context => {
  const regex = /^(Boolean|Number|String)$/u;
  return {
    GenericTypeAnnotation: node => {
      const name = _lodash.default.get(node, 'id.name');
      if (regex.test(name)) {
        context.report({
          data: {
            name
          },
          loc: node.loc,
          message: 'Unexpected use of {{name}} constructor type.',
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