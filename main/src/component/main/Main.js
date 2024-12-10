import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../pages/home/Home";

import './Main.css';

class Main extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </main>
        );
    }
}

export default Main;