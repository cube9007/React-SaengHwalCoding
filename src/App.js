import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import HOME from "./page/HOME";
import ClassOne from "./page/01강 수업소개/index";
import ClassTwo from "./page/02강 공부 전략/index";
import ClassThree from "./page/03강 개발환경의 종류/index";
import ClassFour from "./page/04강 npm을 이용해서 create react app 설치/index";
import ClassFive from "./page/05강 create react app을 이용해서 개발환경구축/index";
import ClassSix from "./page/06강 샘플 웹앱 실행/index";
import ClassSeven from "./page/07강 JS 코딩하는 법/index";
import ClassEight from "./page/08강 css코딩하는 법/index";
import ClassNine from "./page/09강 배포하는 법/index";
import ClassTen from "./page/10강 리액트가 없다면/index";
import ClassEleven from "./page/11_1강 컴포넌트 만들기1/index";
import ClassElevenTwo from "./page/11_2강 컴포넌트 만들기 2/index";

import ClassCodeMirror from "./page/* 코드 미러 쓰는 법/index";

import './css/App.scss';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HOME />} />
            <Route path='/page/class_one/index' element={<ClassOne />} />
            <Route path='/page/class_two/index' element={<ClassTwo />} />
            <Route path='/page/class_three/index' element={<ClassThree />} />
            <Route path='/page/class_four/index' element={<ClassFour />} />
            <Route path='/page/class_five/index' element={<ClassFive />} />
            <Route path='/page/class_six/index' element={<ClassSix />} />
            <Route path='/page/class_seven/index' element={<ClassSeven />} />
            <Route path='/page/class_eight/index' element={<ClassEight />} />
            <Route path='/page/class_nine/index' element={<ClassNine />} />
            <Route path='/page/class_ten/index' element={<ClassTen />} />
            <Route path='/page/class_eleven/index' element={<ClassEleven />} />
            <Route path='/page/class_eleven_two/index' element={<ClassElevenTwo />} />

            <Route path='/page/class_codemirror/index' element={<ClassCodeMirror />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
