import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";


export default function Routing(){
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
    </Routes>
  );
}
