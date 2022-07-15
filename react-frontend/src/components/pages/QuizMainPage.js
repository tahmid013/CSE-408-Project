import React from "react";
import '../../App.css';
import { Button } from "../Button";
import './styles/QuizMainPage.css';

export default function QuizMainPage() {
    return (
        <>

            <div id ='body'>
                <div className='sidebar-btns'>
                    <div>
                        <Button path_name='quizmainpage' className='btns' buttonStyle='btn--fit' buttonSize='btn--large'>
                            Club
                        </Button>
                    </div>

                    <div>
                        <Button path_name='quizmainpage' className='btns' buttonStyle='btn--fit' buttonSize='btn--large'>
                            Archive
                        </Button>
                    </div>
                    <div>
                        <Button path_name='quizmainpage' className='btns' buttonStyle='btn--fit' buttonSize='btn--large'>
                            Event
                        </Button>
                    </div>
                    <div>
                        <Button path_name='quizcategory' className='btns' buttonStyle='btn--fit' buttonSize='btn--large'>
                            Quiz
                        </Button>
                    </div>

                </div>
                <div id = 'main-body'>
                <div id ='upcoming-quiz'>
                    Upcoming Quiz
                </div>
                <div id = 'trivia'>
                    Random Trivia
                </div>
                </div>
            </div>
        </>
    );
}