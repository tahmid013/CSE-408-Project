import { Link, useLocation } from "react-router-dom";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import AlarmIcon from '@mui/icons-material/Alarm';
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { Button } from "../../Button";



export default function ResultSingle(props) {



    const [user, setUser] = useState(JSON.parse(localStorage.getItem('quizz-user')));
    const [ques_list, setQ_list] = useState(null);
    const [op_list, setOp_list] = useState(null);
    const [choices, setChoices] = useState(null);
    const [isClicked_view, setCLicked] = useState(false);
    var f;
    var g;
    var pp = ['fs', 'fsdf', 'dsa'];
    var all = [];
    const navigate = useNavigate();
    const [final, setFinal] = useState(null);
    useEffect(() => {
        const getData2 = async () => {

            setQ_list((localStorage.getItem('ques_list')));
            setOp_list(localStorage.getItem('ques_op_list'));
            setChoices(localStorage.getItem('ques_choices'));

        }

        getData2();


    }, [])
    useEffect(() => {
        const getData2 = async () => {
            console.log("Question: ");
            f = JSON.parse(ques_list);

            g = JSON.parse(op_list);
            if (f && g) {
                f.map((item, index) => {
                    console.log("Line " + index + ": ");
                    // console.log(f[index].question);
                    //console.log(g[index].op_1);
                    all.push({ ques: f[index], op: g[index] });
                    //console.log(op_list[index]);
                })
            }

        }



        getData2();


    }, [ques_list])

    useEffect(() => {
        console.log(all);
    }, [all])
    const handlerSubmit = async e => {
        e.preventDefault();
        //const data = await auth({ username, password });
        //setAuth(data);
    }
    const returnBack = () => {

        localStorage.removeItem('ques_list');
        localStorage.removeItem('ques_op_list');
        localStorage.removeItem('ques_choices');

        navigate("/");
    }
    const view = () => {
        for (var i = 0; i < f.length; i++) {
            console.log(f[i].question);
        }
        setFinal(f);

        setCLicked(true);
    }

    return (
        <>
            <div className="content-container">

                <div className="quiz-type-heading"><b>Congratulations {user && user.user && user.user.username}</b></div>

                <div className="footer-container">
                    <PersonIcon sx={{ fontSize: "100px", color: 'action.active', mr: 1, my: 0.5 }} />
                    <div className="badge">{localStorage.getItem('point')}</div>

                </div>

                {<button onClick={view}> View Score</button>}

                {isClicked_view ?
                    <div>

                        {JSON.parse(ques_list) && JSON.parse(ques_list).map((item, index) => {
                            return (
                                <div key={index}>
                                    <hr />

                                    <div className="question">{index + 1}.     {item.question}</div>
                                    <div className="option-container">
                                        <div className="option" >{JSON.parse(op_list) &&JSON.parse(op_list)[index] && JSON.parse(op_list)[index].op_1}</div>
                                        <div className="option" >{JSON.parse(op_list)  &&JSON.parse(op_list)[index]&& JSON.parse(op_list)[index].op_2}</div>
                                        <div className="option" >{JSON.parse(op_list)  &&JSON.parse(op_list)[index]&& JSON.parse(op_list)[index].op_3}</div>
                                        <div className="option" >{JSON.parse(op_list)  &&JSON.parse(op_list)[index]&& JSON.parse(op_list)[index].op_4}</div>
                                    </div>
                                    <div className="choice-container">
                                        <div >You choose : </div>
                                        <div className="my_choice">{JSON.parse(choices) && JSON.parse(choices)[index]}</div>
                                        <div >Correct answer : </div>
                                        <div className="correct_choice">{item.answer}</div>
                                    </div>

                                    <hr />
                                </div>
                            )
                        }
                        )}


                    </div>
                    :
                    <div></div>
                }






                <button onClick={returnBack}>Return</button>

                <div className="option-container-written">


                </div>

            </div>
        </>
    )
}