import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";

function home () {
    return (
      <>
        <div className="top_bar">
          <h1> React 생활코딩 </h1>
        </div>
        <Box className="home-box">
          <h2> 📚 React! </h2>
          <ul>
            <li>
              <Link to='/page/class_one/index' className="home-a"> 🔗 01강 수업소개 </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_two/index' className="home-a"> 🔗 02강 공부 전략 </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_three/index' className="home-a"> 🔗 03강 개발환경의 종류 </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_four/index' className="home-a"> 🔗 04강 npm을 이용해서 create react app 설치 </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_five/index' className="home-a"> 🔗 05강 create react app을 이용해서 개발환경구축 </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_six/index' className="home-a"> 🔗 06강 샘플 웹앱 실행 </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_seven/index' className="home-a"> 🔗 07강 JS 코딩하는 법 </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_eight/index' className="home-a"> 🔗 08강 css코딩하는 법 </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_nine/index' className="home-a"> 🔗 09강 배포하는 법 </Link> <ArrowForward className="box-arrow" />
            </li>
            
          </ul>
        </Box>
        <Box className='home-box'>
          <h2> 🚩 번외 </h2>
          <ul>
            <li>
              <Link to='/page/class_codemirror/index' className="home-a"> 🔗  코드 미러 쓰는 법 </Link> <ArrowForward className="box-arrow" />
            </li>
          </ul>
        </Box>
      </>
    );
  };
  
  export default home;
  