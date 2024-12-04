import { router } from "expo-router";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { useMaintenanceDataBase } from "../database/useMaintenanceDatabase";

export default function Maintenance() {
  const { resetDatabase } = useMaintenanceDataBase();

  const handleReset = async () => {
    try {
      await resetDatabase();
      Alert.alert("Payments", "Banco de dados resetado com sucesso!");
    } catch (error) {
      Alert.alert("Payments", "Erro ao resetar o banco de dados: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.windowTitle}>Manutenção do Banco</Text>
      <View style={styles.esp}>
        <Pressable style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Zerar</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Importar Usuários</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Importar Pagamentos</Text>
      </Pressable>

      <Pressable style={[styles.button, styles.backButton]} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  windowTitle: {
    fontSize: 24,
      marginHorizontal: 16,
      marginTop: 20,
      color: '#033826',
      fontFamily: 'sourGummy',
     
  },
  button: {
    width: "80%",
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "#033826",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  esp: {
    marginTop: 50,
    width: "90%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    
  },
  
  backButton: {
    backgroundColor: "#558678",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: 'bold',
  },
});
