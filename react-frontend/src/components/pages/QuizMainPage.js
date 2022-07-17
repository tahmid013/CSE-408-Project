import React from "react";
import { useLocation, Router, Routes, Route } from "react-router-dom";
import '../../App.css';
import { Button } from "../Button";
import './styles/QuizMainPage.css';
import Category from "./Category";

export default function QuizMainPage() {
    const location = useLocation();
    let l_p = location.pathname.substring(1)

    return (
        <>
                
                <div id='body'>
                    <div className='sidebar-btns'>
                        <div>
                            <Button path_name='clubspage' className='btns' buttonStyle='btn--fit' buttonSize='btn--large'>
                                Club
                            </Button>
                        </div>

                        <div>
                            <Button path_name='quizmainpage' className='btns' buttonStyle='btn--fit' buttonSize='btn--large'>
                                Archive
                            </Button>
                        </div>
                        <div>

                            <Button path_name="quizmainpage" className='btns' buttonStyle='btn--fit' buttonSize='btn--large'>
                                Event
                            </Button>
                        </div>
                        <div>
                            <div className="w3-dropdown-hover">
                                <div>
                                    <Button path_name='quizmainpage' className='btns' buttonStyle='btn--fit' buttonSize='btn--large'>
                                        Quiz
                                    </Button>
                                </div>
                                <div className="w3-dropdown-content w3-bar-block w3-border">
                                    <Button path_name="type_mcq/quizcategory" className='btns' buttonStyle='btn--fit' buttonSize='btn--large'>MCQ</Button>
                                    <Button path_name="type_written/quizcategory" className='btns' buttonStyle='btn--fit' buttonSize='btn--large'>Written</Button>
                                    <Button path_name="type_fill/quizcategory" className='btns' buttonStyle='btn--fit' buttonSize='btn--large'>Fill Blanks</Button>
                                </div>
                            </div>





                        </div>

                    </div>
                    <div id='main-body'>
                        <div id='upcoming-quiz'>
                            Upcoming Quiz
                        </div>
                        <div id='trivia'>
                            Random Trivia
                        </div>
                    </div>
                </div>
        </>
    );
}