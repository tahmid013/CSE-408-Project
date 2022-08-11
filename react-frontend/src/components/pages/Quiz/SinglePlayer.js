import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AlarmIcon from '@mui/icons-material/Alarm';

import React, { useState, useEffect } from "react";
import { getCategories, getQuestion, getQuestions } from "../../../services/quiz-services";
import { useNavigate } from "react-router-dom";



export default function SinglePlayer() {

    const active_count = Array(3).fill(0);
    const inactive_count = Array(6).fill(0);

    var str = window.location.pathname.substring(1);

    const navigate = useNavigate();

    const [cur_ques_count, setQuesCount] = useState(1);

    const [loading, setLoading] = useState(false);
    const [ques_list, setQuesList] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            await getQuestions().then(data => {
                setQuesList(data);
                setLoading(false);
            })
        }
        getData();
    }, [])
    console.log(ques_list);
    const optClickChange = () => {

        if (cur_ques_count < 4)
            setQuesCount(cur_ques_count+1);
        console.log(cur_ques_count);
        //navigate(`/${str}`);
        

    }

    return (
        <div className="content-container">

            <div className="quiz-type-heading"><b>MCQ Single Player</b></div>




            <div className="container-bar">
                <ul className="progressbar">

                    {active_count.map(ac => {
                        return <li className="active"></li>
                    })

                    }
                    {inactive_count.map(inc => {
                        return <li ></li>
                    })
                    }
                </ul>
            </div>

                    <div className="question">{cur_ques_count}.    {ques_list && ques_list[cur_ques_count].question}</div>
                    <div className="option-container">
                        <div className="option" onClick={optClickChange}>Lorem</div>
                        <div className="option" onClick={optClickChange}>Ipsum</div>
                        <div className="option" onClick={optClickChange}>Dolor</div>
                        <div className="option" onClick={optClickChange}>Amet</div>
                    </div>

          
            <div className="footer-container">
                <div className="left-footer">TIME REMAINING </div>
                <div className="middle-footer"> 50s <AlarmIcon sx={{ fontSize: "40px", color: 'action.active', mr: 1, my: 0.5 }} />  100 </div>
                <div className="right-footer">YOUR POINT </div>
            </div>
        </div>
    )
}