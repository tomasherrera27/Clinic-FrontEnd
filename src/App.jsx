import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Odontologist from './components/Odontologist';
import Patient from './components/Patient';
import Turn from './components/Turns';

function App() {
  return (
     <>
    <Router>
      <Nav/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/odontologist" element={<Odontologist />} />
        <Route path= "/patient" element={<Patient />} />
        <Route path= "/turn" element={<Turn />} />
        </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
