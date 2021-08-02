import React, {useState} from 'react';

import { PopupContainer, PopupTitle, PopupText, PopupIcons } from "./PopupStyle";
import { SocialIcons } from '../Header/NavDropDownStyle';
import { FaBlogger, FaWindowClose } from 'react-icons/fa';


function Popup(props) {
    // const [selectedPin, setSelectedPin] = useState(true);
    // 5초있다가...? useState를 쓴다면 https://youtu.be/i8fAO_zyFAM, 12:47초

    return (props.isOpen) ? (
        <PopupContainer
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}>
            <PopupTitle>
                I have a dev blog, too!
                <FaWindowClose size="1em" onClick={() => props.setIsOpen(false)}/>
            </PopupTitle>
            <PopupText>
                <span style={{position:'relative', top: 3}}>Check it out</span>
                <span>{'\u00A0'}👉</span>
                <PopupIcons>
                    <SocialIcons href="https://google.com">
                        <FaBlogger size="1.5em"/>
                    </SocialIcons>
                </PopupIcons>
            </PopupText>
            {props.children}
        </PopupContainer>
    ) : "";
}

export default Popup;
// mapbox-gl@2.4.0: The engine "node" is incompatible with this module.
// Expected version ">=14.15.4". Got "12.18.0"
// 현재버전 v14.15.3