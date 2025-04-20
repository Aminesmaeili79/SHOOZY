import React from 'react'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ThemeContextProvider} from "./components/ThemeContext.jsx";

createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>
        <StrictMode>
            <App/>
        </StrictMode>
    </ThemeContextProvider>
)
