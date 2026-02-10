import React, { createContext, useState, useContext, useEffect } from 'react';

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  // Default to college, persist in localStorage
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('appMode');
    return savedMode || 'college';
  });

  useEffect(() => {
    localStorage.setItem('appMode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'college' ? 'school' : 'college'));
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};
