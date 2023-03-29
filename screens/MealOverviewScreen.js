import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const MealOverviewScreen = ({ route, navigation }) => {
  const router = useRoute();
  const catId = router.params.categoryId;
  const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;

  useEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryTitle]);

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  //   const pressHandler = (itemData) => {
  //     navigation.navigate('MealDetails', { mealId: itemData.item.id });
  //   };

  const renderMealHandler = (itemData) => {
    return (
      <MealItem
        meal={itemData.item}
        // onPress={pressHandler.bind(this, itemData)}
      />
    );
  };

  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMealHandler}
    />
  );
};

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
