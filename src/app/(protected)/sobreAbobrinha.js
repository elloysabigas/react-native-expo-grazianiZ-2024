import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Stack, useRouter } from 'expo-router'; 

export default function Abobora() {
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
          <TouchableOpacity onPress={() => router.push('/legumes')} style={styles.iconWrapper}>
            <Ionicons name="chevron-back" size={30} color="#fff" />
          </TouchableOpacity>
          <Image
            source={require('../../../src/assets/images/abo.png')} // Manter a imagem da página
            style={styles.fullWidthImage}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.title}>Abobrinha</Text>
        <Text style={styles.title2}>Abobrinha ● Cucurbita pepo</Text>

        <Text style={styles.aboutTitle}>Sobre</Text>
        <Text style={styles.title2}>
          A abobrinha é um vegetal de rápido crescimento pertencente à família Cucurbitaceae. É valorizada por seu sabor suave e versatilidade na culinária, sendo usada em refogados, sopas, saladas e até em massas. Rica em fibras e vitaminas, a abobrinha contribui para uma alimentação equilibrada.
        </Text>

        <Text style={styles.aboutTitle}>Detalhes</Text>
        <View style={styles.imageContainer}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/29.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Temperatura</Text>
              <Text style={styles.itemText2}>15°C - 25°C</Text>
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
              <Text style={styles.itemText2}>Regar moderadamente</Text>
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
              <Text style={styles.itemText2}>Adicione fertilizante equilibrado uma vez por mês</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/34.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Pragas</Text>
              <Text style={styles.itemText2}>Pulgões e caramujos</Text>
            </View>
          </View>
        </View>

        <Text style={styles.aboutTitle}>Problemas Comuns</Text>
        <View style={styles.imageContainer2}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/42.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Excesso de água</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems1} style={styles.iconButton}>
              <Icon name={showProblems1 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems1 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Sobre</Text>
              <Text style={styles.title2}>
                O excesso de água pode levar ao apodrecimento das raízes e ao desenvolvimento de doenças fúngicas.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>Deixe o solo secar entre as regas e garanta uma boa drenagem.</Text>
            </View>
          )}

          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/30.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Falta de luz</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems2} style={styles.iconButton}>
              <Icon name={showProblems2 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems2 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Sobre</Text>
              <Text style={styles.title2}>
                A abóbora necessita de luz solar direta para se desenvolver de maneira adequada. A falta de luz pode reduzir o crescimento e a qualidade do fruto.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>Posicione a planta em um local com exposição solar de pelo menos 6 horas diárias.</Text>
            </View>
          )}

          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/43.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Solo ácido</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems3} style={styles.iconButton}>
              <Icon name={showProblems3 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems3 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Sobre</Text>
              <Text style={styles.title2}>
                O solo muito ácido pode dificultar a absorção de nutrientes e afetar o crescimento da planta.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>Use um solo com pH entre 6.0 e 7.0 para melhores resultados.</Text>
            </View>
          )}
        </View>

        <Text style={styles.aboutTitle}>Curiosidades</Text>
        <View style={styles.imageContainer2}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Usos culinários</Text>
              <Text style={styles.itemText2}>Muito utilizada em massas, sopas e até recheios.</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Propriedades medicinais</Text>
              <Text style={styles.itemText2}>Rica em antioxidantes e nutrientes, a abobrinha é ótima para a saúde do coração.</Text>
            </View>
          </View>   
        </View>

        <Text style={styles.aboutTitle}>Como plantar</Text>
        <Text style={styles.title2}>
          Para plantar a abóbora, inicie com sementes de abobrinha ou mudas. Plante-as em um solo bem drenado, em um local que receba luz solar direta. Mantenha o solo úmido, mas evite excesso de água para prevenir doenças.
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
  