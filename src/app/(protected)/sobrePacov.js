import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Stack, useRouter } from 'expo-router'; 

export default function Pacova() {
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
            source={require('../../../src/assets/images/pacova.png')} // Certifique-se de que a imagem está no caminho correto
            style={styles.fullWidthImage}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.title}>Pacová</Text>
        <Text style={styles.title2}>Philodendron martianum ● Planta Brasileira</Text>

        <Text style={styles.aboutTitle}>Sobre</Text>
        <Text style={styles.title2}>
          O Pacová, conhecido pelo seu nome científico Philodendron martianum, é uma planta ornamental brasileira. 
          Suas folhas largas e brilhantes são características marcantes, sendo ideal para compor ambientes internos 
          com um toque tropical.
        </Text>

        <Text style={styles.aboutTitle}>Detalhes</Text>
        <View style={styles.imageContainer}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/29.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Temperatura</Text>
              <Text style={styles.itemText2}>20°C - 28°C</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/30.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Luz solar</Text>
              <Text style={styles.itemText2}>Luz Difusa</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/31.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Água</Text>
              <Text style={styles.itemText2}>Solo levemente úmido</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/32.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Transplante</Text>
              <Text style={styles.itemText2}>A cada 1-2 anos</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/33.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Fertilização</Text>
              <Text style={styles.itemText2}>A cada 2 meses</Text>
            </View>
          </View>
        </View>

        <Text style={styles.aboutTitle}>Problemas Comuns</Text>
        <View style={styles.imageContainer2}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/a.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Folhas murchas</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems1} style={styles.iconButton}>
              <Icon name={showProblems1 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems1 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Causa</Text>
              <Text style={styles.title2}>
                Falta de água ou umidade baixa.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>
                Aumente a rega e umedeça o ambiente.
              </Text>
            </View>
          )}

          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/b.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Folhas queimadas</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems2} style={styles.iconButton}>
              <Icon name={showProblems2 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems2 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Causa</Text>
              <Text style={styles.title2}>
                Exposição ao sol direto.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>
                Mantenha em locais com luz difusa.
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.aboutTitle}>Curiosidades</Text>
        <View style={styles.imageContainer2}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Baixa manutenção</Text>
              <Text style={styles.itemText2}>
                Ideal para iniciantes, exige cuidados simples.
              </Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Nativa do Brasil</Text>
              <Text style={styles.itemText2}>
                Presente em florestas tropicais e úmidas.
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.aboutTitle}>Como plantar</Text>
        <Text style={styles.title2}>
          Plante em solo fértil com boa drenagem. Mantenha a planta em ambientes úmidos e com luz indireta.
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
