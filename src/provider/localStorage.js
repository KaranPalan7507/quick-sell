// LocalStorageContext.js
import React, { createContext, useContext, useState } from 'react';

const LocalStorageContext = createContext();

export const LocalStorageProvider = ({ keys, children }) => {
  const initialState = keys.reduce((state, { key, defaultValue }) => {
    const storedData = JSON.parse(localStorage.getItem(key)) || defaultValue;
    return { ...state, [key]: storedData };
  }, {});

  const [localStorageData, setLocalStorageData] = useState(initialState);

  const setLocalStorageValue = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setLocalStorageData((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <LocalStorageContext.Provider value={{ localStorageData, setLocalStorageValue }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorage = () => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error('useLocalStorage must be used within a LocalStorageProvider');
  }
  return context;
};
