import { View, Text, StyleSheet, FlatList } from "react-native";
import { FAB, ListItem, Avatar } from "@rneui/base";

export const ListaProductos = () => {
  let productos = [
    { nombre: "Lechuga", precio: 9.5 },
    { nombre: "Tomate", precio: 8.5 },
    { nombre: "Fresas", precio: 7.5 },
    { nombre: "Melones", precio: 6.5 },
    { nombre: "Papas", precio: 5.5 },
    { nombre: "Cahito", precio: 4.5 },
    { nombre: "Manzana", precio: 3.5 },
    { nombre: "Hierbas", precio: 2.5 },
    { nombre: "Anis", precio: 1.5 },
    { nombre: "Zanahoria", precio: 0.5 },
  ];
  const ItemProducto = ({ producto }) => {
    return (
      <View style={styles.container}>
        <ListItem bottomDivider>
          <Avatar
            title={producto.nombre.substring(0, 1)}
            containerStyle={{ backgroundColor: "#6733b9" }}
            rounded
          />

          <ListItem.Content

          // style={{ backgroundColor: "red", width: 200, height: 200, borderWidth:2 }}
          >
            <ListItem.Title>{producto.nombre}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Subtitle>{producto.precio}</ListItem.Subtitle>
          </ListItem.Content>

          <ListItem.Chevron />
        </ListItem>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={productos}
        renderItem={({ item }) => {
          return <ItemProducto producto={item} />;
        }}
        keyExtractor={(item) => {
          return item.nombre;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
