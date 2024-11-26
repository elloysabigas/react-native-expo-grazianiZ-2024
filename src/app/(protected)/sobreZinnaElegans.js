import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Stack, useRouter } from 'expo-router'; 

export default function Zinnia() {
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
            source={require('../../../src/assets/images/zina.png')}
            style={styles.fullWidthImage}
            resizeMode="cover" // Ajuste para evitar distorções
          />
        </View>
        <Text style={styles.title}>Zínia Elegans</Text>
        <Text style={styles.title2}>Zínia ● Zinnia elegans</Text>

        <Text style={styles.aboutTitle}>Sobre</Text>
        <Text style={styles.title2}>
          As zínias são plantas anuais que produzem flores vibrantes em cores como vermelho, rosa, laranja e branco. Elas são populares em jardins devido à sua resistência e facilidade de cultivo. As zínias preferem climas quentes e ensolarados e solos bem drenados, sendo ideais para atrair polinizadores como abelhas e borboletas.
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
              <Text style={styles.itemText2}>Sol pleno</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/31.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Água</Text>
              <Text style={styles.itemText2}>3 vezes por semana</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/32.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Transplante</Text>
              <Text style={styles.itemText2}>A cada 1 a 2 anos</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/33.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Fertilização</Text>
              <Text style={styles.itemText2}>Fertilizar mensalmente durante o crescimento</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/34.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Pragas</Text>
              <Text style={styles.itemText2}>Pulgões, ácaros e moscas-brancas</Text>
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
                As folhas amareladas podem ser causadas por excesso de água, deficiência de nutrientes ou doenças fúngicas.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>Garanta que a planta tenha um solo bem drenado, e evite regar excessivamente. Fertilize regularmente e remova folhas mortas ou doentes.</Text>
            </View>
          )}

          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/30.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Crescimento atrofiado</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems2} style={styles.iconButton}>
              <Icon name={showProblems2 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems2 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Sobre</Text>
              <Text style={styles.title2}>
                O crescimento atrofiado pode ser causado pela falta de luz solar ou fertilização inadequada.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>Certifique-se de que a planta está recebendo sol pleno e fertilize regularmente com um fertilizante equilibrado.</Text>
            </View>
          )}

          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/43.jpg')} />
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
                Manchas nas folhas podem ser um sinal de fungos ou doenças fúngicas, especialmente em condições de umidade elevada.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>Remova as folhas afetadas, melhore a circulação de ar ao redor da planta e considere usar fungicidas, se necessário.</Text>
            </View>
          )}
        </View>

        <Text style={styles.aboutTitle}>Curiosidades</Text>
        <View style={styles.imageContainer2}>
          < View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Simbolismo</Text>
              <Text style={styles.itemText2}>A zínia é associada à amizade, carinho e durabilidade, sendo ideal para representar relações duradouras.</Text>
            </View>
          </View>
          <View style={styles.imageItem} >
            <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Flor de corte</Text>
              <Text style={styles.itemText2}>As zínias são amplamente usadas em arranjos florais devido à sua durabilidade e cores vibrantes.</Text>
            </View>
          </View>   
        </View>
        <Text style={styles.aboutTitle}>Como plantar</Text>
        <Text style={styles.title2}>
          Para plantar uma zínia, siga os passos abaixo:
        </Text>

        <Text style={styles.title2}>
          1. Escolha um local com boa drenagem e sol pleno.
        </Text>
        <Text style={styles.title2}>
          2. Use um solo leve, bem drenado e com pH neutro.
        </Text>
        <Text style={styles.title2}>
          3. Plante as sementes ou mudas com espaçamento adequado, pois as zínias podem crescer bastante.
        </Text>
        <Text style={styles.title2}>
          4. Regue moderadamente, mantendo o solo úmido, mas sem encharcar.
        </Text>
        <Text style={styles.title2}>
          5. Fertilize a planta com um fertilizante balanceado para promover o crescimento saudável.
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
    position: 'relative', // Para o ícone de voltar sobrepor a imagem
  },
  iconWrapper: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente para garantir visibilidade
    padding: 10,
    borderRadius: 20,
    marginTop: 30,
  },
  fullWidthImage: {
    width: Dimensions.get('window').width, // Largura total da tela
    height: 300, // Altura fixa
    resizeMode: 'cover', // Ajusta a imagem para preencher sem distorção
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
    marginBottom: 20, // Adicionando o espaçamento inferior
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
