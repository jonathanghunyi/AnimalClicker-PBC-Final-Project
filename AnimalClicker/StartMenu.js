import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, ScrollView } from 'react-native';
import Animal from "./AnimalStart"
import AnimalList from './AnimalList';

 export default function StartMenu({ navigation }){
    //figure out how to wrap the text
    const dataSource = [
        {  animalName: "Kangaroo", animalDescription: "Pick me.", animalDest:'AnimalStart'},
        { animalName: "Hippo", animalDescription: "Pick me.", animalDest:"hippo"},
        { animalName: "Zebra", animalDescription: "Pick me.", animalDest:"zebra"},
      ];
      
      const onPress = (destination) =>navigation.navigate(destination);
    
      

        
  

        
      
      
      
  return (
    
    <View style={styles.container}>
    
      <FlatList
        data={dataSource}
        renderItem={({item}) =>
        <TouchableOpacity onPress={()=> onPress(item.animalDest)}>
        <View style={styles.border}>
        <Text style={styles.title}>{item.animalName} </Text>
        <Text style={styles.item}>{item.animalDescription} </Text>
        
        </View>
        </TouchableOpacity>
        }
      />
    </View>
    
  );
      
      }
      

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 50,
     backgroundColor: "#6495ED"
    },
    title:{
      padding: 10,
      fontSize: 30,
      height: 44,
      color: "#98ff98",
      fontWeight: "bold",
      textDecorationLine: 'underline',
      textAlign: "center",
    },
    item: {
      padding: 10,
      fontSize: 30,
      height: 44,
      textAlign: "center",
      
    },
    homeSty: {
      padding: 10,
      fontSize: 18,
      height: 50,
      textAlign: "center",
    },
    
    border:{
      borderWidth: 5,
      borderColor: 'white',
    }
  });  