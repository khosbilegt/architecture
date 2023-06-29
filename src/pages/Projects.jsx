import React from 'react';
import { Sidebar } from '../components';
import './Projects.css';

function Projects(props) {
  return (
    <div className={`experience ${props.darkModeClass}`}>
          <Sidebar
               index={2} 
               isDarkMode={props.isDarkMode} 
               isRussian={props.isRussian}
               setDarkMode={props.setDarkMode}
               setRussian={props.setRussian}
               darkModeClass={props.darkModeClass}
               setPage={props.setPage}
          />
          <div className='content'>
               <h1>{props.isRussian ? "Proficient Software" : "Эзэмшсэн Программууд"}</h1>
          
          </div>
    </div>
  )
}

export default Projects;;