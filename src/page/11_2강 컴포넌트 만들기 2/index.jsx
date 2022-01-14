
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

class TOC extends Component {
    render() {
        return(
            <>
                <ul>
                    <li>Html</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <>
                <h2>Html</h2>
                <p> Html is 'hypertext mark up language'</p>
            </>
        );
    }
}
class class10 extends React.Component {
    render() {
      return (
        <> 
          {/* 상단 메뉴 */}
          <div className="top_bar" >
              <h1>
                  <Link to="/">11_2강 컴포넌트 만들기 2 </Link>
              </h1>
          </div>
          {/* 콘텐트 영역 */}
          <div className="box">
            <h3> 시작하기 전에 </h3>
            <pre>{`
리액트 컴포넌트 = 정리정돈의 도구
만약에 컴포넌트 안의 1억줄의 코드가 있다면
컴포넌트가 없을 떄 1억줄이 그대로 노출될 것임 

캐비넷에 물건을 많이 넣어놓고 이름만 붙이면 됨
그리고 이름만 기억하면됨
복잡도를 획기적으로 낮춤

            `}</pre>
          </div>
          <div className="box">
            <h3> 예시 </h3>
            <div className='box'>
                <Subject></Subject>
                <TOC></TOC>
                <Content></Content>
            </div>

            <CodeMirror
                value={`<Subject></Subject>
<TOC></TOC>
<Content></Content>`}
                theme='dark'
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                    console.log('value:', value);
                }}
            />
            <pre>{`예시는 복잡한데 코드는 단순함
왜냐하면 컴포넌트로 감추었기 때문
Subject와 TOC와 Content 안에 코드가 숨겨져 있음
코드를 숨김으로서 복잡도를 낮추고 정리되어 보임 

밑에 코드가 숨겨진 코드임
컴포넌트화 시킨 코드
            `}</pre>
            <CodeMirror
                theme='dark'
                value={`class Subject extends Component {
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

class TOC extends Component {
    render() {
        return(
            <>
                <ul>
                    <li>Html</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <>
                <h2>Html</h2>
                <p> Html is 'hypertext mark up language'</p>
            </>
        );
    }
}`}
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                    console.log('value:', value);
                }}
            />

          </div>
        </>
      );
    }
  };
  
  export default class10;