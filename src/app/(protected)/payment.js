import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { z } from "zod";
import { useAuth } from "../../hooks/Auth/index";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useUsersDatabase } from "../../database/useUsersDatabase";

const paymentSchema = z.object({
  valor_pago: z.number().gt(0),
  user_id: z.number().int().positive(),
  user_cadastro: z.number().int().positive(),
  data_pagamento: z.string().datetime(),
  numero_recibo: z.string(),
  observacao: z.string().optional(),
});

export default function Payment() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSugetoes] = useState([]);
  const [id, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);
  const [observacao, setObservacao] = useState("");
  const [numeroRecibo, setNumeroRecibo] = useState("");
  const valueRef = useRef();
  const { user } = useAuth();
  const { createPayment } = usePaymentsDatabase();
  const { getAllUsers } = useUsersDatabase();

  const handleCalendar = (event, selectedDate) => {
    setViewCalendar(false);
    setData(selectedDate);
  };

  useEffect(() => {
    (async () => {
      valueRef?.current?.focus();
      try {
        const users = await getAllUsers();
        setSugetoes(users);
        setId(users[0].id);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeValor = (value) => {
    try {
      let valorLimpo = value.replace(",", "").replace(".", "");
      let valorConvertido = Number(valorLimpo) / 100;
      if (valorConvertido === 0 || isNaN(valorConvertido)) {
        setValor("0,00");
        return;
      }
      let valorPtBR = Intl.NumberFormat("pt-BR", {
        style: "decimal",
        minimumFractionDigits: 2,
      }).format(valorConvertido);
      setValor(valorPtBR);
    } catch (error) {
      setValor("0,00");
    }
  };

  const convertValue = (value) => {
    try {
      let valorLimpo = value.replace(",", "").replace(".", "");
      let valorConvertido = Number(valorLimpo) / 100;
      if (valorConvertido === 0 || isNaN(valorConvertido)) {
        return 0;
      }
      return valorConvertido;
    } catch (error) {
      return valorConvertido;
    }
  };

  const handleSubmit = async () => {
    const payment = {
      user_id: id,
      user_cadastro: Number(user.user.id),
      valor_pago: convertValue(valor),
      data_pagamento: data.toISOString(),
      numero_recibo: numeroRecibo,
      observacao,
    };

    try {
      const result = await paymentSchema.parseAsync(payment);
      payment.data_pagamento = new Date(payment.data_pagamento)
        .toISOString()
        .replace("T", " ")
        .split(".")[0];
      const { insertedID } = await createPayment(payment);
      console.log(insertedID);
      setValor("0,00");
      setId(sugestoes[0].id);
      setData(new Date());
      setObservacao("");
      setNumeroRecibo("");
      valueRef?.current?.focus();
    } catch (error) {
      Alert.alert("Erro", `Erro ao inserir pagamento: ${error.message}`);
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.content}>
        <Text style={styles.title}>Inserir Pagamento</Text>
        <View style={styles.inputView}>
          <Ionicons name="wallet-outline" size={24} color="#007AFF" />
          <TextInput
            placeholder="Valor"
            keyboardType="decimal-pad"
            style={styles.inputValor}
            value={valor}
            onChangeText={(newValue) => handleChangeValor(newValue)}
            ref={valueRef}
          />
        </View>

        <View style={styles.inputView}>
          <Ionicons name="cash-outline" size={24} color="#007AFF" />
          <TextInput
            placeholder="Número do Recibo"
            keyboardType="decimal-pad"
            style={styles.inputValor}
            value={numeroRecibo}
            onChangeText={setNumeroRecibo}
          />
        </View>

        <View style={styles.inputView}>
          <Picker selectedValue={id} onValueChange={(itemValue) => setId(itemValue)} style={styles.picker}>
            {sugestoes?.map((item) => (
              <Picker.Item key={item.id} label={item.nome} value={item.id} />
            ))}
          </Picker>
        </View>

        <View style={styles.inputView}>
          <Text onPress={() => setViewCalendar(true)} style={styles.inputData}>
            {data.toLocaleDateString()}
          </Text>
          {viewCalendar && (
            <DateTimePicker value={data} onChange={handleCalendar} mode="date" testID="dateTimePicker" />
          )}
        </View>

        <View style={styles.inputView}>
          <TextInput
            placeholder="Observações"
            style={styles.inputObservacao}
            value={observacao}
            onChangeText={setObservacao}
            multiline={true}
          />
        </View>

        <View style={styles.contentButtons}>
          <Button title="Salvar" color="#ff893a" onPress={handleSubmit} />
          <Button title="Continuar" color="#ff893a" />
          <Button title="Cancelar" onPress={() => router.back()} color="#ff893a" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f9",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  title: {
    fontFamily: "sourGummy",
    fontSize: 24,
    color: "#558678",
    marginBottom: 20,
    textAlign: "center",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "100%",
    backgroundColor: "#fff",
  },
  inputValor: {
    flex: 1,
    textAlign: "right",
    fontSize: 16,
    color: "#333",
    padding: 8,
    borderRadius: 8,
  },
  inputData: {
    fontSize: 16,
    color: "#333",
    width: "100%",
    padding: 10,
    textAlign: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  inputObservacao: {
    fontSize: 16,
    color: "#333",
    width: "100%",
    padding: 10,
    textAlign: "left",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    minHeight: 80,
  },
  picker: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 10,
  },
  contentButtons: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
    borderRadius: 20,
  },
});
