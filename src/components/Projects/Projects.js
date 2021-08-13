import React, { useState, useEffect, useRef }  from 'react';

import { ProjectContainer, ProjectsCarouselContainer, CardSection, 
  CarouselButton, CarouselButtonDot, CarouselButtons,  
   } from './ProjectsCarouselStyle';
import { BlogCard, CardInfo, ExternalLinks,
  HeaderThree, Hr, TagImg, TagImgList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { arrayOfProject } from '../../constants/constants';

const TOTAL_PROJECT_CAROUSEL_COUNT = arrayOfProject.length;

const Projects = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();
  
  useEffect( () => {
    const handleResize = () => {
      scroll(carouselRef.current, 0)
    }
    window.addEventListener('resize', handleResize);
  }, []);

  //* Mouse Slider만을 위한 Logic
  let isCursorDragging = false;
  let previousStartMousePosition = 0; // 클릭했을 때의 마우스 첫 위치
  let previouslyDraggedX = 0;
  const cardWidth = 410;

  const handleDotClick = (e, index) => {
    console.log(e.nativeEvent.pointerType)
    e.preventDefault();
    if (carouselRef.current) {
      if (e.nativeEvent.pointerType === "mouse") {
        const findCard = - (cardWidth * (index));
        console.log('findCard:',findCard)  
        carouselRef.current.style.transform = `translateX(${findCard}px)`;
        setActiveItem(index);
      } else { // === "touch"
        const scroll = (node, left) => {
          return node.scrollTo({left, behavior:'smooth'});
        }
        const scrollLeft = Math.floor(carouselRef.current.scrollWidth * (index / TOTAL_PROJECT_CAROUSEL_COUNT));
        scroll(carouselRef.current, scrollLeft);
      }
    }
  }
  
  const handleGestureDown = (e) => {
    isCursorDragging = true;
    previousStartMousePosition = e.pageX ;

    previouslyDraggedX = window.getComputedStyle(carouselRef.current).getPropertyValue('transform');
    previouslyDraggedX = previouslyDraggedX === 'none'
                        ? 0
                        : parseInt(previouslyDraggedX.split(',')[4].trim());
  };

  //! 카드의 시작점마다 멈추는 이유가 뭐야?
  // 이것만 고치면 되는데!!!
  const handleGestureMove = (e) => {
    if (isCursorDragging) {
      const currentMousePosition = e.pageX ;
      const howMuchXMovedRightNow = currentMousePosition - previousStartMousePosition;
      const totalValueDraggedXFromStartLine = howMuchXMovedRightNow + previouslyDraggedX;
      // console.log('howMuchXMovedRightNow:',howMuchXMovedRightNow);
      // console.log('totalValueDraggedXFromStartLine:',totalValueDraggedXFromStartLine);
      if (howMuchXMovedRightNow > 0) { 
        // 왼쪽으로 넘어갈 때 양수
        // 즉 왼쪽으로 넘어가면서 스타트라인의 왼쪽으로 가는 순간 return해서
        // 1번 카드의 왼쪽으로 넘어가지 못하게 한다
        if (totalValueDraggedXFromStartLine > 0) { // 
          return;
        }
      // 2. 맨 오른쪽 Card를 넘어가지 못하게 하기
      } else {
        // 반대 경우, 즉 오른쪽으로 넘어가고 있을 때
        // totalValueDraggedXFromStartLine 음수값이 된다.
        // 여기서는 carouselRef.current의 전체 길이와 카드 한장 사이의 수적 비교가 필요하므로
        // 절대값을 씌워 양수 >> 양수끼리 비교해줘야 한다
        
        /* 50은 임의조정 */
        /* 로직에서 멈추는가? */
        if (Math.abs(totalValueDraggedXFromStartLine) > cardWidth * (TOTAL_PROJECT_CAROUSEL_COUNT-1) ) {
          return;
        }
        // carouselRef.current 전체보다 오른쪽으로 갔을 때 return해서 멈춘다
        // 그런데 마지막 카드의 넓이만큼 일찍 끝나야 하므로 빼준다totalValueDraggedXFromStartLine
      }
      carouselRef.current.style.cursor = 'pointer';
      carouselRef.current.style.transform = `translateX(${totalValueDraggedXFromStartLine}px)`;
      // round로 하니까 이렇게 되는거 아냐? floor 아님?
      const index = Math.floor(( Math.abs(totalValueDraggedXFromStartLine) / (cardWidth) ) *1.1);
      setActiveItem(index);
    }
  };

  const handleGestureUp = (e) => {
    isCursorDragging = false;
    carouselRef.current.style.cursor = 'default';
  };

  const handleScroll = (e) => {
    if (carouselRef.current) {
      console.log('scrollLeft',carouselRef.current.scrollLeft)
      console.log('scrollWidth',carouselRef.current.scrollWidth)
      const index = Math.floor(carouselRef.current.scrollLeft / cardWidth);
      console.log('index',index)
      setActiveItem(index);
    }
  };

  return (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <SectionText>Some of the projects started from a simple designless Youtube tutorials for me to learn new techs and concepts. <br></br>
    But along the development, I thought of a few new features that would show my perspective, preferences and ideas.</SectionText>
    
    <ProjectContainer>
      <ProjectsCarouselContainer 
      ref={carouselRef}  
      onMouseDown={handleGestureDown} 
      onMouseMove={handleGestureMove} 
      onMouseUp={handleGestureUp}
      onScroll={handleScroll}
      >
        {arrayOfProject.map(({ id, title, description, image, tags, link, readme }, index) => (
          <CardSection>
            <BlogCard key={id}>
              <div style={{overflow:'hidden'}}>
                <Img src={image} />
              </div>
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
                <TagImgList>
                  {tags.map((tag, index) => (
                    <TagImg key={index} src={tag}></TagImg>
                  ))}
                </TagImgList>
                <CardInfo>{'\u00A0'}{description.split('\n').map( line => {
                  return (<span>{line}<br/>&nbsp;</span>)
                })}</CardInfo>
              </TitleContent>
            </BlogCard>
            {/* 링크 클릭이 안되서 바깥으로 뺄 수 밖에 없었음 */}
            <UtilityList>
              <ExternalLinks href={link}>Link</ExternalLinks>
              <ExternalLinks href={readme}>Readme</ExternalLinks>
            </UtilityList>
          </CardSection>
        ))}
      </ProjectsCarouselContainer>
    </ProjectContainer>


    <CarouselButtons>
      {/* 여기 index는 캐러질인덱스가 아니고 constant 인덱스 */}
      {arrayOfProject.map((item, index) => {
        return (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem} 
            onClick={(e) => handleDotClick(e, index)}
            type="button">
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        );
      })}
    </CarouselButtons>
  </Section>
)};

export default Projects;