import { Image, StyleSheet, Platform ,Text,View} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {GradeForm} from '../screens/GradeForm';
import {ListGrades} from '../screens/ListGrades';

export default function HomeScreen() {
  const StackGrades=createNativeStackNavigator();
  return (
        <StackGrades.Navigator>
          <StackGrades.Screen name='ListGradesNav' component={ListGrades}/>
          <StackGrades.Screen name='GradeFormNav' component={GradeForm}/>
          
        </StackGrades.Navigator>
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
