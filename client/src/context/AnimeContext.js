import React, { createContext, useState, useContext, useEffect } from 'react';

const AnimeContext = createContext();

export const useAnimeContext = () => {
  const context = useContext(AnimeContext);

  if (!context) {
    throw new Error('useAnimeContext must be used within an AnimeProvider');
  }
  
  return context;
};

export const AnimeProvider = ({ children }) => {
  const [animeState, setAnimeState] = useState(
    JSON.parse(localStorage.getItem('animeState')) || false
  );

  useEffect(() => {
    localStorage.setItem('animeState', JSON.stringify(animeState));
  }, [animeState]);

  return (
    <AnimeContext.Provider value={{ animeState, setAnimeState }}>
      {children}
    </AnimeContext.Provider>
  );
};
