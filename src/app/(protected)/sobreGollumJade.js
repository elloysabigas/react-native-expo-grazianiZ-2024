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
            source={require('../../../src/assets/images/cac15.png')}
            style={styles.fullWidthImage}
            resizeMode="cover" // Ajuste para evitar distorções
          />
        </View>
        <Text style={styles.title}>Gollum Jade</Text>
<Text style={styles.title2}>Gollum Jade ● Crassula ovata 'Gollum'</Text>

<Text style={styles.aboutTitle}>Sobre</Text>
<Text style={styles.title2}>
A Crassula ovata 'Gollum', também conhecida como Gollum Jade ou "Jade de Gollum", é uma variedade da planta jade que se destaca por suas folhas alongadas e tubular com pontas arredondadas, que lembram os dedos de Gollum, personagem da obra de J.R.R. Tolkien. É uma planta suculenta popular em jardins e como planta de interior devido à sua resistência e aparência única.
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
      <Text style={styles.itemText2}>Sol pleno a meia-sombra</Text>
    </View>
  </View>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/31.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Água</Text>
      <Text style={styles.itemText2}>A cada 2 semanas (em dias quentes)</Text>
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
      <Text style={styles.itemText2}>Use fertilizante para suculentas a cada 3 a 4 meses durante a primavera e verão</Text>
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
        O excesso de água pode levar ao apodrecimento das raízes e folhas. A planta deve ser regada apenas quando o solo estiver seco.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Certifique-se de que o vaso tenha boa drenagem e regue apenas quando o solo estiver seco a uma profundidade de 2 a 3 cm.</Text>
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
        A falta de luz pode fazer com que a planta cresça de forma alongada, perdendo a forma compacta e saudável.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Posicione a planta em um local que receba sol direto por pelo menos 4 a 6 horas diárias, como uma janela voltada para o sul.</Text>
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
        A planta precisa de um solo bem drenado, ideal para suculentas, para evitar problemas como o apodrecimento das raízes.
      </Text>
      <Text style={styles.aboutTitle}>Como cuidar</Text>
      <Text style={styles.title2}>Use uma mistura de terra para suculentas com adição de areia e perlita para garantir uma boa drenagem.</Text>
    </View>
  )}
</View>

<Text style={styles.aboutTitle}>Curiosidades</Text>
<View style={styles.imageContainer2}>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Origem única</Text>
      <Text style={styles.itemText2}>A variedade 'Gollum' é uma mutação da planta Jade comum e é valorizada por suas folhas únicas e aparência distinta.</Text>
    </View>
  </View>
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Utilização</Text>
      <Text style={styles.itemText2}>Além de ser uma planta ornamental, é uma opção popular para jardins internos e áreas de decoração de interiores.</Text>
    </View>
  </View>
</View>

<Text style={styles.aboutTitle}>Como plantar</Text>
<Text style={styles.title2}>
Para plantar uma Gollum Jade, siga os passos abaixo:
</Text>

<Text style={styles.title2}>
1. Escolha um vaso com boa drenagem e um solo leve e bem areado, próprio para suculentas.
</Text>
<Text style={styles.title2}>
2. Plante a Crassula ovata 'Gollum' de modo que a base das folhas esteja nivelada com a superfície do solo.
</Text>
<Text style={styles.title2}>
3. Regue moderadamente, apenas quando o solo estiver seco.
</Text>
<Text style={styles.title2}>
4. Coloque a planta em um local que receba luz direta por várias horas diárias.
</Text>
<Text style={styles.title2}>
5. Evite o excesso de água e proteja a planta de geadas, pois é sensível a temperaturas abaixo de 10°C.
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
