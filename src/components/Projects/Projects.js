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
    console.log('클릭index',i);
    // console.log('index',i);
    // console.log('handleClick carouselRef.current:',carouselRef.current);
    console.log('handleClick 전체길이 scrollWidth:',carouselRef.current.scrollWidth);
    e.preventDefault();
    if (carouselRef.current) {
      /* Projects scrollWidth:
      small일때 1980px, (맨마지막에 공백이 조금 있음)
      large일때 1760px */
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 1 * (i / TOTAL_PROJECT_CAROUSEL_COUNT));
      // 하나 400px, 전체 1760, 1/4, 
      console.log('왼쪽으로 scroll한 길이:', scrollLeft);
      scroll(carouselRef.current, scrollLeft);
    }
  }
  /* 마지막일때는 뭔가 있어야하는거 맞는거같음... */

  const handleScroll = () => {
    // console.log('handleScroll carouselRef.current:',carouselRef.current);
    // console.log('handleScroll scrollLeft:',carouselRef.current.scrollLeft);
    // console.log('handleScroll scrollWidth:',carouselRef.current.scrollWidth);
    if (carouselRef.current) {
      /* 디자인은 됐고 결국 여기를 봐야하는 것임 */
      // 마지막카드를 눌러도 안들어옴. carouselRef.current가 없다는 것
      console.log('변수말고 js scorllleft:',carouselRef.current.scrollLeft);
      const index = Math.round((carouselRef.current.scrollLeft / carouselRef.current.scrollWidth) * TOTAL_PROJECT_CAROUSEL_COUNT);
      console.log('전체길이에따른 index:',index);
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
      {/* 여기 index는 캐러질인덱스가 아니고 constant 인덱스 */}
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