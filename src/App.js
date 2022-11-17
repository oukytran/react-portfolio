import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Experience from "./routes/Experience";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Experience" element={<Experience />} />
    <Route path="/Contact" element={<Contact />} />
   </Routes>
   </>
  );
}

export default App;
