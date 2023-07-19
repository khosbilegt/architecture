import React from 'react';
import { Sidebar, Hero } from '../components';
import { skills_row2, skills_row1, skills_text } from '../constants';
import './Experience.css';

function Experience(props) {
  return (
    <div className={`experience ${props.darkModeClass}`}>
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
               <h1>{props.isRussian ? "Proficient Software" : "Эзэмшсэн Программууд"}</h1>
               <p>{props.isRussian ? skills_text.en : skills_text.mon}</p>
               <div className='cols'>
                    <div className='rows'>
                         {skills_row1.map((val, index) => {
                              return <div>
                                   <div className='wrapper'>
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
                                   <div className='space' />
                              </div>
                         })}
                    </div>
                    <div className='space' />
                    <div className='rows'>
                         {skills_row2.map((val, index) => {
                              return <div>
                                   <div className='wrapper'>
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
                                   <div className='space' />
                                   </div>
                         })}
                         <div className='space' />
                    </div>
               </div>
          </div>
    </div>
  )
}

export default Experience;