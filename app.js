// ************************Notaciones ******************************
// var obj = {
//     numero :10,
//     text : '10'
// }

// console.log(obj);

// ************************Funciones ******************************

// function primeraFuntion(){
//     var a = 20
//     console.log(a);
// }

// primeraFuntion();



// ************************Parametros ******************************


// function imprimir( nombre, apellido){

//     // sustituir el if con esta linea
//     apellido = apellido || "xxx "
 
//     console.log(nombre + " " + apellido);
// }

// imprimir("sayra", "pacheco")

// ************************Parametros con objetos******************************

// function imprimir (persona) {
//     console.log(persona.nombre + " " + persona.apellido);
// }
//  var persona = {
//     nombre: "juan",
//     apellido : "paheco"
//  }
// // imprimir({
// //     nombre: "juan",
// //     apellido : "paheco"
// // }); 

// imprimir(persona)


// ************************Funtion anonima******************************

// function imprimir (fn) {
//     fn()
// }



// imprimir (function() {
//     console.log("Anonima");
// })

// ************************Funtion Explicita******************************

// function imprimir (fn) {
//     fn()
// }

// var miFunction=  function(){
//     console.log("Anonima");
// }


// imprimir (miFunction)

// ************************Retorno de las funciones******************************

// function obtenerAleatorio(){
//     return Math.random();
// }

// function obtenerNombre (){
//     return "Juan"
// }

// function esMayor05(){
//     if( obtenerAleatorio() > .5 ){
//         return true
//     }
//     else{
//         return false 
//     }
// }

// if(esMayor05()){
//     console.log("Es mayor a 0.5");

// }else{
//     console.log("Es menos a 0.5");
// }

// ************************Retorno de las funciones con objetos******************************

// function crearPersona( nombre, apellido){
//     return {
//         nombre : nombre,
//         apellido : apellido
//     }

// }

// var persona = crearPersona ('Sayra', "pacheco")

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.apellido);


// ************************Retorno de las funciones con funciones******************************

// function crearFuncion(nombre){
//     return function(nombre ){
//         console.log("me crearon",  nombre);
//         return function( ){
//             console.log("segunda funcion");
//         }
//     }
// }

// var nuevaFuntion = crearFuncion();

// var segundaFuncion = nuevaFuntion("sayra")

// segundaFuncion()

// ************************Funciones de primera clase******************************

// function a(){
//     console.log("funcion a");

// }

// a(),

// a.nombre = 'Maria'
// a.direccion ={
//     pais : "Costa Rica",
//     Ciudad: "San Jose",
//     edificacio : {
//         piso : "8vo",
//         nombre :"Edificio principal"  
//     }
// }

// ************************Metodos y el objeto this******************************

// var persona = {
//     nombre: "Maria", 
//     apellido : "Dubon ",

//     imprimirNombre : function (){
//         console.log( this.nombre + " " + this.apellido );
//     },
    
//     direcccion : "costa Rica",
//     obtenerPais : function() {
//         var self = this;

//         var nuevaDireccion = function(){
//             console.log(self.direcccion);
            
//         }
//         nuevaDireccion();
        
//     }
// }

// persona.imprimirNombre();
// persona.obtenerPais();

// ************************palabra reservada new ******************************

// function Persona(nombre, apellido){
//     this.nombre = nombre,
//     this.apellido =apellido,
//     this.edad = 12

//     this.imprimirPersona = function(){
//         return this.nombre+ " " + this.apellido + "("+this.edad+")";
//     }
// }


// var people = new Persona("sayra", "pacheco");

// console.log(people);
// console.log(people.nombre);
// console.log(people.imprimirPersona());
// ************************Señor de los anillos ******************************


// function Jugador(nombre){
//     this.nombre =  nombre,
//     this.pv = 100,
//     this.sp = 100
    

//     this.curar = function(jugadorObjetivo){
//         if(this.sp >=40){
//             this.sp -= 40;
//             jugadorObjetivo.pv += 20 ;

//         }else{
//             console.info(this.nombre+ "no tiene sp");
//         }
//         this.estado(jugadorObjetivo)
//     }

//     this.tirarFlecha = function(jugadorObjetivo){
//         if(jugadorObjetivo.pv >40){

//             jugadorObjetivo.pv -=40; 
//         }else{
//             jugadorObjetivo.pv=0
//             console.error(jugadorObjetivo.nombre + "a muerto");
//         }
//         this.estado(jugadorObjetivo)

//     }

//     this.estado= function(jugadorObjetivo){
//         console.log(this);
//         console.log(jugadorObjetivo);
//     }

// }

// var gandalf = new Jugador("Gandalf");
// var legolas = new Jugador("Legolas");


// gandalf.curar (legolas);
// console.log(gandalf);
// console.log(legolas);

// ************************Prototipos******************************
//  function Persona (){
//     this.nombre = "Fernando",
//     this.apellido = "Herrera",
//     this.edad = 30

//     Persona.prototype.imprimirInformacion= function(){
//         console.log(this.nombre+  " "+this.apellido + "("+this.edad+")");

//     }
   
//  }

//  var say= new Persona



// ************************Funciones Anonimas******************************

// (function(){

//     var a = 10 ; 
//     console.log(a);
    
//     function cambiarA(){
//         a = 20;
//     }
    
//     cambiarA();
    
//     console.log(a);

// })();
// ************************ otro ejemplo de Funciones Anonimas******************************

// function ejecutarfuncion(fn){
//     if(fn() === 1){
//         return true;

//     }else {
//         return false;
//     }
// };

// console.log(
//     ejecutarfuncion( function(){
//         console.log("funciona nonima ejecutada");
//         return 1;
//     })
    
// );

