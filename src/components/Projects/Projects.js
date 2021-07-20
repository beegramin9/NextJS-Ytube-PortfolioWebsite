import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, TagImg, TagImgList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { arrayOfProject } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <SectionText>Some of the projects started from a simple designless Youtube tutorials for me to learn new techs and concepts. <br></br>
    But along the development, I thought of a few new features that would show my perspective, preferences and ideas.</SectionText>
    <GridContainer>
      {arrayOfProject.map(({ id, title, description, image, tags, link, github }) => (
        <BlogCard key={id}>
          <div style={{overflow:'hidden'}}>
            <Img src={image} />
          </div>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
            <div>
              <TagImgList>
                {tags.map((tag, index) => (
                  <TagImg key={index} src={tag}></TagImg>
                ))}
              </TagImgList>
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