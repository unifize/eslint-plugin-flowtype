"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const schema = [{
  enum: ['always', 'never'],
  type: 'string'
}];
const meta = {
  fixable: 'code'
};
const create = context => {
  const always = (context.options[0] || 'always') === 'always';
  const sourceCode = context.getSourceCode();
  return {
    ObjectTypeAnnotation(node) {
      const {
        exact,
        indexers,
        inexact
      } = node;
      if (!['DeclareClass', 'InterfaceDeclaration'].includes(node.parent.type) && always && !exact && !inexact && indexers.length === 0) {
        context.report({
          fix: fixer => {
            return [fixer.replaceText(sourceCode.getFirstToken(node), '{|'), fixer.replaceText(sourceCode.getLastToken(node), '|}')];
          },
          message: 'Object type must be exact.',
          node
        });
      }
      if (!always && exact) {
        context.report({
          fix: fixer => {
            return [fixer.replaceText(sourceCode.getFirstToken(node), '{'), fixer.replaceText(sourceCode.getLastToken(node), '}')];
          },
          message: 'Object type must not be exact.',
          node
        });
      }
    }
  };
};
var _default = exports.default = {
  create,
  meta,
  schema
};
module.exports = exports.default;