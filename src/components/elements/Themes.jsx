import React, { useState, useRef, useEffect } from "react";
import { useHook } from "../ThemeContext.jsx";
import { ChevronDown, Check } from "lucide-react";

const themeConfig = [
    { name: "Emerald", key: "emerald", bg: "#50c878", fg: "#ecf6f0" },
    { name: "Aqua",    key: "aqua",    bg: "#3ebfbb", fg: "#ecfefa" },
    { name: "Light",   key: "light",   bg: "#e8e8e8", fg: "#0f0f0f" },
    { name: "Dark",    key: "dark",    bg: "#1f2937", fg: "#f9fafb" },
];

export default function Themes() {
    const { state, dispatch } = useHook();
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        const onClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, []);

    const handleSelect = (key) => {
        dispatch({ type: key.charAt(0).toUpperCase() + key.slice(1) });
        setOpen(false);
    };

    // Find current theme object
    const current = themeConfig.find((t) => t.key === state.theme);

    return (
        <div className="relative inline-block text-left" ref={containerRef}>
            {/* Dropdown button */}
            <button
                onClick={() => setOpen((o) => !o)}
                className="inline-flex items-center justify-between swipeable btn-theme px-3 py-1.5 rounded-md shadow-sm"
                style={{
                    backgroundColor: current.bg,
                    color: current.fg,
                }}
            >
                <span className="font-medium">{current.name} Theme</span>
                <ChevronDown
                    className={`ml-2 h-5 w-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    size={18}
                />
            </button>

            {/* Dropdown menu with staggered animation */}
            <div
                className={`bg-transparent absolute mt-1 w-40 rounded-lg overflow-hidden transition-all duration-300 origin-top z-20 ${
                    open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
                }`}
                style={{ transformOrigin: "top center" }}
            >
                <ul className="bg-transparent divide-y divide-transparent rounded-lg overflow-hidden flex flex-col gap-1">
                    {themeConfig.map(({ name, key, bg, fg }, index) => (
                        <li
                            key={key}
                            className="transition-all duration-300 border-none"
                            style={{
                                transitionDelay: open ? `${index * 45}ms` : '0ms',
                                opacity: open ? 1 : 0,
                                transform: open ? 'translateY(0)' : 'translateY(-4px)'
                            }}
                        >
                            <button
                                onClick={() => handleSelect(key)}
                                className="w-full text-left px-4 py-2 hover:brightness-95 transition-all flex items-center border-none"
                                style={{ backgroundColor: bg, color: fg }}
                            >
                                <span className="text-sm">{name}</span>
                                {state.theme === key && (
                                    <Check className="ml-auto h-3 w-3" size={14} strokeWidth={2.5} />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}