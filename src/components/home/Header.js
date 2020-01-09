import React from 'react';
import Hero from '../globals/Hero';
import homeImg from '../../images/homeBcg.jpeg'
import Banner from '../globals/Banner';
import { PrimaryButton } from '../globals/Buttons';

const Header = ({ children }) => {
 return <Hero img={homeImg}>
   <Banner greeting="welcome to" title="beachwalk resort">
     <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;</p>
     <PrimaryButton t="1.5rem">View Details</PrimaryButton>
     {/* <PrimaryButton as="a" href="https://www.google.com" t="1rem">View Details</PrimaryButton> */}
   </Banner>
   </Hero>
}

export default Header;
