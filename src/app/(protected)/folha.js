import { Stack, useRouter } from 'expo-router'; 
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import React, { useState } from 'react'; 

export default function Flores() {
  const [text, setText] = useState(''); 
  const router = useRouter(); 

  // Lista de categorias com imagem e título
  const categories = [
    { id: '1', image: require('../../../src/assets/images/9.jpg'), title: 'Samambaia' },
    { id: '2', image: require('../../../src/assets/images/10.jpg'), title: 'Costela de Adão' },
    { id: '3', image: require('../../../src/assets/images/11.jpg'), title: 'Alocasia Wentii' },
    { id: '4', image: require('../../../src/assets/images/12.jpg'), title: 'Pacová' },
    { id: '5', image: require('../../../src/assets/images/13.jpg'), title: 'Cróton' },
    { id: '6', image: require('../../../src/assets/images/14.jpg'), title: 'Maranta Tricolor' },
    { id: '7', image: require('../../../src/assets/images/15.jpg'), title: 'Zamiculca' },
    { id: '8', image: require('../../../src/assets/images/16.jpg'), title: 'Bromélia' },
    { id: '9', image: require('../../../src/assets/images/17.jpg'), title: 'Copo-de-Leite' },
    { id: '10', image: require('../../../src/assets/images/18.jpg'), title: 'Antúrio' },
  ];

  // Filtrar categorias com base no texto de pesquisa
  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(text.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        if (item.title === 'Samambaia') {
          router.push('/sobresamambaia'); // Redireciona para a página "sobresamambaia"
        } else if (item.title === 'Costela de Adão') {
          router.push('/sobrecosteladeado'); // Redireciona para a página "sobrecosteladeadao"
        } else if (item.title === 'Alocasia Wentii') {
          router.push('/sobreAlocasiaWentii'); // Redireciona para a página "sobreAlocasiaWentii"
        } else if (item.title === 'Pacov') {
          router.push('/sobrePacov'); // Redireciona para a página "sobreAlocasiaWentii"
        } else if (item.title === 'Cróton') {
          router.push('/sobreCroton'); // Redireciona para a página "sobreAlocasiaWentii"
        } else if (item.title === 'Maranta Tricolor') {
          router.push('/sobreMarantaTricolor'); // Redireciona para a página "sobreAlocasiaWentii"
        } else if (item.title === 'Zamiculca') {
          router.push('/sobreZamiculca'); // Redireciona para a página "sobreAlocasiaWentii"
        } else if (item.title === 'Bromélia') {
          router.push('/sobreBromélia'); // Redireciona para a página "sobreAlocasiaWentii"
        } else if (item.title === 'Copo-de-Leite') {
          router.push('/sobreCopo-de-Leite'); // Redireciona para a página "sobreAlocasiaWentii"
        } else if (item.title === 'Antúrio') {
          router.push('/sobreAntúrio'); // Redireciona para a página "sobreAlocasiaWentii"
        } else {
          router.push(`/planta/${item.id}`);
        }
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
          <Ionicons name="chevron-back" size={24} color="#005f56" style={{ marginLeft: 8 }} />
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

      {/* FlatList para renderizar os botões filtrados */}
      <FlatList
        data={filteredCategories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Nenhuma planta encontrada</Text>
        )}
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
    fontSize: 24,
    color: "#005f56",
    fontFamily: 'sourGummy',
    textAlign: 'center',
    marginLeft: 16,
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
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '100%',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    marginLeft: 8,
    color: '#bbb',
  },
  button: {
    fontFamily: 'sourGummy',
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 8,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    height: 120,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#005f56',
    fontFamily: 'regular',
    textAlign: 'left',
  },
  emptyText: {
    textAlign: 'center',
    color: '#777',
    marginTop: 20,
  },
});
