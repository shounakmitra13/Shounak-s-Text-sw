import "./App2.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import React, { useState } from "react";
import About from "./components/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [text, setText] = useState(""); // State to track text input

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#160552";
      showAlert("Dark mode has been enabled", "success");
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const changegreen = () => {
    document.body.style.backgroundColor = "#35C649";
  };

  const changeyellow = () => {
    document.body.style.backgroundColor = "#CAB911";
  };

  const changered = () => {
    document.body.style.backgroundColor = "#C15031";
  };

  // Handle change in the text input
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Count words, characters, sentences, and paragraphs correctly
  const countWords = (text) => {
    let trimmedText = text.trim();
    return trimmedText.length === 0 ? 0 : trimmedText.split(/\s+/).length;
  };

  const countCharacters = (text) => {
    return text.length;
  };

  const countSentences = (text) => {
    return text.split(/[.!?]\s+/).filter(Boolean).length;
  };

  const countParagraphs = (text) => {
    return text.split(/\n\s*\n/).filter(Boolean).length;
  };

  // Convert text to uppercase
  const handleUppercase = () => {
    setText(text.toUpperCase());
    showAlert("Converted to uppercase", "success");
  };

  // Convert text to lowercase
  const handleLowercase = () => {
    setText(text.toLowerCase());
    showAlert("Converted to lowercase", "success");
  };

  // Clear text
  const handleClearText = () => {
    setText("");
    showAlert("Text cleared", "success");
  };

  // Copy text to clipboard
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    showAlert("Text copied to clipboard", "success");
  };

  // Remove extra spaces
  const handleRemoveExtraSpaces = () => {
    setText(text.split(/\s+/).join(" "));
    showAlert("Extra spaces removed", "success");
  };

  //Convert to pascal Case
  

  return (
    <>
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
            ></Route>
            <Route
              exact
              path="/"
              element={
                <>
                  <h2>Try TextSwift: a word counter, character counter, remove extra spaces.</h2>
                  <textarea
                    className="form-control"
                    value={text}
                    onChange={handleChange}
                    style={{
                      backgroundColor: mode === "dark" ? "#333" : "white",
                      color: mode === "dark" ? "white" : "#042743",
                    }}
                    rows="8"
                  ></textarea>
                  <p>
                    {countWords(text)} words and {countCharacters(text)} characters
                  </p>
                  <div className="btn-group">
                    <button onClick={handleUppercase} className="btn btn-primary">Convert to Uppercase</button>
                    <button onClick={handleLowercase} className="btn btn-secondary">Convert to Lowercase</button>
                    <button onClick={handleClearText} className="btn btn-danger">Clear Text</button>
                    <button onClick={handleCopyText} className="btn btn-info">Copy Text</button>
                    <button onClick={handleRemoveExtraSpaces} className="btn btn-light">Remove Extra Spaces</button>
                    <button onClick={toggleMode} className="btn btn-dark">
                      {mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
                    </button>
                    <button
                      onClick={() => showAlert(`Sentences: ${countSentences(text)}. Paragraphs: ${countParagraphs(text)}`, "info")}
                      className="btn btn-warning"
                    >
                      Count Sentences & Paragraphs
                    </button>
                  </div>
                  <h3 className="mt-4">Preview</h3>
                  <p className="border p-3" style={{ backgroundColor: mode === "dark" ? "#333" : "#f8f9fa" }}>
                    {text}
                  </p>
                </>
              }
            ></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
