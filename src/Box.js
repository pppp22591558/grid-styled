import styled from 'styled-components';
import PropTypes from 'prop-types';
import tag from 'tag-hoc';
import { space, width, responsiveStyle } from './system';
import propTypes from './propTypes';
import removeProps from './remove-props';

export const flex = responsiveStyle('flex');
export const order = responsiveStyle('order');

const Tag = tag(removeProps);
const Base = Tag('div');

const Box = styled(Base)([],
  { boxSizing: 'border-box' },
  width,
  space,
  flex,
  order,
);
Box.displayName = 'Box';

const responsivePropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
]);

Box.propTypes = Object.assign({}, propTypes, {
  flex: responsivePropType,
  order: responsivePropType,
});

export default Box;
