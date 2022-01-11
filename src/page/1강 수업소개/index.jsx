import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { Link } from "react-router-dom";
import { Box, 
        Divider,
        Typography,
        IconButton, 
        Badge, 
        Menu, 
        MenuItem, 
        Accordion, 
        AccordionSummary, 
        AccordionDetails,
        } from "@mui/material";
import { Mail, 
        AccountCircle,
        ExpandMore 
        } from "@mui/icons-material";

function Dropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

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
          <h3> Contents Box </h3>
          
        </div>
        <div className="box">
          
        </div>
        
      </>
    );
  };
  
  export default Dropdown;