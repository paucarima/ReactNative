import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { getGrades } from "../services/GradeServices";
import { FAB } from "@rneui/base";
import { ListItem, Avatar } from "@rneui/themed";
import { useState } from "react";

export const ListGrades = ({ navigation }) => {
  const [time, setTime] = useState();

  //sirve para refrescar la lista
  const refreshList = () => {
    setTime(new Date().getTime());
  };
  const ItemGrade = ({ nota }) => {
    //contenedor notas listContente
    return (
      <TouchableHighlight 
        style={{ flex: 1, backgroundColor: "red", width: "auto" }}
        onPress={() => {
          navigation.navigate("GradeFormNav", {
            notita: nota,
            fnRefresh: refreshList,
          });
        }}
      >
        <ListItem bottomDivider>
         <Avatar
            title={nota.subject.substring(0, 1)}
            containerStyle={{ backgroundColor: "#6733b9" }}
            rounded
          /> 

          <ListItem.Content 

          // style={{ backgroundColor: "red", width: 200, height: 200, borderWidth:2 }}
          >
            <ListItem.Title>{nota.subject}</ListItem.Title>
            <ListItem.Subtitle>{nota.grade}</ListItem.Subtitle>
          </ListItem.Content>

          <ListItem.Chevron />
        </ListItem>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.titleContainer}>
      <FlatList
        data={getGrades()}
        renderItem={({ item }) => {
          return <ItemGrade nota={item} />;
        }}
        keyExtractor={(item) => {
          return item.subject;
        }}
        extraData={time}
      />
      <FAB
        title="+"
        placement="right"
        onPress={() => {
          navigation.navigate("GradeFormNav", {
            notita: null,
            fnRefresh: refreshList,
          });
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: "#fff",


  },
});
