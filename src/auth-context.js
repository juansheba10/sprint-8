import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedInUser, setIsLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};
