import styled from 'styled-components';
import ReactMapGL from 'react-map-gl';

export const StyledReactMapGL = styled(ReactMapGL)`
    border-radius: 15px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.15),
    0 8px 16px -8px rgba(0, 0, 0, 0.15), 0 -6px 16px -6px rgba(0, 0, 0, 0.015);
`;


export const MarkerIconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: red;

    img {
        width: 30px;
        height: 30px;
        filter: invert(8%) sepia(91%) saturate(5769%) hue-rotate(10deg) brightness(95%) contrast(115%);
    }
`;

export const Address = styled.span`
    
`;