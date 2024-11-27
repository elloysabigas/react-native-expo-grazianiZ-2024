import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Stack, useRouter } from 'expo-router';

export default function Baunilha() {
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
          <TouchableOpacity onPress={() => router.push('/ervas')} style={styles.iconWrapper}>
            <Ionicons name="chevron-back" size={30} color="#fff" />
          </TouchableOpacity>
          <Image
            source={require('../../../src/assets/images/erv18.png')}
            style={styles.fullWidthImage}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.title}>Baunilha</Text>
        <Text style={styles.title2}>Baunilha ● Vanilla planifolia</Text>

        <Text style={styles.aboutTitle}>Sobre</Text>
        <Text style={styles.title2}>
          A baunilha é uma planta tropical de origem mexicana da família Orchidaceae. É famosa por suas vagens,
          que são usadas para extrair um dos sabores mais populares do mundo, utilizado em confeitaria, sorvetes,
          perfumes e cosméticos.
        </Text>

        <Text style={styles.aboutTitle}>Detalhes</Text>
        <View style={styles.imageContainer}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/29.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Temperatura</Text>
              <Text style={styles.itemText2}>20°C - 30°C</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/30.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Luz solar</Text>
              <Text style={styles.itemText2}>Sol indireto</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/31.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Água</Text>
              <Text style={styles.itemText2}>Duas vezes por semana</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/32.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Transplante</Text>
              <Text style={styles.itemText2}>A cada 3 anos</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/33.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Fertilização</Text>
              <Text style={styles.itemText2}>Adicione fertilizante orgânico</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/34.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Pragas</Text>
              <Text style={styles.itemText2}>Pulgões e cochonilhas</Text>
            </View>
          </View>
        </View>

        <Text style={styles.aboutTitle}>Problemas Comuns</Text>
        <View style={styles.imageContainer2}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/42.jpg')} />
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
                Folhas amareladas podem ser um sinal de falta de nutrientes ou excesso de água.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>
                Certifique-se de que a planta está em solo bem drenado e fertilize com nutrientes ricos em potássio e
                nitrogênio.
              </Text>
            </View>
          )}

          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/43.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Crescimento lento</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems2} style={styles.iconButton}>
              <Icon name={showProblems2 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems2 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Sobre</Text>
              <Text style={styles.title2}>
                O crescimento lento pode ser causado por pouca luz ou por um ambiente muito seco.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>
                Aumente a umidade do ambiente com um umidificador e coloque a planta em um local com luz indireta e
                temperatura constante.
              </Text>
            </View>
          )}

          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/44.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Manchas nas folhas</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems3} style={styles.iconButton}>
              <Icon name={showProblems3 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems3 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Sobre</Text>
              <Text style={styles.title2}>
                Manchas podem indicar doenças fúngicas ou presença de pragas.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>
                Use um fungicida natural e inspecione a planta para eliminar pragas como pulgões e cochonilhas.
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.aboutTitle}>Curiosidades</Text>
        <View style={styles.imageContainer2}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/45.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Usos culinários</Text>
              <Text style={styles.itemText2}>
                A baunilha é um dos sabores mais apreciados em sobremesas e bebidas ao redor do mundo.
              </Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/46.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Valor econômico</Text>
              <Text style={styles.itemText2}>
                É uma das especiarias mais caras do mundo devido à complexidade de seu cultivo e processamento.
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.aboutTitle}>Como plantar</Text>
        <Text style={styles.title2}>
          Para cultivar a baunilha, siga estas instruções:
        </Text>
        <Text style={styles.title2}>
          1. Escolha um local quente e úmido, com luz indireta para um crescimento ideal.
        </Text>
        <Text style={styles.title2}>
          2. Plante em solo fértil e bem drenado, adicionando compostos orgânicos para uma melhor nutrição.
        </Text>
        <Text style={styles.title2}>
          3. Regue a planta regularmente, mas evite encharcar o solo para não causar o apodrecimento das raízes.
        </Text>
        <Text style={styles.title2}>
          4. A planta pode ser cultivada em vasos grandes e requer suporte como treliças para crescer corretamente.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  scrollViewContent: {
    paddingHorizontal: 16,
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: 8,
  },
  iconWrapper: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  fullWidthImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#005f56',
    marginBottom: 10,
    marginTop: 10,
  },
  title2: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#005f56',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#005f56',
  },
  itemText2: {
    fontSize: 14,
    color: '#333',
  },
  iconButton: {
    marginLeft: 10,
  },
  problemDetails: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 10,
  },
  imageContainer2: {
    flexDirection: 'column',
  },
});
