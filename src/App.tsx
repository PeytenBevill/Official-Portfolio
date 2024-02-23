import React from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";

const App: React.FC = () => {

  return (
    <>
    <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
     </Routes>
    </>
  );
}

export default App;
