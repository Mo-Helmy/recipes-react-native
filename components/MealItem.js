import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealItemDetails from './MealItemDetails';

const MealItem = ({ meal, onPress }) => {
  const navigation = useNavigation();
  const presHandler = () => {
    navigation.navigate('MealDetails', { mealId: meal.id });
  };
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, { backgroundColor: '#cccccc' }]
            : styles.innerContainer
        }
        onPress={presHandler}
        // onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: meal.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{meal.title}</Text>
          <MealItemDetails
            duration={meal.duration}
            complexity={meal.complexity}
            affordability={meal.affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    overflow: 'hidden',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    // backgroundColor: '#ccc',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    padding: 8,
    fontSize: 18,
    textAlign: 'center',
  },
});
