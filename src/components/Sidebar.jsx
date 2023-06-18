import React, { useState } from 'react';
import './Sidebar.css';
import { Autograph } from '../res/images/';
import { navLinks } from '../constants';

function Sidebar(props) {
  const pageAbstract = (e, index) => {
    e.preventDefault();
    let page = "";
    switch(index) {
      case 0:
        page = "home";
        break;
      case 1:
        page = "skills";
        break;
      case 2:
        page = "projects";
        break;
      default:
        page = "contacts";
        break;
    }
    props.setPage(page);
  }

  return (
    <div className={`sidebar ${props.darkModeClass}`}>
      <img src={Autograph} />
     <ul>
          {navLinks.map((val, index) => {
            let text = val.mon;
            if(props.isRussian) {
              text = val.rus;
            }
            if(index == props.index) {
              return <li key={index}><a onClick={e => pageAbstract(e, index)} data-text={text} id="active">{text}</a></li>
            }
            return <li key={index}><a onClick={e => pageAbstract(e, index)} data-text={text}>{text}</a></li>
          })}
     </ul>
      <div className='sliders'>
        <div className='slider-cont'>
          <label className="switch">
            <input type="checkbox" checked={props.isDarkMode} onChange={(e) => {props.setDarkMode(!props.isDarkMode)}}/>
            <span className="slider round"></span>
          </label>
          <p>{props.isRussian ? 
            props.isDarkMode ? "Day" : "Night"
          : props.isDarkMode ? "Өдөр" : "Шөнө"}</p>
        </div>
        <div className='slider-cont'>
          <label className="switch">
            <input type="checkbox" checked={props.isRussian} onChange={(e) => {props.setRussian(e.target.checked)}}/>
            <span className="slider round"></span>
          </label>
          <p>{props.isRussian ? "Mongolian" : "Англи"}</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;