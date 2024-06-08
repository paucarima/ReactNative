import { Image, StyleSheet, Platform,View,TextInput, Button} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React,{ useState } from 'react';


import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const[var1,setVar1]=useState("");
  const[var2,setVar2]=useState("");
  const[total,setTotal]=useState("");
 


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
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Numero 1</ThemedText>
          <View style={styles.stepContainer}>
            <TextInput
              style={styles.cajaTexto}
              value={var1}
              onChangeText={(txt)=>{
                console.log("valor>>>"+txt);
                //parseInt(txt, 10);
                setVar1(txt);
           }}
              keyboardType="numeric"
            />
            <StatusBar style="auto"/>
          </View>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Numero 2</ThemedText>
        <View style={styles.stepContainer}>
            <TextInput
              style={styles.cajaTexto}
              value={var2}
              onChangeText={(txt)=>{
                console.log("valor>>>"+txt);
                //parseInt(txt, 10);
                setVar2(txt);     
           }}
              keyboardType="numeric"
            />
            <StatusBar style="auto"/>
          </View>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Total: {total}</ThemedText>
        <ThemedText>
           <Button
           title="SUMAR"
           onPress={()=>{
              let suma=parseInt(var1)+parseInt(var2);
              setTotal(suma.toString());
            }}
           />
        </ThemedText>
        <ThemedText>
        <View style={styles.stepContainer}>
        <Button
           title="RESTAR"
           onPress={()=>{
              let suma=parseInt(var1)-parseInt(var2);
              setTotal(suma.toString());
            }}
           />
        </View>
        </ThemedText>
        <ThemedText>
        <View style={styles.stepContainer}>
        <Button
           title="MULTIPLICAR"
           onPress={()=>{
              let suma=parseInt(var1)*parseInt(var2);
              setTotal(suma.toString());
            }}
           />
          </View>
       
          </ThemedText>
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
