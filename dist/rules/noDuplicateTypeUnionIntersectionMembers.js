"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const create = context => {
  const sourceCode = context.getSourceCode();
  const {
    checkIntersections = true,
    checkUnions = true
  } = context.options[1] || {};
  const checkForDuplicates = node => {
    const uniqueMembers = [];
    const duplicates = [];
    const source = node.types.map(type => {
      return {
        node: type,
        text: sourceCode.getText(type)
      };
    });
    const hasComments = node.types.some(type => {
      const count = sourceCode.getCommentsBefore(type).length + sourceCode.getCommentsAfter(type).length;
      return count > 0;
    });
    const fix = fixer => {
      const result = uniqueMembers.map(t => {
        return t.text;
      }).join(node.type === 'UnionTypeAnnotation' ? ' | ' : ' & ');
      return fixer.replaceText(node, result);
    };
    for (const member of source) {
      const match = uniqueMembers.find(uniqueMember => {
        return uniqueMember.text === member.text;
      });
      if (match) {
        duplicates.push(member);
      } else {
        uniqueMembers.push(member);
      }
    }
    for (const duplicate of duplicates) {
      context.report(_objectSpread({
        data: {
          name: duplicate.text,
          type: node.type === 'UnionTypeAnnotation' ? 'union' : 'intersection'
        },
        messageId: 'duplicate',
        node
      }, hasComments ? {
        suggest: [{
          fix,
          messageId: 'suggestFix'
        }]
      } : {
        fix
      }));
    }
  };
  return {
    IntersectionTypeAnnotation(node) {
      if (checkIntersections === true) {
        checkForDuplicates(node);
      }
    },
    UnionTypeAnnotation(node) {
      if (checkUnions === true) {
        checkForDuplicates(node);
      }
    }
  };
};
var _default = exports.default = {
  create,
  meta: {
    fixable: 'code',
    messages: {
      duplicate: 'Duplicate {{type}} member found "{{name}}".',
      suggestFix: 'Remove duplicate members of type (removes all comments).'
    },
    schema: [{
      properties: {
        checkIntersections: {
          type: 'boolean'
        },
        checkUnions: {
          type: 'boolean'
        }
      },
      type: 'object'
    }]
  }
};
module.exports = exports.default;