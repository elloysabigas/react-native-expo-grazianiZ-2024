import { useState, useEffect, useRef } from "react";
import { Image, StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  const [page, setPage] = useState(0);
  const pagerRef = useRef(null); // Referência para o PagerView

  // Função chamada ao mudar a página manualmente ou automaticamente
  const onPageSelected = (e) => {
    setPage(e.nativeEvent ? e.nativeEvent.position : e);
  };

  // Roda automaticamente o banner
  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (page + 1) % 3; // Total de páginas: 3
      pagerRef.current?.setPage(nextPage); // Atualiza para a próxima página
      setPage(nextPage);
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [page]);

  return (
    <View style={styles.container}>
      {/* PagerView com imagens */}
      <PagerView
        ref={pagerRef}
        initialPage={0}
        style={styles.content}
        onPageSelected={onPageSelected}
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

      {/* Indicadores de página */}
      <View style={styles.bulletContent}>
        <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute", // Fixa o banner no topo
    top: 0, // Alinha no topo
    zIndex: 10, // Garante que fique acima de outros elementos
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
