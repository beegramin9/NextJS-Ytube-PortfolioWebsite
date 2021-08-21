import React, {useState, useEffect} from 'react'

import { Marker, Popup} from 'react-map-gl';
import { StyledReactMapGL, MarkerIconButton, Address } from './MapBoxStyle';
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

export default MapBox;
