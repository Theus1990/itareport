import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/landingPage"
import Register from "../pages/register"
import Login from "../pages/login"

export default function Routing() {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='register/' element={<Register />} />
            <Route path='login/' element={<Login />} />
        </Routes>
    )
}
