import styled from 'styled-components';

export const ProjectsCarouselContainer = styled.ul`
    background: ${(props) => props.theme.colors.background1 } ;

    padding: 0rem;
    list-style:none;
    display: flex;
    justify-content: space-between; 
    border-radius: 10px;
    
    scrollbar-width: none;  
    &::-webkit-scrollbar {
      display: none;
    }
    
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
`

/* 원래 캐러젤같았으면 모바일상태일때부터 이게 작동해야되는데
지금은 전체화면일때부터 작동해야하니 사실 media쿼리를 지워야 한다 */

/* 
@media ${props => props.theme.breakpoints.xl} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
} 
*/
export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const CarouselMobileScrollNode = styled.div`
  /* 건드는거 아님  */
  display: flex;
  min-width: ${({ final }) => final ? `100%;` : `410px`};

  /* 이걸 없애서 sm이나 최대일때나 scrollWidth가 같아졌어! */
`
// min-width: ${(props) => {}
//   if (props.first) {
//     return '380px'
//   }else if (props.final) {
//     return `120%`
//   } else {
//     return `410px`
//   }
// }};

  /* @media ${props => props.theme.breakpoints.sm} {
    min-width: ${({ final }) => final ? `120%;` : `min-content`};
  } */

export const ProjectsCarouselItem = styled.div`
    border-radius: 3px;
    width: 400px;
    margin-right: 4rem;
    align-content: start;
    scroll-snap-align: start;
    overflow: visible;
    position: relative;
    height: fit-content;

`
/* 
@media ${props => props.theme.breakpoints.md} {
    max-width: 124px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${(props) => props.active === props.index ? `opacity: 0.7` : `opacity: 1`}; 
  } 
*/

export const CarouselButtons = styled.div`
    width: 288px;
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
    color: ${(props) => props.theme.colors.redbrown};
`
/* display: none;
visibility: hidden;
@media ${props => props.theme.breakpoints.sm} {
  display: flex;
  visibility: visible;
  margin-bottom: 48px;
} */


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

