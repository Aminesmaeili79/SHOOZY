// src/components/Navbar.jsx
import React from "react";
import { useHook } from "../ThemeContext.jsx";
import Themes from "./Themes.jsx";

const Navbar = () => {
    const { state } = useHook();
    return (
        <nav
            className="bg-box border-b border-box-border px-16"
            aria-label="Main navigation"
        >
            <div className="container flex items-center justify-between py-4">
                <a href="/" className="text-heading-1 font-bold">
                    SHOOZY
                </a>
                {/* Example nav links; you can adjust as needed */}
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <a href="#home" className="hover:text-primary transition">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#features" className="hover:text-primary transition">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-primary transition">
                            Contact
                        </a>
                    </li>
                </ul>
                {/* Mobile menu toggle (you can wire up dropdown logic) */}
                <button
                    className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 8h16M4 16h16"
                        />
                    </svg>
                </button>
                <Themes />
            </div>
        </nav>
    );
};

export default Navbar;
