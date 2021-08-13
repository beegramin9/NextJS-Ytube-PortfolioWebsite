import styled from 'styled-components';

export const ProjectContainer = styled.div`
  background: ${(props) => props.theme.colors.background1 } ;
  position: relative;
  overflow: hidden;
  /* max-width: 1040px; */
  
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`


export const ProjectsCarouselContainer = styled.div`
    display: flex;
    gap: 20px;
    border-radius: 10px;
    margin-bottom: 8px;
    
    /* 모바일 */
    @media (hover: none) and (pointer: coarse) {
      overflow-x: scroll;
      /* 모멘텀 스크롤을 사용할지? 스크롤 제스쳐에서만 사용 가능
      auto: 일반적, 떼는 순간 멈춤
      touch: 관성을 준다. 떼도 잠깐 돌아감 */
      touch-action: auto;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      
      scrollbar-width: none;  
      &::-webkit-scrollbar {
        display: none;
      }
      min-width: ${({ final }) => final ? `180%;` : `410px`};
    }

    /* 여기에 transition 넣는건가? */
    transition: transform 1s cubic-bezier(0.42, 0, 0.18, 1.15)
`

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
`


export const CarouselButtons = styled.div`
    width: 288px;
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
    color: ${(props) => props.theme.colors.redbrown};
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};
  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
    //!* Dark mode: background-color: white;
    background-color: ${(props) => props.theme.colors.redbrown};
    border-radius: 10px;
    margin: auto;
    width: 3px;
    height: 3px;
`