import React from "react";
import '../../App.css';
import {Button} from '../Button'; 
import { Route } from 'react-router-dom';
import SearchForm  from "./ClubSearch";
import ClubList from "./club-list";

export default function AllClubs() {
    return (
        <>
        Hello
        <SearchForm/>
        <ClubList/>
        </>
    );
}