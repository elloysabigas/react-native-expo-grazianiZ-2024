import { useState, useEffect, useRef } from "react";
import { SafeAreaView, Image, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import { useRouter } from 'expo-router'; // Hook para navegação

export function Banner() {
  const [page1, setPage1] = useState(0);
  const pagerRef1 = useRef(null); // Referência para o primeiro carrossel
  const router = useRouter(); // Hook para navegação

  const categories = [
    { id: '1', image: require("../../assets/images/folhas.jpg"), title: 'Folhas' },
    { id: '2', image: require("../../assets/images/flores.jpg"), title: 'Flores' },
    { id: '3', image: require("../../assets/images/3.jpg"), title: 'Cacto' },
    { id: '5', image: require("../../assets/images/5.jpg"), title: 'Ervas' },
    { id: '6', image: require("../../assets/images/6.jpg"), title: 'Frutas' },
    { id: '7', image: require("../../assets/images/7.jpg"), title: 'Legumes' },
  ];

  const onPageSelected1 = (e) => {
    setPage1(e.nativeEvent ? e.nativeEvent.position : e);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (page1 + 1) % 3; // Número de páginas (3 banners)
      pagerRef1.current?.setPage(nextPage);
      setPage1(nextPage);
    }, 3000);

    return () => clearInterval(interval);
  }, [page1]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        switch (item.id) {
          case '1':
            router.push('/folha');
            break;
          case '2':
            router.push('/flores');
            break;
          case '3':
            router.push('/cacto');
            break;
          case '5':
            router.push('/ervas');
            break;
          case '6':
            router.push('/frutas');
            break;
          case '7':
            router.push('/legumes');
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={
          <View style={styles.container}>
            <PagerView
              ref={pagerRef1}
              initialPage={0}
              style={styles.content}
              onPageSelected={onPageSelected1}
            >
              <View key="1" style={styles.page}>
                <Image source={require("../../assets/images/banner1.jpg")} style={styles.image2} />
              </View>
              <View key="2" style={styles.page}>
                <Image source={require("../../assets/images/banner2.jpg")} style={styles.image2} />
              </View>
              <View key="3" style={styles.page}>
                <Image source={require("../../assets/images/banners3.jpg")} style={styles.image2} />
              </View>
            </PagerView>

            <View style={styles.bulletContent}>
              {Array.from({ length: 3 }).map((_, index) => (
                <View
                  key={index}
                  style={[styles.bullet, page1 === index && styles.activeBullet]}
                ></View>
              ))}
            </View>
          </View>
        }
        contentContainerStyle={styles.flatListContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    width: "95%",
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 15,
    borderColor: "#ddd",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    backgroundColor: "#fff",
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 20,
  },
  image2: {
    width: 380,
    height: 180,
    borderRadius: 20,
  },
  bulletContent: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 5,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: "#ddd",
    margin: 4,
  },
  activeBullet: {
    backgroundColor: "#778443",
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  flatListContainer: {
    paddingHorizontal: 8,
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
});
