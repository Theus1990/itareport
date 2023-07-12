"use client"

import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { React, useEffect, useState } from "react"
import axios from "axios"

export default function Map() {
    const [markersData, setMarkersData] = useState([])
    const [idCat, setIdCat] = useState("")
    const [categories, setCategories] = useState([])

    // useEffect(() => {
    //     axios
    //         .get("http://localhost:3030/reports")
    //         .then((response) => setMarkersData(response.data.data))
    //         .catch((error) => {
    //             console.error("Error:", error)
    //             setError("An error occurred while loading the markers.")
    //         })
    // }, [])

    useEffect(() => {
        axios.get("http://localhost:3030/category").then((response) => {
            setCategories(response.data.data)
        })
    }, [])

    //filtro para as denuncias, conforme a categoria
    useEffect(() => {
        if (idCat === "") {
            axios
                .get("http://localhost:3030/reports")
                .then((response) => setMarkersData(response.data.data))
                .catch((error) => {
                    console.error("Error:", error)
                })
        } else {
            axios
                .get(`http://localhost:3030/category/${idCat}`)
                .then((response) => {
                    setMarkersData(response.data.data)
                })
                .catch((error) => {
                    console.error("Error:", error)
                })
        }
    }, [idCat])

    const pin = L.icon({
        iconUrl: "pinmap.svg",
        iconSize: [20, 20],
        iconAnchor: [17, 20],
        popupAnchor: [17, -48]
    })

    console.log(markersData)

    return (
        <>
            <div className='flex'>
                <label htmlFor='category' className='px-1'>
                    Filtro:
                </label>
                <select
                    id='category'
                    className='flex border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                    value={idCat}
                    onChange={(e) => setIdCat(e.target.value)}
                >
                    <option value=''>Todas as categorias</option>
                    {categories.map((category) => (
                        <option
                            key={category.id_categoria}
                            value={category.id_categoria}
                        >
                            {category.nome_categoria}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                {!markersData ? (
                    <div className='loading flex items-center justify-center z-50'>
                        Erro: Recarregue a página
                    </div>
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
                        {markersData
                            .filter(
                                (report) =>
                                    report.lat !== undefined &&
                                    report.lng !== undefined
                            )
                            .map((report) => (
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
        </>
    )
}
