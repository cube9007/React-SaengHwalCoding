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
                  <Link to="/">4강 npm을 이용해서 create react app 설치 </Link>
              </h1>
          </div>
          {/* 콘텐트 영역 */}
          <div className="box">
            <h3> node js npm / react 설치 방법 </h3>
            <pre>{`
node js 설치 
커맨드(터미널)에서 npm -v 을 쳤을 떄 버전이 나온다면 설치가 제대로 된 것임 

npm install -g create-react-app 
권한이 없다면 sudo npm install -g create-react-app 
이후 비밀번호 물어볼 수도 있음

create-react-app -V 를 입력시 버전이 나오면 설치가 제대로 된 것임 

공식 문서는 npx create-react-app 
npm 은 프로그램을 설치하는 거
npx 는 한번만 설치하고 지우는 얘 = 실행할 떄마다 다운로드 받아야됨 
            `}</pre>
          </div>
          
        </>
      );
    }
  };
  
  export default classFour;