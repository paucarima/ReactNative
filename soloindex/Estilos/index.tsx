import { Image, StyleSheet, Platform, Button, View} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
   <View style={styles.stepContainer}> 
      <Button title='COMP1'/>
      <Button title='COMP2'/>
      <Button title='COMP3'/>
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
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    flex:10,
    backgroundColor:'#fff',
    flexDirection:"column",
    justifyContent:"space-between",//principal-horizonta jp
    alignItems:"stretch"//secundario-vertical
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
