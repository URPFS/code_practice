let mensaje:string = "hola mundo";

mensaje = "chanchito feliz";

console.log(mensaje);

console.log(typeof [])

/*
tipos de datos en js:
boolean
number
string
null
undefined
function
object

tipos de datos en typescript:

any (tratar de no usarlo)
unknow
array
never
tuplas
enums

tipos inferidos (para no tener que especificar el tipo cada vez que usamos una variable)

tsc (para guardar. no hace flata  colocar la ruta devido a que instalamos typescript)
node dist/practice.js (es la salida que configuramos en launch.json)
*/

let extinsionDinosaurios: number = 76_000_000;
let favoriteDino: string = "triceratops";
let extintos: boolean = true;


function despedida (mensaje: string){
    mensaje = "chao mundo";
    console.log(mensaje);
}

despedida(mensaje);

let animales = ["chanchito", "feliz", "felipe"];
let numeros = [1,2,3];
let check: boolean[] = [];

let num2:Array<number> = [];

// numeros.map(x => x.) el autocompletado de x. nos sugiere SOLO metodos para ese tipo de dato

let cosas: [number, string] = [34,"travesalio"];

//                         [[number...],[string...]]

const chico = "s";
const mediano = "m";
const grande = "l";
const extragrande = "xl";

enum tamaños {chico = "s",mediano = "m",grande = "l",extragrande = "xl"};

const variable1 = tamaños.grande;

console.log(variable1);