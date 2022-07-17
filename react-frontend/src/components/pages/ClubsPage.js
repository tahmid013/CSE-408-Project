import React from 'react';
import ClubList from './club-list';
import { Routes, Route } from 'react-router-dom';
import ClubDetails from './club-details';

function ClubsPage() {

    return (
        <div className='main'>
            
            <Routes >
                <Route  path="/"  element = {<ClubList />}/> 
                
                <Route  path="/details/:id" element = {<ClubDetails/> }/>
                
            </Routes>
        </div>
    );
}

export default ClubsPage;
