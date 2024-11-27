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
           
             {/* 
            <Drawer.Screen name="list" options={{drawerLabel: "Listagem", headerTitle: "Listagem", drawerIcon: ()=> <Ionicons name="list" size={20} color="#006356"/>}} />
            <Drawer.Screen name="payment" options={{drawerLabel: "Pagamentos", headerTitle: "Pagamentos", drawerIcon: ()=> <Ionicons name="cash" size={20} color="#006356"/>}} />
            */}
            <Drawer.Screen 
                  name="cacto" 
                  options={{
                    drawerLabel: () => null, // Oculta o texto no Drawer
                    drawerIcon: () => null,  // Remove o ícone no Drawer
                    headerShown: false       // Não mostra o cabeçalho padrão da tela
                  }} 
                />
            <Drawer.Screen 
                  name="ervas" 
                  options={{
                    drawerLabel: () => null, // Oculta o texto no Drawer
                    drawerIcon: () => null,  // Remove o ícone no Drawer
                    headerShown: false       // Não mostra o cabeçalho padrão da tela
                  }} 
                />
            <Drawer.Screen 
                  name="flores" 
                  options={{
                    drawerLabel: () => null, // Oculta o texto no Drawer
                    drawerIcon: () => null,  // Remove o ícone no Drawer
                    headerShown: false       // Não mostra o cabeçalho padrão da tela
                  }} 
                />
            <Drawer.Screen 
                  name="frutas" 
                  options={{
                    drawerLabel: () => null, // Oculta o texto no Drawer
                    drawerIcon: () => null,  // Remove o ícone no Drawer
                    headerShown: false       // Não mostra o cabeçalho padrão da tela
                  }} 
                />
            <Drawer.Screen 
                  name="legumes" 
                  options={{
                    drawerLabel: () => null, // Oculta o texto no Drawer
                    drawerIcon: () => null,  // Remove o ícone no Drawer
                    headerShown: false       // Não mostra o cabeçalho padrão da tela
                  }} 
                />
            <Drawer.Screen 
                  name="sobreAlocasiaWentii" 
                  options={{
                    drawerLabel: () => null, // Oculta o texto no Drawer
                    drawerIcon: () => null,  // Remove o ícone no Drawer
                    headerShown: false       // Não mostra o cabeçalho padrão da tela
                  }} 
                />
            <Drawer.Screen 
                  name="sobreAnturio" 
                  options={{
                    drawerLabel: () => null, // Oculta o texto no Drawer
                    drawerIcon: () => null,  // Remove o ícone no Drawer
                    headerShown: false       // Não mostra o cabeçalho padrão da tela
                  }} 
                />
            <Drawer.Screen 
                  name="sobreBromelia" 
                  options={{
                    drawerLabel: () => null, // Oculta o texto no Drawer
                    drawerIcon: () => null,  // Remove o ícone no Drawer
                    headerShown: false       // Não mostra o cabeçalho padrão da tela
                  }} 
                />
            <Drawer.Screen 
                  name="sobreCopo-de-Leite" 
                  options={{
                    drawerLabel: () => null, // Oculta o texto no Drawer
                    drawerIcon: () => null,  // Remove o ícone no Drawer
                    headerShown: false       // Não mostra o cabeçalho padrão da tela
                  }} 
                />
            <Drawer.Screen 
                  name="sobrecosteladeado" 
                  options={{
                    drawerLabel: () => null, // Oculta o texto no Drawer
                    drawerIcon: () => null,  // Remove o ícone no Drawer
                    headerShown: false       // Não mostra o cabeçalho padrão da tela
                  }} 
                />
            <Drawer.Screen 
                  name="sobreCroton" 
                  options={{
                    drawerLabel: () => null, // Oculta o texto no Drawer
                    drawerIcon: () => null,  // Remove o ícone no Drawer
                    headerShown: false       // Não mostra o cabeçalho padrão da tela
                  }} 
                />
            <Drawer.Screen 
                  name="sobreMarantaTricolor" 
                  options={{
                    drawerLabel: () => null, // Oculta o texto no Drawer
                    drawerIcon: () => null,  // Remove o ícone no Drawer
                    headerShown: false       // Não mostra o cabeçalho padrão da tela
                  }} 
                />
            <Drawer.Screen 
                  name="sobrePacov" 
                  options={{
                    drawerLabel: () => null, // Oculta o texto no Drawer
                    drawerIcon: () => null,  // Remove o ícone no Drawer
                    headerShown: false       // Não mostra o cabeçalho padrão da tela
                  }} 
                />
            <Drawer.Screen 
                  name="sobresamambaia" 
                  options={{
                    drawerLabel: () => null, // Oculta o texto no Drawer
                    drawerIcon: () => null,  // Remove o ícone no Drawer
                    headerShown: false       // Não mostra o cabeçalho padrão da tela
                  }} 
                />
            <Drawer.Screen 
                name="sobreZamiculca" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="list" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="folha" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="payment" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreOrquidea" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreRosa" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobrePaeonia" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreLirio" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreZinnaElegans" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreGeranios" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreGirassol" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreFlorDeCerejeira" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreTulipas" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreHibisco" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreHaworthiaFasciata" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreEcheveraMexican" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreEcheveriaCarnicolor" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreSedumNussbaumerianum" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreGollumJade" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobrePlantaFantasma" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreMammillariaGracilis" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreEchinocactusGrusonii" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreFigueiraDaIndia" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            
            <Drawer.Screen 
                name="sobreOregano" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreAlhoPoro" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreAlecrim" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreTomilho" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreSalsicha" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreEstragao" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreHortela" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreBaunilha" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreCanela" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreCravo" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreAbacate" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreAmora" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreLaranja" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreUva" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreCereja" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreLimao" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreAmeixa" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreKiwi" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreJaca" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />
            <Drawer.Screen 
                name="sobreAbobora" 
                options={{
                  drawerLabel: () => null, // Oculta o texto no Drawer
                  drawerIcon: () => null,  // Remove o ícone no Drawer
                   headerShown: false       // Não mostra o cabeçalho padrão da tela
                 }} 
                 />






           

          </Drawer>
        </GestureHandlerRootView>
      );
}

export default function Layout() {
  return DrawerLayout();
}
