import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import AlarmIcon from '@mui/icons-material/Alarm';
import { Button } from "../Button";

import React, { useState } from "react";



export default function SinglePlayerWritten() {

    const handlerSubmit = async e => {
        e.preventDefault();
        //const data = await auth({ username, password });
        //setAuth(data);
    }

    return (
        <div className="content-container">

            <div className="quiz-type-heading"><b>Written Single Player</b></div>



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
                <div className="left-footer">TIME REMAINING </div>
                <div className="middle-footer"> 50s <AlarmIcon sx={{ fontSize: "40px", color: 'action.active', mr: 1, my: 0.5 }} />  100 </div>
                <div className="right-footer">YOUR POINT </div>
            </div>
        </div>
    )
}