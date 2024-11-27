import { useState, useEffect, useRef } from "react";
import { Image, StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  const [page, setPage] = useState(0);
  const [page2, setPage2] = useState(0);
  const pagerRef1 = useRef(null); // Referência para o primeiro PagerView
  const pagerRef2 = useRef(null); // Referência para o segundo PagerView

  const onPageSelected1 = (e) => {
    setPage(e.nativeEvent ? e.nativeEvent.position : e);
  };

  const onPageSelected2 = (e) => {
    setPage2(e.nativeEvent ? e.nativeEvent.position : e);
  };

  // Função para rotação automática do primeiro carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (page + 1) % 3; // Número de páginas do primeiro carrossel
      pagerRef1.current?.setPage(nextPage);
      setPage(nextPage);
    }, 3000);

    return () => clearInterval(interval);
  }, [page]);

  // Função para rotação automática do segundo carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (page2 + 1) % 3; // Número de páginas do segundo carrossel
      pagerRef2.current?.setPage(nextPage);
      setPage2(nextPage);
    }, 3000);

    return () => clearInterval(interval);
  }, [page2]);

  return (
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

      {/* Segundo carrossel */}
      <PagerView
        ref={pagerRef2}
        initialPage={0}
        style={styles.content}
        onPageSelected={onPageSelected2}
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

      {/* Indicadores de página do segundo carrossel */}
      <View style={styles.bulletContent}>
        <View style={[styles.bullet, page2 === 0 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page2 === 1 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page2 === 2 && styles.activeBullet]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    zIndex: 10,
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
    marginBottom: 20, // Espaçamento entre os carrosséis
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
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#d3d3d3",
    marginHorizontal: 6,
    opacity: 0.8,
    transform: [{ scale: 1 }],
  },
  activeBullet: {
    backgroundColor: "#98c58a",
    opacity: 1,
    transform: [{ scale: 1.3 }],
  },
});
