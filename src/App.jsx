import { useEffect, useState } from 'react';
import { Loading, Home } from './pages';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  let secondBack = 0;
  
  useEffect(() => {
    const interval = setInterval(() => {
      if(secondBack < 5) {
        secondBack++;
        setSeconds(secondBack);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="App">
      {/* {
        seconds < 5 ? <Loading /> : <Home />
      } */}
      <Home />
    </div>
  );
}

export default App;
