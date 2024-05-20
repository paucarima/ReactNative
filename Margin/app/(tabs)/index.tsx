import { Image, StyleSheet, Platform, View, Button, Text, TextInput} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { } from 'react-native-gesture-handler';
import { useState } from 'react';

export default function HomeScreen() {
  const[nombre,setNombre]=useState('');
  const[apellido,setApellido]=useState('');
  return (
      <View style={styles.container}>
        <Text  style={styles.titulo}>EJEMPLO MARGIN</Text>
        <TextInput
        style={styles.caja}
        value={nombre}
        onChangeText={setNombre}       
        placeholder='Ingresa su nombre' 
        />
        <TextInput
          style={styles.caja}
          value={apellido}
          onChangeText={setApellido}
          placeholder='Ingrese su apellido'
          
          />
          <Button
            title='OK'
          
          />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    flexDirection: 'column',//eje principal (vertical)
    justifyContent:'center',//vertical
    alignItems: 'stretch',//horizontal
    paddingHorizontal:10 
  },
  caja: {
    borderColor: 'gray',
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10,
    marginBottom:10 // borde de afuera
    
  },
  titulo:{
    fontSize:16,
    marginBottom:10,
    fontWeight:'bold',
    
  }
  
});
