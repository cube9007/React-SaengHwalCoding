import * as React from 'react';
import { Link } from "react-router-dom";
// import { Box, 
//         } from "@mui/material";
// import { Mail, 
//         } from "@mui/icons-material";

class classOne extends React.Component {
    render() {
      return (
        <> 
          {/* 상단 메뉴 */}
          <div className="top_bar" >
              <h1>
                  <Link to="/"> 1강 수업 소개 </Link>
              </h1>
          </div>
          {/* 콘텐트 영역 */}
          <div className="box">
            <h3> 수업 소개 </h3>
            <pre>{`
이 수업은 자바스크립트를 기본 지식으로 하고 있습니다.   - JS 기본 문법 강의 듣고 올 것 [필수]
클래스 기반 객체지향 프로그래밍 스타일로 코드 작성      - JS 객체지향 프로그래밍 강의 듣고 올 것 [필수x]

리액트는 페이스북의 ui를 더 잘 만들기 위해 페이스북에서 만든 JS UI 라이브러리 입니다. 
            `}</pre>
          </div>
          <div className="box">
            <h3> 웹에 대한 이야기 / 컴포넌트 </h3>
            <pre>{`
웹은 시간이 지날수록 굉장히 복잡해짐 
간단한 툴바를 만들어도 div 지옥 ...
복잡한 부분을 바깥쪽으로 빼내서 정리정돈하고 싶을 것임 

사용자 정의 태그를 만들고 싶을 것임 = 컴포넌트 
리액트가 그 떄 도움이 됨 

컴포넌트를 작성하면
1. 가독성
2. 재사용성
3. 유지보수
            `}</pre>
          </div>
          
        </>
      );
    }
  };
  
  export default classOne;