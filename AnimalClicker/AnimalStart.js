import { useState } from 'react';
import { Text, View, Image, Button, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

function Animal({name}) { 
  const [nickname, setNickname] = useState("");
  const [count, setCount] = useState(0);

  return (
    <ScrollView style={styles.item}>
               
        <Image style={styles.Pic}
          source={{
            uri: 'https://img.freepik.com/free-vector/kangaroo-cartoon-character-isolated_1308-112703.jpg',
          }}
        />
        <Text></Text>
        <Text style={styles.centerer}>Hello, I am your animal!</Text>
        <Text></Text>
      <TextInput
          style={{height: 40,
            borderColor: 'gray',
            borderWidth: 1}}
          placeholder='Name me!'
          onSubmitEditing={(event) => setNickname(event.nativeEvent.text)} 
          /> 
        <Text></Text>
        <Text style={styles.centerer}> {nickname} </Text>
        <Text></Text>
        <Text style={styles.centerer}> Points:</Text>
        <Text style={styles.pointsCenterer}> {count} </Text>
        <Text></Text>

        <TouchableOpacity style={styles.button} onPress={()=> {
          setCount(count+1);
        }} >
        <View>
        {/* <View style={styles.border}>     */}
        <Text style={styles.buttonCenterer}>CLICK HERE FOR POINTS</Text>      
        </View>
        </TouchableOpacity>

    </ScrollView>
  );
}

/* Cafe is the parent component we will call in App.js
   Cat is considered a child component */
export default function Start() {  
  return (
    <View>   
      <Animal name="" />    
    </View>
  );
}

const styles = StyleSheet.create({
    item: {
      alignSelf: 'center',
      padding: 10,
    },
    centerer: {
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    pointsCenterer: {
      alignSelf: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      color: 'red',
    },
    buttonCenterer: {
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    Pic: {
      alignSelf: 'center',
      width: 250, 
      height: 250,
      margin: 40,

    },
    button: {
      alignItems: 'center',
      backgroundColor: 'green',
      padding: 30,
      borderRadius: 50,

    },
    border: {
      borderWidth: 5,
      padding: 10,
      borderColor: 'blue',
      alignSelf: 'center',
    }, 
});