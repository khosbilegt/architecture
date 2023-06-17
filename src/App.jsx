import { useEffect, useState } from 'react';
import { Loading, Home } from './pages';
import './App.css';

function App() {
  let secondBack = 0;
  
  const [isDarkMode, setDarkMode] = useState(true);
  const [isRussian, setRussian] = useState(false);
  const [darkModeClass, setDarkModeClass] = useState("dark");

  const handleDarkMode = (bool) => {
    if(!bool) {
      setDarkModeClass('light');
    } else {
      setDarkModeClass('dark');
    }
    setDarkMode(bool);
    console.log(darkModeClass);
  }

  const handleRussian = (bool) => {
    setRussian(bool);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(secondBack < 5) {
        secondBack++;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`App ${darkModeClass}`}>
      <Loading />
      <Home 
        isDarkMode={isDarkMode} 
        isRussian={isRussian}
        setDarkMode={handleDarkMode}
        setRussian={handleRussian}
        darkModeClass={darkModeClass}
      />
    </div>
  );
}

export default App;
