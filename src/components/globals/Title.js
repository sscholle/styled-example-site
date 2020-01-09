import React from 'react';
import styled from 'styled-components';
import {setRem, setFont, setLetterSpacing} from '../../styles'

const Title = ({children, className, center}) => <h3 className={className}>{children}</h3>

export default styled(Title)`
  font-size: ${setRem(30)};
  text-transform: capitalize;
  ${setLetterSpacing(5)};
  ${setFont.slanted};
  text-align: ${props => props.center ? "center" : "left"};
`;
