import { Link,useLocation } from "react-router-dom";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import AlarmIcon from '@mui/icons-material/Alarm';


import React, { useState } from "react";



export default function ResultSingle(props) {


    
    const user = JSON.parse(localStorage.getItem('quizz-user'));
   

    const handlerSubmit = async e => {
        e.preventDefault();
        //const data = await auth({ username, password });
        //setAuth(data);
    }

    return (
        <>
        <div className="content-container">

            <div className="quiz-type-heading"><b>Congratulations {user.user.username}</b></div>

            <div className="footer-container">
                <PersonIcon sx={{  fontSize: "100px", color: 'action.active', mr: 1, my: 0.5 }} /> 
                <div className="badge">{localStorage.getItem('point')}</div>
                
            </div>

            <div className="option-container-written">
                

            </div>
            
        </div>
        </>
    )
}