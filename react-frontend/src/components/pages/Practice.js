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

                <div class="col-md-4 card-container">
                    <label class="flipCard" for="flipCard"></label>
                    <input type="checkbox" id="flipCard" hidden />
                    <div class="card-flip">
                        <div class="card front">
                                <div class="card-block">
                                    <h4 class="card-title">Front Card Title</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                        </div>

                        <div class="card back">
                            <div class="card-header">
                                Featured
                            </div>
                            <div class="card-block">
                                <h4 class="card-title">Special title treatment</h4>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
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

