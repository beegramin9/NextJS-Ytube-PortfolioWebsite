import React, { useState, useRef, useEffect }  from 'react';

import { ProjectsCarouselContainer, ProjectsCarouselItem, 
  CarouselButton, CarouselButtonDot, CarouselButtons,  
  CarouselMobileScrollNode } from './ProjectsCarouselStyle';

import { BlogCard, CardInfo, ExternalLinks, GridContainer,
  HeaderThree, Hr, TagImg, TagImgList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { arrayOfProject } from '../../constants/constants';

const TOTAL_PROJECT_CAROUSEL_COUNT = arrayOfProject.length;

const Projects = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({left, behavior:'smooth'});
  }

  const handleClick = (e, i) => {
    e.preventDefault();
    if (carouselRef.current) {
      /* css에서 변할수 있을만한게 더이상 없음, 
      남은건 js인것뿐임 */
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * .9 * (i / TOTAL_PROJECT_CAROUSEL_COUNT));
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      /* 디자인은 됐고 결국 여기를 봐야하는 것임 */
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.9)) * TOTAL_PROJECT_CAROUSEL_COUNT);
      setActiveItem(index);
    }
  }

  // window가 resized 되면 현재 node에서 0번으로 되돌아감
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect( () => {
    const handleResize = () => {
      scroll(carouselRef.current, 0)
    }
    window.addEventListener('resize', handleResize);
  }, []);


  return (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <SectionText>Some of the projects started from a simple designless Youtube tutorials for me to learn new techs and concepts. <br></br>
    But along the development, I thought of a few new features that would show my perspective, preferences and ideas.</SectionText>
    {/* Introduce carousel */}
    
    {/* 400px 크기가 1 or 2개가 들어오게 하는 것 */}
    {/* <GridContainer>  */}

    {/* CarouselContainer가 GridContainer처럼 색깔, 크기가 정해지지 않은 거야 */}
    <ProjectsCarouselContainer ref={carouselRef} onScroll={handleScroll}>
      <>
        {arrayOfProject.map(({ id, title, description, image, tags, link, github }, index) => (
          <CarouselMobileScrollNode
          key={index}
          final={index === TOTAL_PROJECT_CAROUSEL_COUNT - 1}>
            <ProjectsCarouselItem
                  index={index}
                  id={`carousel__item-${index}`}
                  active={activeItem}
                  onClick={(e) => handleClick(e, index)}>
              <BlogCard key={id}> {/* 카드하나, Carousel 한개 */}
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
            </ProjectsCarouselItem>            
          </CarouselMobileScrollNode>           
        ))}
      </>
    </ProjectsCarouselContainer>
    {/* </GridContainer> */}
    <CarouselButtons>
      {arrayOfProject.map((item, index) => {
        return (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button">
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        );
      })}
    </CarouselButtons>
  </Section>
)};

export default Projects;