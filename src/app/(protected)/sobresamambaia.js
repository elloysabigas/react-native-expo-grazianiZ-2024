import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react'; 

export default function Flores() {
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);

  const handlePress1 = () => {
    setShowMessage1(!showMessage1);
    setShowMessage2(false); // Fecha o lembrete do segundo botão se estiver aberto
  };

  const handlePress2 = () => {
    setShowMessage2(!showMessage2);
    setShowMessage1(false); // Fecha o lembrete do primeiro botão se estiver aberto
  };

  const closeMessage = () => {
    setShowMessage1(false);
    setShowMessage2(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('../../../src/assets/images/samambaia.jpg')} />

      <Text style={styles.title}>Samambaias</Text>
      <Text>Samambaias ● Cyrtomium</Text>

      {/* Contêiner para os botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.smallButton} onPress={handlePress1}>
          <Text style={styles.buttonText}>Fácil de Cuidar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallButton2} onPress={handlePress2}>
          <Text style={styles.buttonText}>Média</Text>
        </TouchableOpacity>
      </View>

      {/* Lembrete do primeiro botão */}
      {showMessage1 && (
        <TouchableOpacity style={styles.overlay} onPress={closeMessage} activeOpacity={1}>
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>A planta é fácil de cuidar e boa para iniciantes</Text>
          </View>
        </TouchableOpacity>
      )}

      {/* Lembrete do segundo botão */}
      {showMessage2 && (
        <TouchableOpacity style={styles.overlay} onPress={closeMessage} activeOpacity={1}>
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>As plantas crescem de 30 cm a 1,2 m de altura</Text>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'regular',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row', // Alinha os botões horizontalmente
    justifyContent: 'space-between', // Espaçamento igual entre os botões
    marginTop: 50, // Diminui a distância acima dos botões
  },
  smallButton: {
    paddingVertical: 10, // Aumenta a altura do botão
    paddingHorizontal: 10,
    backgroundColor: '#dfdfdf',
    borderRadius: 5,
    alignItems: 'center',
    width: 130, // Reduz a largura dos botões
    marginHorizontal: 5, // Adiciona espaço horizontal entre os botões
  },

  smallButton2:{
    marginLeft:-20
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
    flexDirection: 'row',
    alignItems: 'center',
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
});
