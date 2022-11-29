import { useState } from 'react';
import { createContext } from 'react'; 

export const InfoContext = createContext(); 

const initialValues = {username:"", phoneNumber:"", gender:""}

const ContextProvider = ({ children }) => {
    const [info, setInfo] = useState(initialValues) 
    const [user, setUser] = useState()

  return (
    <InfoContext.Provider value={{ info, setInfo, user, setUser }}>
      {children}
    </InfoContext.Provider>
  );
};

export default ContextProvider;
