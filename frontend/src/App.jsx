import React from "react";
import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";


const App = () => {
    return (
        <div className="App">
            <Header />
            <HomePage />
            <Footer />
        </div>
    )
}

export default App;