import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useAuth } from "../../hooks/Auth/index";


function CustomDrawerContent(props) {

  const { user, signOut} = useAuth();
  

  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 20, justifyContent:'center', alignItems:'center', backgroundColor: '#e4ebf0', paddingVertical:10}}>
        <Image  source={{uri: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png', }} style={{width:100, height:100, borderRadius:50, margin:10, marginTop: 10 }} />
        <Text style={{textAlign: "center", fontSize: 20,}}>
          {user?.user?.nome}
        </Text>
      </View>
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <TouchableOpacity onPress={()=>signOut()} style={{justifyContent:"center", alignItems: 'center', height: 50, margin: 10, backgroundColor:"#4180ab", borderRadius: 9,}}>
          <Text style={{color: "#fffffd", fontFamily: 'bold'}}>Deslogar</Text>
        </TouchableOpacity>
     
    </View>
   
  );
}


const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="index" options={{drawerLabel: "Principal", headerTitle: "Principal", drawerIcon: ()=> <Ionicons name="home-outline" size={20} color="black" /> }} />
            <Drawer.Screen name="list" options={{drawerLabel: "Listagem", headerTitle: "Listagem", drawerIcon: ()=> <Ionicons name="list-outline" size={20} color="black"/>}} />
            <Drawer.Screen name="payment" options={{drawerLabel: "Pagamentos", headerTitle: "Pagamentos", drawerIcon: ()=> <Ionicons name="diamond-outline" size={20} color="black"/>}} />
          </Drawer>
        </GestureHandlerRootView>
      );
}

export default function Layout() {
  return DrawerLayout();
}
