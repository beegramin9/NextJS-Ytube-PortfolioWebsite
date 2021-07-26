import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, TagImg, TagImgList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { arrayOfProject } from '../../constants/constants';

const Projects = () => {
  let sliderSettings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }


  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <SectionText>Some of the projects started from a simple designless Youtube tutorials for me to learn new techs and concepts. <br></br>
      But along the development, I thought of a few new features that would show my perspective, preferences and ideas.</SectionText>
      {/* <GridContainer> */}
        <Slider {...sliderSettings}>
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
        </Slider>
      {/* </GridContainer> */}
    </Section>
  );
}

export default Projects;