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
            source={require('../../../src/assets/images/cac20.png')}
            style={styles.fullWidthImage}
            resizeMode="cover" // Ajuste para evitar distorções
          />
        </View>
        <Text style={styles.title}>Sedum Morganianum 'Burrito'</Text>
<Text style={styles.title2}>Sedum Morganianum 'Burrito' ● Planta suculenta</Text>

<Text style={styles.aboutTitle}>Sobre</Text>
<Text style={styles.title2}>
O Sedum Morganianum, popularmente conhecido como "Burrito" ou "Cauda de Burro", é uma planta suculenta que se destaca por seus caules pendentes e folhas carnudas em formato de pequenas gotas, que formam um visual semelhante a uma cauda. Essa planta é originária do México e é muito popular em jardins de suculentas, cestos suspensos e arranjos decorativos.
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
      <Text style={styles.itemText2}>Regue quando o solo estiver completamente seco.</Text>
    </View>
  </View>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/32.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Transplante</Text>
      <Text style={styles.itemText2}>A cada 2 a 3 anos</Text>
    </View>
  </View>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/33.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Fertilização</Text>
      <Text style={styles.itemText2}>Adicione fertilizante diluído uma vez por estação de crescimento.</Text>
    </View>
  </View>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/34.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Pragas</Text>
      <Text style={styles.itemText2}>Cochonilhas e ácaros</Text>
    </View>
  </View>
</View>

<Text style={styles.aboutTitle}>Problemas Comuns</Text>
<View style={styles.imageContainer2}>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/42.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Folhas murchas</Text>
    </View>
    <TouchableOpacity onPress={toggleProblems1} style={styles.iconButton}>
      <Icon name={showProblems1 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
    </TouchableOpacity>
  </View>
  {showProblems1 && (
    <View style={styles.problemDetails}>
      <Text style={styles.aboutTitle}>Sobre</Text>
      <Text style={styles.title2}>
        Folhas murchas podem indicar excesso de água ou umidade. As suculentas são sensíveis ao excesso de rega, o que pode levar ao apodrecimento das raízes.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Ajuste a frequência de rega e deixe o solo secar completamente entre as regas. Certifique-se de que o vaso tenha boa drenagem.</Text>
    </View>
  )}

  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/30.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Folhas amareladas</Text>
    </View>
    <TouchableOpacity onPress={toggleProblems2} style={styles.iconButton}>
      <Icon name={showProblems2 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
    </TouchableOpacity>
  </View>
  {showProblems2 && (
    <View style={styles.problemDetails}>
      <Text style={styles.aboutTitle}>Sobre</Text>
      <Text style={styles.title2}>
        Folhas amareladas podem ser resultado de uma exposição insuficiente à luz solar ou de uma deficiência nutricional.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Mova a planta para um local com mais luz direta e considere a adição de um fertilizante equilibrado.</Text>
    </View>
  )}

  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/43.jpg')} />
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
        O crescimento lento pode ocorrer se a planta não estiver recebendo luz suficiente ou se o solo for muito denso e reter água.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Certifique-se de que a planta receba sol pleno e use um solo bem drenado, como uma mistura de terra para cactos.</Text>
    </View>
  )}
</View>

<Text style={styles.aboutTitle}>Curiosidades</Text>
<View style={styles.imageContainer2}>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Popular em arranjos</Text>
      <Text style={styles.itemText2}>Devido ao seu formato único, o Sedum 'Burrito' é amplamente utilizado em jardins verticais, cestos e arranjos de suculentas.</Text>
    </View>
  </View>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Crescimento rápido</Text>
      <Text style={styles.itemText2}>Apesar de ser uma planta de crescimento lento, o Sedum 'Burrito' pode se espalhar rapidamente em condições ideais.</Text>
    </View>
  </View>
</View>

<Text style={styles.aboutTitle}>Como plantar</Text>
<Text style={styles.title2}>
Para plantar o Sedum Morganianum 'Burrito', siga os passos abaixo:
</Text>

<Text style={styles.title2}>
1. Escolha um vaso com boa drenagem para evitar o acúmulo de água.
</Text>
<Text style={styles.title2}>
2. Use um solo leve e bem aerado, preferencialmente uma mistura para cactos e suculentas.
</Text>
<Text style={styles.title2}>
3. Plante a suculenta com as raízes expostas e evite compactar o solo ao redor.
</Text>
<Text style={styles.title2}>
4. Regue apenas quando o solo estiver completamente seco, para evitar o apodrecimento das raízes.
</Text>
<Text style={styles.title2}>
5. Coloque em um local que receba luz solar direta por pelo menos 4 a 6 horas diárias.
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
