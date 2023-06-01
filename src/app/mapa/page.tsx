"use client"

import Header from "../components/header"
import Footer from "../components/footer"
import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("../components/map"), { ssr: false })

export default function Mapa() {
    return (
        <>
            <Header />
            <DynamicMap />
            <Footer />
        </>
    )
}
