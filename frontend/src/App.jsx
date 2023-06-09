import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Booking from "./components/Booking";
import Contacts from "./components/Contacts";
import ForParents from "./components/ForParents";
import VFT from "./components/forms/VFT";
import YL from "./components/forms/YL";
import About from "./components/About";
import Thank from "./components/Thank";


const App = () => {

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/camps" element={<Booking />} />
                <Route path="/camps/vacation-fun-tabir" element={<VFT />} />
                <Route path="/camps/youth-leadership" element={<YL />} />
                <Route path="/thankyou" element={<Thank />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="/parents" element={<ForParents />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;