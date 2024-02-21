import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Typography } from '@mui/material';


interface MapProps {
    position: number[],
    address: String,
}


const MapComponent = ({position, address}: MapProps) => {


    return (

            <MapContainer center={position} zoom={13}  style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        {address}
                    </Popup>
                </Marker>
            </MapContainer>




    );
};

export default MapComponent;
