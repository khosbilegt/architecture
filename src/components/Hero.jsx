import React from 'react';
import { Profile } from '../res/images';
import './Hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className='quote'>
        <p>Reference site about Lorem Ipsum, giving information on its origins,</p>
        <p>as well as a random Lipsum generator.</p>
      </div>
      <img src={Profile} className='profile'/>
      <span id="card"></span>
    </div>
  )
}

export default Hero;