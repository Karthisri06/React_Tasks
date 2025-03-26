import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AuthForm from "./components/formcomponent";
import {BrowserRouter, Routes ,Route} from "react-router-dom";
import Dashboard from "../src/components/dashboard"
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
         
        <Route path="/login" element={<AuthForm />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/navbar" element={<Navbar/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
