import { Image, StyleSheet, Platform, Button,TextInput,View,Text} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const[dolar, setDolar]=useState('');
  const[resultado, setResultado]=useState('');
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
        <ThemedText type="title">Convertidor Dinero $</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">De Dolares a:</ThemedText>
        <View style={styles.stepContainer}>
            <TextInput    
            style={styles.cajaTexto}
            value={dolar}
            onChangeText={(txt)=>{
              console.log("valor >>>"+txt);
              setDolar(txt);
            }}
            keyboardType='numeric'
            />
            <StatusBar style='auto'/>
           
            
            <Button
              title='Pesos Mexicanos'
              onPress={()=>{
                let total=parseFloat(dolar)*18.50;
                setResultado(total.toString()+"mxn");
              }}
            />          
        </View>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <View style={styles.stepContainer}>         
            
            <Button
              title='Pesos Colombianos'
              onPress={()=>{
                let total=parseFloat(dolar)*4.60;
                setResultado(total.toString()+"COP");
              }}
            />          
        </View>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <View style={styles.stepContainer}>         
            
            <Button
              title='EUROS'
              onPress={()=>{
                let total=parseFloat(dolar)*0.90;
                setResultado(total.toString()+"EUR");
              }}
            />          
        </View>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">Total {resultado}</ThemedText>
  
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
