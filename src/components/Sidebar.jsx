import React from 'react';
import './Sidebar.css';
import { navLinks } from '../constants';

function Sidebar() {
  return (
    <div className='sidebar'>
     <ul>
          {navLinks.map((val, index) => {
               return <li><a href={val.link} data-text={val.text}>{val.text}</a></li>
          })}
     </ul>
    </div>
  )
}

export default Sidebar