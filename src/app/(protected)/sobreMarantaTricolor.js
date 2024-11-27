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
            source={require('../../../src/assets/images/maranta.png')}
            style={styles.fullWidthImage}
            resizeMode="cover" // Ajuste para evitar distorções
          />
        </View>
        <Text style={styles.title}>Maranta Tricolor</Text>
        <Text style={styles.title2}>Maranta leuconeura ● Maranta Tricolor</Text>

        <Text style={styles.aboutTitle}>Sobre</Text>
        <Text style={styles.title2}>
        A Maranta tricolor, também conhecida como Maranta leuconeura var. tricolor, é uma planta ornamental pertencente à família Marantaceae. Ela é popular por suas folhas coloridas e exuberantes, que possuem padrões atraentes de verde, branco e rosa, o que a torna bastante apreciada em ambientes internos.
        </Text>

        <Text style={styles.aboutTitle}>Detalhes</Text>
        <View style={styles.imageContainer}>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/29.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Temperatura</Text>
              <Text style={styles.itemText2}> 18°C e 24°C.</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/30.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Luz solar</Text>
              <Text style={styles.itemText2}>luz indireta</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/31.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Água</Text>
              <Text style={styles.itemText2}>2 a 3 vezes por semana</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/32.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Transplante</Text>
              <Text style={styles.itemText2}>a cada 1 a 2 anos</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/33.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Fertilização</Text>
              <Text style={styles.itemText2}>fertilizante líquido balanceado  {'\n'} a cada 2 a 4 semanas</Text>
            </View>
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/34.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Pragas</Text>
              <Text style={styles.itemText2}>Ácaros</Text>
            </View>
          </View>
        </View>

        <Text style={styles.aboutTitle}>Problemas Comuns</Text>
<View style={styles.imageContainer2}>
  {/* Problema 1: Folhas Amareladas */}
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/a.png')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Folhas Amareladas</Text>
    </View>
    <TouchableOpacity onPress={toggleProblems1} style={styles.iconButton}>
      <Icon name={showProblems1 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
    </TouchableOpacity>
  </View>
  {showProblems1 && (
    <View style={styles.problemDetails}>
      <Text style={styles.aboutTitle}>Causas Possíveis</Text>
      <Text style={styles.title2}>
        - Excesso de água: O solo encharcado pode levar ao apodrecimento das raízes, causando o amarelecimento das folhas.
        {'\n'}- Deficiência de nutrientes: A falta de nutrientes, como nitrogênio, pode resultar em folhas amareladas, especialmente nas partes inferiores da planta.
        {'\n'}- Luz inadequada: Se a planta recebe luz direta e forte, pode ocorrer queimaduras nas folhas, resultando em amarelamento.
      </Text>
      <Text style={styles.aboutTitle}>Soluções</Text>
      <Text style={styles.title2}>
        - Certifique-se de que o solo tenha boa drenagem e evite regar excessivamente.
        {'\n'}- Fertilize regularmente com um fertilizante balanceado durante a primavera e verão.
        {'\n'}- Coloque a planta em um local com luz indireta e evite a exposição ao sol direto.
      </Text>
    </View>
  )}

  {/* Problema 2: Folhas Secas nas Pontas */}
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/a.png')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Folhas Secas nas Pontas</Text>
    </View>
    <TouchableOpacity onPress={toggleProblems2} style={styles.iconButton}>
      <Icon name={showProblems2 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
    </TouchableOpacity>
  </View>
  {showProblems2 && (
    <View style={styles.problemDetails}>
      <Text style={styles.aboutTitle}>Causas Possíveis</Text>
      <Text style={styles.title2}>
        - Ar muito seco: A Maranta tricolor prefere um ambiente úmido. Se o ar estiver muito seco, as pontas das folhas podem secar.
        {'\n'}- Falta de umidade no solo: A falta de rega ou um solo muito seco pode fazer com que as extremidades das folhas se ressequem.
      </Text>
      <Text style={styles.aboutTitle}>Soluções</Text>
      <Text style={styles.title2}>
        - Aumente a umidade ao redor da planta, usando um umidificador ou borrifando água nas folhas.
        {'\n'}- Regue com mais frequência, garantindo que o solo permaneça úmido, mas não encharcado.
        {'\n'}- Evite colocar a planta perto de fontes de calor, como aquecedores ou ar-condicionados, que podem ressecar o ambiente.
      </Text>
    </View>
  )}

  {/* Problema 3: Deformação ou Amarelamento nas Folhas Inferiores */}
  <View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/a.png')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Deformação ou Amarelamento nas Folhas Inferiores</Text>
    </View>
    <TouchableOpacity onPress={toggleProblems3} style={styles.iconButton}>
      <Icon name={showProblems3 ? "chevron-up" : "chevron-down"} size={20} color="#005f56" />
    </TouchableOpacity>
  </View>
  {showProblems3 && (
    <View style={styles.problemDetails}>
      <Text style={styles.aboutTitle}>Causas Possíveis</Text>
      <Text style={styles.title2}>
        - Excesso de fertilização: O uso excessivo de fertilizantes pode causar queima das raízes e deformação das folhas.
        {'\n'}- Falta de luz ou nutrientes: Se a planta não receber luz suficiente ou nutrientes essenciais, pode haver descoloração e deformação das folhas inferiores.
      </Text>
      <Text style={styles.aboutTitle}>Soluções</Text>
      <Text style={styles.title2}>
        - Diminua a frequência de fertilização e use um fertilizante diluído.
        {'\n'}- Coloque a planta em um local com luz indireta e faça uma rotação periódica para que todas as partes da planta recebam luz.
        {'\n'}- Se necessário, faça uma poda das folhas danificadas para melhorar a estética da planta.
      </Text>
    </View>
  )}
</View>

        <Text style={styles.aboutTitle}>Curiosidades</Text>
        <View style={styles.imageContainer2}>
        < View style={styles.imageItem}>
    <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Movimento das Folhas (Fenômeno de Oração)</Text>
      <Text style={styles.itemText2}>À noite, as folhas se fecham em direção ao céu, como se estivessem em oração. Esse movimento ocorre devido à variação na pressão interna das células das folhas, abrindo durante o dia para captar luz.</Text>
    </View>
    
  </View>
  <View style={styles.imageItem} >
    <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>Planta Nativa da Amazônia</Text>
      <Text style={styles.itemText2}>Originária das florestas tropicais da Amazônia, a Maranta tricolor cresce sob a sombra de outras plantas e é adaptada a climas úmidos, com baixa tolerância à luz solar direta.</Text>
    </View>
  </View>   
</View>
<Text style={styles.aboutTitle}>Como plantar</Text>
<Text style={styles.title2}>
  Para plantar uma Maranta tricolor, siga os passos abaixo:
</Text>

<Text style={styles.title2}>
  1. Escolha um vaso com boa drenagem, pois o excesso de água pode prejudicar a raiz da planta.
</Text>
<Text style={styles.title2}>
  2. Use um substrato rico em matéria orgânica, como uma mistura de terra comum com composto ou perlita.
</Text>
<Text style={styles.title2}>
  3. Plante a Maranta tricolor com a raiz levemente enterrada, sem compactar demais o solo ao redor.
</Text>
<Text style={styles.title2}>
  4. Regue a planta logo após o plantio, garantindo que o solo esteja úmido, mas não encharcado.
</Text>
<Text style={styles.title2}>
  5. Coloque a planta em um local com luz indireta e mantenha a umidade do ambiente, borrifando água nas folhas se necessário.
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
