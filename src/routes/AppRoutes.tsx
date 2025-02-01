import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AppListParam from '../types/AppListParam';
import Home from '../pages/home/Home';

const Drawer = createDrawerNavigator<AppListParam>();

const AppRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={Home}/>
    </Drawer.Navigator>
  )
}

export default AppRoutes

const styles = StyleSheet.create({})