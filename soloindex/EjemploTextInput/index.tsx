import { Image, StyleSheet, Platform,Text, View,TextInput, Button} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {  } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';


export default function HomeScreen() {
  //let nombre="Ingrese su nombre";
  const [nombre,setNombre]=useState("Ingrese su nombre");
  const[apellido, setApellido]=useState("Ingresa su apellido");
  const[nombreCompleto,setNombreCompleto]=useState("");
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ejemplo TextInout</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Nombre</ThemedText>
        <View style={styles.stepContainer}>
        <TextInput
         style={styles.cajaTexto}
         value={nombre}
         onChangeText={(txt)=>{
              console.log("valor>>>"+txt);
              setNombre(txt);
              
         }}
         />
         <StatusBar style="auto"/>
        </View>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Apellido</ThemedText>
        <View style={styles.stepContainer}>
        <TextInput
          style={styles.cajaTexto}
          value={apellido}
          onChangeText={(txt)=>{
            setApellido(txt);
          }}
        
        />
        </View>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">HOLA {nombreCompleto}</ThemedText>
        <Button
          title="Saludar"
          onPress={()=>{
            let completo=nombre+" "+apellido;
            setNombreCompleto(completo);
          }}
        
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  cajaTexto:{
    borderColor:"white",
    color:"white",
    borderWidth:1,
    padding:5,
    paddingHorizontal:10
  }
});
