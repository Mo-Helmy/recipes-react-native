import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import MealItemDetails from '../components/MealItemDetails';
import Subtitle from '../components/mealDetails/Subtitle';
import List from '../components/mealDetails/List';
import IconButton from '../components/IconButton';

const MealDetailsScreen = ({ route, navigation }) => {
  const meal = MEALS.find((meal) => meal.id === route.params.mealId);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Meal Details',
      headerRight: () => <IconButton mealId={meal.id} />,
    });
  }, [meal]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealItemDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={{ color: 'whitesmoke' }}
      />
      <View>
        <Subtitle>INGREDIENTS</Subtitle>
        <View style={styles.ingredContainer}>
          <List listItems={meal.ingredients} />
        </View>
      </View>
      <View>
        <Subtitle>STEPS</Subtitle>
        <View style={styles.stepsContainer}>
          <List listItems={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    color: 'whitesmoke',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
  },
  ingredContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  stepsContainer: {
    marginHorizontal: 24,
  },
});
