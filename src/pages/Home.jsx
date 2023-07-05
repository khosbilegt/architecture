import React from 'react';
import { Sidebar } from '../components';
import { Profile } from '../res/images';
import { quote } from '../constants';
import './Home.css';

function Home(props) {
  return (
    <div className={`home ${props.darkModeClass}`}>
        <Sidebar 
          index={0} 
          isDarkMode={props.isDarkMode} 
          isRussian={props.isRussian}
          setDarkMode={props.setDarkMode}
          setRussian={props.setRussian}
          darkModeClass={props.darkModeClass}
          setPage={props.setPage}
        />
        <div className={`content`}>
        <div className={`quote`}>
            {quote.mon.map((val, index) => {
              return <p>{val}</p>
            })}
          </div>
          <img className='profile' src={Profile}/>
        </div>
    </div>
  )
}

export default Home;

/*


Welcome to my architecture portfolio! As an aspiring architecture student, I am excited to share my journey and design projects with you. Throughout my academic endeavors, I have gained a solid foundation in design principles, spatial awareness, and technical skills. I have had the opportunity to work on various projects, including residential spaces, sustainable architecture, and urban planning. By integrating architectural theory with hands-on experience, I aim to create practical and impactful designs that improve people's lives. I invite you to explore my portfolio and witness my dedication to the field of architecture. Thank you for visiting, and I look forward to potential collaborations and opportunities.
*/