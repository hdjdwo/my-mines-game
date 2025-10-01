import React, { useEffect, useState } from 'react';
import './App.css';
import { BetPanel } from './components/BetPanel/BetPanel';
import { MinesField } from './components/MinesField/MinesField';

function App() {

   const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const imagesToPreload = [
      process.env.PUBLIC_URL + '/diamond.png',
      process.env.PUBLIC_URL + '/mines.png',
    ];

    const loadImages = async () => {
      const promises = imagesToPreload.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
        });
      });

      await Promise.all(promises);
      setIsLoading(false); 
    };

    loadImages();
  }, []); 
  
  return (
    <div className="App">
     <BetPanel />
     <MinesField />
    </div>
  );
}

export default App;
