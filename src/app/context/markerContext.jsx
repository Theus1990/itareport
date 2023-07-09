"use client"

import { React, createContext, useState } from "react"

const MarkerPositionContext = createContext()

export default function MarkerPositionProvider({ children }) {
    const [markerPosition, setMarkerPosition] = useState(null)

    return (
        <MarkerPositionContext.Provider
            value={{ markerPosition, setMarkerPosition }}
        >
            {children}
        </MarkerPositionContext.Provider>
    )
}

export const useMarkerPosition = () => {
    const context = useContext(MarkerPositionContext)
    const { markerPosition, setMarkerPosition } = context

    return { markerPosition, setMarkerPosition }
}
