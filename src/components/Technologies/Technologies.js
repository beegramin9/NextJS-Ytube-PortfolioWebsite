import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPostgresql } from 'react-icons/di';

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiStyledComponents, SiDjango, SiMysql } from "react-icons/si"


import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in the web development world,
      From Front-end to Back-end.
    </SectionText>
    <List>
      <ListItem>
        {/* <DiReact size="3em"/> */}
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <FaReact size="2em"/>{'\u00A0'}React<br/>
            <SiStyledComponents size="2em"/>{'\u00A0'}Styled Components<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <DiFirebase size="3em"/> */}
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <FaNodeJs size="2em"/>{'\u00A0'}NodeJS<br/>
            <SiDjango size="2em"/>{'\u00A0'}Django<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <DiZend size="3em"/> */}
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            <SiMysql size="2em"/>{'\u00A0'}SQL<br/>
            <DiFirebase size="2em"/>{'\u00A0'}ORM<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
