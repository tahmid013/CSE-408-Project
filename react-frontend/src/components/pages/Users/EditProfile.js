import React from 'react';

import { Routes, Route } from 'react-router-dom';
import QuestionList from '../Question/ques-list';


function EditProfile() {

    return (
        <div className='main'>
            
            <Routes >
                <Route  path="/"  element = {<QuestionList />}/> 
                
            </Routes>
        </div>
    );
}

export default EditProfile;
