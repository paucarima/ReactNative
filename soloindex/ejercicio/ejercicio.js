ejecutarCadena=(fn)=>{
    let cmp=document.getElementById("txtValor");
    let valor=cmp.value;
    fn(valor);//llama a la funcion
}

mayuscula=(texto)=>{
    let textoMayuscula=texto.toUpperCase();
    console.log('Hola '+textoMayuscula);
    return textoMayuscula;
}

contar=(texto)=>{
    let contarLetra=texto.length;
    alert("La cadena tiene "+contarLetra+ " caracteres.");
    return contarLetra;
}
