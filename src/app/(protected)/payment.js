import { router } from "expo-router";
import { useRef, useState, useEffect } from "react";
import { Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { z } from "zod";
import { useAuth } from "../../hooks/Auth/index";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useUsersDatabase } from "../../database/useUsersDatabase";



//user_id INTEGER NOT NULL, 
//user_cadastro INTEGER NOT NULL,
//valor_pago REAL NOT NULL,
//data_pagamento DATE NOT NULL,
//observacao TEXT,

const paymentSchema = z.object({
  valor_pago: z.number().gt(0),
  user_id: z.number().int().positive(),
  user_cadastro: z.number().int().positive(),
  data_pagamento: z.date(),
  observacao: z.string(),
})


export default function Payment(){
    const [valor, setValor] = useState("0,00");
    const [sugestoes, setSugestoes] = useState([]);

    const [id, setId] = useState(1);
    const [date, setDate] = useState(new Date());
    const [viewCalender, setViewCalender] = useState(false);
    const [observacao, setObservacao] = useState("");
    
    const valueRef = useRef();

    const {user} = useAuth();
    const {createPayment} = usePaymentsDatabase();
    const { getAllUsers } = useUsersDatabase();
    


    const handleCalendar = (event, selecteDate) => {
        if (selecteDate) {
            setDate(selecteDate);
        }
        setViewCalender(false);
    };

    useEffect(() => {

    (async () => {
      valueRef?.current?.focus();
      try {
        const users = await getAllUsers();
        setSugestoes(users);
        setId(users[0].id);
      }catch (error) {
        console.log(error);
      }
    })();

    }, []);

    const handleChangeValor = (value) => {
      try {
       let valorLimpo = value.replace(",", "").replace(".", "");
       let valorConvertido = Number(valorLimpo) / 100;
       if (valorConvertido ===0 || isNaN(valorConvertido)) {
        setValor("0,00")
        return;
        }
      let valorPtBR = Intl.NumberFormat("pt-BR",{
      style: "decimal",
      minimumFractionDigits:2,
       }).format(valorConvertido);
        setValor(valorPtBR);
      } catch(error) {
        setValor("0,00")
      }
    
    };

    const convertValue = (value) => {
      try {
        let valorLimpo = value.replace(",", "").replace(".", "");
        let valorConvertido = Number(valorLimpo) / 100;
        if (valorConvertido ===0 || isNaN(valorConvertido)) {
         return 0
         }
       return valorConvertido
       } catch(error) {
        return valorConvertido
       }
     
    }

    const handleSubmit = async () => {
      const payment = {
        user_id: id,
        user_cadastro: Number(user.user.id),
        valor_pago: convertValue(valor), 
        data_pagamento: date,
        observacao,
      };

      try {
        const result = await paymentSchema.parseAsync(payment);
        const { insertedID } = await createPayment(payment);
        console.log(insertedID);
        setValor("0,00")
        setId(sugestoes[0].id);
        setDate(new Date());
        setObservacao("")
        valueRef?.current?.focus();
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <KeyboardAvoidingView style={{flex:1,}} behavior={Platform.OS === 'ios' ? "padding" : "height" } >
            <View style={styles.content }>
                <Text style={{fontFamily:'semibold', fontSize: 16, color:'#006356'}}>Inserir Pagamentos</Text>
                <View style={styles.inputView}>
                    <Ionicons name="cash" size={24} color="#006356"/>
                    <TextInput 
                        placeholder="valor" 
                        keyboardType="decimal-pad" 
                        style={styles.inputValor} 
                        value={valor} 
                        onChangeText={(newValue) => handleChangeValor(newValue)} 
                        ref={valueRef} 
                    />
                </View>
                <View style={styles.inputView}>
                    <Picker selectedValue={id} onValueChange={(itemValue, index) => setId(itemValue)} style={{width:"100%"}}>
                        {sugestoes?.map((item) => (
                            <Picker.Item key={item.id} label={item.nome} value={item.id} />
                        ))}
                    </Picker>
                </View>
                <View style={styles.inputView}>
                    <Text onPress={() => setViewCalender(true)} style={styles.inputData}>
                        {date.toLocaleDateString()}
                    </Text>
                    {viewCalender && (
                        <DateTimePicker value={date} onChange={handleCalendar} mode="date" testID="dateTimePicker" />
                    )}
                </View>
                <View style={styles.inputView}>
                    <TextInput 
                        placeholder="observações" 
                        style={styles.inputObservacao} 
                        value={observacao} 
                        onChangeText={setObservacao} 
                        multiline={true} 
                    />
                </View>
                <View style={styles.contentButton}>
                    <Button title="salvar" onPress={handleSubmit}  color='#ff893a'/>
                    <Button title="continuar"  color='#ff893a'/>
                    <Button title="cancelar"  color='#ff893a' onPress={() => router.back()}/>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    inputView: {
        borderColor: "black",
        borderWidth: 1,
        width: "100%",
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
    },
    contentButton: {
        flexDirection: "row",
        gap: 10, 
        justifyContent: "space-around",
        marginTop: 70,
        borderRadius: 50,
    },
    inputValor: {
        flex: 1,
        textAlign: "right",
        padding: 10,
    },
    inputData: {
        width: "100%",
        textAlign: "center",
        fontFamily: 'regular',
        fontSize: 20,
        padding: 10,
    },
    inputObservacao: {
        fontFamily: "regular",
        fontSize: 16,
        flex: 1,
        lineHeight: 20,
    },
});
