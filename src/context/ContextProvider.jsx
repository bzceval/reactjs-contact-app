import { useState } from 'react';
import { createContext } from 'react'; 

export const AuthContext = createContext(); 
const initialValues = {username:"", phoneNumber:"", gender:""}

const ContextProvider = ({ children }) => {
    const [info, setInfo] = useState(initialValues) 

  return (
    <AuthContext.Provider value={{ info, setInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;