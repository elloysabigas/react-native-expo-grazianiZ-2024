import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Stack, useRouter } from 'expo-router'; 

export default function Sunflower() {
  const [showProblems1, setShowProblems1] = useState(false);
  const [showProblems2, setShowProblems2] = useState(false);
  const [showProblems3, setShowProblems3] = useState(false);

  const toggleProblems1 = () => {
    setShowProblems1(!showProblems1);
  };

  const toggleProblems2 = () => {
    setShowProblems2(!showProblems2);
  };

  const toggleProblems3 = () => {
    setShowProblems3(!showProblems3);
  };

  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageWrapper}>
          <TouchableOpacity onPress={() => router.push('/flores')} style={styles.iconWrapper}>
            <Ionicons name="chevron-back" size={30} color="#fff" />
          </TouchableOpacity>
          <Image
            source={require('../../../src/assets/images/girassol.png')} // Imagem da flor de girassol
            style={styles.fullWidthImage}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.title}>Girassol</Text>
        <Text style={styles.title2}>Helianthus annuus</Text>

        <Text style={styles.aboutTitle}>Sobre</Text>
        <Text style={styles.title2}>
          O girassol é uma planta que se destaca por sua grande flor amarela e por seguir o movimento do sol ao longo do dia. É uma flor vibrante e simbólica, representando felicidade, vitalidade e energia positiva. A planta é bastante cultivada tanto por sua beleza quanto pela produção de sementes e óleo.
        </Text>

        <Text style={styles.aboutTitle}>Detalhes</Text>
        <View style={styles.imageContainer}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/29.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Temperatura</Text>
              <Text style={styles.itemText2}>18°C - 25°C</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/30.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Luz solar</Text>
              <Text style={styles.itemText2}>Sol pleno</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/31.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Água</Text>
              <Text style={styles.itemText2}>Moderada</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/32.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Transplante</Text>
              <Text style={styles.itemText2}>A cada 2-3 anos</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/33.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Fertilização</Text>
              <Text style={styles.itemText2}>Na primavera</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/34.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Pragas</Text>
              <Text style={styles.itemText2}>Pulgões, besouros e traças</Text>
            </View>
          </View>
        </View>

        <Text style={styles.aboutTitle}>Problemas Comuns</Text>
        <View style={styles.imageContainer2}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/44.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Folhas amareladas</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems1} style={styles.iconButton}>
              <Icon name={showProblems1 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems1 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Sobre</Text>
              <Text style={styles.title2}>
                O amarelecimento das folhas pode ser causado por excesso de água ou falta de nutrientes.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>Regue moderadamente, evite encharcar o solo e adube a planta com fertilizantes balanceados.</Text>
            </View>
          )}

          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/46.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Folhas murchas</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems2} style={styles.iconButton}>
              <Icon name={showProblems2 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems2 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Sobre</Text>
              <Text style={styles.title2}>
                Folhas murchas podem ser um sinal de falta de água ou exposição excessiva ao calor.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>Verifique a umidade do solo e regue adequadamente. Evite locais com calor excessivo.</Text>
            </View>
          )}

          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/45.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Crescimento lento</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems3} style={styles.iconButton}>
              <Icon name={showProblems3 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems3 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Sobre</Text>
              <Text style={styles.title2}>
                O crescimento lento pode ser causado por falta de luz ou nutrientes no solo.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>Garanta que a planta receba luz solar direta e forneça nutrientes adequados, especialmente durante a primavera.</Text>
            </View>
          )}
        </View>

        <Text style={styles.aboutTitle}>Curiosidades</Text>
        <View style={styles.imageContainer2}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Simbolismo</Text>
              <Text style={styles.itemText2}>O girassol é frequentemente associado ao otimismo, à vitalidade e à busca pela felicidade.</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Sementes</Text>
              <Text style={styles.itemText2}>Além de sua beleza, o girassol é cultivado para produção de sementes e óleo, que são amplamente consumidos.</Text>
            </View>
          </View>
        </View>

        <Text style={styles.aboutTitle}>Como plantar</Text>
        <Text style={styles.title2}>
          1. Escolha um local com sol pleno.
        </Text>
        <Text style={styles.title2}>
          2. Plante as sementes a uma profundidade de 2 a 3 cm.
        </Text>
        <Text style={styles.title2}>
          3. Regue regularmente, mas evite encharcar o solo.
        </Text>
        <Text style={styles.title2}>
          4. Fertilize na primavera com um fertilizante balanceado.
        </Text>
        <Text style={styles.title2}>
          5. Ofereça suporte à planta à medida que ela cresce, pois os girassóis podem se tornar altos e pesados.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  imageWrapper: {
    marginBottom: 20,
    position: 'relative',
  },
  iconWrapper: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
    marginTop: 30,
  },
  fullWidthImage: {
    width: Dimensions.get('window').width,
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    marginHorizontal: 16,
    marginTop: 20,
    color: '#033826',
    fontFamily: 'sourGummy',
  },
  title2: {
    fontSize: 14,
    color: '#558678',
    textAlign: 'justify',
    marginHorizontal: 16,
    padding: 10,
    fontFamily: 'regular',
  },
  aboutTitle: {
    fontSize: 15,
    marginHorizontal: 16,
    marginTop: 20,
    color: '#033826',
    fontFamily: 'sourGummy',
  },
  imageContainer: {
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 16,
  },
  imageContainer2: {
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  imageItem: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 15,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  itemText: {
    fontSize: 14,
    color: '#3c7c6c',
    lineHeight: 20,
    fontFamily: 'bold',
  },
  itemText2: {
    fontSize: 12,
    color: '#777',
    lineHeight: 18,
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  problemDetails: {
    marginTop: 10,
    marginHorizontal: 16,
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#033826',
    padding: 15,
    borderRadius: 30,
    margin: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  addIcon: {
    marginRight: 10,
  },
  addText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
