import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';


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




    return(
        <View style={styles.content }>
            <View style={styles.inputView}>
            <Ionicons name="cash-outline" size={24} color="black" />
                <TextInput placeholder="valor" keyboardType="decimal-pad" style={styles.inputValor} value={valor} onChangeText={setValor} />
            </View>
            <View style={styles.inputView}>
                <Picker selectedValue={id} onValueChange={(itemValue, index)=>{
                    setId(itemValue)
                }}
                style={{width:"100%"}}

                >
                    {
                        sugestoes?.map((item)=> {
                            return <Picker.Item key={item.id} label={item.nome} value={item.id} />
                        })
                    }
                </Picker>
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder="usuário" />
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder="data" />
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder="observações" />
            </View>
            <View style={styles.contentButton}>
                <Button title="salvar"/>
                <Button title="continuar"/>
                <Button title="cancelar" onPress={() => router.back()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        padding:10,
       
    },
    inputView: {
        borderColor: "black",
        borderWidth: 1,
        width: "100%",
        margin: 10,
        alignItems:"center",
        flexDirection:"row",
    },
    contentButton:{
        flexDirection:"row",
        gap: 10, 
        justifyContent: "space-around",
    },
    inputValor:{
        flex:1,
        textAlign:"right",
        padding:10,
    },
});