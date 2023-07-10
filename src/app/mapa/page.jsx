"use client"

import Header from "../components/header"
import Footer from "../components/footer"
import Loading from "../components/loading"
import dynamic from "next/dynamic"

// use a loading component while the map is loading
const Map = dynamic(() => import("../components/map"), {
    loading: () => <Loading />
})

export default function Mapa() {
    return (
        <>
            <Header />
            <Map />
            <Footer />
        </>
    )
}
