import styled from 'styled-components';

export const PortraitImg = styled.img`
    border-radius: 10px;
    width:34rem;
    height:55rem;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    object-fit: cover;

    @media ${props => props.theme.breakpoints.md}{
        width:25rem;
        height:40rem;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        width:21rem;
        height:34rem;
    }
`;