import { Stack, useRouter } from 'expo-router'; // Importa useRouter para navegação
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importação do Ionicons
import React, { useState } from 'react'; // Importação de useState

export default function Flores() {
  const [text, setText] = useState(''); // useState para gerenciar o valor do campo de pesquisa
  const router = useRouter(); // Hook para controlar a navegação

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho com ícone de seta e título */}
      <View style={styles.header}>
        {/* Botão de voltar */}
        <TouchableOpacity onPress={() => router.push('/cuidados')}>
          <Ionicons name="chevron-back" size={24} color="#005f56" style={{marginLeft:8}} />
        </TouchableOpacity>

        {/* Título */}
        <Text style={styles.title}>Frutas</Text>
      </View>

      {/* Campo de pesquisa */}
      <View style={styles.cabecalho}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput} 
            placeholder="Pesquisar" 
            autoCapitalize="none" 
            autoCorrect={false} 
            value={text} 
            onChangeText={(value) => setText(value)} 
          />
          <Ionicons name="search" size={24} color="#d7dbe4" style={styles.icon} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row', // Coloca a seta e o texto lado a lado
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: "#005f56",
    fontFamily: 'regular',
    textAlign: 'center',
    marginLeft:20,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: '100%',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: '#333',
  },
  icon: {
    marginLeft: 8,
    color: '#bbb',
  },
});
