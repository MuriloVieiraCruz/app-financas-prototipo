import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthRoutes from './authRoutes';

const Routes = () => {

  const loading = false;
  const signed = false;

  return (
    signed ? <View></View> : <AuthRoutes/>
  )
}

export default Routes;
