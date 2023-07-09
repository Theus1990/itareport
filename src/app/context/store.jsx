"use client"

import { createContext, useContext, useState } from "react"

const GlobalContext = createContext({
    userId: "",
    setUserId: () => {},
    markerData: ["", ""],
    setMarkerData: () => {}
})

export const GlobalContextProvider = ({ children }) => {
    const [userId, setUserId] = useState("")
    const [markerData, setMarkerData] = useState(["", ""])

    return (
        <GlobalContext.Provider
            value={{ userId, setUserId, markerData, setMarkerData }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
