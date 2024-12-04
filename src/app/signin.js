import { StatusBar } from 'expo-status-bar';
import { Alert, BackHandler, Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../hooks/Auth';
import { router } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  }

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email, password });
    
    } catch (error) {
      Alert.alert("Erro", error.message);
      console.log(error);
    }
  }

  return (
    <LinearGradient 
      style={styles.container}
      colors={['#dfe5e4','#ffe5d4','#ffc7a1']}
    >
      <Image style={styles.image} source={require('../../src/assets/icon.png')} />
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={20} color="black" />
        <TextInput 
          style={styles.emailinput} 
          placeholder="E-mail" 
          value={email} 
          onChangeText={setEmail} 
          keyboardType="email-address" 
          autoCapitalize="none" 
        />
      </View>

      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={20} color="black" />
        <TextInput 
          style={styles.emailinput} 
          placeholder="Senha" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry={!passwordVisibility} 
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons name={passwordVisibility ? "eye-off-outline" : "eye-outline"} size={20} color='black' />
        </TouchableOpacity>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.button} onPress={handleEntrarSuper}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/about")}>
          <Text style={styles.buttonText}>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => BackHandler.exitApp()}>
          <Text style={styles.buttonText}>Sair do aplicativo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/maintenance")}>
          <Text style={styles.buttonText}>Banco de Dados</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'bold',
    fontSize: 24,
    marginBottom: 20,
   marginTop: -100,
    color: '#006356',
  }, 
  inputbox: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  emailinput: {
    flex: 1,
    fontFamily: 'bold',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#ff893a",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'bold',
    fontSize: 16,
  },
  botoes: {
    marginTop: 60,
    width: '90%',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: -120,
    
 
  },
});