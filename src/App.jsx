import { useEffect, useState } from 'react';
import { Loading, Home, Experience, Contact } from './pages';
import './App.css';

function App() {
  let secondBack = 0;
  
  const [isDarkMode, setDarkMode] = useState(true);
  const [isRussian, setRussian] = useState(false);
  const [darkModeClass, setDarkModeClass] = useState("dark");
  const [page, setPage] = useState("home");
  const [content, setContent] = useState();
  const [refresh, setRefresh] = useState(0);

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

  const handlePage = (text) => {
    console.log(text);
    setPage(text);
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
      {/* <Loading /> */}
      {(() => {
        let tempContent = <Home 
        isDarkMode={isDarkMode} 
        isRussian={isRussian}
        setDarkMode={handleDarkMode}
        setRussian={handleRussian}
        darkModeClass={darkModeClass}
        setPage={handlePage}
      />;
      if(page === "skills") {
        tempContent = <Experience 
          isDarkMode={isDarkMode} 
          isRussian={isRussian}
          setDarkMode={handleDarkMode}
          setRussian={handleRussian}
          darkModeClass={darkModeClass}
          setPage={handlePage}
        />
      } else if(page === "projects") {
        tempContent = <Experience 
          isDarkMode={isDarkMode} 
          isRussian={isRussian}
          setDarkMode={handleDarkMode}
          setRussian={handleRussian}
          darkModeClass={darkModeClass}
          setPage={handlePage}
        />
      } else if(page === "contacts") {
        tempContent = <Contact 
          isDarkMode={isDarkMode} 
          isRussian={isRussian}
          setDarkMode={handleDarkMode}
          setRussian={handleRussian}
          darkModeClass={darkModeClass}
          setPage={handlePage}
        />
      }
      return tempContent;
      })()}
    </div>
  );
}

export default App;

/*
{(() => {
        if(page === "home") {
          return <Home 
            isDarkMode={isDarkMode} 
            isRussian={isRussian}
            setDarkMode={handleDarkMode}
            setRussian={handleRussian}
            darkModeClass={darkModeClass}
            setPage={handlePage}
          />
        } else if(page === "skills") {
          return <Experience 
            isDarkMode={isDarkMode} 
            isRussian={isRussian}
            setDarkMode={handleDarkMode}
            setRussian={handleRussian}
            darkModeClass={darkModeClass}
            setPage={handlePage}
          />
        } else if(page === "projects") {
          return <Experience 
            isDarkMode={isDarkMode} 
            isRussian={isRussian}
            setDarkMode={handleDarkMode}
            setRussian={handleRussian}
            darkModeClass={darkModeClass}
            setPage={handlePage}
          />
        } else if(page === "contacts") {
            return <Contact 
            isDarkMode={isDarkMode} 
            isRussian={isRussian}
            setDarkMode={handleDarkMode}
            setRussian={handleRussian}
            darkModeClass={darkModeClass}
            setPage={handlePage}
          />
        }
        return <Contact 
        isDarkMode={isDarkMode} 
        isRussian={isRussian}
        setDarkMode={handleDarkMode}
        setRussian={handleRussian}
        darkModeClass={darkModeClass}
        setPage={handlePage}
      />
      })};
*/