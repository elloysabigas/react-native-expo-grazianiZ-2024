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
