import React from "react";
import "./App.scss";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import News from "./Pages/News";
import Recipes from "./Pages/Recipes";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<News />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
