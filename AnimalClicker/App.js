import { StatusBar } from 'expo-status-bar';
import Start from './AnimalStart';
import StartMenu from './StartMenu';
import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Linking,Button} from 'react-native';   
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimalList from './AnimalList';
import Animal from './AnimalStart';
import zebra from "./zebra";
import hippo from "./hippo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Animal />
   <NavigationContainer>
  
    <Stack.Navigator initialRouteName = "StartMenu" >
  {/* <Stack.Screen name='AnimalList' component={AnimalList} /> */}
  <Stack.Screen name = "StartMenu" component = {StartMenu} />
  <Stack.Screen name = "AnimalStart" component = {Animal} />
  <Stack.Screen name = "zebra" component = {zebra} />
  <Stack.Screen name = "hippo" component = {hippo} />
  {/* <Stack.Screen name = "AnimalList" component = {AnimalList} /> */}
  </Stack.Navigator>
  {/* <ListOfAnimals /> */}
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
