// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import ContactPage from "./Pages/ContactPage";
import FuturePage from "./Pages/FuturePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/future" element={<FuturePage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
