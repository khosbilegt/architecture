import React from 'react';
import { Sidebar, Hero } from '../components';
import './Experience.css';

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
          <Hero darkModeClass={props.darkModeClass}/>
    </div>
  )
}

export default Experience;