import { Stack, useRouter } from 'expo-router'; 
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import React, { useState } from 'react'; 

export default function Flores() {
  const [text, setText] = useState(''); 
  const router = useRouter(); 

  // Função para normalizar texto (remove acentos)
  const normalizeText = (text) =>
    text.normalize('NFD').replace(/[̀-ͯ]/g, "");

  // Lista de categorias com imagem e título
  const categories = [
    { id: '1', image: require('../../../src/assets/images/leg1.png'), title: 'Abóbora' },
    { id: '2', image: require('../../../src/assets/images/leg2.png'), title: 'Abobrinha' },
    { id: '3', image: require('../../../src/assets/images/leg3.png'), title: 'Repolho' },
    { id: '4', image: require('../../../src/assets/images/leg4.png'), title: 'Agrião' },
    { id: '5', image: require('../../../src/assets/images/leg5.png'), title: 'Salsão' },
    { id: '6', image: require('../../../src/assets/images/leg6.png'), title: 'Alface' },
    { id: '7', image: require('../../../src/assets/images/leg7.png'), title: 'Alho' },
    { id: '8', image: require('../../../src/assets/images/leg8.png'), title: 'Almeirão' },
    { id: '9', image: require('../../../src/assets/images/leg9.png'), title: 'Berinjela' },
    { id: '10', image: require('../../../src/assets/images/leg10.png'), title: 'Alcachofra' },
  ];
  

  // Filtrar categorias com base no texto de pesquisa
  const filteredCategories = categories.filter((category) =>
    normalizeText(category.title.toLowerCase()).includes(normalizeText(text.toLowerCase()))
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
  style={styles.button}
  onPress={() => {
    switch (item.title) {
      case 'Abóbora':
            router.push('/sobreAbobora');
            break;
          case 'Abobrinha':
            router.push('/sobreAbobrinha');
            break;
          case 'Repolho':
            router.push('/sobreRepolho');
            break;
          case 'Agrião':
            router.push('/sobreAgriao');
            break;
          case 'Salsão':
            router.push('/sobreSalsao');
            break;
          case 'Alface':
            router.push('/sobreAlface');
            break;
          case 'Alho':
            router.push('/sobreAlho');
            break;
          case 'Almeirão':
            router.push('/sobreAlmeirao');
            break;
          case 'Berinjela':
            router.push('/sobreBerinjela');
            break;
          case 'Alcachofra':
            router.push('/sobreAlcachofra');
            break;
  
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
    marginTop: 50,
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
