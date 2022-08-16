import { Link,useLocation } from "react-router-dom";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import AlarmIcon from '@mui/icons-material/Alarm';
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { Button } from "../../Button";



export default function ResultSingle(props) {


    
    const user = JSON.parse(localStorage.getItem('quizz-user'));
    const navigate = useNavigate();
   

    const handlerSubmit = async e => {
        e.preventDefault();
        //const data = await auth({ username, password });
        //setAuth(data);
    }
    const returnBack = () => {
        navigate("/");
    }

    return (
        <>
        <div className="content-container">

            <div className="quiz-type-heading"><b>Congratulations {user.user.username}</b></div>

            <div className="footer-container">
                <PersonIcon sx={{  fontSize: "100px", color: 'action.active', mr: 1, my: 0.5 }} /> 
                <div className="badge">{localStorage.getItem('point')}</div>
                
            </div>
            <Button path_name='/' onClick={returnBack}>Return</Button>

            <div className="option-container-written">
            
                

            </div>
            
        </div>
        </>
    )
}