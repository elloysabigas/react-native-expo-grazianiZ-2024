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
          <TouchableOpacity onPress={() => router.push('/cacto')} style={styles.iconWrapper}>
            <Ionicons name="chevron-back" size={30} color="#fff" />
          </TouchableOpacity>
          <Image
            source={require('../../../src/assets/images/cac18.png')}
            style={styles.fullWidthImage}
            resizeMode="cover" // Ajuste para evitar distorções
          />
        </View>
        <Text style={styles.title}>Echinocactus grusonii</Text>
<Text style={styles.title2}>Echinocactus grusonii ● Cacto</Text>

<Text style={styles.aboutTitle}>Sobre</Text>
<Text style={styles.title2}>
O Echinocactus grusonii, popularmente conhecido como "Cacto-bola" ou "Cacto de ouro", é uma planta suculenta de forma esférica com espinhos dourados que são uma característica marcante. Este cacto é originário do México e é ideal para decoração de jardins secos, paisagismo de áreas externas e cultivo em vasos internos.
</Text>

<Text style={styles.aboutTitle}>Detalhes</Text>
<View style={styles.imageContainer}>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/29.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Temperatura</Text>
      <Text style={styles.itemText2}>20°C - 35°C</Text>
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
      <Text style={styles.itemText2}>A cada 2 a 3 semanas</Text>
    </View>
  </View>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/32.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Transplante</Text>
      <Text style={styles.itemText2}>A cada 3 a 5 anos</Text>
    </View>
  </View>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/33.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Fertilização</Text>
      <Text style={styles.itemText2}>Aplique fertilizante específico para cactos a cada 4 a 6 semanas durante a primavera e verão</Text>
    </View>
  </View>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/34.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Pragas</Text>
      <Text style={styles.itemText2}>Cochonilhas, pulgões</Text>
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
        O excesso de água pode causar o apodrecimento das raízes e o murchamento do cacto. É importante evitar regas em excesso, especialmente durante o inverno.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Deixe o solo secar completamente entre as regas e regue apenas quando o solo estiver completamente seco. Use um vaso com boa drenagem.</Text>
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
        A falta de luz pode fazer com que o cacto perca sua cor vibrante e fique mais alongado. Isso indica que a planta está em busca de luz.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Posicione o cacto em um local que receba luz solar direta por pelo menos 6 horas por dia. Um ambiente externo ou uma janela voltada para o sol é ideal.</Text>
    </View>
  )}

  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/43.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Solo inadequado</Text>
    </View>
    <TouchableOpacity onPress={toggleProblems3} style={styles.iconButton}>
      <Icon name={showProblems3 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
    </TouchableOpacity>
  </View>
  {showProblems3 && (
    <View style={styles.problemDetails}>
      <Text style={styles.aboutTitle}>Sobre</Text>
      <Text style={styles.title2}>
        O Echinocactus grusonii prefere um solo arenoso e bem drenado. Solos pesados ou com pouca drenagem podem reter água e causar apodrecimento.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Use uma mistura específica para cactos e suculentas, que contenha areia grossa e perlite para garantir boa drenagem.</Text>
    </View>
  )}
</View>

<Text style={styles.aboutTitle}>Curiosidades</Text>
<View style={styles.imageContainer2}>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Popularidade</Text>
      <Text style={styles.itemText2}>O Echinocactus grusonii é uma planta popular em jardins de cactos devido à sua aparência impressionante e fácil cuidado.</Text>
    </View>
  </View>   
</View>

<Text style={styles.aboutTitle}>Como plantar</Text>
<Text style={styles.title2}>
Para plantar o Echinocactus grusonii, siga os passos abaixo:
</Text>

<Text style={styles.title2}>
1. Escolha um vaso com boa drenagem e um substrato específico para cactos.
</Text>
<Text style={styles.title2}>
2. Plante o cacto de forma que as raízes fiquem bem posicionadas, sem compactar o solo.
</Text>
<Text style={styles.title2}>
3. Regue a planta apenas quando o solo estiver completamente seco.
</Text>
<Text style={styles.title2}>
4. Coloque o cacto em um local que receba luz solar direta por várias horas ao dia.
</Text>
<Text style={styles.title2}>
5. Evite umidade excessiva para evitar apodrecimento.
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
