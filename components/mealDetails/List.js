import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const List = ({ listItems }) => {
  return listItems.map((item) => (
    <View key={item} style={styles.itemContainer}>
      <Text style={styles.item}>{item}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#e38245',
    paddingHorizontal: 8,
    paddingVertical: 4,
    margin: 6,
    borderRadius: 8,
    elevation: 4,
  },
  item: { color: 'whitesmoke' },
});
