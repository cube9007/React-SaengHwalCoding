import * as React from 'react';
import { Link } from "react-router-dom";
// import { Box, 
//         } from "@mui/material";
// import { Mail, 
//         } from "@mui/icons-material";

class classTwo extends React.Component {
    render() {
      return (
        <> 
          {/* 상단 메뉴 */}
          <div className="top_bar" >
              <h1>
                  <Link to="/"> 3강 개발환경의 종류 </Link>
              </h1>
          </div>
          {/* 콘텐트 영역 */}
          <div className="box">
            <h3> 공부 전략 </h3>
            <pre>{`
앱을 만드는 것은 굉장히 여러 절차가 필요로 함
근데 그 모든 절차를 다 공부하면 공부하다 지침
그리고 공부하다 지쳐서 그만두면 앱을 만들어보지도 못하고 그만두게 됨 

그래서 가장 본질적인 거 3가지만 먼저 공부할 예정임 
코딩 / 실행 / 배포 
(coding / run / deploy)
            `}</pre>
          </div>
        </>
      );
    }
  };
  
  export default classTwo;