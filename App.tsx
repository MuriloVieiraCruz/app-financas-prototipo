import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Routes from './src/routes/Routes';
import { AuthProvider } from './src/contexts/auth';


function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="F0F4FF" barStyle="dark-content"/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
