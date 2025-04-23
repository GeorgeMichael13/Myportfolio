import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./componenets/header"; // Make sure the path is correct
import Home from "./Pages/home";
import About from "./Pages/about";
import Projects from "./Pages/Projects";
import Contact from "./Pages/contact";
import Footer from "./componenets/footer";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
