import React from 'react';
import { Sidebar, Hero } from '../components';
import './Home.css';

function Home() {
  return (
    <div className='home'>
        <Sidebar />
        <Hero />
    </div>
  )
}

export default Home