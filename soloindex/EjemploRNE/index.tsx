import { Image, StyleSheet, Platform,Text,View,Alert} from 'react-native';

import { Button } from '@rneui/themed';

import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { Icon,Input } from '@rneui/base';
import {useState} from 'react';
 
export default function HomeScreen() {
  const [name,setName]=useState();
  return (
      <View style={styles.container}>
        <Text  style={styles.titleContainer}>RNE</Text>
        <Input
          value={name}
          onChangeText={setName}
          placeholder="Ingrese su nombre"
          label="Nombre"
        />
        <Text>{name}</Text>
        <Button
          title="ACEPTAR"
          icon={{
          name: 'check',
          type: 'antdesign',
          size: 15,
          color: 'white',
        }}
        onPress={()=>{
          Alert.alert("Info","Su nombre es "+name); 
        }}
        />
        <Button
          title="CANCELAR"
          icon={{
          name: 'close',
          type: 'antdesign',
          size: 15,
          color: 'white',
        }}
        />
        <Icon
          name='reddit'
          type='zocial'
          color='black'
        />
        <StatusBar style='auto'/>
      </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

  },
   container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',

  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
