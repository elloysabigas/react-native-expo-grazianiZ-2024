import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { Feather } from "@expo/vector-icons";
import { ptBR } from "../../utils/localecalendarConfig";

LocaleConfig.locales["pt-BR"] = ptBR;
LocaleConfig.defaultLocale = "pt-BR"; 

export function Banner() {
    const [page, setPage] = useState(0);
    const [selectedDay, setSelectedDay] = useState(null); // Definir o estado para o dia selecionado

    const onPageSelected = (e) => {
        setPage(e.nativeEvent.position);
    };

    // Função para lidar com a seleção de dia
    const onDayPress = (day) => {
        setSelectedDay(day);
    };

    return (
        <View style={styles.container}>
            <PagerView initialPage={0} style={styles.content} onPageSelected={onPageSelected}>
                <View key='1' style={styles.page}>
                    <Image style={styles.image} source={require('../../../src/assets/images/banner1.png')} />
                </View>
                <View key='2' style={styles.page}>
                    <Image style={styles.image} source={require('../../../src/assets/images/banner2.png')} />
                </View>
                <View key='3' style={styles.page}>
                    <Image style={styles.image} source={require('../../../src/assets/images/banner3.png')} />
                </View>
            </PagerView>
            <View style={styles.bulletContent}>
                <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
            </View>
            <View>
                
            <Calendar
    style={styles.calendar}
    renderArrow={(direction) => (
        <Feather
            size={24}
            color="#333" // Setas escuras para melhor contraste
            name={direction === "right" ? "chevron-right" : "chevron-left"}
        />
    )}
    headerStyle={{
        borderBottomWidth: 0.5,
        borderBottomColor: "#E8E8E8",
        paddingBottom: 10,
        marginBottom: 10,
    }}
    theme={{
        textMonthFontSize: 18,
        monthTextColor: '#333', // Cor do texto do mês
        todayTextColor: "#F06543",
        selectedDayBackgroundColor: '#F06543',
        selectedDayTextColor: '#FFFFFF', // Texto branco para o dia selecionado
        arrowColor: '#333', // Cor das setas
        backgroundColor: 'transparent',
        dayTextColor: '#333', // Cor do texto dos dias
        textDisabledColor: '#d9e1e8', // Cor dos dias desativados
        textDayFontFamily: 'sans-serif-medium', // Fonte personalizada
        textMonthFontFamily: 'sans-serif-medium',
        textDayHeaderFontFamily: 'sans-serif',
        textDayHeaderFontWeight: 'bold',
        textDayHeaderFontSize: 14,
    }}
    minDate={new Date().toDateString()}
    hideExtraDays={true}
    onDayPress={onDayPress}
    markedDates={
        selectedDay && {
            [selectedDay.dateString]: { selected: true, selectedColor: '#F06543' },
        }
    }
/>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8', // Background mais claro para destacar o calendário
    },
    content: {
        padding: 24,
        marginTop: 10,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    calendar: {
        borderRadius: 10,
        backgroundColor: '#ffffff', // Fundo branco para o calendário
        elevation: 4, // Adiciona sombra para destacar o calendário
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        padding: 10, // Espaçamento interno para dar mais respiro aos elementos
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b5c4d8',
        padding: 10,
    },
    bulletContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bullet: {
        width: 10,
        height: 10,
        backgroundColor: '#c8e6d4',
        marginTop: -25,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeBullet: {
        backgroundColor: '#30804f',
    },
    text: {
        fontSize: 15,
        fontFamily: 'bold',
    },
    image: {
        width: '110%',
        height: '120%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 10,
    },
});