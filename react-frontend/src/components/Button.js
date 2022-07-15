import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES =['btn--primary', 'btn--outline', 'btn--fit']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    path_name,
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link to ={`/${path_name}`} className = 'btn-mobile'>
        <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick = {onClick}
            type = {type}
        >
        {children}
        </button>
        </Link>

    )
};