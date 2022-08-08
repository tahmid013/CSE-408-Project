import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import AlarmIcon from '@mui/icons-material/Alarm';
import { Button } from "../Button";


import React, { useState } from "react";



export default function ResultSingle() {

    const handlerSubmit = async e => {
        e.preventDefault();
        //const data = await auth({ username, password });
        //setAuth(data);
    }

    return (
        <div className="content-container">

            <div className="quiz-type-heading"><b>Congratulations</b></div>

            <div className="footer-container">
                <PersonIcon sx={{  fontSize: "100px", color: 'action.active', mr: 1, my: 0.5 }} /> 
                <div className="badge">100</div>
            </div>

            <div className="option-container-written">
                

            </div>
            
        </div>
    )
}