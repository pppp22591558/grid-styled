import PropTypes from 'prop-types';

const responsivePropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
]);

const propTypes = {
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
  py: responsivePropType,
};

export default propTypes;
