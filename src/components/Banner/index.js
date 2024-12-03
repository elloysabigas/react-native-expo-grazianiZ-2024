import { useState, useEffect, useRef } from "react";
import { SafeAreaView, Image, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import { useRouter } from 'expo-router';

export function Banner() {
  const [page, setPage] = useState(0);
  const pagerRef1 = useRef(null);
  const router = useRouter();

  // Função para selecionar uma nova página
  const onPageSelected1 = (e) => {
    setPage(e.nativeEvent.position);
  };

  // UseEffect para iniciar a rolagem automática
  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (page + 1) % 3; // 3 banners, então o próximo será no índice 0
      pagerRef1.current?.setPage(nextPage); // Atualiza o PagerView
    }, 3000); // Intervalo de 3 segundos para rolar para o próximo banner

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []); // Agora o intervalo só é configurado uma vez no início, sem depender do 'page'

  const categories = [
    { id: '1', image: require('../../assets/images/folhas.jpg'), title: 'Folhas', route: '/folha' },
    { id: '2', image: require('../../assets/images/flores.jpg'), title: 'Flores', route: '/flores' },
    { id: '3', image: require('../../assets/images/3.jpg'), title: 'Cactos', route: '/cactos' },
    { id: '4', image: require('../../assets/images/5.jpg'), title: 'Ervas', route: '/ervas' },
    { id: '5', image: require('../../assets/images/6.jpg'), title: 'Frutas', route: '/frutas' },
    { id: '6', image: require('../../assets/images/7.jpg'), title: 'Legumes', route: '/legumes' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => router.push(item.route)}
    >
      <Image source={item.image} style={styles.buttonImage} />
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.bannerContainer}>
      <PagerView
        ref={pagerRef1}
        initialPage={0}
        style={styles.content}
        onPageSelected={onPageSelected1}
        scrollEnabled={true}  // Habilita o deslize manual
      >
        <View key="banner1" style={styles.page}>
          <Image source={require("../../assets/images/banner1.jpg")} style={styles.image} />
        </View>
        <View key="banner2" style={styles.page}>
          <Image source={require("../../assets/images/banner2.jpg")} style={styles.image} />
        </View>
        <View key="banner3" style={styles.page}>
          <Image source={require("../../assets/images/banners3.jpg")} style={styles.image} />
        </View>
      </PagerView>
      <View style={styles.bulletContent}>
        <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    width: "100%",
    paddingTop: 20,
    marginBottom: 20,
  },
  content: {
    width: "100%",
    height: 220, // Altura do banner ajustada
    backgroundColor: "#f5f5f5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%", // Garante que cada página ocupe toda a largura disponível
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
    marginTop: 20,
    marginBottom: -30,
  },
  buttonImage: {
    width: 160,
    height: 160,
    borderRadius: 10,
  },
});
