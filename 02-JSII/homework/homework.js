// No cambies los nombres de las funciones.

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
return array[array.length-1];
}

function incrementarPorUno(array) {
  // "array" debe ser una arreglo de números enteros
  // Aumenta cada número por 1 y devuelve el array
  // Tu código:
   var lista1= new Array(array.length);
   for (i=0; i<array.length; i++){
   	lista1[i]=array[i]+1 ;
    
}
return lista1;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
array.push(elemento);
return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var salida="";
  for(i=0; i<palabras.length; i++){
    salida+=palabras[i]+" ";
}
// se aplica metodo "substring" se pasa como argumento la posicion 0 y el ultimo indice menos 1.
//y tomar todos los indices de ese rango. para eliminar el ultimo espacio del string incertado por el bucle.
  var salida1=salida.substring(0, salida.length-1);
return salida1;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 if(array.includes(elemento)){
   return true;
 }else{
 return false;
}
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser un array de enteros
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio=0;
  for(i=0; i<resultadosTest.length; i++){
    promedio+= resultadosTest[i];
   }
   return promedio/resultadosTest.length;
 }


function numeroMasGrande(numeros) {
  // "numeros" debe ser un array de enteros
  // Devuelve el número más grande
  // Tu código:
  // se aplica la funcion Math.max. esta funcion solo recibe argumento mas no arrays, se usa el spred operator "..."
  // para pasar de arrys a argunmentos
  return Math.max(... numeros);

}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
   //se declara variable acmulador como salida.
    var salida=1;
      // condicional para verificar si se recibe un solo argumento.
      if(arguments.length==1){
        return arguments[0];
        //condicional para validar si se recibe 2 o mas argumentos.para entrar en el for.
      }else if (arguments.length>=2){
        for(x=0;x<arguments.length; x++){
        salida*=arguments[x];
      }
      return salida;
      }else {
        return 0;
      }
     

}

function cuentoElementos(arreglo){
  // Realiza una función que retorne la cantidad de los elementos del arreglo que sean mayores a 18.
  // Tu código:
  //se declara variable contador.
  var arreglo1=0;
  for(x=0; x<arreglo.length; x++){
   //condicional para validar si en cada iteracion en el arreglo es mayor a 18 
    if(arreglo[x]>18){
    
    arreglo1++
		   
  }
  }return arreglo1;
  }




function todosIguales(arreglo) {
  // Escriba la función todosIguales, si todos los elementos de un arreglo son iguales
  // retornar true, caso contrario retornar false.
  // Tu código:
  
  let arreglo1= arreglo[0];
  for(i=0; i<arreglo.length; i++){
    if(arreglo[i]!==arreglo1) return false;
 

    }return true;
    }
  
  
  


  
  


function mesesDelAño(array) {
  // Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  // Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  //Solucion con metodo includes.
//   var meses =[];
// var mesesB=array.includes("Marzo","Noviembre","Enero");

//   function prueba(){
// 			if(mesesB==true){
//         meses.push("Marzo","Noviembre","Enero");
//         return meses;
//       }else{
//         return "No se encontraron los meses pedidos"
//       }
  var meses= [];
  //se declara el priemer for, con la condicional igualdad de marzo
  //se realiza anidacion de for e if al conprobarse el primer if.
  for(i=0; i<array.length; i++){
    if(array[i]=="Marzo"){
         meses.push("Marzo")
        for(j=0; j<array.length; j++){
           if(array[j]=="Noviembre"){
               meses.push("Noviembre")
               for(x=0; x<array.length; x++){
                   if(array[x]=="Enero"){
                       meses.push("Enero")
                     
                       
                   }
               }

           }
        }

    }
}// para retornar la variable se hace una validacion en el array.
//se valida si se añadieron 3 elementos. 
if (meses.length===3){
return meses;
}else{
return "No se encontraron los meses pedidos";
}

}

function breakStatement(numero) {
  // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array. 
  // Devolver el array
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  // devolver: "Se interrumpió la ejecución"
  // Pista: usá el statement 'break'
  // Tu código:
  var array= [];
 var i=0;
  while(i<10){
      numero= numero+2;
      i++
      if(numero==[i]){
        return "Se interrumpió la ejecución";
        break;
      }else{
       
        array.push(numero)
        
      }
      
  }
  if(numero!=i){
        return array;
      }


}


function continueStatement(numero) {
  // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array.    
  // Devolver el array
  // Cuando el número de iteraciones alcance el valor 5, no se agrega ese número al array
  // y se continua con la siguiente iteración
  // Pista: usá el statement 'continue'
  // Tu código:
  var array= [];
   var i=0;
   for(i=0; i<10; i++){
    numero=numero+2;
    if(i===5) continue;
         
     array.push(numero);
      
    }
   
   return array;
}

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var objeto = {
    nombre: nombre,
    edad: edad,
    meow: function(){
      return "Meow!";
    }
       
  }
      return objeto;
}

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;
return objeto;
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  return objetoMisterioso.numeroMisterioso*5;

}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var objeto= {
   nombre: nombre,
   email: email,
   password: password

  }
  return objeto;

}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if(usuario.email!=undefined) return true;
  return false;

}

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:

  if(objeto[propiedad]){
    return true;
  }else{
    return false;
  }
  }



function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password=nuevaPassword;
  return usuario;


}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;

}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var a=usuario.posts.likes; 
  var x=0;
  for(i=0; i<usuario.posts.length;i++){
    x=x+usuario.posts[i].likes
  }
    return x;


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverUltimoElemento,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  dePalabrasAFrase,
  arrayContiene,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  todosIguales,
  mesesDelAño,
  breakStatement,
  continueStatement,
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  actualizarPassword,
  agregarAmigo,
  sumarLikesDeUsuario
};
