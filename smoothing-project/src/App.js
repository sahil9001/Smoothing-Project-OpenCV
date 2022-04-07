import React from "react";
import "../src/fonts/fonts.css";
import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home,Product,About } from "./routes";
import { Footer } from "./containers";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/contact" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
