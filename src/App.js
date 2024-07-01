import "./App2.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
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
      //document.title = "Textutils~Dark Mode";
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success ");
      //document.title = "TextUtils~LightMode";
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
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Textutils"
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
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm heading="Try Textutils: a word counter,character counter ,remove extra spaces. " mode={mode} />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
