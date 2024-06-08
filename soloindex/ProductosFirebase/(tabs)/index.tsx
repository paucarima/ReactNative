import "react-native-gesture-handler";
import { CambioClaveForm } from "../screens/CambioClave";
import { ListaProductos } from "../screens/ListaProducto";
import { LoginForm } from "../screens/Login";
import { ProductosForm } from "../screens/ProductoForm";
import { RegistrosForm } from "../screens/RegistroForm";
import { Image, StyleSheet, Platform } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { BackgroundImage, Input, Icon, Button, Divider } from "@rneui/base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContenidoA } from "../screens/ContenidoA";
import { ContenidoB } from "../screens/ContenidoB";

const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabContenidoA"
        component={ContenidoA}
        options={{
          headerShown: false,
          tabBarLabel: "Configuracion",
          tabBarIcon: ({ size, color }) => {
            return (
              <Icon name="user" size={size} color={color} type="ant-design" />
            );
          },
        }}
      />
      <Tab.Screen
        name="TabContenidoB"
        component={ContenidoB}
        options={{
          headerShown: false,
          tabBarLabel: "Acerca de",
          tabBarIcon: ({ size, color }) => {
            return (
              <Icon name="mail" size={size} color={color} type="ant-design" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const LoginNav = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginNavigation"
        component={LoginForm}
        options={{
          headerShown: false,
        }}
      />
      <LoginStack.Screen
        name="RegistroNavigation"
        component={RegistrosForm}
        options={{
          headerShown: false,
        }}
      />
      <LoginStack.Screen
        name="CambioClaveNavigation"
        component={CambioClaveForm}
        options={{
          headerShown: false,
        }}
      />
    </LoginStack.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black", // Color de fondo del encabezado
        },
        headerTintColor: "#fff", // Color del texto del encabezado
        headerTitleStyle: {
          fontWeight: "bold", // Estilo del título del encabezado
        },
      }}
    >
      <Drawer.Screen
        name="DrawerProductosNav"
        component={ProductoNav}
        options={{
          title: "Productos",
        }}
      />
      <Drawer.Screen
        name="DrawerEjemploTabs"
        component={TabNav}
        options={{
          title: "EjemploTabs",
        }}
      />
      <Drawer.Screen
        name="DrawerFinSesion"
        component={RegistroFormNav}
        options={{
          title: "Finalizar Sesion",
        }}
      />
      <Drawer.Screen
        name="DrawerLogin"
        component={LoginFormNav}
        options={{
          title: "Inicia Sesion",
        }}
      />
    </Drawer.Navigator>
  );
};

const ProductoNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="ListaProductosNav"
        component={ListaProductos}
        options={{
          title: "Lista de Productos",
        }}
      />
      <Stack.Screen
        name="RegistroFormNav"
        component={RegistrosForm}
        options={{
          title: "Formulario de Productos",
        }}
      />
       <Stack.Screen
        name="LoginNav"
        component={LoginForm}
        options={{
          title: "Inicio sesion**",
        }}
      /> 
    </Stack.Navigator>
  );
};
const RegistroFormNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="RegistroFormNav"
        component={RegistrosForm}
        options={{
          title: "Esta seguro de salir?",
        }}
      />
    </Stack.Navigator>
  );
};

const LoginFormNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="LoginNav"
        component={LoginForm}
        options={{
          title: "Inicia Sesión",
        }}
      />
    </Stack.Navigator>
  );
};

export default function HomeScreen() {
  const [login, setLogin] = useState(true);
  return (
    // condicion para entrar
    login ? <DrawerNav /> : <LoginNav />
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    position: "absolute",
  },
});
