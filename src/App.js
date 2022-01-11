import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import HOME from "./page/HOME";
import ClassOne from "./page/1강 수업소개/index";

import './css/App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HOME />} />
          <Route path='/page/class_one/index' element={<ClassOne />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
