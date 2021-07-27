import styled from 'styled-components';

export const PortraitImg = styled.img`
    border-radius: 10px;
    width:34rem;
    height:55rem;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    object-fit: cover;
    z-index: -100;
    position: absolute;
    right: 20px;

    @media ${props => props.theme.breakpoints.md}{
        top: 100px;
        width:25rem;
        height:40rem;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        position: static;
        width:21rem;
        height:34rem;
    }
`;