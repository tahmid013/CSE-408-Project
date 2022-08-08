import { Button } from "../Button";
import { Link } from "react-router-dom";
import AlarmIcon from '@mui/icons-material/Alarm';
import PersonIcon from '@mui/icons-material/Person';
import React, { useState } from "react";
import {Box} from "@mui/material";
import {TextField} from "@mui/material";



export default function MultiPlayerWritten() {

    const handlerSubmit = async e => {
        e.preventDefault();
        //const data = await auth({ username, password });
        //setAuth(data);
    }

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


            <div className="question">The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. Can you provide a valid href?</div>
            <div className="option-container-written">
            <form onSubmit={handlerSubmit} className= "form-anser">
                    <Box className="answer-field" >
                        <TextField

                            label=""
                            id="standard-size-normal"
                            defaultValue="Answer"
                            variant="standard"
                        />
                    
                    </Box>
                    <Box className="answer-field" >
                        <Button type="submit" onClick={handlerSubmit}>Submit</Button>
                    </Box>
                </form>
            </div>
            <div className="footer-container">
                <div className="left-footer"><PersonIcon sx={{  fontSize: "40px", color: 'action.active', mr: 1, my: 0.5 }} />100 </div>
                <div className="middle-footer"> 50s <AlarmIcon sx={{ fontSize: "40px",color: 'action.active', mr: 1, my: 0.5 }}/>  </div>
                <div className="right-footer">110 <PersonIcon sx={{ fontSize: "40px",color: 'action.active', mr: 1, my: 0.5 }} /></div>
            </div>
        </div>
    )
}