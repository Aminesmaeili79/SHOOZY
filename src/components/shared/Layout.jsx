import Footer from "../elements/Footer.jsx";
import Navbar from "../elements/Navbar.jsx";
import {useEffect} from "react";
import Themes from "../elements/Themes.jsx";
import Hero from "../sections/Hero.jsx";

const Layout = ({title}) => {
    useEffect(() => {
        document.title = title;
    }, [title])

    return (
        <>
            <Navbar />
            <Hero />
            <Footer />
        </>
    )
}

export default Layout

