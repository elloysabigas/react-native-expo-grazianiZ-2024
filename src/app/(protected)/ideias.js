import { Button, Text, View } from "react-native";
import { useAuth } from "../../hooks/Auth/index.js";
import { Banner } from "../../components/Banner/ideias.js";

export default function Home(){

    const {signOut} = useAuth();

    return(
        <View style={{flex:1}}>
            <Banner />
            <Text></Text>
        </View> 
    );
}