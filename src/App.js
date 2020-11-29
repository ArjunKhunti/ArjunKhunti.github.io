import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Contact from "./components/Contact.js";
import Skills from "./components/skills.js";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";

function App() {
  return (
    <div>
      <div className="App">
        <Header></Header>
      </div>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
