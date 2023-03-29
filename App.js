import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import FavoriteCtxProvider from './store/context/favoriteCtx';
import { Provider } from 'react-redux';
import store from './store/redux/store';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'whitesmoke',
        sceneContainerStyle: { backgroundColor: '#46372e' },
        drawerStyle: { backgroundColor: '#46372e' },
        drawerActiveBackgroundColor: '#351401',
        drawerActiveTintColor: 'whitesmoke',
        drawerInactiveTintColor: 'whitesmoke',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <FavoriteCtxProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'whitesmoke',
              contentStyle: { backgroundColor: '#46372e' },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ title: 'All Categories', headerShown: false }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealOverviewScreen}
              // options={({ route, navidation }) => ({
              //   title: route.params.categoryId,
              // })}
            />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteCtxProvider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    // paddingTop: Constants.statusBarHeight,
  },
});
