import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Flores() {
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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../../src/assets/images/samambaia.jpg')}
            style={styles.fullWidthImage}
          />
        </View>
        <Text style={styles.title}>Samambaias</Text>
        <Text style={styles.title2}>Samambaias ● Cyrtomium</Text>

        <Text style={styles.aboutTitle}>Sobre</Text>
        <Text style={styles.title2}>
          As samambaias são plantas vasculares antigas que se reproduzem por esporos, em vez de sementes ou flores. Elas têm frondes (folhas longas) que se desenrolam em espiral ao crescer e possuem rizomas (caules subterrâneos) que ajudam na propagação. Preferem ambientes úmidos e sombreados, sendo comuns em florestas tropicais e usadas como plantas ornamentais. Algumas espécies são conhecidas por melhorar a qualidade do ar em ambientes internos.
        </Text>

        <Text style={styles.aboutTitle}>Detalhes</Text>
        <View style={styles.imageContainer}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/29.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Temperatura</Text>
              <Text style={styles.itemText2}>25°C - 30°C</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/30.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Luz solar</Text>
              <Text style={styles.itemText2}>Sombra Parcial</Text>
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
              <Text style={styles.itemText2}>A cada 12 a 24 meses</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/33.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Fertilização</Text>
              <Text style={styles.itemText2}>Aplique Fertilização Líquido {'\n'} a cada 2 a 4 meses</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/34.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Pragas</Text>
              <Text style={styles.itemText2}>Cochonilhas</Text>
            </View>
          </View>
        </View>

        <Text style={styles.aboutTitle}>Problemas Comuns</Text>
        <View style={styles.imageContainer2}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/42.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Falta de umidade</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems1} style={styles.iconButton}>
              <Icon name={showProblems1 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
          </View>
          {showProblems1 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Sobre</Text>
              <Text style={styles.title2}>
                As samambaias adoram ambientes úmidos, por isso, a falta de umidade pode prejudicar seu crescimento e saúde. Quando o ambiente está muito seco, as folhas podem secar ou ficar amareladas nas bordas.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}> Aumente a umidade ao redor da planta, utilizando um umidificador, colocando a planta sobre um prato com pedras e água ou pulverizando as folhas com água regularmente. Evite borrifar muito perto do fim da tarde para evitar o surgimento de fungos.</Text>
            </View>
          )}

          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/30.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Exposição excessiva {'\n'} ao sol</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems2} style={styles.iconButton}>
              <Icon name={showProblems2 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
            </TouchableOpacity>
            </View>
          {showProblems2 && (
            <View style={styles.problemDetails}>
              <Text style={styles.aboutTitle}>Sobre</Text>
              <Text style={styles.title2}>
                Embora as samambaias tolerem luz indireta, a exposição direta ao sol pode queimar suas folhas, causando manchas marrons e descoloração.        
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>Coloque a samambaia em um local com luz indireta e evite a luz solar direta. Se a planta estiver em um local muito iluminado, mova-a para um local mais sombreado.</Text>
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
                Samambaias preferem solos bem drenados, ricos em matéria orgânica. Um solo muito pesado pode reter água demais, o que leva ao apodrecimento das raízes.
              </Text>
              <Text style={styles.aboutTitle}>Como cuidar</Text>
              <Text style={styles.title2}>Utilize um solo leve e bem drenado, como uma mistura de terra comum com composto orgânico ou perlita.</Text>
            </View>
          )}
        </View>

        <Text style={styles.aboutTitle}>Curiosidades</Text>
        <View style={styles.imageContainer2}>
        < View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Temperatura</Text>
      <Text style={styles.itemText2}>Aplique Fertilização Líquido {'\n'} a cada 2 a 4 meses</Text>
    </View>
    
  </View>
  <View style={styles.imageItem} >
    <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Ciclo de vida único</Text>
      <Text style={styles.itemText2}>O ciclo de vida das samambaias inclui uma fase independente chamada "gametófito", que é uma estrutura pequena e em forma de coração onde ocorrem as primeiras etapas da reprodução.</Text>
    </View>
  
  </View>
 
   
</View>
 <TouchableOpacity style={styles.addButton}>
        <Icon name="leaf" size={24} color="#fff" style={styles.addIcon} />
        <Text style={styles.addText}>Adicionar Planta</Text>
      </TouchableOpacity>
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