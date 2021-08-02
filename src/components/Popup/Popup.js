import React, {useState} from 'react';

import { PopupContainer, PopupTitle, PopupText, PopupIcons } from "./PopupStyle";
import { SocialIcons } from '../Header/NavDropDownStyle';
import { FaBlogger, FaWindowClose } from 'react-icons/fa';


function Popup(props) {
    // const [selectedPin, setSelectedPin] = useState(true);


    return (props.trigger) ? (
        <PopupContainer>
            <PopupTitle>
                I have a dev blog, too!
                <FaWindowClose size="1em"/>
            </PopupTitle>
            <PopupText>
                <span style={{position:'relative', top: 3}}>Check it out</span>
                <span>{'\u00A0'}👉</span>
                <PopupIcons>
                    <SocialIcons href="https://github.com">
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