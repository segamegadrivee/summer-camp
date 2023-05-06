import React from "react";
import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Booking from "./components/Booking";

const App = () => {
    return (
        <div className="App">
            <Header />
            {/* <HomePage /> */}
            <Booking />
            <Footer />
        </div>
    )
}

export default App;