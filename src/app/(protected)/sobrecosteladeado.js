import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Stack, useRouter } from 'expo-router'; 

export default function CostelaDeAdao() {
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
            source={require('../../../src/assets/images/costela.png')}
            style={styles.fullWidthImage}
            resizeMode="cover" // Ajuste para evitar distorções
          />
        </View>
        <Text style={styles.title}>Costela de Adão</Text>
        <Text style={styles.title2}>Costela de Adão ● Monstera Deliciosa</Text>

        <Text style={styles.aboutTitle}>Sobre</Text>
        <Text style={styles.title2}>
          A costela de adão, também conhecida como monstera deliciosa, é uma planta tropical da família Araceae. Ela é famosa pelas suas folhas grandes e recortadas, que podem atingir até 90 cm de comprimento. Essa planta é ideal para ambientes internos e é muito popular devido ao seu visual exótico e à sua facilidade de cuidado.
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
              <Text style={styles.itemText2}>Luz Indireta</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/31.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Água</Text>
              <Text style={styles.itemText2}>Uma vez por semana</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/32.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Transplante</Text>
              <Text style={styles.itemText2}>A cada 12 meses</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/33.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Fertilização</Text>
              <Text style={styles.itemText2}>Aplique Fertilização Líquida a cada 2 meses</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/34.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Pragas</Text>
              <Text style={styles.itemText2}>Cochonilhas e Ácaros</Text>
            </View>
          </View>
        </View>

        <Text style={styles.aboutTitle}>Problemas Comuns</Text>
        <View style={styles.imageContainer2}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/44.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Folhas amareladas:</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems1} style={styles.iconButton}>
              <Icon name={showProblems1 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems1 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Causa</Text>
              <Text style={styles.title2}>
              Excesso ou falta de água, drenagem inadequada ou falta de nutrientes.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>Ajustar a rega e garantir que o solo tenha boa drenagem. Fertilize conforme necessário.</Text>
            </View>
          )}

          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/45.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Folhas sem furos ou menores</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems2} style={styles.iconButton}>
              <Icon name={showProblems2 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
            </View>
          {showProblems2 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Causa</Text>
              <Text style={styles.title2}>
              Falta de luz suficiente.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>Mover a planta para um local com luz indireta brilhante.</Text>
            </View>
          )}

          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/46.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Manchas marrons ou pontas secas nas folhas</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems3} style={styles.iconButton}>
              <Icon name={showProblems3 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems3 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Causa</Text>
              <Text style={styles.title2}>
              Desidratação, rega irregular ou exposição direta ao sol.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>Ajustar a rega para manter o solo levemente úmido e evitar luz solar direta.</Text>
            </View>
          )}
        </View>

        <Text style={styles.aboutTitle}>Curiosidades</Text>
        <View style={styles.imageContainer2}>
          < View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Purifica o ar</Text>
              <Text style={styles.itemText2}>A Costela de Adão é uma planta que ajuda a filtrar toxinas do ambiente, como o formaldeído, contribuindo para melhorar a qualidade do ar dentro de casa.</Text>
            </View>
          </View>
          <View style={styles.imageItem} >
            <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>As folhas "rasgadas" têm função natural</Text>
              <Text style={styles.itemText2}>Os buracos característicos nas folhas não são apenas decorativos. Na natureza, eles ajudam a planta a resistir a ventos fortes e permitem que a luz passe para as folhas inferiores, otimizando a fotossíntese.</Text>
            </View>
          </View>   
        </View>
        <Text style={styles.aboutTitle}>Como plantar</Text>
        <Text style={styles.title2}>
          Para plantar uma costela de adão, escolha um vaso grande com boa drenagem e use terra rica em nutrientes. A planta deve ser mantida em um local com luz indireta e temperatura entre 20°C e 30°C. Regue regularmente, mas sem encharcar o solo.
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
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginTop: 20,
        color: '#033826',
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
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginTop: 20,
        color: '#033826',
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