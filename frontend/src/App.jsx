import React from "react";
import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Booking from "./components/Booking";
import Contacts from "./components/Contacts";

const App = () => {
    return (
        <div className="App">
            <Header />
            {/* <HomePage /> */}
            {/* <Booking /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default App;