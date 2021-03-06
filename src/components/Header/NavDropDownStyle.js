import styled from 'styled-components';

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;
    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
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
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`
//!* RightNav
export const RightNav = styled.div`
  /* 색을 바꿔야 함 */
  display: flex;
  grid-area: 1 / 3 / 2 / 6;
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-area: 1 / 2 / 2 / 6;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1 / 2 / 2 / 4;
    flex-direction: column;
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


export const AnchorTagsWrapper = styled.div`
  flex: 7;
  display: flex;
  margin: 0 1.5rem 0 .5rem;
  gap: 3rem;
  justify-content: flex-end;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    justify-content: flex-start;
    gap: .5rem;
  }
`;

export const SocialIconsWrapper = styled.div`
  /* 뭔가 너무 많은 느낌이라... */
  /* flex: 2;
  position: relative;
  bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 1rem; */
  display: none;
  @media ${(props) => props.theme.breakpoints.md} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: flex-start;
    align-content: center;
  }

`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: ${props => props.theme.colors.pastelwhite};
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.8rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0.5rem;
    font-size: 1.5rem;
    
  }
`;

// Social Icons 
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: ${props => props.theme.colors.pastelwhite};
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: ${props => props.theme.colors.darkpurple};
    transform: scale(1.1);
    cursor: pointer;
  }
`