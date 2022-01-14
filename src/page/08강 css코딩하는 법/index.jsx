
import * as React from 'react';
import { Link } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
// import { Box, 
//         } from "@mui/material";
// import { Mail, 
//         } from "@mui/icons-material";

class class8 extends React.Component {
    render() {
      return (
        <> 
          {/* 상단 메뉴 */}
          <div className="top_bar" >
              <h1>
                  <Link to="/">08강 css코딩하는 법</Link>
              </h1>
          </div>
          {/* 콘텐트 영역 */}
          <div className="box">
            <h3> css 연결 </h3>
            <pre>{`
먼저 css 파일을 만들어야됨
그리고 임포트를 해야됨
            `}</pre>
            <CodeMirror
            value={`import './App.scss'`}
            theme='dark'
            extensions={[javascript({ jsx: true })]}
            onChange={(value, viewUpdate) => {
                console.log('value:', value);
            }}
            />
            <pre>{`
다른 css 파일도 이런식임
처음 리액트를 깔았을 떄 App.css 도 index.css 도 이런식으로 되어 있음 
            `}</pre>
          </div>
          
        </>
      );
    }
  };
  
  export default class8;