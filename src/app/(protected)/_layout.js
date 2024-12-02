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
      <View style={{marginTop: 20, justifyContent:'center', alignItems:'center', backgroundColor: '#c8e6d4', paddingVertical:10}}>
      <Image source={require('../../../src/assets/images/elloysa.png')} style={{width:100, height:100, borderRadius:50, margin:10, marginTop: 10 }}/> 
        <Text style={{textAlign: "center", fontSize: 20,}}>
          {user?.user?.nome}
        </Text>
      </View>
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <TouchableOpacity onPress={()=>signOut()} style={{justifyContent:"center", alignItems: 'center', height: 50, margin: 10, backgroundColor:"#ff893a", borderRadius: 9,}}>
          <Text style={{color: "#fffefe", fontFamily: 'bold'}}>Deslogar</Text>
        </TouchableOpacity>
     
    </View>
   
  );
}


const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="index" options={{drawerLabel: "Principal", headerTitle: "Principal", drawerIcon: ()=> <Ionicons name="home" size={20} color="#006356" /> }} />
          
            <Drawer.Screen name="cuidados" options={{drawerLabel: "Descubra", headerTitle: "Descubra", drawerIcon: ()=> <Ionicons name="search" size={20} color="#006356"/>}} />
            <Drawer.Screen name="list" options={{drawerLabel: "Listagem", headerTitle: "Listagem", drawerIcon: ()=> <Ionicons name="list" size={20} color="#006356"/>}} />
            <Drawer.Screen name="payment" options={{drawerLabel: "Pagamentos", headerTitle: "Pagamentos", drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>}} />
            <Drawer.Screen 
            name="cacto" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="ervas" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="flores" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="folha" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="frutas" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="legumes" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAbacate" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAbacaxi" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAbobora" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAbobrinha" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAgriao" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAlcachofra" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAlecrim" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAlface" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAlho" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAlhoPoro" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAlmeirao" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAlocasiaWentii" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAmeixa" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAmora" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAnturio" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreBaunilha" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreBerinjela" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreBromelia" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreCanela" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreCereja" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreCopo-de-Leite" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobrecosteladeado" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreCravo" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreCroton" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreEcheveraMexican" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreEcheveriaCarnicolor" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreEchinocactusGrusonii" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreEstragao" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreFigueiraDaIndia" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreFlorDeCerejeira" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreGeranios" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreGirassol" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreGollumJade" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreHaworthiaFasciata" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreHibisco" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreHortela" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreJaca" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreKiwi" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreLaranja" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreLimao" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreLirio" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreMammillariaGracilis" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreMarantaTricolor" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreOregano" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreOrquidea" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobrePacov" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobrePaeonia" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobrePlantaFantasma" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreRepolho" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreRosa" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreSalsao" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreSalsicha" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobresamambaia" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreSedumMorganianum" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreTomilho" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreTulipas" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreUva" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreZamiculca" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreZinnaElegans" 
            options={{
            drawerLabel: "Pagamentos", 
            headerTitle: "Pagamentos", 
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            
           

          </Drawer>
        </GestureHandlerRootView>
      );
}

export default function Layout() {
  return DrawerLayout();
}
