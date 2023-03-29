import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 8,
    borderBottomColor: '#e38245',
    borderBottomWidth: 0.25,
    marginHorizontal: 24,
    marginBottom: 8,
  },
  subtitle: {
    color: '#e38245',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
