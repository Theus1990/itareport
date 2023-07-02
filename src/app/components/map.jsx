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
            .catch((error) => console.error("Error:", error))
    }, [])

    const pin = L.icon({
        iconUrl: "pinmap.svg",
        iconSize: [24, 24],
        iconAnchor: [24, 24],
        popupAnchor: [0, -48]
    })

    console.log(markersData)

    return (
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
            {
                //associate the report to the adress that have the id equal to the report adress id
                //get the data from the json file and create a marker for each one
                markersData.map((report) => (
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
                ))
            }
        </MapContainer>
    )
}
