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
            source={require('../../../src/assets/images/cac19.png')}
            style={styles.fullWidthImage}
            resizeMode="cover" // Ajuste para evitar distorções
          />
        </View>
        <Text style={styles.title}>Figueira da Índia</Text>
<Text style={styles.title2}>Figueira da Índia ● Opuntia ficus-indica</Text>

<Text style={styles.aboutTitle}>Sobre</Text>
<Text style={styles.title2}>
A Figueira da Índia é um cacto suculento de origem mexicana que se adapta bem a climas secos e quentes. É conhecida por suas folhas achatadas, chamadas cladódios, e por seus frutos comestíveis chamados "figos da Índia", que são ricos em sabor e nutrientes.
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
      <Text style={styles.itemText2}>Aplique fertilizante para cactos a cada 2 a 3 meses durante a primavera e verão</Text>
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
        O excesso de água pode causar apodrecimento das raízes e o aparecimento de manchas nas folhas. A Figueira da Índia é resistente à seca, mas deve ser regada com moderação.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Certifique-se de que o solo esteja bem drenado e só regue quando a camada superior estiver seca. Evite regar no inverno.</Text>
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
        A falta de luz solar pode fazer com que a planta cresça de forma mais alongada e tenha menor produção de frutos. É essencial que a planta receba luz direta.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Coloque a Figueira da Índia em um local com sol pleno, como uma janela voltada para o exterior ou em um jardim ensolarado.</Text>
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
        A Figueira da Índia necessita de solo bem drenado, preferencialmente uma mistura arenosa. Solos pesados e mal drenados podem causar apodrecimento.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Use uma mistura de terra para cactos ou adicione areia e perlita à terra comum para garantir uma boa drenagem.</Text>
    </View>
  )}
</View>

<Text style={styles.aboutTitle}>Curiosidades</Text>
<View style={styles.imageContainer2}>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Frutos comestíveis</Text>
      <Text style={styles.itemText2}>Os "figos da Índia" são frutos da Figueira da Índia, ricos em fibras, vitaminas e minerais. Eles podem ser consumidos in natura ou em sucos e sobremesas.</Text>
    </View>
  </View>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Utilização</Text>
      <Text style={styles.itemText2}>Além de ser uma planta ornamental, a Figueira da Índia é cultivada para produção de alimentos e até mesmo para uso na medicina tradicional.</Text>
    </View>
  </View>
</View>

<Text style={styles.aboutTitle}>Como plantar</Text>
<Text style={styles.title2}>
Para plantar uma Figueira da Índia, siga os passos abaixo:
</Text>

<Text style={styles.title2}>
1. Escolha um vaso com boa drenagem e um solo arenoso, com mistura de terra para cactos.
</Text>
<Text style={styles.title2}>
2. Plante a Figueira da Índia de forma que as raízes fiquem bem posicionadas e sem compactar o solo.
</Text>
<Text style={styles.title2}>
3. Regue somente quando a camada superior do solo estiver seca. Evite excesso de água.
</Text>
<Text style={styles.title2}>
4. Coloque a planta em um local ensolarado, que receba luz direta por várias horas ao dia.
</Text>
<Text style={styles.title2}>
5. Proteja a planta contra ventos fortes e geadas, se cultivada em regiões com clima mais frio.
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
