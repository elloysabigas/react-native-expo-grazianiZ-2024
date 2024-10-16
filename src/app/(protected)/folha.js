import { Stack, useRouter } from 'expo-router'; 
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import React, { useState } from 'react'; 

export default function Flores() {
  const [text, setText] = useState(''); 
  const router = useRouter(); 

  // Lista de categorias com imagem e título
  const categories = [
    { id: '1', image: require('../../../src/assets/images/samambaia.png'), title: 'Samambaia' },
    { id: '2', image: require('../../../src/assets/images/costela.jpg'), title: 'Costela de Adão' },
    { id: '3', image: require('../../../src/assets/images/samambaia.png'), title: 'Tulipa' },
    { id: '4', image: require('../../../src/assets/images/samambaia.png'), title: 'Girassol' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        // Defina a navegação para as páginas específicas de cada planta
        router.push(`/planta/${item.id}`);
      }}
    >
      <View style={styles.buttonContent}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.buttonText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/cuidados')}>
          <Ionicons name="chevron-back" size={24} color="#005f56" style={{marginLeft:8}} />
        </TouchableOpacity>
        <Text style={styles.title}>Plantas de Folha</Text>
      </View>

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

      {/* FlatList para renderizar os botões */}
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1} // Exibe um item por linha (uma coluna)
      />
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
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: "#005f56",
    fontFamily: 'regular',
    textAlign: 'center',
    marginLeft: 20,
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
  button: {
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    height: 180,
  },
  buttonContent: {
    flexDirection: 'row', // Alinha a imagem e o texto na horizontal
    alignItems: 'center', // Alinha o conteúdo no centro verticalmente
  },
  image: {
    width: 150,  // Tamanho ajustado da imagem
    height: 150, // Tamanho ajustado da imagem
    marginRight: 20, // Espaço entre a imagem e o texto
  },
  buttonText: {
    fontSize: 16,
    color: '#005f56',
    fontFamily: 'regular',
    textAlign: 'left', // Alinha o texto à esquerda
  },
});
