// using redux-toolkit
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteActions } from '../store/redux/favoriteSlice';

const IconButton = ({ mealId }) => {
  const favoriteMealsIds = useSelector((state) => state.favorite.ids);
  const dispatch = useDispatch();

  const isFavorite = favoriteMealsIds.includes(mealId);

  const toggleFavoriteHandler = () => {
    isFavorite
      ? dispatch(favoriteActions.removeFromFavorite({ id: mealId }))
      : dispatch(favoriteActions.addToFavorite({ id: mealId }));
  };

  return (
    <Pressable onPress={toggleFavoriteHandler}>
      <Ionicons
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={32}
        color={isFavorite ? 'red' : 'whitesmoke'}
      />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});

// using context api

// import { Pressable, StyleSheet, Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useContext, useState } from 'react';
// import { FavoriteCtx } from '../store/context/favoriteCtx';

// const IconButton = ({ mealId }) => {
//   // const [favorite, setFavorite] = useState(false);

//   const favoriteCtx = useContext(FavoriteCtx);

//   const isFavorite = favoriteCtx.ids.includes(mealId);

//   const toggleFavoriteHandler = () => {
//     isFavorite
//       ? favoriteCtx.removeFormFavorite(mealId)
//       : favoriteCtx.addToFavorite(mealId);
//   };

//   return (
//     <Pressable onPress={toggleFavoriteHandler}>
//       <Ionicons
//         name={isFavorite ? 'heart' : 'heart-outline'}
//         size={32}
//         color={isFavorite ? 'red' : 'whitesmoke'}
//       />
//     </Pressable>
//   );
// };

// export default IconButton;

// const styles = StyleSheet.create({});
