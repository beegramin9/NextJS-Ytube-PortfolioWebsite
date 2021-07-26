import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, TimelineCarouselContainer, TimelineCarouselItem,
  CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyle';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { arrayOfTimeLine } from '../../constants/constants';

const TOTAL_TIMELINE_CAROUSEL_COUNT = arrayOfTimeLine.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    //todo scrollTo() scrolls to  a particular set of coordinates inside a given element.
    /* 즉 이게 있어야 슬라이딩이 가능함, 무슨 이유에선지
    sm일땐 되는데 그 이상에서는 안됨 */
    //!* element.scrollTo(x-coord, y-coord)
    //!* element.scrollTo(ScrollToOptions)
    // left: the number of pixels along the X axis to scroll the window or element.
    // top: same with the Y axis.
    
    return node.scrollTo({ left: left, behavior: 'smooth' });
    //todo node element를 x축으로 left만큼 smooth하게 scroll이 아니라!
    //todo node element를 x축의 left로!!! smooth하게 이동
  }

  const handleClick = (e, i) => {
    e.preventDefault();
    //!* scrollWidth
    // measurement of the width of an element's content, 
    // including content not visible on the screen due to overflow
    // = 스크롤바 없이 모든 콘텐트를 보이게 하기 위한 최소 길이, 반올림된 정수값
    // padding, ::before&after만 고려하고 margin, border는 고려하지 않는다.
    /* Timeline scrollWidth: 1268  */
    if (carouselRef.current) {
      /* scrollWidth, scrollLeft값이 float가 나오기 때문에... */
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TOTAL_TIMELINE_CAROUSEL_COUNT)); 
      // 전체 5개가 있는데 0번에서 3번을 눌렀으면, 전체필요길이의 3/5 * alpha만큼 오른쪽으로 이동해라
      // 그러면 -, + 는 어떻게 해요?
      console.log('왼쪽으로 scroll한 길이:', scrollLeft);
      //! 누적으로 나오는게 아니라 인덱스에 비례해서 나오는 것
      scroll(carouselRef.current, scrollLeft);
    }
  }
  
  const handleScroll = () => {
    //!* scrollLeft
    // the number of pixels that an element's content is scrolled from its left edge.
    // 왼쪽에서 오른쪽으로 간다면, 왼쪽에서 아무 스크롤도 없었을 때는 0이다.
    // padding, ::before&after만 고려하고 margin, border는 고려하지 않는다.
    if (carouselRef.current) {
      // 스크롤된 길이/전체 길이, 0.7은 위랑 똑같아야 할 것이고, 
      // 전체 개수를 곱해 round함으로써 index를 대략적으로라도 맞힌다!
      // 0.7이라는 것은 결국 카드하나를 움직이는데 값을 조절해야하는것
    
      // 년도 하나의 픽셀을 알면, 프로젝트를 위한것도 알수있을듯
      // 년도카드하나 가로픽셀 150px, .7곱한값 170px, 
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TOTAL_TIMELINE_CAROUSEL_COUNT);
      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionDivider/>
      <SectionTitle main>Education & Expierence</SectionTitle>
      <SectionText>
      I have always had a great interest in discovering new values and
      broadening experience which, not only led to software development but
      other great adventures.
      </SectionText>
      <TimelineCarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {arrayOfTimeLine.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_TIMELINE_CAROUSEL_COUNT - 1}>
              <TimelineCarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}>
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </TimelineCarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </TimelineCarouselContainer>
      <CarouselButtons>
        {arrayOfTimeLine.map((item, index) => {
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
  );
};

export default Timeline;