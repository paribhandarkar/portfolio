import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./contact/Contact";
import Work from "./work/Work";
import NavBar from "./common components/NavBar";
const LazyAbout = React.lazy(() => import("./about/About"));

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading..">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
