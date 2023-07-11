"use client"

import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { React, useEffect, useState } from "react"
import axios from "axios"

export default function Map() {
    const [markersData, setMarkersData] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:3030/reports")
            .then((response) => setMarkersData(response.data.data))
            .catch((error) => {
                console.error("Error:", error)
                setError("An error occurred while loading the markers.")
            })
    }, [])

    const pin = L.icon({
        iconUrl: "pinmap.svg",
        iconSize: [20, 20],
        iconAnchor: [17, 20],
        popupAnchor: [17, -48]
    })

    console.log(markersData)

    return (
        <div>
            {!markersData ? (
                <div>Erro: Recarregue a página</div>
            ) : (
                <MapContainer
                    center={[-3.9, -39.5]}
                    zoom={10}
                    scrollWheelZoom={true}
                    minZoom={3}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    {markersData.map((report) => (
                        <Marker
                            key={report.id_report}
                            position={[report.lng, report.lat]}
                            icon={pin}
                        >
                            <Popup>
                                <h3>{report.title}</h3>
                                <p>{report.content}</p>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            )}
        </div>
    )
}
