import { useFonts } from "expo-font";
import { createContext, useContext } from "react";

const FontContex = createContext({})

export function FontProvider({children}) {

    const [loaded, error] = useFonts({
        regular: require("../../assets/")
    });

    return <FontContex.Provider value={{}}>{children}</FontContex.Provider>;
}

export function useFont() {
    const context = useContext(FontContex)
    if(!context) {
        throw new Error("useFont must be used within a FontProvider");
    }
    return context;
}