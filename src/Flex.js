import styled from 'styled-components';
import PropTypes from 'prop-types';
import { responsiveStyle } from './system';
import propTypes from './propTypes';
import Box from './Box';

const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap');
const direction = responsiveStyle('flex-direction', 'direction');
const align = () => responsiveStyle('align-items', 'align');
const justify = () => responsiveStyle('justify-content', 'justify');
const column = props => props.column ? 'flex-direction:column;' : null;

const Flex = styled(Box)([],
  { display: 'flex' },
  wrap,
  column,
  direction,
  align,
  justify,
);
Flex.displayName = 'Flex';

const responsivePropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
  PropTypes.bool,
]);

Flex.propTypes = Object.assign({}, propTypes, {
  wrap: responsivePropType,
  direction: responsivePropType,
  align: responsivePropType,
  justify: responsivePropType,
  column: PropTypes.bool,
});

export default Flex;
