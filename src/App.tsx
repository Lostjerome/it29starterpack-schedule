import { BrowserRouter, Routes, Route } from "react-router-dom";

import Catterra from "@/pages/Catterra";
import Venuspurr from "@/pages/Venuspurr";
import Neptunclaw from "@/pages/Neptunclaw";
import Meowtian from "@/pages/Meowtian";
import Caturn from "@/pages/Caturn";
import Home from "@/pages/Home";
import Catstronaut from "./pages/Catstronaut";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catterra" element={<Catterra />} />
                    <Route path="/venuspurr" element={<Venuspurr />} />
                    <Route path="/neptunclaw" element={<Neptunclaw />} />
                    <Route path="/meowtian" element={<Meowtian />} />
                    <Route path="/caturn" element={<Caturn />} />
                    <Route path="/catstronaut" element={<Catstronaut />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
