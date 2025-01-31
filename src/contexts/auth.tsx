import React, { createContext, ReactNode, useState } from 'react';
import User from '../types/User';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import SignListParam from '../types/SignListParam';

interface AuthContextType {
  user: User | undefined;
  signUp: (
    name: string, 
    email: string, 
    password: string
  ) => void;
}

type SignNavigationProps = StackNavigationProp<SignListParam, "SignUp">;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const navigation = useNavigation<SignNavigationProps>();
  const [user, setUser] = useState<User | undefined>(undefined);
  const signUp = async (name: string, email: string, password: string) => {
    try {
      const response = await api.post('/users', {
        name: name,
        email: email,
        password: password,
      })

      navigation.goBack();
    } catch(err) {
      console.log(err);
    }
  };
  
  return (
    <AuthContext.Provider value={{ user, signUp }}>
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

export default AuthProvider;
