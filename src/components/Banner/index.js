import { useState } from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PagerView from "react-native-pager-view";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { Feather } from "@expo/vector-icons";
import { ptBR } from "../../utils/localecalendarConfig";

LocaleConfig.locales["pt-BR"] = ptBR;
LocaleConfig.defaultLocale = "pt-BR"; 

export function Banner() {
    const [page, setPage] = useState(0);
    const [selectedDay, setSelectedDay] = useState(null); 

    const onPageSelected = (e) => {
        setPage(e.nativeEvent.position);
    };

    
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
            color="#333" 
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
        monthTextColor: '#333', 
        todayTextColor: "#F06543",
        selectedDayBackgroundColor: '#F06543',
        selectedDayTextColor: '#FFFFFF', 
        arrowColor: '#333', 
        backgroundColor: 'transparent',
        dayTextColor: '#333', 
        textDisabledColor: '#d9e1e8', 
        textDayFontFamily: 'sans-serif-medium', 
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
        backgroundColor: '#f0f4f8', 
    },
    button: {
        backgroundColor: "#ff893a",
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 10,
        width: '50%',
        alignItems: 'center',
        marginTop: 50,
        alignItems: 'center',
        marginLeft: 100,
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
        backgroundColor: '#ffffff', 
        elevation: 4, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        padding: 10,
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