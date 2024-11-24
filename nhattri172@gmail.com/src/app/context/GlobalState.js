// src/context/GlobalState.js
import React, { createContext, useState, useContext } from 'react';

// 1. Tạo context
const GlobalStateContext = createContext();

// 2. Tạo Provider để cung cấp context
export const GlobalStateProvider = ({ children }) => {
  const [ls, setLs] = useState([]);

  const updateLs =() =>{

  }
  return (
    <GlobalStateContext.Provider value={{ ls, updateLs }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Hook tùy chỉnh để sử dụng context
export const useGlobalState = () => useContext(GlobalStateContext);
