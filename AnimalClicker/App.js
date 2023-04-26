import { StatusBar } from 'expo-status-bar';
import Start from './AnimalStart';
import StartMenu from './StartMenu';
import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Linking,Button} from 'react-native';   
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native'; 

export default function App() {
  return (
      <Start />
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
