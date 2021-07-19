import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { arrayOfProject } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <SectionText>Some of the projects started from a simple Youtube tutorials for me to learn new techs and concepts. <br></br>
    But along the development, I thought of a few new features that would show my perspective, preferences and ideas.</SectionText>
    <GridContainer>
      {arrayOfProject.map(({ id, title, description, image, tags, link, github }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
            <div>
              <TagList>
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <CardInfo>{'\u00A0'}{description}</CardInfo>
          </TitleContent>
          <UtilityList>
            <ExternalLinks href={link}>Link</ExternalLinks>
            <ExternalLinks href={github}>Github</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;