import { useState, useEffect, useRef } from "react";
import { SafeAreaView, ScrollView, Image, StyleSheet, View, Text } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  const [page1, setPage1] = useState(0);
  const [page2, setPage2] = useState(0);
  const [page3, setPage3] = useState(0);
  const [page4, setPage4] = useState(0);
  const pagerRef1 = useRef(null); // Referência para o primeiro carrossel
  const pagerRef2 = useRef(null); // Referência para o segundo carrossel
  const pagerRef3 = useRef(null); // Referência para o terceiro carrossel
  const pagerRef4 = useRef(null); // Referência para o quarto carrossel

  const onPageSelected1 = (e) => {
    setPage1(e.nativeEvent ? e.nativeEvent.position : e);
  };

  const onPageSelected2 = (e) => {
    setPage2(e.nativeEvent ? e.nativeEvent.position : e);
  };

  const onPageSelected3 = (e) => {
    setPage3(e.nativeEvent ? e.nativeEvent.position : e);
  };

  const onPageSelected4 = (e) => {
    setPage4(e.nativeEvent ? e.nativeEvent.position : e);
  };

  

  // Função para rotação automática do primeiro carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (page1 + 1) % 7; // Número de páginas (7 banners)
      pagerRef1.current?.setPage(nextPage);
      setPage1(nextPage);
    }, 3000);

    return () => clearInterval(interval);
  }, [page1]);

  // Função para rotação automática do segundo carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (page2 + 1) % 7; // Número de páginas (7 banners)
      pagerRef2.current?.setPage(nextPage);
      setPage2(nextPage);
    }, 3000);

    return () => clearInterval(interval);
  }, [page2]);

  // Função para rotação automática do terceiro carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (page3 + 1) % 8; // Número de páginas (8 banners)
      pagerRef3.current?.setPage(nextPage);
      setPage3(nextPage);
    }, 3000);

    return () => clearInterval(interval);
  }, [page3]);

  // Função para rotação automática do quarto carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (page4 + 1) % 12; // Número de páginas (12 banners)
      pagerRef4.current?.setPage(nextPage);
      setPage4(nextPage);
    }, 3000);

    return () => clearInterval(interval);
  }, [page4]);

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
            {/* Adicione os banners do primeiro carrossel */}
            <View key="1" style={styles.page}>
              <Image
                source={require("../../assets/images/hort1.jpg")}
                style={styles.image}
              />
            </View>
            <View key="2" style={styles.page}>
              <Image
                source={require("../../assets/images/hort2.jpg")}
                style={styles.image}
              />
            </View>
            <View key="3" style={styles.page}>
              <Image
                source={require("../../assets/images/hort3.jpg")}
                style={styles.image}
              />
            </View>
            <View key="4" style={styles.page}>
              <Image
                source={require("../../assets/images/hort4.jpg")}
                style={styles.image}
              />
            </View>
            <View key="5" style={styles.page}>
              <Image
                source={require("../../assets/images/hort5.jpg")}
                style={styles.image}
              />
            </View>
            <View key="6" style={styles.page}>
              <Image
                source={require("../../assets/images/hort6.jpg")}
                style={styles.image}
              />
            </View>
          </PagerView>

          {/* Indicadores do primeiro carrossel */}
          <View style={styles.bulletContent}>
            {Array.from({ length: 6 }).map((_, index) => (
              <View
                key={index}
                style={[styles.bullet, page1 === index && styles.activeBullet]}
              ></View>
            ))}
          </View>

          {/* Segundo carrossel */}
          <PagerView
            ref={pagerRef2}
            initialPage={0}
            style={[styles.content, styles.marginTop]}
            onPageSelected={onPageSelected2}
          >
            {/* Adicione os banners do segundo carrossel */}
            <View key="1" style={styles.page}>
              <Image
                source={require("../../assets/images/jard1.jpg")}
                style={styles.image}
              />
            </View>
            <View key="2" style={styles.page}>
              <Image
                source={require("../../assets/images/jard2.jpg")}
                style={styles.image}
              />
            </View>
            <View key="3" style={styles.page}>
              <Image
                source={require("../../assets/images/jard3.jpg")}
                style={styles.image}
              />
            </View>
            <View key="4" style={styles.page}>
              <Image
                source={require("../../assets/images/jard4.jpg")}
                style={styles.image}
              />
            </View>
            <View key="5" style={styles.page}>
              <Image
                source={require("../../assets/images/jard5.jpg")}
                style={styles.image}
              />
            </View>
            <View key="6" style={styles.page}>
              <Image
                source={require("../../assets/images/jard6.jpg")}
                style={styles.image}
              />
            </View>
            
            <View key="7" style={styles.page}>
              <Image
                source={require("../../assets/images/jard7.jpg")}
                style={styles.image}
              />
            </View>
          </PagerView>

          {/* Indicadores do segundo carrossel */}
          <View style={styles.bulletContent}>
            {Array.from({ length: 7 }).map((_, index) => (
              <View
                key={index}
                style={[styles.bullet, page2 === index && styles.activeBullet]}
              ></View>
            ))}
          </View>

          {/* Terceiro carrossel */}
          <PagerView
            ref={pagerRef3}
            initialPage={0}
            style={[styles.content, styles.marginTop]}
            onPageSelected={onPageSelected3}
          >
            {/* Adicione os banners do terceiro carrossel */}
            <View key="1" style={styles.page}>
              <Image
                source={require("../../assets/images/ini1.png")}
                style={styles.image}
              />
            </View>
            <View key="2" style={styles.page}>
              <Image
                source={require("../../assets/images/ini2.png")}
                style={styles.image}
              />
            </View>
            <View key="3" style={styles.page}>
              <Image
                source={require("../../assets/images/ini3.png")}
                style={styles.image}
              />
            </View>
            <View key="4" style={styles.page}>
              <Image
                source={require("../../assets/images/ini4.png")}
                style={styles.image}
              />
            </View>
            <View key="5" style={styles.page}>
              <Image
                source={require("../../assets/images/ini5.png")}
                style={styles.image}
              />
            </View>
            <View key="6" style={styles.page}>
              <Image
                source={require("../../assets/images/ini6.png")}
                style={styles.image}
              />
            </View>
            <View key="7" style={styles.page}>
              <Image
                source={require("../../assets/images/ini7.png")}
                style={styles.image}
              />
            </View>
           
            <View key="8" style={styles.page}>
              <Image
                source={require("../../assets/images/ini8.png")}
                style={styles.image}
              />
            </View>
          </PagerView>

          {/* Indicadores do terceiro carrossel */}
          <View style={styles.bulletContent}>
            {Array.from({ length: 8 }).map((_, index) => (
              <View
                key={index}
                style={[styles.bullet, page3 === index && styles.activeBullet]}
              ></View>
            ))}
          </View>

          {/* Quarto carrossel */}
          <PagerView
            ref={pagerRef4}
            initialPage={0}
            style={[styles.content, styles.marginTop]}
            onPageSelected={onPageSelected4}
          >
            {/* Adicione os banners do quarto carrossel */}
            <View key="1" style={styles.page}>
              <Image
                source={require("../../assets/images/des1.jpg")}
                style={styles.image}
              />
            </View>
            <View key="2" style={styles.page}>
              <Image
                source={require("../../assets/images/des2.jpg")}
                style={styles.image}
              />
            </View>
            <View key="3" style={styles.page}>
              <Image
                source={require("../../assets/images/des3.jpg")}
                style={styles.image}
              />
            </View>
            <View key="4" style={styles.page}>
              <Image
                source={require("../../assets/images/des4.jpg")}
                style={styles.image}
              />
            </View>
            <View key="5" style={styles.page}>
              <Image
                source={require("../../assets/images/des5.jpg")}
                style={styles.image}
              />
            </View>
            <View key="6" style={styles.page}>
              <Image
                source={require("../../assets/images/des6.jpg")}
                style={styles.image}
              />
            </View>
            <View key="7" style={styles.page}>
              <Image
                source={require("../../assets/images/des7.jpg")}
                style={styles.image}
              />
            </View>
            <View key="8" style={styles.page}>
              <Image
                source={require("../../assets/images/des8.jpg")}
                style={styles.image}
              />
            </View>
            <View key="9" style={styles.page}>
              <Image
                source={require("../../assets/images/des9.jpg")}
                style={styles.image}
              />
            </View>
            <View key="10" style={styles.page}>
              <Image
                source={require("../../assets/images/des10.jpg")}
                style={styles.image}
              />
            </View>
            <View key="11" style={styles.page}>
              <Image
                source={require("../../assets/images/des11.jpg")}
                style={styles.image}
              />
            </View>
            <View key="12" style={styles.page}>
              <Image
                source={require("../../assets/images/des12.jpg")}
                style={styles.image}
              />
            </View>
            {/* Continue até o 12º banner */}
            <View key="13" style={styles.page}>
              <Image
                source={require("../../assets/images/des13.jpg")}
                style={styles.image}
              />
            </View>
          </PagerView>

          {/* Indicadores do quarto carrossel */}
          <View style={styles.bulletContent}>
            {Array.from({ length: 13 }).map((_, index) => (
              <View
                key={index}
                style={[styles.bullet, page4 === index && styles.activeBullet]}
              ></View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f4f4f9", // Cor de fundo neutra para contraste
  },
  content: {
    width: "95%", // Um pouco maior para dar mais destaque
    height: 360, // Altura ajustada para um carrossel mais destacado
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
  title: {
    marginTop:30,
    fontSize: 24,
    color: "#005f56",
    fontFamily: 'sourGummy',
    textAlign: 'center',
    marginLeft: 16,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: "90%",
    height: 340,
    resizeMode: "cover",
    borderRadius: 15,
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
    backgroundColor: "#007AFF", // Cor destacada para a página ativa
  },
});  