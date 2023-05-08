import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Booking from "./components/Booking";
import Contacts from "./components/Contacts";
import ForParents from "./components/ForParents";

const App = () => {
    return (
        <div className="App">
            <Header />

            <Routes>
                {/* <Route path="/" element={<HomePage />} /> */}
                <Route path="/camps" element={<Booking />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="/" element={<ForParents />} />
            </Routes>


            <Footer />
        </div>
    )
}

export default App;