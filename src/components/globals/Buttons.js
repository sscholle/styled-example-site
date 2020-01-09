import styled from 'styled-components';
import {setColor, setRem, setLetterSpacing, setBorder, setTransition, setFont} from '../../styles';

export const PrimaryButton = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFont.main};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({ color: setColor.primaryColor})};
  ${setLetterSpacing(3)};
  ${setTransition()}
  &:hover{
    background: transparent;
    color: ${setColor.primaryColor};
  }
  ${props => `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`}
  text-decoration: none;
  cursor: pointer;
`;

export const SmallButton = styled(PrimaryButton)`
  padding: ${setRem(9)} ${setRem(12)};
`;
