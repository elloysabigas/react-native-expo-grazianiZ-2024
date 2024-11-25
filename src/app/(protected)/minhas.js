import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function MinhasPlantas({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Plantas</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
