import { StyleSheet } from "react-native";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nosso aplicativo 🪴</Text>
            <Text>Explore uma nova maneira de cuidar das suas plantas com nosso aplicativo, a ferramenta 
                essencial para todos os amantes de plantas. Projetado para facilitar o cuidado diário e a 
                manutenção de suas plantas, ele transforma a experiência de jardinagem em algo prático e 
                prazeroso. Com funcionalidades que atendem tanto iniciantes quanto jardineiros experientes,
                 você poderá gerenciar suas plantas de forma eficiente e garantir que elas recebam toda a 
                 atenção que merecem. Venha cultivar seu conhecimento e suas plantas de maneira mais 
                 organizada!</Text>
                <Text>Funcionalidades</Text>
                <Text>Lembretes Personalizados: Crie alertas para regar, fertilizar e podar suas plantas.
                     Cronograma de Cuidados: Um calendário interativo para planejar atividades específicas.
                     Informações sobre Plantas: Dicas e orientações sobre diferentes espécies e suas necessidades.
                </Text>
                <Text>Apresente o aplicativo como uma ferramenta essencial para amantes de plantas, que 
                     ajuda a gerenciar o cuidado diário e o cronograma de manutenção.</Text>
            <Button style={{justifyContent:"center", alignItems: 'center', height: 50, margin: 10, backgroundColor:"#ff893a", borderRadius: 9,}} title="Voltar" onPress={() => { router.replace("/") }} />
                
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        position: "absolute",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20, 
        color: "#333", 
    },
});
