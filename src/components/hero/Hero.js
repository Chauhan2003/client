import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import videoBg from '../../assets/vedio-3.mp4'

function Hero() {
  return (
    <div className='hero'>
        <video src={videoBg} autoPlay loop muted />

        <div className='hero__content'>
            <h1 className='hero__content-title'>
                Are You Ready
            </h1>

            <Link to='/booking' className='hero__btn'>Let's Go <i class="ri-arrow-right-line"></i></Link>
        </div>
    </div>
  );
}

export default Hero;
