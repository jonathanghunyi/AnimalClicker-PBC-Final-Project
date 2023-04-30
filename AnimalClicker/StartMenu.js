import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, ScrollView } from 'react-native';

export default function ListOfAnimals({ navigation }){
    //figure out how to wrap the text
    const dataSource = [
        {  animalName: "Kangaroo", animalDescription: "Pick me."},
        { animalName: "Hippo", animalDescription: "Pick me."},
        { animalName: "Zebra", animalDescription: "Pick me."},
      ];
      const onPress = () =>navigation.navigate('AnimalStart');
      
  return (
    <ScrollView horizontal
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}>
    <View style={styles.container}>
      
      {/* <TouchableOpacity onPress={goHome}>
        <Text style = {styles.homeSty}>{Home}</Text>
      </TouchableOpacity> */}
      
      
      <FlatList
        data={dataSource.carouselItems}
        renderItem={({item}) =>
        <TouchableOpacity onPress={onPress}>
        <View style={styles.border}>
        <Text style={styles.title}>{item.animalName} </Text>
        <Text style={styles.item}>{item.animalDescription} </Text>
        
        </View>
        </TouchableOpacity>
        }
      />
    </View>
    </ScrollView>
  );
      }

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 50
    },
    title:{
      padding: 10,
      fontSize: 25,
      height: 44,
      color: "blue",
      fontWeight: "bold"
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      
    },
    homeSty: {
      padding: 10,
      fontSize: 18,
      height: 44,
      textAlign: "center",
    },
    
    border:{
      borderWidth: 1,
      borderColor: 'yellow',
    }
  });  