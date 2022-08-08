import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AlarmIcon from '@mui/icons-material/Alarm';
import PersonIcon from '@mui/icons-material/Person';
import React, { useState } from "react";



export default function MultiPlayer() {



    return (
        <div className="content-container">

            <div className="quiz-type-heading"><b>MCQ Multi Player</b></div>



            <div className="container-bar">
                <ul className="progressbar">
                    <li className="active"></li>
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
            </div>


            <div className="question">The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href?</div>
            <div className="option-container">
                <div className="option">Lorem</div>
                <div className="option">Ipsum</div>
                <div className="option">Dolor</div>
                <div className="option">Amet</div>
            </div>
            <div className="footer-container">
                <div className="left-footer"><PersonIcon sx={{  fontSize: "40px", color: 'action.active', mr: 1, my: 0.5 }} />100 </div>
                <div className="middle-footer"> 50s <AlarmIcon sx={{ fontSize: "40px",color: 'action.active', mr: 1, my: 0.5 }}/>  </div>
                <div className="right-footer">110 <PersonIcon sx={{ fontSize: "40px",color: 'action.active', mr: 1, my: 0.5 }} /></div>
            </div>
        </div>
    )
}