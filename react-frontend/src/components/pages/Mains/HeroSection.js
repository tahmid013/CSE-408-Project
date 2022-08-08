import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import logo from '../images/logo_1.png';


function HeroSection() {
  return (
    <>
    <div className='hero-container'>
        
        <video src = "/videos/video-3.mp4" autoPlay loop  muted/>
        
        <div id = "images">
        <div id = "texts">
        <h1>One-Stop Solution<br/>  For Everything<br/>  Quizzing</h1>
        <p>We manage, you quiz</p>
        </div>
        <img src={logo}  />
        </div>
        <div className='hero-btns'>
            
            <Button path_name = 'quizmainpage' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Start Quizing
            </Button>
            <Button path_name='demo' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Watch Demo<i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
    </>
  );
}

export default HeroSection