"use client"

import { createContext, useContext, useState, useEffect } from "react"

const GlobalContext = createContext({
    userId: "",
    setUserId: () => {},
    markerData: ["", ""],
    setMarkerData: () => {}
})

export const GlobalContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(
        window.localStorage.getItem("userId") || ""
    )
    const [markerData, setMarkerData] = useState(["", ""])

    useEffect(() => {
        window.localStorage.setItem("userId", userId)
    }, [userId])

    const logout = () => {
        setUserId("")
        window.localStorage.removeItem("userId")
    }

    return (
        <GlobalContext.Provider
            value={{ userId, setUserId, markerData, setMarkerData, logout }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
