import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { FavoriteCtx } from '../store/context/favoriteCtx';
import { MEALS } from '../data/dummy-data';
import { FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { useSelector } from 'react-redux';

const FavoriteScreen = () => {
  //   const favoriteCtx = useContext(FavoriteCtx);
  const favoriteMealsIds = useSelector((state) => state.favorite.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );
  //   console.log(
  //     '🚀 ~ file: FavoriteScreen.js:9 ~ FavoriteScreen ~ favoriteMeals:',
  //     favoriteMeals
  //   );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Your Favorite List is Empty!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteMeals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MealItem meal={item} />}
    />
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'whitesmoke',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});
