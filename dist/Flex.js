'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('./propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrap = (0, _styledSystem.responsiveStyle)('flex-wrap', 'wrap', 'wrap');
var direction = (0, _styledSystem.responsiveStyle)('flex-direction', 'direction');
var align = function align(props) {
  return (0, _styledSystem.responsiveStyle)('align-items', 'align');
};
var justify = function justify(props) {
  return (0, _styledSystem.responsiveStyle)('justify-content', 'justify');
};
var column = function column(props) {
  return props.column ? 'flex-direction:column;' : null;
};

var Flex = (0, _styledComponents2.default)(_Box2.default)([], { display: 'flex' }, wrap, column, direction, align, justify);
Flex.displayName = 'Flex';

var responsivePropType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.bool]);

Flex.propTypes = Object.assign({}, _propTypes4.default, {
  wrap: responsivePropType,
  direction: responsivePropType,
  align: responsivePropType,
  justify: responsivePropType,
  column: bool
});

exports.default = Flex;