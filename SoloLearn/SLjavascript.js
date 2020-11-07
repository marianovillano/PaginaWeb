alert("Caja de alerta"); //linea simple de comentario
var x = 10;				 //Las variables no tienen tipos especificos
var precio = 15.45;
var nombre = "Mariano";
var booleana = true;
var y = x + precio;
var edad = 20;
var ternario = (edad < 18)? "Menor de edad" : "Mayor de edad"; 
var cadena1 = "Estoy aprendiendo";
var cadena2 = " JavaScript";
var myNum1 = 10;
var myNum2 = 10;
var dia = 2;
console.log("Hola desde la consola!")
if (myNum1 < myNum2) {
   alert("JavaScript es papita.");
   document.write("<div>Que manguangua</div>" + "<br />");
}
else if(myNum1 == myNum2){
alert("Da igual...");}
else
	alert("Para nada facil"); //se pueden obviar {} cuando hay una sola sentencia

switch (dia) {
  case 1:
    document.write("Lunes" + "<br />");
    break;
  case 2:
    document.write("Martes" + "<br />");
    break;
  case 3:
    document.write("Miercoles" + "<br />");
    break;
  default:
    document.write("Otro dia" + "<br />");
}
for (i=1; i<=5; i++) {
   document.write("loop for " + i + "<br />");
}
for (i=1, text=""; i<=5; i++) {  //Se pueden iniciar mas de una variable separandolos por comas
   text = i;
   document.write("loop for con mas de una vaiable iniciada " + i + "<br />");
}
var i=0;
while (i<=10) {
   document.write("loop while " + i + "<br />");
   i++;
}var i=20;
do {  
  document.write("Loop do while " + i + "<br />");
  i++;  
}
while (i<=25); 
for (i = 0; i <= 10; i++) {
   if (i == 5) {
     break; 
   }
   document.write("Uso de break: el conteo esta programado hasta 10 " + i + "<br />");
}
for (i = 0; i <= 10; i++) {
   if (i == 5) {
      continue; 
   }
   document.write("Uso de continue obvia i=5 " + i + "<br />");
}
var sum=0; 
for(i=4; i<8; i++) {
  if (i == 6) {
    continue; 
  }
  sum += i;
  document.write(sum + "<br />");
}
function miFuncion() {
  alert("Llamando a una funcion!");
}
miFuncion();
function sayHello(name,age) {
   alert("Hola " + name + ", Tengo " + age + " anios");
}
sayHello("David",24);
function myFunction(a, b) {
   return a * b;
}
document.write("uso de return en la funcion myFunction() da como resultado: "+ myFunction(2,3) + "<br/>");
var user = prompt("Ingresa tu nombre");
alert(user);
document.write("Hola, " + user + "<br/>");
var result = confirm("Quieres salir de esta pagina?");
if (result == true) {
  alert("Gracias por la visita");
}
else {
  alert("Gracias por quedarte");
}
var persona = {						//Ejemplo de objeto
 name: "Juan", age: 31, 
 favColor: "verde", height: 183
};
var x = persona.age;
var y = persona['age'];
alert("Ejemplo de llamado de propiedad con persona.age " + x);
alert("Ejemplo de llamado de propiedad con persona['age'] " + y);
document.write("Longitud de caracteres de la propiedad \"name\": " + persona.name.length + "<br/>"); //document es un objeto y write es un metodo del obj

function person(name, age, color) { //Funcion constructora de objetos
  this.name = name;
  this.age = age;
  this.favColor = color;
}
var p1 = new person("Pedro",12,"azul");
var p2 = new person("Maria",14,"rosa");
document.write(p1.name + ", " + p2.name + "<br/>");

function alumno(name, age) {						//Ejemplo de metodo que cambia una propiedad del mismo objeto
  this.name = name;  
  this.age = age;
  this.yearOfbirth = bornYear;						//Se puede declarar una funcion metodo fuera del constructor.
  this.changeAge = function(age) {
    this.age = age;
  }
 }
function bornYear(){
	return 2020 - this.age;
}
var al1 = new alumno("Pedro",30);
alert(al1.age);
al1.changeAge(25);
alert(al1.age);
alert(al1.yearOfbirth());

var courses = new Array();			//Creacion de arreglos metodo 1
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
courses[3] = "C++";

var cursos = new Array("HTML", "CCS", "JS", "C++"); //Creacion de arreglo metodo 2, el _new Array_ puede ser omitido si en vez de usar () se usan []

document.write("Cantidad de elementos en un arreglo con el metodo lenght: " + cursos.length + "<br/>");

var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var cncCursos = c1.concat(c2);

document.write("Cantidad de elementos en un arreglo concatenado: " + cursos.length + "<br/>");

var empleado = []; 					//Ya no se considera arreglo, sino un objeto, por lo que los mettodos de Array() no son validos
empleado["name"] = "John";
empleado["age"] = 46;
document.write("Llamada a un elemento de arreglo indexado como nombre y no como numero: " + empleado["age"] + "<br/>");

document.write("Valor de pi solicitado al objeto Math(): " + Math.PI + "<br/>");
document.write("La raiz cuadrada usando el metodo Math.sqrt() de 4 es: " + Math.sqrt(4) + "<br/>");

var alerta = 0;
function miAlerta() {
   alert("Este alerta se muestra cada intervalo definido por el metodo setInterval() " + alerta);
   if (alerta==2){
	clearInterval(tempor)
   }
alerta+= 1;   
}
var tempor = setInterval(miAlerta, 3000); //el valor es en milisegundos*/

var d = new Date();
document.write("La fecha guardada con el metodo Date() es: " + d + "<br/>");

var d1 = new Date(86400000); 						//Calcula los milisegundos a partir del 1 de enerto de 1970 a las 00:00h UTC
var d2 = new Date("January 2, 2015 10:42:00");
var d3 = new Date(88,5,11,11,42,0,0);				//La sintaxis es anio,mes,dia,horas,minutos,segundos,milisegundos
document.write("Milisegundos: " + d1 + "<br/>");
document.write("Formato fecha literal: " + d2 + "<br/>");
document.write("Formato anio,mes,dia,horas,minutos,segundos,milisegundos: " + d3 + "<br/>");
document.write("Metodo getHours de Date(): " + d.getHours() + "<br/>");

function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  var reloj = document.getElementById("clock");
  reloj.innerHTML = hours+":"+mins+":"+secs; //innerHTML cambia el contenido de un elemento, en este caso <body>
}
setInterval(printTime, 1000);

function elemID(){
	var elem = document.getElementById("demo");  //Selecciona cualquier elemento en el documento HTML por medio de un ID
	elem.innerHTML = "Este div fue seleccionado por id con el metodo getElementById!";
}
setTimeout(elemID,500);

function elemName(){    //Selecciona al segundo elemento div para modificarlo
	var arr =  document.getElementsByClassName("demonm");
	arr[1].innerHTML = "Este div fue seleccionado por nombre con el metodo get.ElementsByClassName!";
}
setTimeout(elemName,500); //Con este comando se busca forzar a ejecutar la funcion debido a que el codigo no esta dentro del documento HTML

window.onload = function() {				//funcion que asegura que se cargue el html
	var p = document.createElement("p");
	var node = document.createTextNode("Texto agregado por document.createTextNode()");
	p.appendChild(node);								//Agrega un nuevo nodo hijo al elemento como el ultimo nodo. Esto es obligatorio
	var div = document.getElementById("nuevop");
	div.appendChild(p);
	
	var parent = document.getElementById("delete");		//Eliminar un elemento
	var childp1 = document.getElementById("p1");			//Se selecciona el elemento a eliminar
	parent.removeChild(childp1);							//Otro metodo para eliminar es: child.parentNode.removeChild(child);
	
	var pN = document.createElement("p");					//Modificacion de un elemento, este caso es un parrafo <p>
	var node = document.createTextNode("Este es un parrafo modificado");
	pN.appendChild(node);
	var parent = document.getElementById("addp");
	var child = document.getElementById("p4");
	parent.replaceChild(pN, child);
	
	var posx = 0; 								//Rutina de animacion
	var posy = 0;
    var box = document.getElementById('box');	
    var t = setInterval(move, 100);				//Temporizador que llama a la funcion move() cada 100ms
  
    function move() {
		if(posx >= 150) {
			clearInterval(t);					//Detiene la caja al llegar al limite del contenedor
        }
        else {
            posx += 1;
            box.style.left = posx+'px';
        }
    }
var x = document.getElementById("fecha");   //Los eventos pueden asignarse a elementos
x.onclick = function () {
	document.body.innerHTML = Date();
}

var btn = document.getElementById("addelim");
btn.addEventListener("click", myFunction); //element.addEventListener(event, function, useCapture) event: evento sin prefijo "on", function: la funcion
										   //a llamar, parametro opcional booleano: maneja la propagacion del evento al descender en DOM capture(true)
 function myFunction() {				   //o al ascender en DOM bubbling (false). Con esto se pueden manejar varios eventos en un elemento
	alert(Math.random());
	btn.removeEventListener("click", myFunction); //Elimina el evento asignado previamente, esta funcion se elimina a si misma
	}



}

function muestra(){		//Funcion que es llamada en un evento onclick de la pagina
	alert("Hola!");
}

function change() {		//Coloca todo en mayusculas
    var x = document.getElementById('name');
    x.value = x.value.toUpperCase();
}

var imagenes = ['Aysi.jpg','Azucar.jpg','Im watching you.jpg','Yao ming.jpg'];
var num = 0;
function siguiente() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= imagenes.length) {
        num = 0;
    }
    slider.src = imagenes[num];
}
function previo() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = imagenes.length-1;
    }
    slider.src = imagenes[num];
}
function test() {
  var x=document.getElementById('txt');
  var n = x.innerHTML;					//inner.HTML puede tomar un elemento y convertirlo en variable. aqui divide entre dos
  x.innerHTML = n/2;					//cualquier numero que se escriba dentro del id txt
}

function validate() {
	var n1 = document.getElementById('num1');		//Validacion de un formulario 
	var n2 = document.getElementById('num2');
	if(n1.value != '' && n2.value != '') {
		if(n1.value == n2.value) {
			return true;
        }
    }
    alert("Los valores deberian ser iguales y no estar vacios");
    return false;
}

var variable = 0;		//Distintos tipos de declarar variables en ES6, let es una declaracion de variable local dentro de un elemento.
const constante = 2;
let vLocal = 4;

var nomb = 'Mariano'
var mesg = `Hola ${nomb}`;  //No son comillas son backtick `
console.log(mesg);
var h = 5;
var p = 6;
console.log(`suma de variables h + p = ${h+p}`);
let arrg = [1, 2, 3];
for (let k = 0; k < arrg.length; k++) {
  console.log(arrg[k]);
}
let objr = {a: 1, b: 2, c: 3};
for (let v in objr) {			//El bucle for...in es para claves enumerables dentro de un objeto (no sirve con los arreglos).
  console.log(v);
}
let lista = ["x", "y", "z"];
for (let val of lista) {
  console.log(val);
}
for (let ch of "Hola") {
  console.log(ch);
}
const add = (x1, y1) => {			//Formato de funcion en ES6
  let sum = x1 + y1;  
  console.log(sum);
}
const greet = x2 => "Welcome " + x2; //Formato de funcion ES6 con un solo argumento

const x3 = () => alert("Hola");		//Cuando no se usan argumentos en un funcion ES6

const arrgl = [2, 3, 7, 8];			//uso de metodo forEach() que usa una funcion para cada elemento de un arreglo
arrgl.forEach(v => {
  console.log(v * 2);
});

const conDef = (a, b = 3, c = 42) => {
  return a + b + c;
}
console.log(conDef(5)); //50 

let tree = {				//Objeto en ES6
    height: 10,
    color: 'green',
    grow() { 				//Definicion del metodo
        this.height += 2;
    }
};
tree.grow();				//Llamado del metodo
console.log(tree.height); 	// 12

let height = 5;
let health = 100;
let athlete = {				//Se pueden usar variables ya declaradas con como propiedad en una clase si se usa el mismo nombre
    height, 				// height: height,
    health 					// health: health
};
console.log(athlete.height); // 5

let prop = 'name';
let id = '1234';
let mobile = '08923';
let usuario = {						//Se pueden usar nombres de propiedad computados
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};
console.log(usuario.name); // Jack
console.log(usuario.user_1234); // 08923
var i = 0;
var a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
};
console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3
var param = 'size';
var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};
console.log(config.mobileSize); // 4

let personal = {						//Se puede crear un nuevo objeto a partir de otros con el metodo assign()
    name: 'Jack',
    age: 18,
    sex: 'hombre'
};
let estudiante = {
    name: 'Bob',
    age: 20,
    xp: '2'
};
let newStudent = Object.assign({}, estudiante, personal); //Los {} indican la creacion de un nuevo objeto, el orden en la asignacion cuenta
console.log(newStudent.name); // Bob
console.log(newStudent.age); // 20
console.log(newStudent.sex); // male
console.log(newStudent.xp); // 2

let persona2 = {				//Duplicar un objeto
  name: 'Jack',
  age: 18
};
let newPerson = persona2; 			// el signo = referncia los dos objetos
newPerson.name = 'Bob'; 
console.log(persona2.name); 		// Bob
console.log(newPerson.name); 		// Bob
let persona3 = {
  name: 'Jack',
  age: 18
};
let newPersona = Object.assign({}, persona3);  //Asi se duplica completamente sin referenciar, tambien se puede establecer la propiedad dentro de
newPersona.name = 'Bob';						//Object.assign({}, person, {name: 'Bob'});
console.log(persona3.name); // Jack
console.log(newPersona.name); // Bob

let arrglo = ['1', '2', '3'];				//Desestructuracion o desarme de un objeto en sus elementos internos
let [one, two, three] = arrglo;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
let fua = () => {								//Tambien se puede desestructurar un arreglo que regresa una funcion
    return [1, 3, 2];
};
let [uno, , dos] = fua();
console.log(uno); // 1
console.log(dos); // 2

let objto = {h1:100, s1: true};				//Desestructuracion de un objeto
let {h1, s1} = objto;
console.log(h1); // 100
console.log(s1); // true
let ae, be;
({ae, be} = {ae: 'Hola ', be: 'Juan'});		//Desestructuracion sin declarar previamente el objeto con la sintaxis (objeto);
console.log(ae + be);
let {ac, bc} = {ac: 'Hola ', bc: 'Juan'};	//Otra forma de declarar sin usar ()
console.log(ac + bc);
var o = {hf: 42, sf: true};					//Se pueden asignar nuevos nombres de variables a los objetos
var {hf: foo, sf: bar} = o;
//console.log(hf); 							// Error
console.log(foo); 							// 42
var objto1 = {id1: 42, name1: "Jack"};		//Se pueden generar variables con valores predeterminados
let {id1 = 10, age1 = 20} = objto1;
console.log(id1); 							// 42
console.log(age1); 							// 20

function containsAll(arreglo1) {				//Forma JavaScript para pasar un numero de argumentos variable en una funcion con el objeto arguments
  for (let k = 1; k < arguments.length; k++) {
    let num = arguments[k];
    if (arreglo1.indexOf(num) === -1) {
      return false;
    }
  }
  return true;
}
let xx = [2, 4, 6, 7];
console.log(containsAll(xx, 2, 4, 7));
console.log(containsAll(xx, 6, 4, 9));
function contieneAll(arr, ...nums) {	//Forma ES6 de pasar varios argumentos en una funcion con el parametro _rest_ ...nums
  for (let num of nums) {
    if (arr.indexOf(num) === -1) {
      return false;
    }
  }
  return true;
}
console.log(contieneAll(xx, 2, 4, 7));
console.log(contieneAll(xx, 6, 4, 9));

function myFunction(w, x, y, z) {		//Modo JavaScript de pasar argumentos de un arreglo a una funcion
  console.log(w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4));
const laFunction = (w, x, y, z) => {	
  console.log(w + x + y + z);
};
laFunction(...args, 4);					//Operador _spread_ en ES6: ...args

var arglo = ["Uno", "Dos", "Cinco"];	//Modo JavaScript de introducir argumentos en el medio de un arreglo
arglo.splice(2, 0, "Tres");
arglo.splice(3, 0, "Cuatro");
console.log(arglo);
let newArrg = ['Tres', 'Cuatro']; 		//Modo ES6 usando operador _spread_ de introducir argumentos en el medio de un arreglo
let arreglo2 = ['Uno', 'Dos', ...newArrg, 'Cinco'];
console.log(arreglo2);

class Rectangulo {						//Declaracion tipo 1 de clases en ES6
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
  }
}
const square = new Rectangulo(5, 5);
const poster = new Rectangulo(2, 3); 
console.log(square.alto);

var Square = class Rectangle {			//Declaracion tipo 2 de una clase en ES6 tambien declaracion con nombre 
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
};

var Cuadrado = class {					//Declaracion tipo 3 de una clase en ES6 o declaracion sin nombre
  constructor(height, width) {			//Las clases en cualquiera de sus tipos solo puede tener un constructor declarado
    this.height = height;
    this.width = width;
  }
};

class Rectangle {						//No se necesita la clave "function" para una funcion asignada al nombre del metodo 
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {							//Este es el tipo de metodo "prototipo"
    return this.height * this.width;
  }
}
const cuadrado = new Rectangle(5, 5);
console.log(cuadrado.area); 					// 25
class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {				//Este metodo es el tipo estatico: no pueden ser instanciados, utiles para hacer funciones utilitarias
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
const pto1 = new Punto(7, 2);
const pto2 = new Punto(3, 8);

console.log(Punto.distance(pto1, pto2));	//Se llama directo usando el nombre de la clase madre sin un objeto

class Animal {								//Llamado de clases heredadas:
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' Hace un ruido.');
  }
}
class Dog extends Animal {					//Clase hija
  speak() {
	super.speak();							//super() Se usa para llamar a los metodos del padre, debe declararse siempre antes del _this_
    console.log(this.name + ' ladra.');
  }
}
let dog = new Dog('Rex');
dog.speak();								

let map = new Map();						//Map es un objeto que se forma como un arreglo clave/valor, la clave puede ser incluso una clase o una funcion
map.set('k1', 'v1').set('k2', 'v2');

console.log(map.get('k1')); 				// v1
console.log(map.has('k2')); 				// true

for (let kv of map.entries())
    console.log(kv[0] + " : " + kv[1]);

/*Metodos
set(key, value) Agrega un par especifico clave/valor al mapa map, sobrescribe cualquier valor que ya tenga una clave existente.
get(key) Devuelve el valor correspondiente a la clave Si no existe, devielve "undefined".
has(key) Devuelve true si una clave especifica existe, de lo contrario devuelve false.
delete(key) Borra el par clave/valor y devuelve true, si no existe devuelve falso.
clear() Remueve todos los pares clave/valordel mapa.
keys() Devuelve un iterador de las claves en el mapa por cada elemento.
values() Devuelve un iterador de valores en el mapa por cada elemento.
entries() Devuelve un iterador del arreglo [clave,valor] en el mapa por cada elemento.*/

let set = new Set();					//Clase de valores tipo arreglo que no se pueden repetir.
set.add(5).add(9).add(59).add(9);

console.log(set.has(9));

for (let v of set.values())
    console.log(v);						//Solo va a mostrar un 9

/*Metodos
add(valor) Agrega un elemento nuevo con el valor indicado.
delete(valor) Borra un valor especifico del set.
has(valor) Devuelve true si un valor especifico existe ne el set, falso sino.
clear() Limpia el set.
values() Devuelve un iterador de los valores en el set.*/

setTimeout(function() {				//Programacion asincrona, se vuelve muy complejo si hay muchos eventos de este tipo
  console.log("trabajo 1");
  setTimeout(function() {
    console.log("trabajo 2");
  }, 1000);
}, 1000);
console.log("Fin");
function asyncFunc(work) {							//Promesas en ES6, realiza la misma funcion que la programacion asincrona y permite
    return new Promise(function(resolve, reject) {	//el uso de codigo mas complejo.
        if (work === "")
            reject(Error("Nothing"));
        setTimeout(function() {
            resolve(work);
        }, 1000);
    });
}
asyncFunc("Work 1") // Task 1
.then(function(result) {
    console.log(result);
    return asyncFunc("Work 2"); // Task 2
}, function(error) {
    console.log(error);
})
.then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
console.log("End");


