
import * as React from 'react';
import { Link } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
// import { Box, 
//         } from "@mui/material";
// import { Mail, 
//         } from "@mui/icons-material";

class class10 extends React.Component {
    render() {
      return (
        <> 
          {/* 상단 메뉴 */}
          <div className="top_bar" >
              <h1>
                  <Link to="/">10강 리액트가 없다면 </Link>
              </h1>
          </div>
          {/* 콘텐트 영역 */}
          <div className="box">
            <h3> 리액트가 좋은 이유  </h3>
            <pre>{`
리액트가 좋은 이유 

코드가 길어지면 감추고 싶을 것임
이름표만 달아서 그 이름표만 불러오면 나머지도 같이 불러오는 효과를 갖고 싶을 것임
그것을 해주는 기능이 리액트 컴포넌트임! 대박
            `}</pre>
            
          </div>
        </>
      );
    }
  };
  
  export default class10;