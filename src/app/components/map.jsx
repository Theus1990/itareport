"use client"

import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

export default function Map() {
    const position = [-3.6836, -39.5816]
    const pin = L.icon({
        iconUrl: "pinmap.svg",
        iconSize: [32, 32],
        iconAnchor: [24, 48],
        popupAnchor: [0, -48]
    })

    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            minZoom={3}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={position} icon={pin}>
                <Popup
                    closeButton={false}
                    minWidth={240}
                    maxWidth={240}
                    className='map-popup'
                >
                    <h3>title</h3>
                    <p>description</p>
                </Popup>
            </Marker>
        </MapContainer>
    )
}
