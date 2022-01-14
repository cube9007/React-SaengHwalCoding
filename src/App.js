import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import HOME from "./page/HOME";
import ClassOne from "./page/1강 수업소개/index";
import ClassTwo from "./page/2강 공부 전략/index";
import ClassThree from "./page/3강 개발환경의 종류/index";

import './css/App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HOME />} />
          <Route path='/page/class_one/index' element={<ClassOne />} />
          <Route path='/page/class_two/index' element={<ClassTwo />} />
          <Route path='/page/class_three/index' element={<ClassThree />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
