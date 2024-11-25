import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Stack, useRouter } from 'expo-router'; 

export default function Croton() {
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
          <TouchableOpacity onPress={() => router.push('/folha')} style={styles.iconWrapper}>
            <Ionicons name="chevron-back" size={30} color="#fff" />
          </TouchableOpacity>
          <Image
            source={require('../../../src/assets/images/croton.png')}
            style={styles.fullWidthImage}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.title}>Cróton</Text>
        <Text style={styles.title2}>Cróton ● Codiaeum variegatum</Text>

        <Text style={styles.aboutTitle}>Sobre</Text>
        <Text style={styles.title2}>
          O cróton é uma planta ornamental popular devido à variedade de cores vibrantes de suas folhas, que vão do verde ao vermelho, amarelo e laranja. Nativo do Sudeste Asiático, ele é cultivado como planta de interior ou em jardins tropicais. O cróton requer luz abundante para manter suas cores vibrantes e prefere ambientes quentes e úmidos. É conhecido por ser levemente tóxico se ingerido, portanto, deve ser mantido fora do alcance de crianças e animais de estimação.
        </Text>

        <Text style={styles.aboutTitle}>Detalhes</Text>
        <View style={styles.imageContainer}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/29.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Temperatura</Text>
              <Text style={styles.itemText2}>18°C - 30°C</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/30.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Luz solar</Text>
              <Text style={styles.itemText2}>Luz direta ou intensa</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/31.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Água</Text>
              <Text style={styles.itemText2}>1-2 vezes por semana</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/32.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Transplante</Text>
              <Text style={styles.itemText2}>A cada 2 anos</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/33.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Fertilização</Text>
              <Text style={styles.itemText2}>Fertilizante líquido a cada 2 meses</Text>
            </View>
          </View>
        </View>

        <Text style={styles.aboutTitle}>Problemas Comuns</Text>
        <View style={styles.imageContainer2}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/45.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Perda de folhas</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems1} style={styles.iconButton}>
              <Icon name={showProblems1 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems1 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Sobre</Text>
              <Text style={styles.title2}>
                A perda de folhas pode ser causada por mudanças de temperatura, correntes de ar ou baixa umidade.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>
                Mantenha o cróton em um local com temperatura estável e alta umidade. Evite expô-lo a correntes de ar.
              </Text>
            </View>
          )}

          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/44.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Folhas desbotadas</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems2} style={styles.iconButton}>
              <Icon name={showProblems2 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems2 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Sobre</Text>
              <Text style={styles.title2}>
                A falta de luz pode fazer com que as folhas do cróton percam sua coloração vibrante.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>
                Coloque a planta em um local onde receba luz direta ou intensa durante várias horas do dia.
              </Text>
            </View>
          )}

          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/46.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Raízes apodrecendo</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems3} style={styles.iconButton}>
              <Icon name={showProblems3 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems3 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Sobre</Text>
              <Text style={styles.title2}>
                O excesso de água pode causar o apodrecimento das raízes.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>
                Certifique-se de usar um vaso com boa drenagem e regue somente quando o solo estiver seco na superfície.
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.aboutTitle}>Como plantar</Text>
        <Text style={styles.title2}>
          1. Escolha um vaso com boa drenagem. {'\n'}
          2. Use um solo leve e rico em matéria orgânica. {'\n'}
          3. Plante o cróton no centro, com as raízes cobertas, mas sem apertar o solo. {'\n'}
          4. Regue após o plantio e mantenha em local com boa iluminação.
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