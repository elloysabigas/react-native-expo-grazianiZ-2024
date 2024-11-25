import { StyleSheet, SafeAreaView, Image, FlatList, TouchableOpacity, Text } from "react-native";
import React from 'react';
import { useRouter } from 'expo-router'; // Importa o hook para navegação

export default function List() {
  const router = useRouter(); // Hook para controle de navegação

  // Dados simulados para os botões com imagens
  const categories = [
    { id: '1', image: require('../../../src/assets/images/folhas.jpg'), title: 'Folhas' },
    { id: '2', image: require('../../../src/assets/images/flores.jpg'), title: 'Flores' },
    { id: '3', image: require('../../../src/assets/images/3.jpg'), title: 'Cacto' },
    { id: '5', image: require('../../../src/assets/images/5.jpg'), title: 'Ervas' },
    { id: '6', image: require('../../../src/assets/images/6.jpg'), title: 'Frutas' },
    { id: '7', image: require('../../../src/assets/images/7.jpg'), title: 'Legumes' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        switch (item.id) {
          case '1':
            router.push('/folha'); // Navega para a página "folha.js"
            break;
          case '2':
            router.push('/flores'); // Navega para a página "flores.js"
            break;
          case '3':
            router.push('/cacto'); // Navega para a página "cacto.js"
            break;
          case '5':
            router.push('/ervas'); // Navega para a página "ervas.js"
            break;
          case '6':
            router.push('/frutas'); // Navega para a página "frutas.js"
            break;
          case '7':
            router.push('/legumes'); // Navega para a página "legumes.js"
            break;
          default:
            break;
        }
      }}
    >
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 24, fontFamily:'regular', marginBottom: 24, color:"#005f56" }}>Categorias</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} // Define que haverá 2 colunas
        columnWrapperStyle={styles.row} // Estilo para as colunas
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
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 20,
  },
});
