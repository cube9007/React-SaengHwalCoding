
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
// import { Box, 
//         } from "@mui/material";
// import { Mail, 
//         } from "@mui/icons-material";

class Subject extends Component {
    render() {
        return (
            <>
                <header>
                    <h1> WEB! </h1>
                    <p> World Wide Web!</p>
                </header>
            </>
        )
    }
}

class class10 extends React.Component {
    render() {
      return (
        <> 
          {/* 상단 메뉴 */}
          <div className="top_bar" >
              <h1>
                  <Link to="/">11_1강 컴포넌트 만들기1 </Link>
              </h1>
          </div>
          {/* 콘텐트 영역 */}
          <div className="box">
            <h3> 시작하기 전에 </h3>
            <pre>{`
영어 문법 잘 알아도 영어 못하는 사람 많음
영어 문법 몰라도 영어 잘하는 사람도 많음
그냥 익숙해지면 장땡임

코드도 마찬가지
뭔지 이해 잘 안되어도 익숙해지면 장떙임 

+

우리가 쓰는 문법은 JSX라고 유사 자바스크립트임
자바스크립트가 아님 그대로 html에 쓰면 오류 뜸

리액트가 html로 옮기기 전에 jsx를 js로 컨버팅해서 넘겨주는 것임
하지만 사람이 보기엔 jsx가 더 편해서 사용함 
            `}</pre>
          </div>
          
          
          <div className='box'>
            <h3> 컴포넌트 만들기 </h3>
            <div className='box'>
                <Subject></Subject>
            </div>
            <CodeMirror
                    value={`
import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return (
            <>
                <header>
                    <h1> WEB! </h1>
                    <p> World Wide Web!</p>
                </header>
            </>
        )
    }
}

class App extends Component {
    render() {
        return (
            <>
                <Subject />
            </>
        )
    }
}

export default App;
                    `}
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />

                <pre>{`
extends Component = 컴포넌트를 만들겠다 
안에 render() 함수가 있어야 되고 그 안에 return 구문이 있어야됨 

Subject라는 간단한 태그를 달았는데 태그 한개만으로 긴 장문이 완성도미 
Subject에 컴포넌트를 지정해놓았기 떄문임 

컴퍼넌트는 반드시 하나의 최상의 태그로 이루어짐 무조건 하나! 두개면 안됨 
                `}</pre>
          </div>
        </>
      );
    }
  };
  
  export default class10;