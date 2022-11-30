import { useEffect, useState } from 'react';
import { createContext } from 'react'; 
import { userObserver } from '../utils/authFunctions';

export const MainContext = createContext(); 

const initialValues = {username:"", phoneNumber:"", gender:""}

const ContextProvider = ({ children }) => {
    const [info, setInfo] = useState(initialValues) 
    const [user, setUser] = useState(false)

    useEffect(() => { 
      userObserver(setUser);
    }, []);

  return (
    <MainContext.Provider value={{ info, setInfo, user, setUser }}>
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
