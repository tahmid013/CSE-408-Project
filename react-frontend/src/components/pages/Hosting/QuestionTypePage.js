import React, { useState, useEffect } from 'react';
import { Link, renderMatches, useParams } from 'react-router-dom';
import { useFetchClubs } from '../../../hooks/fetch-clubs'
import { Button } from '../../Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import './HostMainPage.css';
import { getCategories } from '../../../services/quiz-services';
import QuestionInputPageLoop from '../Question/QuestionInputPage_loop';
import { useNavigate } from 'react-router-dom';


function QuestionTypePage() {

    const navigate = useNavigate();
    var str = window.location.pathname.substring(1);

    const [club, setClub] = useState(null);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [heading, setHeading] = useState('');
    const [desc, setDesc] = useState('');




    const [loading, setLoading] = useState('');
    const [cat_s, setCats] = useState(null);


    useEffect(() => {
        const getData = async () => {
            setLoading(true);   
                localStorage.setItem('nav-path', str);
        }
        getData();
    }, [])



    const getInitialStateSt = () => {
        const value_st = "MCQ";
        return value_st;
    };
    const [value_st, setValuest] = useState(getInitialStateSt);



    const handleChangeBtnst = (e) => {
        setValuest(e.target.value_st);
    };

    const [ques_type_state, setType] = useState('');

    let Inputpage;

    const handlerSubmit_MCQ = () => {
        Clicked(true);
        setType('mcq');
        Inputpage = <QuestionInputPageLoop />;
    }
    const handlerSubmit_Written = () => {
        setType('written');
        Clicked(true);
        //Inputpage = <QuestionsInputPage/>;
    }

    const handlerSubmit_Fill = () => {
        setType('fill');
        Clicked(true);
        //Inputpage = <QuestionsInputPage/>;
    }
    const addQues = () => {
        setType('');
        Clicked(false);
        navigate(`/club/${localStorage.getItem('clubId')}/host-event`);
        localStorage.setItem('nav-path', "");    
        //Inputpage = <QuestionsInputPage/>;
    }

    const [btn_clicked, Clicked] = useState(false);

    

    return (
        <>
            <div>
                <div>-</div>
                <h1>Host Event</h1>


            </div>

            <div className="login">
                <div className="type-cont">
                    {!btn_clicked ? <>
                        {/* <div>{localStorage.getItem('ques_set_id')}</div> */}
                            
                            <button onClick={handlerSubmit_MCQ}>MCQ</button>
                            <button onClick={handlerSubmit_Written}>Written</button>
                            <button onClick={handlerSubmit_Fill}>Fill Blanks</button>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <button onClick={addQues}>Finish</button>
                        </>
                        :
                        <>

                            <div>
                                {(ques_type_state == "mcq") ?
                                    <>
                                        <QuestionInputPageLoop nav_path={`${str}`} />
                                        
                                    </>
                                    :
                                    <></>

                                }
                            </div>

                        </>
                    }


                    </div>
            </div>
            </>
            );
}

            export default QuestionTypePage;
