import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import React, { useState } from "react";


export default function Practice() {

    let front = "Sample Question"
    let back = "Answer"

    const flip = () => {


    }


    return (
        <>
            <div className="login">

                <div className="col-md-4 card-container">
                    
                    <input type="checkbox" id="flipCard" hidden />
                    <div className="card-flip">
                        <div className="card front">
                                <div className="card-block">
                                    <h4 className="card-title">Front Card Title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                        </div>

                        <div className="card back">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-block">
                                <h4 className="card-title">Special title treatment</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Button onClick={() => flip()}> Click to flip</Button>
        </>
    )
}
var cards = document.querySelectorAll('.card');

