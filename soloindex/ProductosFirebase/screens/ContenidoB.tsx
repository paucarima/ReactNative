import { View,Text,StyleSheet } from "react-native";

export const ContenidoB=()=>{
    return (
        <View style={styles.container}>
            <Text>CONTENIDO B</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'stretch',
        backgroundColor:'white'
    }
});