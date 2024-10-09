import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import { Calendar, DateData } from "react-native-calendars";
import { Feather } from "@expo/vector-icons"

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

                    renderArrow={(direction: "right" | "left") => (
                        <Feather size={24} color="#E8E8E8" name={`chevron-${direction}`} />
                    )}
                    
                    headerStyle={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: "#E8E8E8",
                        paddingBottom: 10,
                        marginBottom: 10,
                    }}
                    theme={{
                        textMonthFontSize: 18,
                        monthTextColor: '#E8E8E8',
                        todayTextColor: "#F06543",
                        selectedDayBackgroundColor: '#F06543',
                        selectedDayTextColor: '#E8E8E8',
                        arrowColor: '#E8E8E8',
                        backgroundColor: 'transparent',
                        textDayStyle: '#E8E8E8',
                        textDisabledColor : '#717171'
                        
                    }}
                    minDate={new Date ().toDateString()}
                    hideExtraDays={true}
                    onDayPress={onDayPress} // Corrigir para usar a função onDayPress
                    markedDates={
                        selectedDay && {
                            [selectedDay.dateString]: { selected: true }, // Usar dateString do selectedDay
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
        backgroundColor: "transparent",
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
    }
});
