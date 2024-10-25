import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react'; 
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Flores() {
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const [showMessage3, setShowMessage3] = useState(false);
  const [showProblems, setShowProblems] = useState(false);

  const handlePress1 = () => {
    setShowMessage1(!showMessage1);
    setShowMessage2(false); 
    setShowMessage3(false);
  };

  const handlePress2 = () => {
    setShowMessage2(!showMessage2);
    setShowMessage1(false); 
    setShowMessage3(false);
  };

  const handlePress3 = () => {
    setShowMessage3(!showMessage3);
    setShowMessage1(false); 
    setShowMessage2(false);
  };

  const closeMessage = () => {
    setShowMessage1(false);
    setShowMessage2(false);
    setShowMessage3(false);
  };

  const toggleProblems = () => {
    setShowProblems(!showProblems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image style={styles.image} source={require('../../../src/assets/images/samambaia.jpg')} />
        
        <Text style={styles.title}>Samambaias</Text>
        <Text style={styles.title2}>Samambaias ● Cyrtomium</Text>

        <View style={styles.buttonContainer}>
          <View style={styles.column}>
            <TouchableOpacity style={styles.smallButton} onPress={handlePress1}>
              <Text style={styles.buttonText}>Fácil de Cuidar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.smallButton} onPress={handlePress3}>
              <Text style={styles.buttonText}>Purificadora de ar</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.smallButton2, styles.marginLeft2]} onPress={handlePress2}>
            <Text style={styles.buttonText}>Média</Text>
          </TouchableOpacity>
        </View>

        {showMessage1 && (
          <TouchableOpacity style={styles.overlay} onPress={closeMessage} activeOpacity={1}>
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>A planta é fácil de cuidar e boa para iniciantes</Text>
            </View>
          </TouchableOpacity>
        )}

        {showMessage2 && (
          <TouchableOpacity style={styles.overlay} onPress={closeMessage} activeOpacity={1}>
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>As plantas crescem de 30 cm a 1,2 m de altura</Text>
            </View>
          </TouchableOpacity>
        )}

        {showMessage3 && (
          <TouchableOpacity style={styles.overlay} onPress={closeMessage} activeOpacity={1}>
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>
                Elas podem ajudar a melhorar a qualidade do ar em ambientes internos ao filtrar poluentes e toxinas.
              </Text>
            </View>
          </TouchableOpacity>
        )}

        <Text style={styles.aboutTitle}>Sobre</Text>
        <Text style={styles.title2}>
          As samambaias são plantas vasculares antigas que se reproduzem por esporos, em vez de sementes ou flores. Elas têm frondes (folhas longas) que se desenrolam em espiral ao crescer e possuem rizomas (caules subterrâneos) que ajudam na propagação. Preferem ambientes úmidos e sombreados, sendo comuns em florestas tropicais e usadas como plantas ornamentais. Algumas espécies são conhecidas por melhorar a qualidade do ar em ambientes internos.
        </Text>

        <View style={styles.imageContainer}>
          <Text style={styles.aboutTitle}>Detalhes</Text>
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
            <Image style={styles.itemImage} source={require('../../../src/assets/images/40.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Amarelecimento</Text>
              <Text style={styles.itemText2}>Sombra Parcial</Text>
            </View>
            <TouchableOpacity onPress={toggleProblems} style={styles.iconButton}>
              <Icon name={showProblems ? "chevron-up" : "chevron-down"} size={20} color="#005f56" style={{marginLeft:50}} />
            </TouchableOpacity>
          </View>
          {showProblems && (
            <View style={styles.problemDetails}>
              <Text style={styles.problemText}>O amarelecimento das folhas das samambaias pode ser um sinal de que a planta não está nas condições ideais. Esse fenômeno pode ocorrer por diversos motivos, como excesso de luz, rega inadequada, umidade baixa, deficiência nutricional ou a presença de pragas e doenças. Para resolver o problema, é importante observar as condições em que a samambaia está sendo cultivada e fazer os ajustes necessários.

Para cuidar adequadamente de samambaias, siga algumas diretrizes básicas. Primeiro, coloque a planta em um local com luz indireta, evitando a exposição ao sol direto, que pode queimar as folhas. Mantenha o solo levemente úmido, regando quando a parte superior começar a secar, mas evite encharcar para prevenir raízes podres. Samambaias também apreciam um ambiente úmido, então você pode borrifar água nas folhas ou usar um umidificador para aumentar a umidade.

Quanto à temperatura, mantenha a planta em um ambiente entre 18°C e 24°C, evitando correntes de ar frio. Durante a primavera e o verão, fertilize uma vez por mês com um fertilizante balanceado, diluído pela metade. Não esqueça de podar folhas secas ou amareladas para estimular o crescimento saudável. Por fim, se a planta estiver crescendo muito e as raízes estiverem apertadas, considere transplantá-la para um vaso maior a cada 1-2 anos.

Com esses cuidados e ajustes, suas samambaias devem prosperar e exibir folhas verdes e saudáveis.</Text>
            </View>
          )}
        </View>

        <View style={styles.imageContainer2}>
          <Text style={styles.aboutTitle}>Curiosidades</Text>
          <View style={styles.imageItem}>
            <Image style={styles.itemImage} source={require('../../../src/assets/images/41.jpg')} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Temperatura</Text>
              <Text style={styles.itemText2}>Aplique Fertilização Líquido {'\n'} a cada 2 a 4 meses</Text>
            </View>
          </View>
        </View>

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
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#005f56',
  },
  title2: {
    fontSize: 16,
    color: '#1b1b1b',
    textAlign: 'justify',
    padding: 10,
    fontFamily: 'regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  column: {
    flexDirection: 'column',
  },
  smallButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f4f5f9',
    borderRadius: 5,
    alignItems: 'center',
    width: 130,
    marginVertical: 5,
    height:40,
  },
  marginLeft: {
    marginLeft: 20,
  },
  smallButton2: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f4f5f9',
    borderRadius: 5,
    alignItems: 'center',
    width: 130,
    marginVertical: 5,
    height: 40, // Ajuste a altura aqui
  },

  marginLeft2: {
    marginLeft: 20,
  },
  buttonText: {
    color: '#005f56',
    fontSize: 10,
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    width: 150,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  aboutTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#005F56',
  },
  imageContainer: {
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 15,
  },
  imageContainer2: {
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 15,
    // Removido height para ajuste automático
  },
  imageItem: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  },
  itemText: {
    fontSize: 14,
    color: '#009B86',
    lineHeight: 20,
    fontFamily: 'bold',
  },
  itemText2: {
    fontSize: 12,
    color: '#777',
    lineHeight: 18,
  },
  iconButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  problemDetails: {
    marginTop: 5,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    // Removido height para ajuste automático
  },
  problemText: {
    fontSize: 12,
    color: '#777',
    textAlign: 'justify',
  },
});
