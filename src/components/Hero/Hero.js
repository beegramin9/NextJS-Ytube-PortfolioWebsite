import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section grid nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br/>
        I am Wontae Choi.
      </SectionTitle>
      <SectionText>
      I am an enthusiastic software developer eager to learn new skills and
      technologies, also knowledgeable in software applications, algorithms,
      development techniques, and data structures.
      </SectionText>
      <Button onClick={()=> window.location = 'https://mail.google.com'}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;