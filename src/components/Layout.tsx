import type { JSX } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "./Navbar";
const Layout = ({ children }: { children: JSX.Element }) => {

    const location = useLocation();

    const hideLayout = location.pathname === "/login" || location.pathname === "/register";


    return (
        <>
            {!hideLayout && <Navbar />}
            <main>{children}</main>
        </>
    )
}

export default Layout
