import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";
import { useState } from "react";
import { createDocTipoService } from "../services/TestServices";
//EXPORT PARA UTILI8ZAR EN OTROS ARCHIVOS
export const PostForm = ({navigation}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createPost = () => {
    createDocTipoService(
        {
            title:title,
            body:content,
        },
        ()=>{
            Alert.alert("Confirmacion", "Se ha ingresado un nuevo POST TD");
        }
    );
    console.log(title);
    console.log(content);
  };
  return (
    <View style={styles.container}>
      <Text>Plantilla</Text>
      <Text>Codigo</Text>
      <TextInput style={styles.caja} value={title} onChangeText={setTitle} />
      <Text>Tipo Documento</Text>
      <TextInput
        style={styles.caja}
        value={content}
        onChangeText={setContent}
      />
      <Button
        title="validar"
        onPress={() => {
        
          createPost();
        }}
      />
          <Button
        title="IR A HOME"
        onPress={() => {
          navigation.navigate("TestWebServicesNav");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "stretch",
  },
  caja: {
    borderColor: "gray",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
    marginBottom: 20, // borde de afuera
    borderRadius: 30,
  },
});
