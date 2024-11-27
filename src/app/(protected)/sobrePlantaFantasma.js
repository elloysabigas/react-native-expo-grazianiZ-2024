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
            source={require('../../../src/assets/images/cac16.png')}
            style={styles.fullWidthImage}
            resizeMode="cover" // Ajuste para evitar distorções
          />
        </View>
        <Text style={styles.title}>Planta Fantasma</Text>
<Text style={styles.title2}>Planta Fantasma ● Mucuna Pruriens</Text>

<Text style={styles.aboutTitle}>Sobre</Text>
<Text style={styles.title2}>
A Planta Fantasma, conhecida cientificamente como *Mucuna pruriens*, é uma planta tropical perene que cresce em regiões de clima quente e úmido. Ela é famosa por suas vagens peludas e pelos efeitos alucinógenos que suas sementes podem ter, além de sua beleza exótica. As flores da planta são de um tom roxo vibrante e atraem polinizadores como abelhas e borboletas.
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
      <Text style={styles.itemText2}>Sol pleno a sombra parcial</Text>
    </View>
  </View>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/31.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Água</Text>
      <Text style={styles.itemText2}>Regue regularmente, mantendo o solo úmido, mas não encharcado.</Text>
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
      <Text style={styles.itemText2}>Use fertilizante equilibrado a cada 2 meses durante a estação de crescimento.</Text>
    </View>
  </View>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/34.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Pragas</Text>
      <Text style={styles.itemText2}>Ácaros, pulgões, lesmas</Text>
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
        Folhas amareladas podem ser um sinal de rega inadequada, excesso de luz direta ou deficiência de nutrientes.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Mantenha uma rega regular, garantindo que o solo seja bem drenado. Adicione fertilizante apropriado para corrigir deficiências nutricionais.</Text>
    </View>
  )}

  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/30.jpg')} />
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
        O crescimento lento pode ser causado por falta de luz suficiente ou pela ausência de fertilização.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Coloque a planta em um local com boa iluminação e fertilize durante a estação de crescimento para estimular o desenvolvimento.</Text>
    </View>
  )}

  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/43.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Folhas secas</Text>
    </View>
    <TouchableOpacity onPress={toggleProblems3} style={styles.iconButton}>
      <Icon name={showProblems3 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
    </TouchableOpacity>
  </View>
  {showProblems3 && (
    <View style={styles.problemDetails}>
      <Text style={styles.aboutTitle}>Sobre</Text>
      <Text style={styles.title2}>
        Folhas secas podem indicar desidratação ou exposição excessiva ao sol.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Aumente a umidade ao redor da planta e ajuste a exposição ao sol para evitar danos.</Text>
    </View>
  )}
</View>

<Text style={styles.aboutTitle}>Curiosidades</Text>
<View style={styles.imageContainer2}>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Uso medicinal</Text>
      <Text style={styles.itemText2}>As sementes da planta são usadas tradicionalmente para tratar doenças neuromusculares e como tônico natural.</Text>
    </View>
  </View>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Nome curioso</Text>
      <Text style={styles.itemText2}>O nome "Planta Fantasma" vem das suas características misteriosas e do efeito das sementes, que podem causar alucinações.</Text>
    </View>
  </View>
</View>

<Text style={styles.aboutTitle}>Como plantar</Text>
<Text style={styles.title2}>
Para plantar a Planta Fantasma, siga os passos abaixo:
</Text>

<Text style={styles.title2}>
1. Escolha um vaso grande e espaçoso, pois a planta pode se espalhar rapidamente.
</Text>
<Text style={styles.title2}>
2. Use um solo bem drenado, preferencialmente com mistura de terra para vasos e perlita ou areia.
</Text>
<Text style={styles.title2}>
3. Regue com frequência para manter o solo úmido, mas sem encharcar.
</Text>
<Text style={styles.title2}>
4. Plante em um local com luz indireta a direta, garantindo que a planta receba pelo menos 6 horas de luz solar diária.
</Text>
<Text style={styles.title2}>
5. Mantenha a temperatura acima de 15°C e proteja a planta de geadas e ventos frios.
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
