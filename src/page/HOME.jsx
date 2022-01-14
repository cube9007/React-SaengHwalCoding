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
              <Link to='/page/class_one/index' className="home-a"> 🔗 1강 수업소개 </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_two/index' className="home-a"> 🔗 2강 공부 전략 </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_three/index' className="home-a"> 🔗 3강 개발환경의 종류 </Link> <ArrowForward className="box-arrow" />
            </li>
          </ul>
        </Box>
      </>
    );
  };
  
  export default home;
  