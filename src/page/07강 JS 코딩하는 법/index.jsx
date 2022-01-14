import * as React from 'react';
import { Link } from "react-router-dom";
// import { Box, 
//         } from "@mui/material";
// import { Mail, 
//         } from "@mui/icons-material";

class classFour extends React.Component {
    render() {
      return (
        <> 
          {/* 상단 메뉴 */}
          <div className="top_bar" >
              <h1>
                  <Link to="/">7강 JS 코딩하는 법</Link>
              </h1>
          </div>
          {/* 콘텐트 영역 */}
          <div className="box">
            <h3> App.js가 작동하는 원리 </h3>
            <pre>{`
리액트를 통해 화면이 보이긴 하지만
결국 id가 root인 html파일이 호출되는 것임
App.js 파일에 작성하면 됨 
            `}</pre>
          </div>
          
        </>
      );
    }
  };
  
  export default classFour;