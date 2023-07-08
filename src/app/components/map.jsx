"use client"

import "leaflet/dist/leaflet.css"
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Map() {

    function LocationMarker() {
        const [position, setPosition] = useState(null);
        const [bbox, setBbox] = useState([]);

        const pin = L.icon({
            iconUrl: "pinmap.svg",
            iconSize: [32, 32],
            iconAnchor: [16, 16],
            popupAnchor: [0, -48]
        })
    
        const map = useMap();
    
        useEffect(() => {
          map.locate().on("locationfound", function (e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
            const radius = e.accuracy;
            const circle = L.circle(e.latlng, radius);
            circle.addTo(map);
            setBbox(e.bounds.toBBoxString().split(","));
          });
        }, [map]);

        return position === null ? null : (
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
          );
        }

    return (
        <MapContainer
            center={[-3.6906281127994665, -39.57835150669607]}
            zoom={13}
            scrollWheelZoom
            style={{ height: "100vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />  
          <LocationMarker />
        </MapContainer>
    )

}