import React from "react";
import "./App.scss";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Recipes from "./Pages/Recipes";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
