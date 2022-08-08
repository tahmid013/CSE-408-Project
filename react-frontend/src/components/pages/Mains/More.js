import React from "react";
import '../../App.css';
import {Button} from '../Button'; 
import { Route } from 'react-router-dom';

export default function More() {
    console.log("In More");
    return (
        <>
        <div>Hello to more page</div>
        <Button path_name="more" >Go to more</Button>
        </>
    );
}