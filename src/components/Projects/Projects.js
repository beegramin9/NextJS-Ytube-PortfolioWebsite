import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { arrayOfProject } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {arrayOfProject.map(({ id, title, description, image, tags, link, github }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
            <CardInfo>{description}</CardInfo>
          </TitleContent>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagList>
          </div>
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