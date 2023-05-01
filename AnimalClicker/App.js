import StartMenu from './StartMenu';
import React, { useState } from "react"; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import kangaroo from './kangaroo';
import zebra from "./zebra";
import hippo from "./hippo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName = "Start Menu" >
    <Stack.Screen name = "StartMenu" component = {StartMenu} />
    <Stack.Screen name = "kangaroo" component = {kangaroo} />
    <Stack.Screen name = "zebra" component = {zebra} />
    <Stack.Screen name = "hippo" component = {hippo} />
    </Stack.Navigator>
  </NavigationContainer>
  
  );
}

