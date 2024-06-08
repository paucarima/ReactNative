import { View,Text,StyleSheet,Button } from "react-native";
import { FAB } from "@rneui/base";

export const RegistrosForm = ({navigation}) => {
    return( 
    <View style={styles.container}>
       <Text style={styles.texto}>FINALIZAR SESION</Text>
 
 
     
        <View  style={styles.boton}>
     
        <Button
         
            title='SALIR'
            onPress={()=>{
                navigation.navigate('LoginNav');
            }}        
        />
        
        
        </View>

    
    </View>);
   
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
  
    }, boton: {
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
  },
  texto:{
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding:10,
  }
  });