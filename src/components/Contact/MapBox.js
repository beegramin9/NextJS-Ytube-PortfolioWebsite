import React, {useState} from 'react'

import { Marker, Popup} from 'react-map-gl';
import { StyledReactMapGL, MarkerIconButton, Address } from './MapBoxStyle';

function MapBox() {
    const [viewport, setViewport] = useState({
        latitude: 37.529669407507,
        longitude: 126.89800554571,
        width: '40rem',
        height: '40rem',
        zoom: 12
    })

    const [selectedPin, setSelectedPin] = useState(true);



    const API_KEY = 'pk.eyJ1IjoiYmVlZ3JhbWluOSIsImEiOiJja3JyY2F6aXEwdmJoMnVwZmF3Z3lpOXFjIn0.1esCF53MiJgwJPm1R8EdKw';

    return (
        <StyledReactMapGL 
        {...viewport} 
        mapboxApiAccessToken={API_KEY}
        onViewportChange={viewport => setViewport(viewport)}
        mapStyle="mapbox://styles/mapbox/streets-v11">
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

// lat: 37.529669407507
// lng: 126.89800554571
// AIzaSyDNK_5FJCc6n3PI_A5LoTxt4xKA2Fd935M
export default MapBox
