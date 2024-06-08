import { View,StyleSheet,Text} from "react-native";
import {Input,Button} from "@rneui/base";
import{useState} from 'react';
import {saveGrade} from '../services/GradeServices';
import {updateGrade} from '../services/GradeServices';

export const GradeForm=({navigation, route})=>{
    let isNew=true;
    let subjectR;
    let gradeR;
    if (route.params.notita!=null) {
        isNew=false;
    }
    if (!isNew) {
        //recupera la lista
        subjectR=route.params.notita.subject;
        gradeR=route.params.notita.grade;
    }
    const[subject,setSubject]=useState(subjectR);
    const[grade,setGrade]=useState(gradeR==null?null:gradeR+"");
    const[errorSubject,setErrorSubject]=useState<null|undefined>();
    const[errorGrade,setErrorGrade]=useState();
    const hasErrors=false;

    const save=()=>{
        setErrorGrade(null);
        setErrorSubject(null);
        validate();
        if (!hasErrors) {
            if (isNew) {
                saveGrade({subject:subject,grade:grade});
            } else {
                updateGrade({subject:subject,grade:grade} )
            }
           
            navigation.goBack();
            route.params.fnRefresh();
        }
   
    }
    const validate=()=>{
        console.log("SUBJECT", subject);
        if (subject==null || subject=="") {
            setErrorSubject("Debe ingresar una materia");
            hasErrors=true;
        }
        let gradeFloat=parseFloat(grade);
         if (gradeFloat==null || isNaN(gradeFloat)|| gradeFloat<0|| gradeFloat>10) {
            setErrorGrade("Debe Ingresar una nota entre 0 y 10");
            hasErrors=true;
         }

    }
    return <View style={styles.stepContainer}>
        <Text>FORMULARIO DE NOTAS</Text>
        <Input
            value={subject}
            onChangeText={setSubject}
            placeholder="Ejemplo:Matematicas"
            label="Materia"
            inputStyle={styles.inputText}
            errorMessage={errorSubject}
            disabled={!isNew}
        />
        <Input
            value={grade}
            onChangeText={setGrade}
            placeholder="0-10"
            label="Notas"
            inputStyle={styles.inputText}
            errorMessage={errorGrade}
            keyboardType="numeric"
        />
        <Button
            title="Guardar"
            icon={{
                name:"save",
                type:"entypo",
                color:"white"
            }}
        buttonStyle={styles.saveButton}
        onPress={save}
        />
    </View>
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
    saveButton:{
        backgroundColor:'green',
    },
    inputText:{
       color:'white'
    }
  });