import React from 'react';
import { Sidebar } from '../components';

function Contact(props) {
  return (
    <div className='contact'>
          <Sidebar 
               index={3} 
               isDarkMode={props.isDarkMode} 
               isRussian={props.isRussian}
               setDarkMode={props.setDarkMode}
               setRussian={props.setRussian}
               darkModeClass={props.darkModeClass}
               setPage={props.setPage}
          />
    </div>
  )
}

export default Contact