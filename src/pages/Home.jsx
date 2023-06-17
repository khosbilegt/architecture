import React from 'react';
import { Sidebar, Hero } from '../components';
import './Home.css';

function Home(props) {
  return (
    <div className='home'>
        <Sidebar 
          index={0} 
          isDarkMode={props.isDarkMode} 
          isRussian={props.isRussian}
          setDarkMode={props.setDarkMode}
          setRussian={props.setRussian}
        />
        <Hero />
    </div>
  )
}

export default Home