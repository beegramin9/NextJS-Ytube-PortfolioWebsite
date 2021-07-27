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
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * (i / TOTAL_PROJECT_CAROUSEL_COUNT) *.8);
      //!* 변수이다. Javascript scroll의 속성이 아니다.
      //!* 이 값은 카드 한장 410px보다 살짝 10px정도 큰 놈이어야 한다.
      //! 왼쪽에서부터 scroll된 scrollLeft의 양, 즉 각 카드의 가로위치를 나타낸다고 보면 된다.
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / carouselRef.current.scrollWidth) * TOTAL_PROJECT_CAROUSEL_COUNT * 1.3) ;
      //!* 요 총 값이 1이 되어야 한다? 그렇지! 그렇게해서 곱해주는 숫자를 만들어줘야하는거야

      //! 5개일때: carouselRef.current.scrollLeft: 410px, 아마 카드 크기에 따라 가는듯
      //! 얘는 min-content랑 똑같다. min-width: ${({ final }) => final ? `100%;` : `410px`};
      //! 5개일때: carouselRef.current.scrollWidth: 전체크기, 2680px
      //! 410* 4 = 1640, 전체 감싸는 섹션 최대가 1040px
      //! 마지막엔 한개밖에 없는데 그래도 채우긴 채워야되니까 1040으로 된것
      //! 1640 + 1040이 나와서 2680이 되는 것이다.
      //todo 이 비율에 따라서 불이 다 들어오거나 작아지는데, 이걸 숫자로 조절하려니까 안되는겨...

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