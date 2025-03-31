import { useState } from "react";
import AuthForm from "./components/formcomponent";
import {BrowserRouter, Routes ,Route} from "react-router-dom";
import Dashboard from "./components/pages/dashboard"
import Navbar from "./components/navbar";
import "./components/pages/usertable"
import UserTable from "./components/pages/usertable";
import Home from "./components/home";

import MarvelAPI from "./components/axios";

function App() {
  return (
    <BrowserRouter>
  
      <Routes>
         
        <Route path="/login" element={<AuthForm />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/table/roadmap" element={<UserTable type="roadmap" />} />  {/* Roadmap table */}
        <Route path="/table/duration" element={<UserTable type="duration" />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/axios" element={<MarvelAPI/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
