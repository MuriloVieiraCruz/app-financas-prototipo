import React, { createContext, ReactNode, useState } from 'react';
import User from '../types/User';

interface AuthContextType {
  user: User;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const [user, setUser] = useState();
  
  return (
    <AuthContext.Provider value={ user }>
      { children }
    </AuthContext.Provider>
  );
}

export const useAuthContext = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

