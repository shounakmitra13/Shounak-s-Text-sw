import "./App2.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // light or dark mode
  const [alert, setAlert] = useState(null);

  // Show alert message
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  // Toggle dark/light mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#160552";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  // Quick color changes
  const changegreen = () => { document.body.style.backgroundColor = "#35C649"; };
  const changeyellow = () => { document.body.style.backgroundColor = "#CAB911"; };
  const changered = () => { document.body.style.backgroundColor = "#C15031"; };

  return (
    <BrowserRouter>
      <Navbar
        title="TextSwift"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        changegreen={changegreen}
        changered={changered}
        changeyellow={changeyellow}
      />
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        <Routes>
          <Route
            exact
            path="/about"
            element={<About mode={mode} />}
          />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Try TextSwift: a word counter, character counter, remove extra spaces, and convert text."
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
