import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  //#region 
  const [clubSearchTerm, setClubSearchTerm] = useState('');
  const [optionSearchTerm, setOptionSearchTerm] = useState('');

  return <AppContext.Provider value={
    {
    
      clubSearchTerm,
      setClubSearchTerm,

      optionSearchTerm,
      setOptionSearchTerm,
    
    }
  }>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
