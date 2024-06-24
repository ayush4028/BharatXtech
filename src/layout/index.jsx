import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export default function Layout() {
    return (
        <main className="font-nuto-sans overflow-x-hidden">
            <Navbar />

            <main>
                <Outlet />
            </main>

        </main>
    );
}
