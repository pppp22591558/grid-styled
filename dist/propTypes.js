'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var responsivePropType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]);

var propTypes = {
  width: responsivePropType,
  fontSize: responsivePropType,
  color: responsivePropType,
  bg: responsivePropType,
  m: responsivePropType,
  mt: responsivePropType,
  mr: responsivePropType,
  mb: responsivePropType,
  ml: responsivePropType,
  mx: responsivePropType,
  my: responsivePropType,
  p: responsivePropType,
  pt: responsivePropType,
  pr: responsivePropType,
  pb: responsivePropType,
  pl: responsivePropType,
  px: responsivePropType,
  py: responsivePropType
};

exports.default = propTypes;