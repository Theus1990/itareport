import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import Register from "../pages/register";
import Forms from "../pages/forms";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="register/" element={<Register />} />
      <Route path="forms/" element={<Forms />} />
    </Routes>
  );
}
