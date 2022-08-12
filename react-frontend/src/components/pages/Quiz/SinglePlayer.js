import { Button } from "@mui/material";
import { Link ,useLocation} from "react-router-dom";
import AlarmIcon from '@mui/icons-material/Alarm';

import React, { useState, useLayoutEffect, useEffect,useRef } from "react";
import { getCategories, getOption, getQuestion, getQuestions } from "../../../services/quiz-services";
import { useNavigate } from "react-router-dom";



export default function SinglePlayer() {


    const location = useLocation();
    var str = window.location.pathname.substring(0);
    //var str ="/hello";

    const Ref = useRef(null);
    const [timer ,setTimer] = useState('00');

    const getTimeRemaining = (e) =>{
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        return {
            total, seconds
        };
    }
    const startTimer = (e) => {
        let { total, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            setTimer(
                 (seconds > 9 ? seconds : '0' + seconds)
            )
        }
        if(total <=0){
            navigate(`${str}/result`,{
                state: {
                    id:7,
                    name: 'hello',
                  }
            });
        }
    }
    const clearTimer = (e) => {
  
      
        setTimer('10');
  
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
    const getDeadTime = () => {
        let deadline = new Date();
  
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);


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
                setPoint(0);
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



    
    const optClickChange = param => e => {

        if(ques_list[cur_ques_count-1].answer  == param){
            setPoint(cur_point + ques_list[cur_ques_count-1].point);
        }

        if (cur_ques_count < total_ques_count) {
            console.log(cur_ques_count);
            setQuesCount(cur_ques_count + 1);
            console.log(cur_ques_count);
        }
        else{
            navigate(`${str}/result`,{
                state: {
                    color: cur_point,
                  }
            });
        }


        console.log(total_ques_count);
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

                <div className="option" onClick={optClickChange(each_option_list && each_option_list.op_1)}>{each_option_list && each_option_list.op_1}</div>
                <div className="option" onClick={optClickChange(each_option_list && each_option_list.op_2)}>{each_option_list && each_option_list.op_2}</div>
                <div className="option" onClick={optClickChange(each_option_list && each_option_list.op_3)}>{each_option_list && each_option_list.op_3}</div>
                <div className="option" onClick={optClickChange(each_option_list && each_option_list.op_4)}>{each_option_list && each_option_list.op_4}</div>
            </div>


            <div className="footer-container">
                <div className="left-footer">TIME REMAINING </div>
                <div className="middle-footer"> {timer}s <AlarmIcon sx={{ fontSize: "40px", color: 'action.active', mr: 1, my: 0.5 }} />  {cur_point} </div>
                <div className="right-footer">YOUR POINT </div>
            </div>
        </div>
    )
}