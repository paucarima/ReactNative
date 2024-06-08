import { Image, StyleSheet, Platform } from 'react-native';

import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../appn/screens/HomeScreen';
import {Contacts} from '../appn/screens/ContactsScreen';
import {Productos} from '../appn/screens/Productos';

const Stack=createNativeStackNavigator();
export default function HomeScreen() {
  return (
        <Stack.Navigator>
        <Stack.Screen name='HomeNav' component={Home}/>
        <Stack.Screen name='ContactsNav' component={Contacts}/>
        <Stack.Screen name='ProductoNav' component={Productos}/>
         
       
      </Stack.Navigator>
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
});
