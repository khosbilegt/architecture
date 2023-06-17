import { useEffect, useState } from 'react';
import { Loading, Home } from './pages';
import './App.css';

function App() {
  let secondBack = 0;
  
  const [isDarkMode, setDarkMode] = useState(false);
  const [isRussian, setRussian] = useState(false);

  const handleDarkMode = (bool) => {
    setDarkMode(bool);
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
    <div className="App">
      <Loading />
      <Home 
        isDarkMode={isDarkMode} 
        isRussian={isRussian}
        setDarkMode={handleDarkMode}
        setRussian={handleRussian}
      />
    </div>
  );
}

export default App;
