import { Pressable, Modal, StyleSheet, Platform, View,Text,FlatList, TextInput,Button, Alert,ScrollView, TouchableOpacity  } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';
import {useState,  useEffect } from 'react';


let productos=[
  {codigo:'DO',nombre:'Doritos',categoria:'Snacks', precioC:'0.20', precioV:'0.40'},
  {codigo:'MA',nombre:'Manicho',categoria:'Golosinas', precioC:'0.30', precioV:'0.60'},
  {codigo:'CH',nombre:'Chupete',categoria:'Golosinas', precioC:'0.10', precioV:'0.20'},

];
//esnuevo indica si esta creando una nueva persona o se esta modificando una existente
let esNuevo=true;
//esta variable almacena el indice del arrelgo del elemento seleccionado para edicion
let indiceSeleccionado=-1;
export default function HomeScreen() {
  const[txtCodigo, setTxtCodigo]=useState();
  const[txtNombre, setTxtNombre]=useState();
  const[txtCategoria, setTxtCategoria]=useState();
  const[txtCompra, setTxtCompra]=useState();
  const[txtVenta, setTxtVenta]=useState();
  const[numElementos, setElementos]=useState();
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    
    if (!(txtCompra==null)) {
      let compra=parseFloat(txtCompra);
      if (!isNaN(compra)) {
        let porcentajeVenta=compra*0.2;
        const totalVenta=porcentajeVenta+compra;
        setTxtVenta("$ "+(totalVenta).toFixed(2).toString());
      }else {
        setTxtVenta('');
      }
    }else{
      setTxtVenta('');
    }

  }, [txtCompra]);

  

  //actualiza y eliminar productos
let ItemProducto=({indice,producto})=>{
  const Editar=()=>{
    setTxtCodigo(producto.codigo);
    setTxtNombre(producto.nombre);
    setTxtCategoria(producto.categoria);
    setTxtCompra(producto.precioC);
    const compra=parseFloat(producto.precioC);
    if (!isNaN(compra)) {
        let porcentajeVenta=compra*0.2;
        const totalVenta=porcentajeVenta+compra;
        setTxtVenta((totalVenta).toFixed(2).toString());
    }else{
      setTxtVenta('');
    }
    
    console.log(producto);
    esNuevo=false;
    indiceSeleccionado=indice;
  }
 
  return ( 
    <View style={styles.itemProducto}>
    <View style={styles.itemIndice}>
    <Text style={styles.textSecundario}>{producto.codigo}</Text>
    </View>
  <View style={styles.itemContenido}>
  <Text style={styles.textPrincipal}>
      {producto.nombre} 
  </Text> 
  <Text style={styles.textSecundario}>
      {'\n'}
      {producto.categoria}
  </Text> 
  </View>
    <View style={styles.itemPrecio}>
    <Text style={styles.textSecundario}>
      {producto.precioV}
  </Text> 
    </View>
   

  <View style={styles.itemBotones}>
  <TouchableOpacity 
  style={styles.itemBotonEditar} onPress={Editar}>
  <Text>E</Text>
  </TouchableOpacity>
  <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>"Está seguro que quiere eliminar?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible)
                indiceSeleccionado=indice;
                productos.splice(indiceSeleccionado,1);
                console.log("arreglo productos",productos);
                setElementos(productos.length);
              }}
              >
              <Text style={styles.textStyle}>ACEPTAR</Text>
            </Pressable>
            <Text style={styles.textSecundario}>
              {'\n'}
            </Text> 
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>CANCELAR</Text>
            </Pressable>

          </View>
        </View>
  </Modal>
  <Pressable
        style={[styles.buttonOpen, styles.itemBotonEliminar]}
        onPress={() => setModalVisible(true)}>
        <Text>X</Text>
  </Pressable>
  </View>



  </View>
  

  );
}


//limpiar productos
  let limpiar=()=>{
    setTxtCodigo(null);
    setTxtNombre(null);
    setTxtCategoria(null);
    setTxtCompra(null);
    setTxtVenta(null);


    esNuevo=true;

  }
  //duplicado
  let existeProductos=()=>{
    for (let i = 0; i<productos.length; i++) {
      if (productos[i].codigo==txtCodigo) {
        return true;
      }
    }
  }
  //para guardar
  let guardarProducto=()=>{
    if(esNuevo){
      if(existeProductos()) {
        Alert.alert("INFO","Ya existe un producto con el codigo "+txtCodigo);
      }else if(validarCampos()){
        //ingresar datos ala array    
      
        //deben ser igual a los nombres del arreglo para no tener problemas
        let producto={codigo:txtCodigo,nombre:txtNombre,categoria:txtCategoria,precioC:txtCompra,precioV:txtVenta};

        productos.push(producto);
        console.log("PRODUCTOS",productos); 
      
      }
    }else{
      productos[indiceSeleccionado].nombre=txtNombre;
      productos[indiceSeleccionado].categoria=txtCategoria;
      productos[indiceSeleccionado].precioC=txtCompra;
      productos[indiceSeleccionado].precioV=txtVenta;
      
    }
    limpiar();
    setElementos(productos.length);
  }


  const validarCampos = () => {
    if (txtCodigo==null) {
      Alert.alert('Error', 'El campo CODIGO no puede estar vacío');
      return false;
    }
    if (txtNombre==null) {
      Alert.alert('Error', 'El campo NOMBRE no puede estar vacío');
      return false;
    }
    if (txtCategoria==null) {
      Alert.alert('Error', 'El campo CATEGORIA no puede estar vacío');
      return false;
    }
    if (txtCompra==null) {
      Alert.alert('Error', 'El campo PRECIO DE COMPRA debe ser un numero');
      return false;
    }
    if (txtVenta==null) {
      Alert.alert('Error', 'El campo PRECIO DE VENTA debe ser un numero');
      return false;
    }
    return true;
  };


  return (
      <View style={styles.container}>
       
        <View style={styles.areaCabecera}>
        <ScrollView>
          <Text style={styles.text}>PRODUCTOS</Text>
          <TextInput
              style={styles.txt}
              value={txtCodigo}
              placeholder='CODIGO'
              onChangeText={setTxtCodigo}
               editable={esNuevo}
            />
            <TextInput
              style={styles.txt}
              value={txtNombre}
              placeholder='NOMBRE'
              onChangeText={setTxtNombre}
            />
             <TextInput
              style={styles.txt}
              value={txtCategoria}
              placeholder='CATEGORIA'
              onChangeText={setTxtCategoria}
            />
             <TextInput
              style={styles.txt}
              value={txtCompra}
              placeholder='PRECIO DE COMPRA'
              onChangeText={setTxtCompra}
              keyboardType="numeric" 
            />
             <TextInput
              style={styles.txt}
              value={txtVenta}
              placeholder='PRECIO DE VENTA'
              onChangeText={setTxtVenta}
              editable={false}//se pasa un valor boolean
              keyboardType="numeric" 
            />
 
            </ScrollView>
            </View>
            
            <View style={styles.areaBotones}>
                <Button
                  title='Guardar'
                  onPress={()=>{
                      guardarProducto();
                  }}
                />
                 <Button
                  title='Nuevo'
                  onPress={()=>{
                    limpiar();
                  }}
                />
            </View>
            <Text> Elementos:{numElementos}</Text>
      
       <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={productos}
          renderItem={({index,item})=>{
            return (<ItemProducto indice={index} producto={item}/>);
          }}
          keyExtractor={item=> item.codigo}
        
        />
         </View>
        <StatusBar style='auto'/>
        <View style={styles.areaPie}>
        <Text style={styles.textSecundario}>Autor: Paola Paucarima10:00</Text>
        </View>
      </View>
      
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'stretch',
    paddingTop:50,
    paddingHorizontal:10,
   
  },
  lista:{
   // backgroundColor:'lightpink',

  },
 
  text:{
    fontSize: 30,
    paddingHorizontal: 10,
    textAlign: 'center', // Centra el texto horizontalmente 
  
 
  },
  textPrincipal:{
    fontSize: 18,
    flexDirection: 'column',
    justifyContent: 'center',     
    textAlign:'center',     

  },
  textSecundario:{
    fontStyle: 'normal',
    fontWeight:'bold',  
    fontSize: 14,
    paddingHorizontal:10,
    paddingStart:4, 
    alignItems:'center',
    textAlign:'center',          
  },
  areaCabecera:{
    flex:4,
    //backgroundColor:"peachpuff",
    justifyContent:'center',
  },
  areaContenido:{
    flex:6,
    //backgroundColor:"skyblue",
   
  },
  areaPie:{
    flex:1,
    backgroundColor:"springgreen",
    justifyContent:"center",
    alignItems:"flex-end",
  },
  itemProducto:{
   // backgroundColor: 'lemonchiffon',
     marginBottom: 9,
     padding: 2,
     borderColor: 'gray', // Color del borde
     borderWidth: 1, // Ancho del borde
     borderRadius: 5, // Bordes redondeados
     flexDirection:"row",
   },
  itemIndice:{
    backgroundColor:'gray',
    flex:3,
    alignItems:'center',
    justifyContent:'center',

  },
  itemContenido:{
    paddingLeft:2,
    //backgroundColor:'tomato',
    flex:6,
    alignItems:'flex-start'
  },
  itemPrecio:{
    paddingLeft:5,
    backgroundColor:'chartreuse',
    flex:5,
    alignItems:'center',
    justifyContent:'center',
  },
  itemBotones:{
    flexDirection:'row',
    paddingLeft:5,
    //backgroundColor:"darkorange",
    flex:6,
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  itemBotonEditar:{
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    padding: 8,
  },
  itemBotonEliminar:{
    alignItems: 'center',
    backgroundColor: 'lightcoral',
    padding: 8,
  },
  buttonOpen: {
    backgroundColor: 'lightgrey',
  },
  txt:{
    borderWidth:1,
    borderColor:'black',
    paddingTop:3,
    paddingHorizontal:5,
    marginBottom:5,
  },
  areaBotones:{
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
