"use client"

import Header from "../components/header"
import Footer from "../components/footer"
import Loading from "../components/loading"
import dynamic from "next/dynamic"

// use a loading component while the map is loading
const DynamicMap = dynamic(() => import("../components/map"), {
    loading: () => <Loading />,
    ssr: false
})

export default function Mapa() {
    return (
        <>
            <Header />
            <DynamicMap />
            <Footer />
        </>
    )
}
