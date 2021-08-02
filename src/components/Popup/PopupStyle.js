import styled from 'styled-components';
import { motion } from 'framer-motion';
// delay 주고해야함

export const PopupContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: .5em;

    position: fixed;
    z-index: 40;
    margin: 2rem 0 0;
    right: 0;
    background: rgba(0, 138, 32, 0.3);
    padding: 1rem 2rem;
    border-radius: 5px;
    border-left: 4px solid rgba(0, 138, 32, 0.4);
    color: ${(props) => props.theme.colors.pastelwhite};
`;

export const PopupTitle = styled.div`
    display: flex;
    gap : 0 1em ;
`;

export const PopupText = styled.div`
    display: flex;
    align-content: center;
`;

export const PopupIcons = styled.span`

`;

//!unused
export const PopupCloseButton = styled.button`
    margin: 0;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 5px;
    position: relative;
    top: 2.5px;
    color: rgba(183, 16, 14, 0.55);
    box-shadow: 0 12px 26px -6px rgba(0, 0, 0, 0.3),
    0 8px 16px -8px rgba(0, 0, 0, 0.2), 0 -6px 16px -6px rgba(0, 0, 0, 0.3);
`;

// 아이콘 크기 sm일때랑 태블릿일때 알아내야함