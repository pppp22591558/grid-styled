'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.order = exports.flex = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tagHoc = require('tag-hoc');

var _tagHoc2 = _interopRequireDefault(_tagHoc);

var _propTypes3 = require('./propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _removeProps = require('./remove-props');

var _removeProps2 = _interopRequireDefault(_removeProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flex = exports.flex = (0, _styledSystem.responsiveStyle)('flex');
var order = exports.order = (0, _styledSystem.responsiveStyle)('order');

var Tag = (0, _tagHoc2.default)(_removeProps2.default);
var Base = Tag('div');

var Box = (0, _styledComponents2.default)(Base)([], { boxSizing: 'border-box' }, _styledSystem.width, _styledSystem.space, flex, order);
Box.displayName = 'Box';

var responsivePropType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]);

Box.propTypes = Object.assign({}, _propTypes4.default, {
  flex: responsivePropType,
  order: responsivePropType
});

exports.default = Box;