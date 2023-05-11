import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import { useMemo } from "react"
import "./style.css"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    })
    const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), [])

    return (
        <div className='mapa'>
            {!isLoaded ? (
                <>
                    <Header />
                    <h1>Loading...</h1>
                    <Footer />
                </>
            ) : (
                <>
                    <Header />
                    <GoogleMap
                        mapContainerClassName='map-container'
                        center={center}
                        zoom={10}
                    />
                    <Footer />
                </>
            )}
        </div>
    )
}
