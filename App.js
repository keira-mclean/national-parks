
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Mountains from "./components/pages/Mountains"
import Parks from "./components/pages/Parks"
import { Route, Routes } from "react-router-dom"
import MountainList from "./components/MountainList";
import React, { Component } from 'react';

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/parks" element={<Parks />} />
        <Route path="/mountains" element={<Mountains />} />
      </Routes>
    </div>

    </>
  );
}

export default App;
