import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import SignListParam from '../types/SignListParam'

const AuthStack = createStackNavigator<SignListParam>();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: '#3b3dbf',
            borderBottomWidth: 1,
            borderBottomColor: '00b94a'
          },
          headerTintColor: '#FFF',
          headerTitle: 'Voltar',
        }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthRoutes;