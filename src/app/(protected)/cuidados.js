import { StyleSheet, Text, View, TextInput, StatusBar, SafeAreaView } from "react-native";
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function List() {
    const [text, setText] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cabecalho}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.textInput}    
                        placeholder="Pesquisar"  
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={text}
                        onChangeText={(value) => setText(value)}
                    />
                    <Ionicons name="search" size={24} color="#d7dbe4" style={styles.icon} />
                </View>
            </View>
            
            <Text style={styles.title}>Categorias</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        marginTop: StatusBar.currentHeight + 16,
        fontSize: 24,
        fontWeight: "bold",
        color: "#006356",
        fontFamily: "bold",
    },
    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        
    },
    inputContainer: {
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '100%', 
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
    },
    icon: {
        marginLeft: 8, 
    },
});
