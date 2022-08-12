import React from "react";
import '../../../Apps/App.css';
import { Route } from 'react-router-dom';
import SearchForm  from "./ClubSearch";
import ClubList from "./club-list";

export default function AddMember() {
    

    return (
        <>
        Hello
        <SearchForm/>
        <ClubList/>
        </>
    );
}