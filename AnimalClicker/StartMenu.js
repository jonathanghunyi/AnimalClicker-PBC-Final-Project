import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Linking,Button} from "react-native";   
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native'; 





export default function StartMenu() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <View>
      {/* <Image style={styles.image} source={require()} /> */}

      
      <View >
        <TextInput
         
          placeholder="Benutzername"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <Button  
          
          title="Go to Profile"  
          onPress={() => this.props.navigation.navigate('AnimalStart')}  
      />  
    </View>
  );

}