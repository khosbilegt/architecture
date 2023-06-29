import React from 'react';
import { Sidebar } from '../components';
import { projects } from "../constants";
import './Projects.css';

function Projects(props) {
  return (
    <div className={`projects ${props.darkModeClass}`}>
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
               <h1>{props.isRussian ? "Project Portfolio" : "Өмнөх Бүтээлүүд"}</h1>
               <div className='wrapper'>
                {projects.map((val, index) => {
                    return <div className='card'>
                      <img src={val.image} />
                      <p>{val.text}</p>
                    </div>
                })}
               </div>
          </div>
    </div>
  )
}

export default Projects;;