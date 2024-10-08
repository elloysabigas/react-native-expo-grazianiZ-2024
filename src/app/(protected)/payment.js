import { router } from "expo-router";
import { useRef, useState, useEffect } from "react";
import { Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function Payment(){
    const [valor, setValor] = useState("0,00");
    const [sugestoes, setSugestoes] = useState([{
      "id": 1,
      "nome": "Derwin Hallede"
    }, {
      "id": 2,
      "nome": "Channa Dibdall"
    }, {
      "id": 3,
      "nome": "Haleigh Kingswood"
    }, {
      "id": 4,
      "nome": "Bucky Peachment"
    }, {
      "id": 5,
      "nome": "Adan Gready"
    }, {
      "id": 6,
      "nome": "Alistair Knowller"
    }, {
      "id": 7,
      "nome": "Rhona Carlo"
    }, {
      "id": 8,
      "nome": "Benedicta Djakovic"
    }, {
      "id": 9,
      "nome": "Cornall Fold"
    }, {
      "id": 10,
      "nome": "Stacee Rontsch"
    }, {
      "id": 11,
      "nome": "Karita Epsly"
    }, {
      "id": 12,
      "nome": "Dorthea Damper"
    }, {
      "id": 13,
      "nome": "Trudie Reven"
    }, {
      "id": 14,
      "nome": "Bay Maccari"
    }, {
      "id": 15,
      "nome": "Yvette Beckworth"
    }, {
      "id": 16,
      "nome": "Jaquelyn Litterick"
    }, {
      "id": 17,
      "nome": "Sam Dendle"
    }, {
      "id": 18,
      "nome": "Giovanna Bourdas"
    }, {
      "id": 19,
      "nome": "Loralie Novik"
    }, {
      "id": 20,
      "nome": "Pansie Berthomieu"
    }, {
      "id": 21,
      "nome": "Berny Rampley"
    }, {
      "id": 22,
      "nome": "Gerri Rodinger"
    }, {
      "id": 23,
      "nome": "Amaleta Crocket"
    }, {
      "id": 24,
      "nome": "Ingra Anselmi"
    }, {
      "id": 25,
      "nome": "Pierre Rase"
    }, {
      "id": 26,
      "nome": "Boycey Arundell"
    }, {
      "id": 27,
      "nome": "Andrey Gatteridge"
    }, {
      "id": 28,
      "nome": "Augie Bleakman"
    }, {
      "id": 29,
      "nome": "Marillin Ashe"
    }, {
      "id": 30,
      "nome": "Hamilton Skinn"
    }, {
      "id": 31,
      "nome": "Olivero Tewkesbury"
    }, {
      "id": 32,
      "nome": "Em Marini"
    }, {
      "id": 33,
      "nome": "Wilow Hairsnape"
    }, {
      "id": 34,
      "nome": "Eyde Pren"
    }, {
      "id": 35,
      "nome": "Gillan Jiggle"
    }]);

    const [id, setId] = useState(1);
    const [date, setDate] = useState(new Date());
    const [viewCalender, setViewCalender] = useState(false);
    const [observacao, setObservacao] = useState("");
    
    const valueRef = useRef();

    const handleCalendar = (event, selecteDate) => {
        if (selecteDate) {
            setDate(selecteDate);
        }
        setViewCalender(false);
    };

    useEffect(() => {
        valueRef?.current?.focus();
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
                    <Button title="salvar" color='#ff893a'/>
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
