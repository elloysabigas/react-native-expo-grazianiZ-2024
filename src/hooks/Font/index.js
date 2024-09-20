import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator, View, Text} from "react-native";

const FontContex = createContext({})

export function FontProvider({children}) {

    const [loaded, error] = useFonts({
        bold: require("../../assets/fonts/Montserrat-Bold.ttf"),
        black: require("../../assets/fonts/Montserrat-Black.ttf"),
        blackitalic: require("../../assets/fonts/Montserrat-BlackItalic.ttf"),
        regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
        semibold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
        light: require("../../assets/fonts/Montserrat-Light.ttf"),
        medium: require("../../assets/fonts/Montserrat-Medium.ttf"),
        thin: require("../../assets/fonts/Montserrat-Thin.ttf"),        extralight: require("../../assets/fonts/Montserrat-ExtraLight.ttf"),
        thinitalic: require("../../assets/fonts/Montserrat-ThinItalic.ttf"),
    });

    if (!loaded && !error) {
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                
                <Text style={{fontSize: 28, marginTop: 15}}>Carregando, por favor, aguarde...</Text>
                <ActivityIndicator size='large' color='0000ff' />
            </View>
        );
      }

    return <FontContex.Provider value={{loaded}}>{children}</FontContex.Provider>;
}

export function useFont() {
    const context = useContext(FontContex)
    if(!context) {
        throw new Error("useFont must be used within a FontProvider");
    }
    return context;
}