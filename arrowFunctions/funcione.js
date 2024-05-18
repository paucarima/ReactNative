/*ejecutarSumar=()=>{
   /* let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    let resultadoSuma;
    console.log("VALOR 1>>>>> "+valor1+" VALOR 2>>> "+valor2);
    resultadoSuma=sumar(valor1,valor2);
    console.log(resultadoSuma);
    ejecutarOperacion(sumar);
}*/

sumar=(sum1,sum2)=>{
    let resultado;
    resultado=sum1+sum2;
    return resultado;
}



restar=(rest1,rest2)=>{
    let resultado;
    resultado=rest1-rest2;
    return resultado;
}

ejecutarOperacion=(operar)=>{
    let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    let resultado;
    resultado=operar(valor1,valor2);
    console.log(resultado);

}


ejecutar=(fn)=>{
    console.log("ejecuntando funciones...");
    fn();//ESTO INDICA QUE EJECUTE ESTA FUNCION
}

imprimir=()=>{
    console.log("estoy imprimiendo");
}

saludar=()=>{
    alert("APRENDIENDO PROGRAMACIÒN FUNCIONAL");
}

testEjecutar=()=>{
    ejecutar(imprimir);
    ejecutar(saludar);
    ejecutar(()=>{
        alert("soy una funcion si nombre");
    });
}