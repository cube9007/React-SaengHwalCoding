
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
                  <Link to="/">코드 미러 CodeMirror 쓰는 법</Link>
              </h1>
          </div>
          {/* 콘텐트 영역 */}
          <div className="box">
            <h3> 에시 </h3>
            <CodeMirror
            value={`import './App.scss'`}
            extensions={[javascript({ jsx: true })]}
            onChange={(value, viewUpdate) => {
                console.log('value:', value);
            }}
            />
          </div>      
          <div className='box'>
            <h3> 설치 </h3>
            <pre>{`npm install @uiw/react-codemirror --save
npm install @codemirror/lang-javascript
2개 설치 `}
            </pre>
            <br/>
            <h3> 사용 </h3>
            <CodeMirror
            value={`<CodeMirror
value={}
extensions={[javascript({ jsx: true })]}
onChange={(value, viewUpdate) => {
    console.log('value:', value);
}}
/>'`}
            extensions={[javascript({ jsx: true })]}
            onChange={(value, viewUpdate) => {
                console.log('value:', value);
            }}
            />
            <pre>{`위 value 안에 내용물을 집어넣으면 됨`}</pre>
          </div>
          
        </>
      );
    }
  };
  
  export default class8;