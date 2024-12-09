import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../pages/home/Home"
import Contact from "../../pages/contact/Contact"
import About from "../../pages/about/About";

import './Main.css';

class Main extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </main>
        );
    }
}

export default Main;