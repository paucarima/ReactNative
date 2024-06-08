import { Image, StyleSheet, Platform, Button, View} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View style={styles.containerN}> 
        <View style={styles.containerC}>
        <Button title='X'/>
        <Button title='Y'/>
        <Button title='Z'/>
        </View> 
        <View style={styles.containerV}>
        <View style={styles.containerR}>
        <View style={styles.containerAM}>
        <Button title='BOTON 1'/>
        <Button title='BOTON 2'/>
        </View>
        <View style={styles.containerB}>
        <Button title='OPERACION 1'/>
        <Button title='OPERACION 2'/>
        <Button title='OPERACION 3'/>
       
        </View>
      
        </View>
 
        </View>
        <View style={styles.containerA}>
        <Button title='ACCION 1'/>
        <Button title='ACCION 2'/>
        </View>
    
          
     
           
        <View style={styles.containerNA}>
        <Button title='BOTON FINAL'/>
          </View> 
      </View>

  );
}

const styles = StyleSheet.create({
  containerN: {
    flex:1,
    backgroundColor:'black',
    flexDirection: 'column',
    justifyContent:"space-around"
  },
  containerC: {
    flex:1,
    backgroundColor:'skyblue',
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems:'center'
   
  },
  containerV: {
    flex:6,
    backgroundColor:'green',
    flexDirection: 'column',
  },
  containerNA: {
    flex:1,
    backgroundColor:'orange',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'flex-start'
  },
  containerR: {
    flex:4,
    backgroundColor:'pink',
    flexDirection: 'row',
  },
  containerA: {
    flex:1,
    backgroundColor:'blue',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  containerAM: {
    flex:1,
    backgroundColor:'yellow',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems:'stretch'


  }, 
  containerB: {
    flex:1,
    backgroundColor:'white',
    flexDirection: 'column',
    justifyContent:'center'

  },
  
});
