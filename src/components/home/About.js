import React from 'react';
import aboutImg from '../../images/aboutBcg.jpeg'
import Title from '../globals/Title';
import {PrimaryButton} from '../globals/Buttons';
import Section from '../globals/Section';
import styled from 'styled-components';
import {setRem, setBorder, setColor, setLetterSpacing, media} from '../../styles'

const AboutCenter = styled.div`
  .about-img,.about-info{
    padding: ${setRem(30)};
  }
  .about-img{
    img{
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor})};
    }
  }
  .about-info{
    p{
      ${setLetterSpacing(3)}
    }
  }
  width: 90vw;
  margin: 0 auto;

  ${media.large`
    .about-img,.about-info{
      padding: ${setRem(0)};
    }
    width: 100vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem(32)};
    .about-img,.about-info{
      align-self: center;
    }
    .about-info{
      p{
        width: 80%;
      }
    }
  `}

`;

const About = ({ children }) => {
 return (
  <Section color="white">
    <AboutCenter>
      <div className="about-img"><img src={aboutImg} alt="about us" /></div>
      <div className="about-info">
        <Title>Some Title</Title>
        <p>
          On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
        </p>
        <PrimaryButton>Read More</PrimaryButton>
      </div>
    </AboutCenter>
  </Section>);
}

export default About;
