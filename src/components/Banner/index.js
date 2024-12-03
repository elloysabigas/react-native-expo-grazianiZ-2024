import { useState, useEffect, useRef } from "react";
import { SafeAreaView, ScrollView, Image, StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import { useRouter } from 'expo-router'; // Para navegação

export function Banner() {
  const [page, setPage] = useState(0);
  const pagerRef1 = useRef(null);
  const router = useRouter(); // Hook de navegação

  const onPageSelected1 = (e) => {
    setPage(e.nativeEvent ? e.nativeEvent.position : e);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (page + 1) % 3; // Número de páginas do carrossel
      pagerRef1.current?.setPage(nextPage);
      setPage(nextPage);
    }, 3000);

    return () => clearInterval(interval);
  }, [page]);

  // Dados dos botões
  const categories = [
    { id: '1', image: require('../../assets/images/folhas.jpg'), title: 'Folhas', route: '/folha' },
    { id: '2', image: require('../../assets/images/flores.jpg'), title: 'Flores', route: '/flores' },
    { id: '3', image: require('../../assets/images/3.jpg'), title: 'Cactos', route: '/cactos' },
    { id: '4', image: require('../../assets/images/5.jpg'), title: 'Ervas', route: '/ervas' },
    { id: '5', image: require('../../assets/images/6.jpg'), title: 'frutas', route: '/frutas' },
    { id: '6', image: require('../../assets/images/7.jpg'), title: 'legumes', route: '/legumes' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => router.push(item.route)} // Navega para a rota especificada
    >
      <Image source={item.image} style={styles.buttonImage} />
      
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.container}>
          {/* Primeiro carrossel */}
          <PagerView
            ref={pagerRef1}
            initialPage={0}
            style={styles.content}
            onPageSelected={onPageSelected1}
          >
            <View key="1" style={styles.page}>
              <Image
                source={require("../../assets/images/banner1.png")}
                style={styles.image}
              />
            </View>
            <View key="2" style={styles.page}>
              <Image
                source={require("../../assets/images/banner2.png")}
                style={styles.image}
              />
            </View>
            <View key="3" style={styles.page}>
              <Image
                source={require("../../assets/images/banner3.png")}
                style={styles.image}
              />
            </View>
          </PagerView>

          {/* Indicadores de página do primeiro carrossel */}
          <View style={styles.bulletContent}>
            <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
            <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
            <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
          </View>

          {/* Botões de categorias */}
         
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    zIndex: 10,
    padding: 10,
  },
  content: {
    width: "100%",
    height: 220,
    backgroundColor: "#f5f5f5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  bulletContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#c4c4c4",
    marginHorizontal: 4,
    opacity: 0.6,
  },
  activeBullet: {
    backgroundColor: "#3897f0",
    opacity: 1,
    transform: [{ scale: 1.2 }],
  },
 
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  button: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    margin: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
    marginTop: 50,
    marginBottom: -30,
  },
  buttonImage: {
    width: 160,
    height: 160,
    borderRadius: 10,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
