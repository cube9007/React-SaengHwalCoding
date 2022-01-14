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
                  <Link to="/">5강 create react app을 이용해서 개발환경구축 </Link>
              </h1>
          </div>
          {/* 콘텐트 영역 */}
          <div className="box">
            <h3> 디렉토리 설정하고 설치 </h3>
            <pre>{`
디렉토리 react로 하면 안됨 특수문자이기 떄문 
리액트 폴더를 만들고(이름 자유) 터미널에서
cd (change directory) 쓰고 폴더를 드래그앤 드롭 하면 디렉토리 설정이 됨

디렉토리 설정이 되었으면 create-react-app . 을 입력
(.점은 현재폴더라는 뜻)
입력하면 현재 폴더에 리액트가 설치됨 
            `}</pre>
          </div>
          
        </>
      );
    }
  };
  
  export default classFour;