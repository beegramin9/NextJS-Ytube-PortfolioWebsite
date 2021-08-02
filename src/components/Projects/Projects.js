import React, { useState, useRef, useEffect }  from 'react';

import { ProjectsCarouselContainer, CardSection, ProjectsCarouselItem, 
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
  //! Touch처럼 하려면 선택이 되버리기때문에 결국 best 사용자경험이 아니었음
  let isClicked = false;

  const scroll = (node, left) => {
    // 스크롤 속도를 줄일 수 있을까? css?


    return node.scrollTo({left, behavior:'smooth'});
    //todo node element를 x축의 (left,0 )로 smooth하게 이동
  }
  // window가 resized 되면 현재 node에서 0번으로 되돌아감
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect( () => {
    const handleResize = () => {
      scroll(carouselRef.current, 0)
    }
    window.addEventListener('resize', handleResize);
  }, []);

  const handleClick = (e, i) => {
    // isClicked = true
    // console.log('clientX:',e);
    // scroll(carouselRef.current, e.clientX);

    e.preventDefault();
    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * (i / TOTAL_PROJECT_CAROUSEL_COUNT) *.8);
      //!* 변수이다. Javascript scroll의 속성이 아니다.
      //!* 이 값은 카드 한장 410px보다 살짝 10px정도 큰 놈이어야 한다.
      //! 왼쪽에서부터 scroll된 scrollLeft의 양, 즉 각 카드의 가로위치를 나타낸다고 보면 된다.
      scroll(carouselRef.current, scrollLeft);

    }
  }

  //! Touch처럼 하려면 선택이 되버리기때문에 결국 best 사용자경험이 아니었음
  // const handleMouseUp = (e) => {
  //   isClicked = false;
  //   console.log('up',isClicked);
  // }
  
  // 터치 전용 
  const handleScroll = (e) => {
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

  // ver1. 클릭하지 않고 떠다닐때만, 사실 best 사용자 경험은 아니다.
  // touch때처럼 클릭하고 뗄 때만 할 수 있도록 하고싶었지만 그러면 mouse에서는 선택이 된다. 결국 이게 best 경험이었던 것
  // const handleMouseMove = (e) => {
    /* X: 맨 왼쪽부터 0부터 시작, Y: 맨 위쪽부터 0으로 시작, 아래로 내려올수록 증가
    1. client: 현재 보이는 전체 스크린 기준
    2. offset: 이벤트 대상의 전체 면적 기준, canvas가 아니면 따로 offset이 나오진 않는듯
    3. page: 전체 문서 기준(스크롤에 가려진 애들도 전부 포함), 즉 pageY는 문서 전체 길이
    4. screen: 모니터 화면 전체를 기준, 보통은 client와 같으나 듀얼모니터, 분할이면 달라짐*/
    // console.log('event:',e);
    // console.log('e.nativeEvent.offsetX:',e.nativeEvent.offsetX);, 이건 개별 카드부터 시작해서 다시 0으로 초기화되기떄문에 안됨...
      // 클릭했을 때에만 작동하도록 해야함
      // 반대방향...?
      // if (isClicked) {}
      // 첫장에서 둘째장 넘어갈때 너무 일찍 넘어간다
      // 
    // const index = Math.round((carouselRef.current.scrollLeft / carouselRef.current.scrollWidth) * TOTAL_PROJECT_CAROUSEL_COUNT * 1.3) ;
    // console.log(index);
    // console.log(e.nativeEvent.offsetX);
  //   let scrollToX = e.pageX;
  //   console.log(scrollToX);
    // if (300 > scrollToX > 150) {
    //   scrollToX -= 30
    // // } else if ( 220 > scrollToX > 150) {
    // //   scrollToX -= 50
    // }
    // scrollToX = scrollToX > 150 ? scrollToX - 100 : scrollToX
    // scrollToX *= 1.1
    // e.clientX > 150 ? e.clientX : e.clientX - 50
  //  scroll(carouselRef.current, scrollToX) // 맨 첫장 안넘어가는거 조정! 잘했다!
     // 요건 맞았음. 작동함!
  // }
  

  // 이런 주먹구구식보다 결국은 touch처럼 하는게 맞는지도 몰라...
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
    <ProjectsCarouselContainer ref={carouselRef} onScroll={handleScroll} /* onMouseMove={handleMouseMove} */ /* onMouseUp={handleMouseUp} */>
      <>
        {arrayOfProject.map(({ id, title, description, image, tags, link, readme }, index) => (

          <CardSection>
            <CarouselMobileScrollNode
            key={index}
            first={index === 0}
            second={index === 1}
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
                </BlogCard>
              </ProjectsCarouselItem>            
            </CarouselMobileScrollNode>
            {/* 링크 클릭이 안되서 바깥으로 뺄 수 밖에 없었음 */}
            <UtilityList>
              <ExternalLinks href={link}>Link</ExternalLinks>
              <ExternalLinks href={readme}>Readme</ExternalLinks>
            </UtilityList>
          </CardSection>
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