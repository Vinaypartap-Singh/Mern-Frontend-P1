import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/sections/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Service from "./components/pages/Service";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
