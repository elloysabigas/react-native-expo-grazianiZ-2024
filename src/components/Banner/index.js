import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";


export function Banner() {
    const [page, setPage] = useState(0);
    const onPageSelected = (e) => {
        setPage(e.nativeEvent.position);
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
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
        marginTop: 10,
        height: 200,
        alignItems:'center',
        justifyContent: 'center',
        width: '100%',
       
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b5c4d8',
        padding:10,
      },
      bulletContent: {
        flexDirection: 'row',
        justifyContent: 'center',
       alignItems:'center',
      },
      bullet:{
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
       image : {
        width: '110%',
        height: '120%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 10,
       }
    });
      
