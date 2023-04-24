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
        <Text style={styles.centerer}> Points: {count} </Text>
        <Text></Text>

        <TouchableOpacity style={styles.button} onPress={()=> {
          setCount(count+1);
        }} >
        <View style={styles.border}>    
        <Text style={styles.centerer}>CLICK HERE FOR POINTS</Text>      
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
      margin: 15,
    },
    centerer: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    Pic: {
      alignSelf: 'center',
      width: 200, 
      height: 200 
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    border: {
      borderWidth: 5,
      padding: 10,
      borderColor: 'blue',
      alignSelf: 'center',
    }, 
});