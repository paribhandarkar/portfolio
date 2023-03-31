import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about/About";
import Contact from "./contact/Contact";
import Work from "./work/Work";
import NavBar from "./common components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
