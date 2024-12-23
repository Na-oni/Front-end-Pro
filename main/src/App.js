import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/header/Header";

import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import About from "./pages/about/About";

import './App.css';
import React from "react";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Header />}>
                  <Route index element={<Home />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="about" element={<About />} />
              </Route>
          </Routes>
      </Router>
  );
}

export default App;
