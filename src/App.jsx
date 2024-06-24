import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "@/layout";
import Home from "@/pages/home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
