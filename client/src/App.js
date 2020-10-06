import React from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Offer from "./components/Offer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

import "./App.css";

const App = () => {
  return (
    <div className='app'>
      <Landing />
      <Navbar />
      <About />
      <Offer />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
