import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SobrePage() {
  const navigation = useNavigation();

  return (
    <LinearGradient 
      style={styles.container}
      colors={['#e3f2f9', '#d4e9e2', '#f9f1e3']}
    >
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('signin')}
      >
        <Ionicons name="close" size={24} color="#006356" />
      </TouchableOpacity>
      <Text style={styles.welcomeText}>Bem-vindo ao</Text>
      <Text style={styles.appName}>Jardim em Ordem</Text>
      <Text style={styles.welcomeText1}>
        Este aplicativo foi desenvolvido para oferecer uma experiência única no cuidado e apreciação das plantas. Explore categorias, curiosidades
      </Text>
      <Image
        source={require('../../src/assets/images/sobre.png')} 
        style={styles.image}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 50,
    padding: 8,
    marginTop: 5,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#006356',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 90,
  },
  welcomeText1: {
    fontSize: 12,
    color: '#959595',
    textAlign: 'justify',
    marginHorizontal: 8,
    fontFamily: 'regular',
  },
  appName: {
    fontSize: 32,
    color: "#005f56",
    fontFamily: 'sourGummy',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: 560,
    height: 560,
    resizeMode: 'contain',
    marginTop: 0,
  },
});
