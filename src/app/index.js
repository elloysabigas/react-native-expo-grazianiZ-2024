import { StatusBar } from 'expo-status-bar';
import { Alert, BackHandler, Button, StyleSheet, Text, TextInput, View } from 'react-native';
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
      await signIn({ email, password })
      router.replace("/");
    } catch (error) {
      Alert.alert("Erro", error.message);
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

      <Button style={styles.button} title="Entrar" onPress={handleEntrarSuper}  />
      <Button style={styles.button} title="Sobre" onPress={() => router.push("/about") } />
      <Button style={styles.button} title="Sair do aplicativo" onPress={() => BackHandler.exitApp()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f8f8ec',
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
    marginHorizontal: 40,
    marginVertical:10,
    alignItems: 'center',
  },
  emailinput: {
    flex: 1,
    fontFamily: 'bold',
    fontSize: 15,
  },
  button:{
    width: "100%",
    color:'#a6033f',
  
  }
});
