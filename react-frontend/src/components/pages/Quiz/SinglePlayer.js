import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AlarmIcon from '@mui/icons-material/Alarm';

import React, { useState, useLayoutEffect, useEffect } from "react";
import { getCategories, getOption, getQuestion, getQuestions } from "../../../services/quiz-services";
import { useNavigate } from "react-router-dom";



export default function SinglePlayer() {



    var str = window.location.pathname.substring(1);

    const navigate = useNavigate();

    const [cur_point, setPoint] = useState(1);
    const [cur_ques_count, setQuesCount] = useState(0);
    const [total_ques_count, setTotalQuesCount] = useState(4);

    const active_count = Array(cur_ques_count).fill(0);
    const inactive_count = Array(total_ques_count - cur_ques_count).fill(0);

    const [loading, setLoading] = useState(false);
    const [ques_list, setQuesList] = useState(null);

    const [each_option_list, setEachOptionList] = useState(null);

    const [id_toFetch, setIdFetch] = useState(1);

    useLayoutEffect(() => {
        const getData = async () => {
            setLoading(true);
            await getQuestions().then(data => {
                setQuesList(data);
                setTotalQuesCount(data.length);
                setQuesCount(1);
                setLoading(false);

            })
            
        }
        getData();

    },[])

    useEffect(() => {
        const getData2 = async () => {
            setLoading(true);
            await getOption(ques_list[cur_ques_count-1].options).then(data => {
                setEachOptionList(data);
                setLoading(false);
            })
        }
        getData2();

   
    },[cur_ques_count])



    
    const optClickChange = () => {



        if (cur_ques_count < total_ques_count) {
            console.log(cur_ques_count);
            setQuesCount(cur_ques_count + 1);
            console.log(cur_ques_count);
        }


        console.log(total_ques_count);
    }
    const optClickChange_1 = () => {



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

            <div className="question">{cur_ques_count}.    {ques_list && ques_list[cur_ques_count-1].question}</div>
            <div className="option-container">

                <div className="option" onClick={optClickChange}>{each_option_list && each_option_list.op_1}</div>
                <div className="option" onClick={optClickChange}>{each_option_list && each_option_list.op_2}</div>
                <div className="option" onClick={optClickChange}>{each_option_list && each_option_list.op_3}</div>
                <div className="option" onClick={optClickChange}>{each_option_list && each_option_list.op_4}</div>
            </div>


            <div className="footer-container">
                <div className="left-footer">TIME REMAINING </div>
                <div className="middle-footer"> 50s <AlarmIcon sx={{ fontSize: "40px", color: 'action.active', mr: 1, my: 0.5 }} />  100 </div>
                <div className="right-footer">YOUR POINT </div>
            </div>
        </div>
    )
}