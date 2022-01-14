import * as React from 'react';
import { Link } from "react-router-dom";
// import { Box, 
//         } from "@mui/material";
// import { Mail, 
//         } from "@mui/icons-material";

class classThree extends React.Component {
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
            <h3> 시작하기 전 </h3>
            <pre>{`
강사로부터 독립할 수 있으려면?
- 공식 문서에 익숙해져야됨 (영어로 됨....ㅠㅜ 어려움)
            `}</pre>
          </div>
          <div className="box">
            <h3> 리액트 사이트 </h3>
            <pre>{`
get started를 누르면 리액트를 세팅하는 방법이 나와있음
여러 방법이 있는데
온라인으로 하는 방법도 있고 (code sandbox)
툴 체인 = 개발 환경을 세팅하는 편리한 도구
툴 체인으로 하는 방법도 있음 

툴 체인 중에 create-react-app을 추천함
create-react-app 자체가 앱의 이름임 

create-react-app의 홈페이지로 가보면 
npx create-react-app myapp 으로 설치할 수 있다고 나옴 

프로그램을 깔려면 npm이 필요함
node js로 만들어진 여러 앱이 있는데
그 여러 앱을 다운로드 받을 수 있는 앱스토어 역할을 하는 게 = npm 

npm 설치 -> create-react-app 설치 -> 개발 환경 구성 
            `}</pre>
          </div>
        </>
      );
    }
  };
  
  export default classThree;