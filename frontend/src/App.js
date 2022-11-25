import React from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Archive } from "./pages/Archive";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<Archive />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
