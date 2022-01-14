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
                  <Link to="/">6강 샘플 웹앱 실행 </Link>
              </h1>
          </div>
          {/* 콘텐트 영역 */}
          <div className="box">
            <h3> npm start </h3>
            <pre>{`
터미널에서 npm start를 하면 Live Server역할을 함 
처음엔 샘플 어플리케이션이 구동됨 (리액트 빙글빙글)
            `}</pre>
          </div>
          
        </>
      );
    }
  };
  
  export default classFour;