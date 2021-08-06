import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import Button from '../../styles/GlobalComponents/Button';

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
        <Button>
          <a href="/resume/Resume.pdf" download="resume-WontaeChoi.pdf"
            style={{ color: '#fff'}}>
              Download Resume
          </a>
        </Button>
    </LeftSection>
  </Section>
);

export default Hero;