// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import ContactPage from "./Pages/ContactPage";
import FuturePage from "./Pages/FuturePage";
import StagePage from "./Pages/StagePage";

function ScrollToTop() {
    const { hash } = useLocation();

    React.useEffect(() => {
        setTimeout(() => {
            if (hash) {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                window.scrollTo(0, 0);
            }
        }, 0);
    }, [hash]);

    return null;
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/Portfolio/" element={<Home />} />
                <Route path="/Portfolio/contact" element={<ContactPage />} />
                <Route path="/Portfolio/future" element={<FuturePage />} />
                <Route path="/Portfolio/experience" element={<StagePage />} />
            </Routes>
        </Router>
    );
}

export default App;
