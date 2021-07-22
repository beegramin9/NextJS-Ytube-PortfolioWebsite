import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import { arrayOfAccomplishmentData } from '../../constants/constants';


const Acomplishments = () => (
  <Section>
    <SectionTitle main>Personal Acomplishments</SectionTitle>
    <Boxes>
      {arrayOfAccomplishmentData.map( (card,index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
