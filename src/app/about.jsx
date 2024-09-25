import { Image, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Button, Text, View, ScrollView } from "react-native";

export default function About() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.image} source={require('../../src/assets/icon.png')} />
            <Text style={styles.title}>Nosso Aplicativo 🪴</Text>
            <Text style={styles.text1}>
                Explore uma nova maneira de cuidar das suas plantas com nosso aplicativo, a ferramenta essencial para todos os amantes de plantas. 
                Projetado para facilitar o cuidado diário e a manutenção de suas plantas, ele transforma a experiência de jardinagem em algo prático e prazeroso. 
                Com funcionalidades que atendem tanto iniciantes quanto jardineiros experientes, você poderá gerenciar suas plantas de forma eficiente e garantir que elas recebam toda a atenção que merecem. 
                Venha cultivar seu conhecimento e suas plantas de maneira mais organizada!
            </Text>

            <Text style={styles.text2}>🌟 Funcionalidades 🌟</Text>
            <Text style={styles.text3}>
                • Lembretes Personalizados: Crie alertas para regar, fertilizar e podar suas plantas.
            </Text>

            <Text style={styles.text3}>
                • Cronograma de Cuidados: Um calendário interativo para planejar atividades específicas.
            </Text>

            <Text style={styles.text3}>
                • Informações sobre Plantas: Dicas e orientações sobre diferentes espécies e suas necessidades.
            </Text>

            <Text style={styles.text4}>
                Apresente o aplicativo como uma ferramenta essencial para amantes de plantas, que ajuda a gerenciar o cuidado diário e o cronograma de manutenção.
            </Text>

            <Button
                title="Voltar"
                onPress={() => { router.replace("/") }}
                color="#ff893a"
                accessibilityLabel="Voltar para a tela inicial"
                style={styles.button}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:-100,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f9f9f9",
    },
    title: {
        marginTop:-109,
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#4a4a4a",
        textAlign: "center",
    },
    text1: {
        fontSize: 16,
        color: "#555",
        marginBottom: 20,
        textAlign: "justify",
    },
    text2: {
        fontSize: 22,
        fontWeight: "600",
        color: "#333",
        marginVertical: 10,
        textAlign: "center",
    },
    text3: {
        fontSize: 16,
        color: "#555",
        marginBottom: 20,
        textAlign: "justify",
        lineHeight: 24,
    },
    text4: {
        fontSize: 16,
        color: "#555",
        marginBottom: 30,
        textAlign: "justify",
    },
    button: {
        justifyContent: "center",
        alignItems: 'center',
        height: 50,
        margin: 10,
        backgroundColor: "#ff893a",
        borderRadius: 9,
        color: "#fff",
    },
    image: {
        width: 400,
        height: 400,
        resizeMode: "contain",
        marginBottom: 20,
    }
});
