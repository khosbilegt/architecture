import React from 'react';
import { Sidebar } from '../components';
import { contact, social } from '../constants';
import './Contact.css';

function Contact(props) {
  return (
    <div className={`contact ${props.darkModeClass}`}>
          <Sidebar 
               index={3} 
               isDarkMode={props.isDarkMode} 
               isRussian={props.isRussian}
               setDarkMode={props.setDarkMode}
               setRussian={props.setRussian}
               darkModeClass={props.darkModeClass}
               setPage={props.setPage}
          />
          <div className={`content ${props.darkModeClass}`}>
               <h1>Холбогдох мэдээлэл</h1>
               <div className='wrapper info'>
                    {contact.map((val, index) => {
                         const Icon = val.icon;
                         return <div className='card'>
                                   <Icon fontSize={"30px"} />
                                   <p>{val.text}</p>
                              </div>
                    })}
               </div>
               <div className='wrapper social'>
                    {social.map((val, index) => {
                         const Icon = val.icon;
                         return <div className='card'>
                                   <Icon fontSize={"30px"} />
                                   <a href={val.link}>{val.text}</a>
                              </div>
                    })}
               </div>
          </div>
    </div>
  )
}

export default Contact