import React from 'react';
import styled from 'styled-components';
import {setColor, media, setRem} from '../../styles';
import Section from '../globals/Section';
import Title from '../globals/Title';
import Room from './Room';
import rooms from '../../data/rooms-data';

export default class Rooms extends React.Component{
  getRooms = () => {
    return rooms.map(room => <Room key={room.id} data={room}/>)
  }

  render = () => (
    <Section color={setColor.lightGrey}>
      <Title center>Our Rooms</Title>
      <RoomsCenter>
        {this.getRooms()}
      </RoomsCenter>
    </Section>
  )
};

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: ${setRem(45)};
  ${media.large`
    width: 100vw;
    max-width: 1170px;
  `}
`;
