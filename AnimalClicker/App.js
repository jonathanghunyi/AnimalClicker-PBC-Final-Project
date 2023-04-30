import { StatusBar } from 'expo-status-bar';
import Start from './AnimalStart';
import ListOfAnimals from './AnimalList';
import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Linking,Button} from 'react-native';   
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimalList from './AnimalList';
import Animal from './AnimalStart';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Animal />
   // <NavigationContainer>
   // <Stack.Navigator initialRouteName='AnimalList'>
  //  <Stack.Screen name='AnimalList' component={AnimalList} />
  //    </Stack.Navigator>
  //</NavigationContainer>
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
