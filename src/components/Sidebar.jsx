import React, { useState } from 'react';
import './Sidebar.css';
import { navLinks } from '../constants';

function Sidebar(props) {
  return (
    <div className='sidebar'>
     <ul>
          {navLinks.map((val, index) => {
            let text = val.mon;
            if(props.isRussian) {
              text = val.rus;
            }
            if(index == props.index) {
              return <li><a href={val.link} data-text={text} id="active">{text}</a></li>
            }
            return <li><a href={val.link} data-text={text}>{text}</a></li>
          })}
     </ul>
      <div className='sliders'>
        <div className='slider-cont'>
          <p>Dark Mode</p>
          <label className="switch">
            <input type="checkbox" checked={props.isDarkMode} onChange={(e) => {props.setDarkMode(e.target.checked)}}/>
            <span className="slider round"></span>
          </label>
        </div>
        <div className='slider-cont'>
          <p>Russian</p>
          <label className="switch">
            <input type="checkbox" checked={props.isRussian} onChange={(e) => {props.setRussian(e.target.checked)}}/>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Sidebar