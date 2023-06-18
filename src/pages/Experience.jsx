import React from 'react';
import { Sidebar, Hero } from '../components';
import './Experience.css';
import { skills } from '../constants';

function Experience(props) {
  return (
    <div className='experience'>
          <Sidebar 
               index={1} 
               isDarkMode={props.isDarkMode} 
               isRussian={props.isRussian}
               setDarkMode={props.setDarkMode}
               setRussian={props.setRussian}
               darkModeClass={props.darkModeClass}
               setPage={props.setPage}
          />
          <div className='content'>
               {skills.map((val, index) => {
                    return <div className='wrapper'>
                         <img src={val.img} />
                         <div className='progress'>
                              <div className='progress-content'>
                                   <p>{val.name}</p>
                                   <p>{val.percentage}</p>
                              </div>
                              <div className='bar'>
                                   <div className='percentage' style={{width: val.percentage}}></div>
                              </div>
                         </div>
                    </div>

               })}
          </div>
    </div>
  )
}

export default Experience;