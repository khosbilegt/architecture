import React, { useState } from 'react';
import { Sidebar, Info } from '../components';
import { projects } from "../constants";
import ModalImage from 'react-modal-image';
import './Projects.css';

function Projects(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(''); // Add this line

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
                      <ModalImage
                        small={val.small}
                        large={val.large}
                        hideDownload={true}
                        hideZoom={true}
                      />
                      {/* <p>{val.text}</p> */}
                    </div>
                })}
               </div>
          </div>
    </div>
  )
}

export default Projects;;