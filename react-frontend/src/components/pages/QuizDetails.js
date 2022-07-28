import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getClubs } from '../../services/club-services';
import { Button } from '../Button';
import SinglePlayer from './SinglePlayer';

function QuizDetails() {
    var str = window.location.pathname.substring(1);

    return (
        <>
            <div className='clubsList'>

                        <div className='eachClubBox'>
                            <div className="quiz">
                                <div className='left-cont'>
                                    <h1 className=''>Sports</h1>
                                    <p className='desc-quiz'>We have a huge list of hundreds of sports from around the world, listed in alphabetical order. With such an unwieldy list, it makes sense to categorise them into smaller groups. There are numerous ways to categorise these sports - they can be groups based on where,then and how they are played. </p>
                                    <p className="title-quiz">Football Bloody Hell - Sir Alex Farguson</p>
                                </div>
                                <div className='right-cont'>
                                    <p className='btn-Practice'><Button path_name={`${str}/practice`}  buttonStyle = 'btn--primary' buttonSize = 'btn--medium'>Practice</Button></p>
                                    <p className='btn-Single'><Button  path_name={`${str}/single`} buttonStyle = 'btn--primary' buttonSize = 'btn--medium'>Single</Button></p>
                                    <p className='btn-Double'><Button  path_name={`${str}/multi`}  buttonStyle = 'btn--primary' buttonSize = 'btn--medium'>Double</Button></p>
                                    <p className='btn-leader'><Button buttonStyle = 'btn--primary' buttonSize = 'btn--medium'>LeaderBoard</Button></p>
                                </div>
                            </div>
                        </div>





                

            </div>
        </>
    );
}

export default QuizDetails;
