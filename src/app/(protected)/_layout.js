import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useAuth } from "../../hooks/Auth/index";
import { LinearGradient } from 'expo-linear-gradient';


function CustomDrawerContent(props) {

  const { user, signOut} = useAuth();
  

  return (
    
    <LinearGradient 
    style={{flex: 1,}}
    colors={['#dfe5e4','#ffe5d4','#ffc7a1']}
  >
      <View style={{marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    }}>
      <Image 
        source={require('../../../src/assets/images/usuario.png')} 
        style={{ width: 100,
          height: 100,
          borderRadius: 50,
          margin: 10, 
          marginTop: 80,}} 
        accessibilityLabel="Profile picture"
      /> 
      <Text style={{textAlign: 'center',
    fontSize: 20, fontFamily: 'sourGummy', color: '#006356'}}>
        {user?.user?.nome}
      </Text>
    </View>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    <TouchableOpacity 
      onPress={() => signOut()} 
      style={{justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        margin: 10,
        backgroundColor: "#ff893a",
        borderRadius: 9,}}
      activeOpacity={0.8}
    >
      <Text style={{color: "#fffefe",
    fontFamily: 'bold',}}>Deslogar</Text>
    </TouchableOpacity>
  </LinearGradient>

   
  );
}


const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="index" options={{drawerLabel: "Principal", headerTitle: "Principal", drawerIcon: ()=> <Ionicons name="home" size={20} color="#006356" /> }} />
                <Drawer.Screen name="cuidados" options={{drawerLabel: "Pesquise", headerTitle: "Pesquise", drawerIcon: ()=> <Ionicons name="search" size={20} color="#006356"/>}} />
                <Drawer.Screen name="ideias" options={{drawerLabel: "Inspire-se", headerTitle: "Inspire-se", drawerIcon: ()=> <Ionicons name="star" size={20} color="#006356" /> }} />
          
            
            <Drawer.Screen name="list" options={{drawerLabel: "Listagem", headerTitle: "Listagem", drawerIcon: ()=> <Ionicons name="list" size={20} color="#006356"/>}} />
            <Drawer.Screen name="payment" options={{drawerLabel: "Pagamentos", headerTitle: "Pagamentos", drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>}} />
            <Drawer.Screen 
            name="cacto" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,   
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="ervas" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="flores" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="folha" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="frutas" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,   
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="legumes" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAbacate" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAbacaxi" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAbobora" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAbobrinha" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAgriao" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAlcachofra" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAlecrim" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAlface" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,   
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAlho" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAlhoPoro" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAlmeirao" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAlocasiaWentii" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAmeixa" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,   
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAmora" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreAnturio" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreBaunilha" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreBerinjela" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreBromelia" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreCanela" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreCereja" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreCopo-de-Leite" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,   
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobrecosteladeado" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreCravo" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreCroton" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreEcheveraMexican" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreEcheveriaCarnicolor" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreEchinocactusGrusonii" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,   
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreEstragao" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreFigueiraDaIndia" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreFlorDeCerejeira" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,   
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreGeranios" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,   
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreGirassol" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreGollumJade" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreHaworthiaFasciata" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreHibisco" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreHortela" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreJaca" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreKiwi" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreLaranja" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,   
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreLimao" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreLirio" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreMammillariaGracilis" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreMarantaTricolor" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,   
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreOregano" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreOrquidea" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobrePacov" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobrePaeonia" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,   
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobrePlantaFantasma" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreRepolho" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreRosa" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreSalsao" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,   
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreSalsicha" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobresamambaia" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreSedumMorganianum" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreTomilho" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,   
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreTulipas" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreUva" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreZamiculca" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
            drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>,
            drawerItemStyle: { display: 'none' }
            }} 
            />
            <Drawer.Screen 
            name="sobreZinnaElegans" 
            options={{
            drawerLabel: "Pagamentos", 
            headerShown: false,  
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
