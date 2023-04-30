import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity } from 'react-native';
import AnimalStart from './AnimalStart';

export default function AnimalList({ navigation }) {
    
    const recipes = [{recipeName: "Good Old-Fashioned Pancakes", recipeDescription: "I found this pancake recipe in my Grandma's recipe book. Judging from the weathered look of this recipe card, this was a family favorite."},
    {recipeName: "Mango Lime-Bean Salad", recipeDescription: "Everyone loves this so double or triple the recipe! It vanishes in a flash, and also works well as a salsa. It really is our all time favorite summer salad."},
    {recipeName: "Sweet Potato and Shitake Mushroom Lentil Soup", recipeDescription: "This sweet potato soup recipe is one of my favorite healthy comfort foods. Made with veggies, coconut milk, and spices, it's rich, creamy, and delicious."},
    {recipeName: "Chicken Tikka Masala", recipeDescription: "This rich and creamy flavoursome Chicken tikka rivals any Indian restaurant! Why go out when you can make it better at home! "},
    {recipeName: "Lime Mouse", recipeDescription: "With whipped heavy cream flavored with sweetened condensed milk and lime juice, these key lime mousse desserts are like the classic pie made in half the time."},
    {recipeName: "Creamy White Chili", recipeDescription: "I got the best white chicken chili recipe from my sister-in-law, who made a big batch and served a crowd one night. It was a hit. It’s easy and quick, which is helpful since I’m a college student. In all my years of 4-H cooking, I’ve never had another dish get so many compliments. "},
    {recipeName: "Best Ever Banana Bread", recipeDescription: "Whenever I pass a display of bananas in the grocery store, I can almost smell the wonderful aroma of my best banana bread recipe. It really is amazingly good!"},
    {recipeName: "Cheeseburger Soup", recipeDescription: "A local restaurant serves a similar cheeseburger soup but wouldn't share its recipe with me. I developed my own, modifying a recipe I already had for potato soup. I was really pleased with the way this all-American dish turned out. "},
    {recipeName: "Amish Breakfast Casserole", recipeDescription: "We've enjoyed a few hearty breakfast casseroles while visiting an Amish inn. When I asked for a recipe, one of the ladies told me the ingredients right off the top of her head. I modified it to create this quick and easy breakfast casserole my family loves."},
    {recipeName: "Pumpkin Spiced Cupcakes with Cream Cheese Frosting", recipeDescription: "I discovered this wonderful pumpkin cupcake recipe and changed a bit to suit my taste. I love the flavor of pumpkin and the cinnamon makes ordinary cream cheese frosting extra special. When I made a batch for my husband to take to work, he said they disappeared in record time. "}];
 
    const onPress = ()=>navigation.navigate('AnimalStart');

return (
    <View>
        <TouchableOpacity onPress={onPress} >
        <Image style={styles.Pic}
          source={{
            uri: 'https://img.freepik.com/free-vector/kangaroo-cartoon-character-isolated_1308-112703.jpg',
          }}
        />
        </TouchableOpacity>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 5
  },
  item: {
   padding: 1,
    fontSize: 15,
   // height: 150,
    fontFamily: "Arial"
  },
  bold: {
    padding: 1,
    fontSize: 20,
    height: 50,
    fontWeight: 700,
  },
  border: {
    borderWidth: 1,
    borderColor: 'blue',
  }, 
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});  

