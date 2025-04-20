import React, { createContext, useContext, useReducer, useEffect } from "react";

const ContextHook = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "Emerald": return { theme: "emerald" };
        case "Aqua":    return { theme: "aqua"    };
        case "Light":   return { theme: "light"   };
        case "Dark":    return { theme: "dark"    };
        default:        return { theme: "light"   };
    }
};

export const useHook = () => {
    const context = useContext(ContextHook);
    if (!context) throw new Error("Context cannot be empty");
    return context;
};

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { theme: "light" });

    useEffect(() => {
        // 1. Set new theme variables
        document.documentElement.setAttribute("data-theme", state.theme);

        // 2. Capture the new bg color for the swipe overlay
        const newBg = getComputedStyle(document.documentElement)
            .getPropertyValue("--color-bg");
        document.documentElement.style.setProperty("--color-bg-new", newBg);

        // 3. Trigger the swipe animation
        document.documentElement.classList.add("swipe-theme");

        // 4. Clean up after animation ends
        const onEnd = () => {
            document.documentElement.classList.remove("swipe-theme");
            document.documentElement.style.removeProperty("--color-bg-new");
        };
        document.documentElement.addEventListener("animationend", onEnd, { once: true });

        return () => {
            document.documentElement.removeEventListener("animationend", onEnd);
        };
    }, [state.theme]);

    return (
        <ContextHook.Provider value={{ state, dispatch }}>
            {children}
        </ContextHook.Provider>
    );
};
