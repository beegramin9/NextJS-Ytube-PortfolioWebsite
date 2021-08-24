## Project Status
![Generic badge](https://img.shields.io/badge/build-passing-green.svg)
<br/> [Link](https://www.wontaechoi.tech). try!

## Overview
![Landingpage](https://user-images.githubusercontent.com/58083434/130402392-0859a094-4655-45d0-b184-a07b89a7ee23.gif)

## Technology Stack
<img src="https://img.shields.io/badge/NextJS-000000?style=flat-square&logo=Next.js&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/Framer-df0eb1?style=flat-square&logo=Framer&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=Styled-Components&logoColor=white"/></a>

## Outline
&nbsp; This website is built with NextJS. It is a portfolio landing page website where you can check out my education, experiences and tech stacks. You can even download my the latest updated resume. <br/>
&nbsp; It also provides the link to my dev blog.
<br/><br/>
&nbsp; 자기소개를 위한 랜딩페이지입니다. 제 이력서, 연혁, 스택 등을 확인할 수 있습니다. 저에 대한 개요를 일목요연하게 볼 수 있도록 심플한 UI로 디자인했습니다. 가장 최신으로 업데이트 되어있는 이력서를 다운로드받아 보실 수 있으며, 스택과 연혁, 그리고 제 소셜미디어를 확인할 수 있도록 아이콘들이 준비되어 있습니다.

## Main Feature Code
- Mapbox
> (src/components/Contact/MapBox.js) <br/>
> npm react-map-gl에서 사용한 지도 API입니다. 현재 지역을 표시하기 위해 사용했습니다. <br/>
> reusable component 입니다.
```js
import React, {useState, useEffect} from 'react'
import { Marker, Popup} from 'react-map-gl';
import { StyledReactMapGL, MarkerIconButton, Address } from './MapBoxStyle'; // 커스텀 styled-component입니다.
import 'mapbox-gl/dist/mapbox-gl.css';
function MapBox() {
    const [viewport, setViewport] = useState({
        latitude: 37.529669407507,
        longitude: 126.89800554571,
        zoom: 12,
        width: "36rem",
        height: "36rem",
    })

    const [selectedPin, setSelectedPin] = useState(true);
    const API_KEY = '****'; 
    // .env.local 파일 환경변수에 API key를 넣어 비공개처리하러 하였으나 어떤 이유에서인지 제대로 동작하지 않았습니다.
    //! 버그 수정이 필요합니다.

    return (
        <StyledReactMapGL 
            {...viewport} 
            mapboxApiAccessToken={API_KEY}
            onViewportChange={viewport => setViewport(viewport)}
            mapStyle="mapbox://styles/mapbox/streets-v11"> // www.mapbox.com/gallery에서 다양한 스타일을 가져와 사용할 수 있습니다.
            <Marker latitude={37.529669407507} longitude={126.89800554571}
            onClick={e => {
                e.preventDefault();
                setSelectedPin(true);
                }}>
                <MarkerIconButton>
                    <img src='/map_pin.svg' art="Here"/>
                </MarkerIconButton>
            </Marker>
            { selectedPin ? 
                <Popup latitude={37.529669407507} longitude={126.89800554571}
                onClose={() => setSelectedPin(false)}>
                    <Address>near Dangsan Station, Seoul, Korea</Address> 
                </Popup>
            : null}
        </StyledReactMapGL>
    )
}

export default MapBox;
```
- Hamburger menu
> (src/components/Header/NavDropDownStyle.js) <br/>
> npm react-map-gl에서 사용한 지도 API입니다. 저는 현재 거주중인 지역을 사용자들에게 표시하기 위해 사용했습니다. <br/>
> reusable component으로 저의 [Dev Blog Hamburge menu](https://github.com/beegramin9/Gatsby-Official-Tutorial/blob/main/src/styles/NavDropDownStyle.js) 에서 커스터마이징하여 재사용했습니다. 
```js
import styled from 'styled-components';

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none; // 스크린 너비가 충분할 땐 보이지 않습니다.
    @media ${(props) => props.theme.breakpoints.md} { 
        display: flex; // 스크린 너비가 sm breakpoints를 넘어갔을 때 보이기 시작합니다.
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${( props ) => props.theme.colors.pastelwhite};
        border-radius: 10px;
        transform-origin: 1px; 
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1}; // 중간 라인이 없어지면서 X자를 만들게 됩니다.
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

export const RightNav = styled.div`
  display: flex;
  grid-area: 1 / 3 / 2 / 6;
  @media ${(props) => props.theme.breakpoints.lg} { // 스크린 너비가 충분할 때
    grid-area: 1 / 2 / 2 / 6;
  } 
  @media ${(props) => props.theme.breakpoints.md} { // 스크린 너비가 좁을 때
    grid-area: 1 / 2 / 2 / 4;
    flex-direction: column; // 자식 요소들을 세로로 배치합니다.
    justify-content: flex-start;
    background: ${(props) => props.theme.colors.darkpurple};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 40vw;
    transition: transform 0.3s ease-in-out;
    padding-top: 4.5rem;
    gap: 1rem
  }
`;
```
