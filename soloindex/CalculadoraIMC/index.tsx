import { Image, StyleSheet, Platform,View,Button, Text, TextInput} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';


export default function HomeScreen() {
  const[peso,setPeso]=useState('');
  const[estatura,setEstatura]=useState('');
  const[resultado,setResultado]=useState('');
  const[obs,setObservacion]=useState('');
  return (
    <View style={styles.container}>
    <Text  style={styles.titulo}>EJEMPLO MARGIN</Text>
    <Text  style={styles.subTitulo}>Peso(kg)</Text>
    <TextInput
    style={styles.caja}
    value={peso}
    onChangeText={setPeso}       
    keyboardType="numeric"
    />
     <Text  style={styles.subTitulo}>Estatura(cm)</Text>
    <TextInput
      style={styles.caja}
      value={estatura}
      onChangeText={setEstatura}
      keyboardType="numeric"   
      />
      <View style={styles.boton}>
      <Button
        title='CALCULAR'
        onPress={()=>{
          let pesoInt=parseInt(peso);
          let pesoFloat=parseFloat(peso);
          let estaturaMetros=parseFloat(estatura)/100;
          let imc=pesoFloat/(estaturaMetros*estaturaMetros);
          setResultado(imc.toFixed(2));
          if (imc<18.5) {
            setObservacion("Su peso es inferior al normal");
          }else if (imc>=18.5 && imc<25.0) {
            setObservacion("Su peso es normal");
          }else if (imc>=25.0 && imc<30.0) {
            setObservacion("Su peso es superior al normal");
          }else if(imc>=30.00){
            setObservacion("Tiene obesidad");
          }

        }}    
      />
      </View>
     
      <Text  style={styles.titulo}>TU IMC ES: {resultado} </Text>
      <Text  style={styles.subTitulo}>{obs} </Text>
  </View>                 
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    flexDirection: 'column',//eje principal (vertical)
    justifyContent:'flex-start',//vertical
    alignItems: 'stretch',//horizontal
    paddingHorizontal:20, 
    marginVertical:50
  },
  caja: {
    borderColor: 'gray',
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10,
    marginBottom:20, // borde de afuera
    borderRadius: 30,
    
  },
  titulo:{
    fontSize:16,
    marginVertical:20,
    marginBottom:20,
    fontWeight:'bold',   
  },
  subTitulo:{
    fontSize:16,
    marginBottom:20,
    fontWeight:'black',   
  },
  boton: {
    borderRadius: 30,
    overflow: 'hidden',
  },

});
