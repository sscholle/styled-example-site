
import {css} from 'styled-components';
import homeImg from './images/homeBcg.jpeg';

export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7"
}

export const setFont = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive; ",
}

export const setFlex = (vertical = "center", horizontal = "center") => {
  return `display: flex;
  align-items: ${vertical};
  justify-content: ${horizontal};`
}

export const setBackground = (img = homeImg, color = "rgba(0,0,0,0.5)") => `
  background: linear-gradient(${color}, ${color}),
  url(${img}) center/cover fixed no-repeat;
`;

export const setRem = (number = 16) => `
  ${number/16}rem
  `

export const setLetterSpacing = (pixels = 2) => `letter-spacing: ${pixels}px;`

export const setShadow = {
  light: 'box-shadow: 4px 4px 2px 0px rgba(0,0,0,0.25);',
  dark: 'box-shadow: 4px 4px 2px 0px rgba(0,0,0,0.75);',
  darkest: 'box-shadow: 8px 8px 2px 0px rgba(0,0,0,0.75);'
}

export const setBorder = ({ width="2px", style="solid", color="black"} = {}) => `border: ${width} ${style} ${color};`


const size = {
  large: 1200,
  desktop: 992,
  tablet: 786,
  phone: 576,
};

export const media = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
  @media (min-width: ${size[label] /16}em){
    ${css(...args)}
  }`;
  return acc;
}, {});


export const setTransition = ({ property = "all", time = "0.3s", timing = "ease-in-out"} = {}) => `
transition: ${property} ${time} ${timing}`
