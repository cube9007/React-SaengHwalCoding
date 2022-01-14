
import * as React from 'react';
import { Link } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
// import { Box, 
//         } from "@mui/material";
// import { Mail, 
//         } from "@mui/icons-material";

class class9 extends React.Component {
    render() {
      return (
        <> 
          {/* 상단 메뉴 */}
          <div className="top_bar" >
              <h1>
                  <Link to="/">09강 Deploy 배포하는 법 </Link>
              </h1>
          </div>
          {/* 콘텐트 영역 */}
          <div className="box">
            <h3> Deploy </h3>
            <pre>{`
글자를 하나만 써도 배포하면 용량이 1메가가 넘음
개발의 편의성을 위해 무언가를 해놓았기 때문임 
공백과 같이 불필요하게 용량을 차지하는 것을 없애주어야 됨

npm run build

를 실행시켜주면 
build 폴더가 새로 생김
그 안에 index.html 파일을 보면 불필요한 공백이 다 사라지고 여백 없는 파일이 생겼을 것임 
            `}</pre>
            
          </div>
        </>
      );
    }
  };
  
  export default class9;