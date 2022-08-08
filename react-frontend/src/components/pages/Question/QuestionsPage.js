import React from 'react';

import { Routes, Route } from 'react-router-dom';
import QuestionList from './ques-list';


function QuestionsPage() {

    return (
        <div className='main'>
            
            <Routes >
                <Route  path="/"  element = {<QuestionList />}/> 
                
            </Routes>
        </div>
    );
}

export default QuestionsPage;
