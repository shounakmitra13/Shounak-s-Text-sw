// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="TextSwift" mode={mode} toggleMode={toggleMode} aboutText="About" />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try TextSwift - Word Counter, Character Counter, Text Manipulator"
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
