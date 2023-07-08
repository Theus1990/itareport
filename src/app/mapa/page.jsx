"use client"

import Header from "../components/header"
import Footer from "../components/footer"
import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const DynamicMap = dynamic(() => import("../components/map"), { ssr: false })

export default function Mapa() {
      return (
        <>
        <Header />
        <DynamicMap />
        <Footer />
        </>
      );
 
   
}
