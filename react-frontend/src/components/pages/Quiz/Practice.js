import { Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { getQuestions } from "../../../services/quiz-services";
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function Practice() {

    let front = "Sample Question"
    let back = "Answer"

    const [flipped, setFlipped] = useState(false);
    const flip = () => {
        setFlipped(!flipped);
    }








    const location = useLocation();
    var str = window.location.pathname.substring(0);
    //var str ="/hello";





    const navigate = useNavigate();

    const [cur_point, setPoint] = useState(1);
    const [cur_ques_count, setQuesCount] = useState(0);
    const [total_ques_count, setTotalQuesCount] = useState(4);

    const active_count = Array(cur_ques_count).fill(0);
    const inactive_count = Array(total_ques_count - cur_ques_count).fill(0);

    const [loading, setLoading] = useState(false);
    const [ques_list, setQuesList] = useState(null);

    const [each_option_list, setEachOptionList] = useState(null);
    const [op_list, setOpList] = useState([]);
    const [choices, setChoices] = useState([]);
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

    }, [])





    const optClickChange = param => e => {

        setFlipped(false);
        choices.push(param);
        if (param == "finish") {
            navigate('/');
        }



        if (cur_ques_count < total_ques_count) {

            setQuesCount(cur_ques_count + 1);

        }
        else {
            console.log("Navigating to result-> ");
            navigate('/');
        }


        console.log(total_ques_count);
    }





    return (
        <>
            <div>
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

                <div className="card-container-prc">
                    <div className="card-flip">
                        {flipped ? <>
                            <div className="card front" onClick={() => flip()}>
                                <div className="card-header">
                                    Answer
                                </div>
                                <div className="card-block">
                                    <h4 className="title">  {ques_list && ques_list[cur_ques_count - 1].answer}</h4>

                                </div>
                            </div>
                        </>
                            :
                            <>
                                <div className="card back" onClick={() => flip()}>
                                    <div className="card-header">
                                        Question
                                    </div>
                                    <div className="card-block">
                                        <h4 className="title">{cur_ques_count}.    {ques_list && ques_list[cur_ques_count - 1].question}</h4>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>




            <div className="content-container">

                <div className="quiz-type-heading"><b></b></div>


                <Button
                    variant="contained"
                    size="large"

                    onClick={optClickChange(each_option_list && each_option_list.op_1)}
                    startIcon={<ArrowCircleRightIcon />}
                >
                    Next
                </Button>
                <Button
                    variant="contained"
                    size="large"

                    onClick={optClickChange("finish")}
                    startIcon={<NotInterestedIcon />}
                >
                    Finish
                </Button>
            </div>


        </>
    )
}
var cards = document.querySelectorAll('.card');

