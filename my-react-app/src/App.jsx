import { useState } from "react";
import "./App.css";
import AuthForm from "./components/formcomponent";
import {BrowserRouter, Routes ,Route} from "react-router-dom";
import Dashboard from "../src/components/dashboard"
import Navbar from "./components/navbar/navbar";
import "./components/tables/usertable"
import UserTable from "./components/tables/usertable";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
         
        <Route path="/login" element={<AuthForm />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/table/roadmap" element={<UserTable type="roadmap" />} />  {/* Roadmap table */}
        <Route path="/table/duration" element={<UserTable type="duration" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
