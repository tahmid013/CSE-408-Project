import React from "react";
import '../../../Apps/App.css';
import { Route } from 'react-router-dom';
import SearchForm  from "./MemberSearch";
import ClubList from "./club-list";
import MemberList from "./MemberList";

export default function AddMember() {
    

    return (
        <>
        <SearchForm/>
        
        <MemberList/>
        </>
    );
}