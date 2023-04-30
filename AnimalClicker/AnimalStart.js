import { useState } from 'react';
import { Text, View, Image, Button, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

function Animal({name}) { 
  const [nickname, setNickname] = useState("");
  const [count, setCount] = useState(0);
  const [nametag, setNametag] = useState(styles.nametag1);

  a = 'https://img.freepik.com/free-vector/kangaroo-cartoon-character-isolated_1308-112703.jpg'

  return (
    <ScrollView style={styles.item}>
               
        <Image style={styles.Pic}
          source={{
           uri: a,
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
        <Text style={nametag}> {nickname} </Text>
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
        <Text></Text> 
        
{/* second button*/}
        <TouchableOpacity style={styles.button2} onPress={()=> {
          if (count>=10) {
            setCount(count-10);
            setNametag(styles.nametag2)
          }
          
        }} >
        <View>
        {/* <View style={styles.border}>     */}
        <Text style={styles.buttonCenterer}> -10 Fancy Nametag </Text>      
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
      width: 270, 
      height: 250,
      margin: 40,

    },
    button: {
      alignItems: 'center',
      backgroundColor: 'green',
      padding: 30,
      borderRadius: 50,

    },
    button2: {
      alignItems: 'center',
      backgroundColor: 'blue',
      padding: 30,
      borderRadius: 40,

    },
    border: {
      borderWidth: 5,
      padding: 10,
      borderColor: 'blue',
      alignSelf: 'center',
    }, 

    nametag1: {
      alignSelf: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Futura', // original nametag

    },
    nametag2: {
      alignSelf: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Zapfino',
      
    },
    
});