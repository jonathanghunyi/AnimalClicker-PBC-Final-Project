import { StatusBar } from 'expo-status-bar';
import Start from './AnimalStart';
import ListOfAnimals from './StartMenu';
import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Linking,Button} from 'react-native';   
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Start Menu'>
      {/* <Stack.Screen name='AnimalStart' component={Start} /> */}
      <Stack.Screen name='StartMenu' component={ListOfAnimals} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
