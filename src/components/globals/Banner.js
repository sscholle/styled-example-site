import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import {setColor, setRem, setLetterSpacing, setBorder, media} from '../../styles';

const Banner = ({className, title, text, children, greeting}) => {
  return <div className={className}>
    <h1>{greeting} <span>{title}</span></h1>
    <div className="info">
      {children}
    </div>
  </div>
}

const fadeIn = (start = '100%', middle = '-10%', end = '0%') => {
  const animation = () => keyframes`
    0%{
      transform: translateY(${start});
      opacity: 0;
    }
    50%{
      transform: translateY(${middle});
      opacity: 0.5;
    }
    100%{
      transform: translateY(${end});
      opacity: 1;
    }
  `;
  return css`animation: ${animation} 3s ease-in-out`;
}



export default styled(Banner)`
  background: rgba(0,0,0,0.7);
  text-align: center;
  padding: ${setRem(60)} ${setRem(32)};
  ${setLetterSpacing(3)}
  color: ${setColor.mainWhite};

  h1{
    text-transform: capitalize;
    font-size: ${setRem(48)};
    color: ${setColor.primaryColor}
    span{
      color: ${setColor.mainWhite}
    }
  }
  p{
    width: 85%;
    margin: 0 auto;
  }
  ${media.tablet`
    width: 70vw;
    ${setBorder({color: setColor.primaryColor, width: "6px"})}
    p{
      width: 75%;
    }
  `}

  h1{
    /* amination */
    ${fadeIn('100%', '-10%', '0%')}
  }
  p{
    /* animation */
    ${fadeIn('-100%', '10%', '0%')}
  }
`;
