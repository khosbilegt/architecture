import React, { useState } from 'react';
import './Sidebar.css';
import { navLinks } from '../constants';

function Sidebar() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isRussian, setRussian] = useState(false);

  return (
    <div className='sidebar'>
     <ul>
          {navLinks.map((val, index) => {
            let text = val.mon;
            if(isRussian) {
              text = val.rus;
            }
            if(index == 0) {
              return <li><a href={val.link} data-text={text} id="active">{text}</a></li>
            }
            return <li><a href={val.link} data-text={text}>{text}</a></li>
          })}
     </ul>
      <div className='sliders'>
        <div className='slider-cont'>
          <p>Dark Mode</p>
          <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={(e) => {setDarkMode(e.target.checked)}}/>
            <span className="slider round"></span>
          </label>
        </div>
        <div className='slider-cont'>
          <p>Russian</p>
          <label className="switch">
            <input type="checkbox" checked={isRussian} onChange={(e) => {setRussian(e.target.checked)}}/>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Sidebar