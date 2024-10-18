import { Stack, useRouter } from 'expo-router'; 
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import React, { useState } from 'react'; 

export default function Flores() {
  
  return (
    <SafeAreaView style={styles.container}>
     <Image style={styles.image} source={require('../../../src/assets/images/samambaia.jpg')} />

      <Text style={styles.title}>Samambaia</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },

  image: {
    width: '100%',
    height: 300,
  },

});
