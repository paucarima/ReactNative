import { View,Text,StyleSheet } from "react-native";

export const ContenidoA=()=>{
    return (
        <View style={styles.container}>
            <Text>CONTENIDO A</Text>
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