import { useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

function Zebra({name}) { 
  const [nickname, setNickname] = useState("Name Me!");
  const [count, setCount] = useState(0);
  const [hunger, setHunger] = useState("");
  const [nametag, setNametag] = useState(styles.nametag1);
  const [b2, setB2] = useState(0);
  const [b3, setB3] = useState(0);

  a = 'https://s3-eu-west-1.amazonaws.com/uploads.playbaamboozle.com/uploads/images/30276/1593138884_136398'

  return (
    <ScrollView style={styles.item}>
               
        <Image style={styles.Pic}
          source={{
           uri: a,
          }}
        />
        <Text style={styles.centerer}>{hunger}</Text>
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
          if (count>=10 && b2==0) {
            setCount(count-10);
            setNametag(styles.nametag2)
            setB2(1)
          }
          
        }} >
        <View>
        {/* <View style={styles.border}>     */}
        <Text style={styles.buttonCenterer}> -10 Fancy Nametag </Text>      
        </View>
        </TouchableOpacity>
        <Text></Text>

{/* third button*/}
<TouchableOpacity style={styles.button2} onPress={()=> {
          if (count>=15 && b3==0) {
            setCount(count-15);
            setHunger("mmmm, tasty!")
            setB3(1)
          }
          if (count>=15 && b3==1) {
            setCount(count-15);
            setHunger("I'm full!")
            setB3(2)
          }
          
        }} >
        <View>
        <Text style={styles.buttonCenterer}> -15 Feed Me </Text>      
        </View>
        </TouchableOpacity>
        <Text></Text>


    </ScrollView>
  );
}

export default function Start() {  
  return (
    <View>   
      <Zebra name="" />    
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
      width: 285, 
      height: 295,
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