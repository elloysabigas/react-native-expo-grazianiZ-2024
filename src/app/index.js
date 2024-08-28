import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAuth } from '../hooks/Auth';
import { router } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';

export default function App() {
  const {signIn, signOut} = useAuth ();
  const [email, setEmail] = useState("super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const tooglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  }

  const handleEntrarSuper = async () => {
    try{
      await signIn({ email: "super@email.com", password: "A123456a!" })
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo Pronto para usar</Text>
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={20} color="black" />
        <TextInput style={styles.emailinput} placeholder="E-mail" value={email} onChangeText={setEmail} />
      </View>

      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={20} color="black" />
        <TextInput style={styles.emailinput} placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry={passwordVisibility}  />
        <Ionicons name={passwordVisibility ? "eye-off-outline" : "eye-outline"} size={20} color='black' onPress={tooglePasswordVisibility} />
      </View>

      <Button title="Signin Super" onPress={handleEntrarSuper} />
      <Button title="Sobre" onPress={() => router.push("/about") } />
      <Button title="Sair do aplicativo" onPress={() => BackHandler.exitApp()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  title:{
    fontFamily:'bold',
    fontSize:20,
  }, 
  inputbox:{
    flexDirection: 'row',
    gap: 20,
    margin: 40,
    alignItems: 'center',
  },
  emailinput: {
    flex: 1,
    fontFamily: 'bold',
    fontSize: 15,
  },
});
