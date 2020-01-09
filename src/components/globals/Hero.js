import styled from 'styled-components';
import {setFlex, setBackground} from '../../styles';

const Hero = styled.header`
  min-height: 100vh;
  ${props => setBackground(props.img, "rgba(0,0,0,0)")}
  ${setFlex("center", "center")}
`;

export default Hero;
