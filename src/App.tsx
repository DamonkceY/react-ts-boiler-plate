import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css';
import Home from "./features/home/home";
import {Counter} from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/testRouter'} element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
