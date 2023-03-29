import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MealItemDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealItemDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'center',
  },
  detailItem: {
    marginHorizontal: 8,
  },
});
