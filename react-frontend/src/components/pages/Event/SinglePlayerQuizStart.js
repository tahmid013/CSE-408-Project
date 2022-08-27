import { Button } from "@mui/material";
import { Link, useLocation, useParams } from "react-router-dom";
import AlarmIcon from '@mui/icons-material/Alarm';

import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import { AddQuizTaken, getCategories, getOption, getQuestion, getQuestions, getQuestionsIdOfQuiz, } from "../../../services/quiz-services";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const STATUS = {
    STARTED: 'Started',
    STOPPED: 'Stopped',
}

var INITIAL_COUNT = 10;

function useInterval(callback, delay) {
    const savedCallback = useRef()

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}





export default function SinglePlayerQuizStart() {


    const { id } = useParams();
    const { authData } = useAuth();
    const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
    const [status, setStatus] = useState(STATUS.STOPPED)



    const handleStart = () => {
        setStatus(STATUS.STARTED)
    }

    useInterval(
        () => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(secondsRemaining - 1)
            } else {
                console.log("Navigating to result-> ");
                console.log(cur_point);
                localStorage.setItem('point', cur_point);
                localStorage.setItem('ques_list', JSON.stringify( ques_list));
                localStorage.setItem('ques_op_list', JSON.stringify( op_list));
                localStorage.setItem('ques_choices', JSON.stringify( choices));
                const op_added =  AddQuizTaken(
                
                    localStorage.getItem(JSON.parse(localStorage.getItem('quizz-user')).user.id, id,cur_point)
                  );
                navigate('/result');
                setStatus(STATUS.STOPPED)
            }
        },
        status === STATUS.STARTED ? 1000 : null,
        // passing null stops the interval
    )
    useEffect(() => {
        handleStart();
    })


    const location = useLocation();
    var str = window.location.pathname.substring(0);
    //var str ="/hello";


    const [timer, setTimer] = useState('00');

    function useInterval(callback, delay) {
        const savedCallback = useRef()

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback
        }, [callback])

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current()
            }
            if (delay !== null) {
                let id = setInterval(tick, delay)
                return () => clearInterval(id)
            }
        }, [delay])
    }

    
    const twoDigits = (num) => String(num).padStart(2, '0')


    const navigate = useNavigate();

    const [cur_point, setPoint] = useState(1);
    const [cur_ques_count, setQuesCount] = useState(0);
    const [total_ques_count, setTotalQuesCount] = useState(0);

    const active_count = Array(cur_ques_count).fill(0);
    const inactive_count = Array(total_ques_count - cur_ques_count).fill(0);

    const [loading, setLoading] = useState(false);
    const [ques_list, setQuesList] = useState(null);
    const [ques_id_list, setQuesIdList] = useState(null);
    const [each_option_list, setEachOptionList] = useState(null);
    const [op_list, setOpList] = useState([]);
    const [choices, setChoices] = useState([]);
    const [id_toFetch, setIdFetch] = useState(1);

    useLayoutEffect(() => {

        const getData2 = async () => {
            setLoading(true);
            await (getQuestionsIdOfQuiz(id).then(data => {
                console.log(data);
                setQuesIdList(data);
                setLoading(false);

            }
            )
            )

        }

        getData2();

    }, [])
    useLayoutEffect(() => {
        const getData = async () => {
            setLoading(true);

            const quesList = await Promise.all(
                ques_id_list.map(async (q_id) => {

                    console.log(q_id);
                    const ques = await getQuestion(q_id.question_id);

                    return ques;
                })
            );
            setQuesList(quesList);
            setQuesList(quesList);
            setPoint(0);
            setTotalQuesCount(quesList.length);
            setSecondsRemaining(quesList.length * 2);
            setQuesCount(1);
            setLoading(false);

        };


        getData().catch(console.error);
    }, [ques_id_list]);

    useEffect(() => {
        const getData2 = async () => {
            setLoading(true);
            await getOption(ques_list[cur_ques_count - 1].options).then(data => {
                
                setEachOptionList(data);
                setOpList(op_list => [...op_list, data]);
                setLoading(false);
            })
        }
        getData2();


    }, [cur_ques_count])

    


    const optClickChange = param => e => {

        //setOpList(choices => [...choices, param]);
        choices.push(param);

        if (ques_list[cur_ques_count - 1].answer == param) {
            console.log("current point " + cur_point + " ques no " + ques_list[cur_ques_count - 1].point);
            setPoint(cur_point + ques_list[cur_ques_count - 1].point);
        }

        if (cur_ques_count < total_ques_count) {
            console.log("current ques count : " + cur_ques_count);
            setQuesCount(cur_ques_count + 1);
            console.log(cur_ques_count);
            
            

        }
        else {
            console.log("Navigating to result-> ");
            var temp_point = cur_point;
            if (ques_list[cur_ques_count - 1].answer == param) {
                temp_point = temp_point + ques_list[cur_ques_count - 1].point;
            }
            localStorage.setItem('ques_list', JSON.stringify( ques_list));
            localStorage.setItem('ques_op_list', JSON.stringify( op_list));
            localStorage.setItem('ques_choices', JSON.stringify( choices));
            const op_added =  AddQuizTaken(
                authData.user.id, id,temp_point
              );
            console.log("Final point " + cur_point + " ques no " + ques_list[cur_ques_count - 1].point);
            localStorage.setItem('point', temp_point);
            
            navigate('/result');
            setStatus(STATUS.STOPPED)
        }


        console.log(total_ques_count);
    }


    return (
        <div className="content-container">

            <div className="quiz-type-heading"><b> {id} MCQ Single Player</b></div>




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

            <div className="question">{cur_ques_count}.    {ques_list && ques_list[cur_ques_count - 1].question}</div>
            <div className="option-container">

                <div className="option" onClick={optClickChange(each_option_list && each_option_list.op_1)}>{each_option_list && each_option_list.op_1}</div>
                <div className="option" onClick={optClickChange(each_option_list && each_option_list.op_2)}>{each_option_list && each_option_list.op_2}</div>
                <div className="option" onClick={optClickChange(each_option_list && each_option_list.op_3)}>{each_option_list && each_option_list.op_3}</div>
                <div className="option" onClick={optClickChange(each_option_list && each_option_list.op_4)}>{each_option_list && each_option_list.op_4}</div>
            </div>


            <div className="footer-container">
                <div className="left-footer">TIME REMAINING </div>
                <div className="middle-footer"> {secondsRemaining}s <AlarmIcon sx={{ fontSize: "40px", color: 'action.active', mr: 1, my: 0.5 }} />  {cur_point} </div>
                <div className="right-footer">YOUR POINT </div>
            </div>
        </div>
    )
}