import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router'; // Importa o hook para navegação
import React from 'react';

export default function List() {
  const router = useRouter(); 

  const handleAddPlant = () => {
    router.push('/cuidados'); // Navega para a página "cuidados"
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       
        <TouchableOpacity style={styles.button} onPress={handleAddPlant}>
          <Text style={styles.buttonText}> + Adicionar Planta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9', // Fundo suave
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#005f56', // Cor do botão
    color:'#f9f4f5',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
