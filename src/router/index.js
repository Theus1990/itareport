import { Routes, Route, Router } from "react-router-dom"
import LandingPage from "../pages/landingPage"
import Register from "../pages/register"
import Login from "../pages/login"
import Map from "../pages/reportMap"
import Form from "../pages/forms"
import AboutUS from "../pages/aboutUs"


export default function Routing() {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='register/' element={<Register />} />
            <Route path='login/' element={<Login />} />
            <Route path='map/' element={<Map />} />
            <Route path='forms/' element={<Form />} />
            <Route path= '/aboutus/' element={<AboutUS />} />
        </Routes>
    )
}
