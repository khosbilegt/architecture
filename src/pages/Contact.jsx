import React from 'react';
import { Sidebar } from '../components';
import './Contact.css';

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
          <div className='content'>
               <div className='card'>
                    
               </div>
          </div>
    </div>
  )
}

export default Contact