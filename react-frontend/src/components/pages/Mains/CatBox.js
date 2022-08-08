import React from "react";
import {Link} from 'react-router-dom';
import './styles/CatBox.css';

function CatBox(props) {
    
    return(
        <>
        <li className="cards__item">
            <Link className="cards__item__link" to = {props.path}>
            <figure className="cards__item_pic-wrap" data-category = {props.label}>
                <img src={props.src} alt= "Quiz Category" className="cards__item__IMG"/>
            </figure>
            <div className="cards__item__info">
                <h5 className="cards__item__text">{props.text}</h5>
            </div>
            </Link>
        </li>
        </>
    );
}
export default CatBox;