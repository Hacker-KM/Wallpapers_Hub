import { useContext, useEffect, createContext, useState } from "react";

const AppContext = createContext();

const getInitialDarkMode = ()=>{
  const preferDarkMode = window.matchMedia('(prefers-color-schema:dark)').matches
  const storedDarkMode = localStorage.getItem('darkTheme')==='true'
  return storedDarkMode || preferDarkMode;
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState
  (getInitialDarkMode());
  const [searchTerm,setSearchTerm] = useState('cat')
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme',newDarkTheme)
    localStorage.setItem('darkTheme',newDarkTheme)
  };


  useEffect(()=>{
    document.body.classList.toggle("dark-theme", isDarkTheme);
  },[])

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
