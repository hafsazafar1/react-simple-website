import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import Home from "./web-pages/home";
import About from "./web-pages/about";
import Services from "./web-pages/services";
import Contact from "./web-pages/contact";
import Counter from "./web-pages/counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./web-pages/gallery";

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/"element={< Home/>}></Route>
        <Route path="/home"element={ < Home/>}></Route>
        <Route path="/about" element={< About/>}></Route>
        <Route path="/contact" element={< Contact/>}></Route>
        <Route path="/services"element={ < Services/>}></Route>
        <Route path="/counter"element={< Counter/>}></Route>
        <Route path="/gallery" element={< Gallery/>}></Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;
