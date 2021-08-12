import styled from 'styled-components';

//! 내가 모르는거 다 지우자
export const BlogCard = styled.div`
    align-content: start;
    width: 400px;
    border-radius: 10px;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    scroll-snap-align: start;
    /* 시작점에 딱 맞춰 스크롤 끝나게 하는 것, 중요함!
    시작, 끝이 정해져있는 대상에 넣어야함, 이 겨웅엔 카드 */
    overflow: hidden;
`;

export const Img = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width:100%;
  /* 100%로 하면 각각 이미지마다 크기가 달라지는데,
  아마 내가 GIF파일을 만들었을 때부터 크기가 달라서
  이렇게 픽셀을 정해주는것만 방법인듯 */
  height:185px;
  object-fit: cover;
  &:hover {
    transition: transform 500ms ease-in-out;
    transform: scale(1.1);
    opacity: 1.5;
  }
`

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 1rem auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  height: 19.5em;
  padding: 0 5rem 1rem;
  color: ${props => props.theme.colors.lightblack}; /* Dark mode: #e4e6e7  */
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  margin: 1.5rem 0 1.5rem 0;
  padding: 0 0 1.5rem 0;
`;

export const ExternalLinks = styled.a`
  position: relative;
  z-index: 5;
  color:#d4c0c0;
  font-size: 1.6rem;
  padding:1rem 1.5rem;
  background: ${(props) => props.theme.colors.redbrown};
  border-radius: 15px;
  transition: 0.5s;
  &:hover{
    background: ${(props) => props.theme.colors.red};
  }
`;

export const TagImgList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 1.5rem 0;
`

export const TagImg = styled.img`
  font-size: 1rem;

  &:hover {
    transition: transform 100s ease-in-out;
    transform: scale(0.98);
    opacity: 0.9;
  }
`