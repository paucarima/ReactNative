import { View, StyleSheet } from "react-native";
import { Button, Text } from "@rneui/base";
import { getAllPostsService } from "../services/TestServices";
import { createPostService } from "../services/TestServices";
import { updatePostService } from "../services/TestServices";
import { getByUserIdService } from "../services/TestServices";
import { getXxServicio } from "../services/TestServices";
import { postYyyService } from "../services/TestServices";
import { updateZzzService } from "../services/TestServices";
import { getDocumentTypes } from "../services/TestServices";
import { useState } from "react";
export const TestWebServices = () => {
  const getAllPosts = () => {
    getAllPostsService();
  };
  const createPost = () => {
    createPostService();
  };
  const updatePost=()=>{
    updatePostService();
  };
  const getByUserId=()=>{
    getByUserIdService();
  };
  const getXx=()=>{
    getXxServicio();
  };
  const postYyy=()=>{
    postYyyService();
  };
  const putZzz=()=>{
    updateZzzService();
  };

  const documentos=()=>{
    getDocumentTypes();
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>MODULO 3</Text>
      <View style={styles.buttonContainer}>
        <Button title="Recuperar Posts" 
        onPress={getAllPosts} />
        <Button title="Crear Post"
        onPress={createPost} />
        <Button title="Actualizar Post" 
        onPress={updatePost}/>
        <Button title="Filtrar" 
        onPress={getByUserId}/>
        <Button title="GET XXX" 
        onPress={getXx}/>

        <Button title="POST YYY" 
        onPress={postYyy}/>

        <Button title="PUT ZZZ"
         onPress={putZzz}/>

        <Button title="TIPOS DE DOCUMENTO"
         onPress={documentos}/>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  textContainer: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 6,
    alignItems: "stretch",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
});
