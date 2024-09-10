# CHECKPOINT 7 – JAVASCRIPT 

## 1.-¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?
JavaScript es un lenguaje de programación, de secuencias de comandos, capaz de aportar soluciones eficaces en la mayoría de los ámbitos de la tecnología. Te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes, etc.
Los ** usos más importantes**  de JavaScript son los siguientes:
-	Desarrollo de sitios web del lado del cliente (front end, en el navegador).
-	Desarrollo de aplicaciones para dispositivos móviles, híbridas o que compilan a nativo.
-	Construcción de servidores web y aplicaciones de servidor.
-	Desarrollo de aplicaciones de escritorio para sistemas Windows, Linux y Mac.
-	Desarrollo de juegos.
### Características y beneficios
-	Simplicidad. Posee una estructura sencilla que lo vuelve más fácil de aprender e implementar. 
-	 Velocidad. Se ejecuta más rápido que otros lenguajes y favorece la detección de los errores.
-	Versatilidad. Es compatible con otros lenguajes, como: PHP y Java. Además, hace que la ciencia de datos y el aprendizaje automático sean accesibles.
-	Popularidad. Existen numerosos recursos y foros disponibles para ayudar a los principiantes con habilidades y conocimientos limitados.
-	Carga del servidor. La validación de datos puede realizarse a través del navegador web y las actualizaciones solo se aplican a ciertas secciones de la página web.
-	Actualizaciones. Se actualiza de forma continua con nuevos frameworks y librerías, esto le asegura relevancia dentro del sector.
### Desventajas de JavaScript
-	Compatibilidad con los navegadores. Los diferentes navegadores web interpretan el código JavaScript de forma distinta. Por lo tanto, necesitarás probarlo en todos los navegadores populares, incluyendo las versiones más antiguas.
-	Depuración. Aunque algunos editores de HTML admiten la depuración, son menos eficaces que otros editores. Encontrar el problema puede ser un reto, ya que los navegadores no muestran ninguna advertencia sobre los errores.
### Principales diferencias entre JavaScript y Java
 A pesar de que los dos nombres son bastante parecidos, estamos hablando de dos lenguajes de programación muy diferentes que pueden causar confusión.
Java es un lenguaje de programación de propósito general que se considera principalmente un lenguaje orientado a objetos mientras que JavaScript es un lenguaje de programación interpretado que se utiliza principalmente para la programación del lado del cliente en páginas web, a continuación, os ponemos una lista de las principales diferencias:
-	Java se utiliza para crear aplicaciones en variados dispositivos o en navegadores, mientras que JavaScript se usa principalmente para documentos HTML y navegadores.
-	Tanto Java como JavaScript emplean diferentes complementos. Incluso las extensiones de archivo son distintas, siendo Java «.Java» y JavaScript «.».
-	Java es un lenguaje compilado e interpretado, mientras que los códigos JavaScript son ejecutados directamente por un navegador.
-	Java es un lenguaje de programación multiplataforma orientado a objetos y centrado en la red, mientras que JavaScript es un lenguaje de secuencias de comandos que permite a los desarrolladores crear páginas web interactivas.
-	La sintaxis de Java requiere que se declaren los tipos de datos, mientras que la sintaxis de JavaScript no necesita esto. Además, Java es un lenguaje estático y JavaScript es dinámico.
-	JavaScript se depura en una fase y Java en dos. JavaScript hace que el código trabaje informando de los errores que se producen a medida que se está ejecutando. Java primero realiza la fase de compilación, y el compilador indica los posibles errores de sintaxis presentes en nuestro código. Después, se ejecuta el programa, y pueden surgir errores para ser depurados.
-	Java posee variables definidas que no se pueden cambiar y es más complejo, JavaScript puede ser cambiante, dándole flexibilidad, y es más sencillo.
-	Java crea aplicaciones que se ejecutan en una máquina o explorador virtual, mientras que el código JavaScript sólo se ejecuta en un explorador.
En resumen, JavaScript es el lenguaje que más tipos de aplicaciones y usos puede abarcar en la actualidad. Por esta razón, resulta una tecnología bastante recomendable para aprender y utilizar; ofrece funcionalidades para emplear en todo tipo de proyectos. 
Es rápido para aplicaciones web, especialmente con motores de JavaScript modernos como V8 (usado en Chrome). Sin embargo, para tareas que requieren mucho procesamiento, puede que no sea tan eficiente como los lenguajes compilados. 

 ## 2.- ¿Cuáles son algunos tipos de datos ?
En JavaScript, los datos son fundamentales y se pueden clasificar en dos tipos principales: ** tipos de datos primitivos y no primitivos** (también conocidos como de referencia). Comprender la distinción entre estos dos tipos es fundamental para escribir código JavaScript eficiente y sin errores.
La diferencia fundamental entre primitivos y no primitivos es que los primitivos son inmutables y los no primitivos son mutables.
### Tipos de datos primitivos
Los tipos de datos predefinidos que proporciona el lenguaje JavaScript se conocen como tipos de datos primitivos. Los tipos de datos primitivos también se conocen como tipos de datos integrados. Se almacenan directamente en la memoria y sus valores no están sujetos a cambios una vez que se asignan. String, Boolean, Number, BigInt, Null, Undefined y Symbol son los seis tipos de datos primitivos disponibles en JavaScript.
A continuación explicamos brevemente cada uno de ellos:
JavaScript tiene seis tipos de datos primitivos:

**1. Número:** El tipo de datos Número incluye números enteros y de punto flotante. Por ejemplo:

       let edad = 30; 
       let precio = 19.99; 

**2. String:** El tipo de datos String representa secuencias de caracteres entre comillas simples o dobles. Por ejemplo:
```javascript
let nombre = "Juan";`// Variable con el nombre "Juan" 
```
**3. Booleano:** El tipo de datos booleano solo tiene dos valores posibles: verdadero y falso. Se utiliza habitualmente para declaraciones condicionales y operaciones lógicas. Por ejemplo:
```javascript
let seaVerdadero = true; // Variable con valor verdadero
 let seaFalso = false; // Variable con valor falso
```
4. Indefinido: El tipo de datos indefinido representa una variable que se ha declarado pero que aún no tiene asignado un valor. Por ejemplo:
```javascript
let variableNoInicializada; // Variable no inicializada 
```
5. Nulo:El tipo de datos nulo se utiliza para indicar la ausencia de un valor o la ausencia de un valor deliberada. Por ejemplo:
```javascript
let emptyValue = null; 
```
6. Símbolo (ES6): Introducido en ECMAScript 6 (ES6), el tipo de datos Símbolo representa un valor único e inmutable, que se utiliza a menudo como clave de propiedad de objeto. Los símbolos ayudan a evitar conflictos de nombres. Por ejemplo:
```javascript
const uniqueSymbol = Symbol ( 'descripción' ); 
```

Cuando se trata de tipos de datos primitivos, lo que se compara son sus valores. Dos variables con el mismo valor primitivo se consideran iguales.
### Tipos de datos no primitivos
Los tipos de datos que se derivan de los tipos de datos primitivos del lenguaje JavaScript se conocen como tipos de datos no primitivos. También se los conoce como “tipos de datos derivados” o “tipos de datos de referencia”.

**1. Objeto:** El tipo de datos Object es un contenedor versátil que puede contener pares clave-valor, lo que lo hace adecuado para estructuras de datos complejas. Los objetos pueden almacenar funciones y otros objetos, lo que los convierte en una parte fundamental de JavaScript. Por ejemplo:
```javascript
const persona = { 
nombre: "Alice" , 
edad: 25 , 
};
```
**2. Matriz:** El tipo de datos Array es una forma especializada de un objeto que se utiliza para almacenar listas ordenadas de valores. Los arrays pueden almacenar elementos de distintos tipos de datos y se accede a ellos mediante índices numéricos. Por ejemplo:
```javascript
const colores = [“rojo”, “verde”, “azul”]; 
```
**3. Función:** Las funciones también son objetos en JavaScript. Se pueden asignar a variables, pasar como argumentos o devolver desde otras funciones. Por ejemplo:
```javascript
function saludar(nombre) { return `Hola, ${nombre}!`; } // Función saludar que toma un nombre y devuelve un salud
```
**4. Fecha:** El tipo de datos Date representa fechas y horas y proporciona métodos para trabajar con ellas. Por ejemplo:
```javascript
   const hoy = nueva  Fecha ();
```
**5. Objetos personalizados:** Los desarrolladores pueden crear tipos de datos no primitivos personalizados definiendo sus propias estructuras de objetos. Esto permite un almacenamiento y una manipulación de datos más especializados.
Al comparar tipos de datos no primitivos, se comparan sus referencias. Dos variables que hacen referencia al mismo objeto se consideran iguales.
### Diferencias clave entre datos primitivos y no primitivos

**- Mutabilidad :** Los tipos de datos primitivos son inmutables, lo que significa que sus valores no se pueden cambiar una vez asignados. Los tipos de datos no primitivos son mutables y se pueden modificar.

**- Almacenamiento :** Los tipos de datos primitivos se almacenan directamente en la memoria, mientras que los tipos de datos no primitivos se almacenan como referencias a sus valores en la memoria.

**- Comparación :** los tipos de datos primitivos se comparan por valor, mientras que los tipos de datos no primitivos se comparan por referencia.

En resumen,para programar JavaScript de manera eficaz es necesario conocer a fondo los tipos de datos primitivos y no primitivos. Esto ayuda a tomar decisiones sobre el almacenamiento y la manipulación de datos en las aplicaciones, lo que garantiza un funcionamiento preciso y eficaz.

## 3.- ¿Cuáles son las tres funciones de String en Javascript?
En programación, cuando hablamos de una variable que posee información de texto, decimos que su tipo de dato es un string. En Javascript, es muy sencillo crear una variable de texto. A rasgos generales, hay dos formas principales de hacerlo:
 **1.Notación literal:**
```javascript
const text = "¡Hola a todos!";
const message = "Otro mensaje de texto";
```
 **2.Notación mediante objeto:**
```javascript
const text = new String("¡Hola a todos!");
const message = new String("Otro mensaje de texto");
```
Los strings son uno de los tipos de datos básicos (primitivos), para englobar los textos, se pueden utilizar tres tipos de comillas: comillas simples ( ' ),comillas dobles( " ),Backticks ( ` ).
En cuanto a **las funciones**, aquí están tres de las más importantes y frecuentemente usadas, con ejemplos y explicaciones más detalladas:
### Tipos de funciones 

**Funciones modificadoras:**
 Son aquellas que modifican el contenido original de la cadena o devuelven una versión modificada.Podemos un ejemplo de ellas en la siguiente tabla:


| **Función**        | **Tarea y comentarios**                      | **Ejemplo**               |
|-------------------|----------------------------------------------|---------------------------|
| `toUpperCase()`    | Transforma la cadena a mayúsculas.           | `textoUsuario.toUpperCase()` |
| `toLowerCase()`    | Transforma la cadena a minúsculas.           | `textoUsuario.toLowerCase()` |
| `replace('A', 'B')`| Reemplaza la primera aparición de `A`        | `textoUsuario.replace('e', 'E')` |
|                    | por `B` en la cadena.                       |                           |
| `replace(/A/g, 'B')`| Reemplaza todas las apariciones de `A`      | `textoUsuario.replace(/e/g, 'E')` |
|                    | por `B` en la cadena. El primer parámetro    |                           |
|                    | no va entrecomillado.                       |                           |
|                    | Reemplaza espacios si se usa `/ /g`.        | `textoUsuario.replace(/ /g, 'E')` |
| `replace(/A/g, 'B')`| Reemplaza todas las apariciones de la       | `textoUsuario.replace(/plo/g, 'XX')` |
|                    | subcadena `A` por `B`.                      |                           |

**Funciones para extraer subcadenas o caracteres:**

Estas funciones permiten obtener una parte de una cadena o un carácter específico.

| **Función**               | **Tarea y comentarios**                                          | **Ejemplo**                    |
|---------------------------|------------------------------------------------------------------|---------------------------------|
| `substring(firstIn, lastOut)` | Devuelve la subcadena entre los índices `firstIn` y `lastOut-1`.   | `textoUsuario.substring(2, 6)`  |
|                           | El carácter en `firstIn` se incluye y el de `lastOut` se excluye.  | Devuelve "sarr" de "desarrolloWeb". |
| `substring(firstIn)`       | Devuelve la subcadena desde el índice `firstIn` hasta el final.  | `textoUsuario.substring(5)`     |
| `slice(firstIn, lastOut)`  | Similar a `substring` pero acepta índices negativos,              | `textoUsuario.slice(-5, -1)`    |
|                           | tomando desde el final de la cadena. Excluye el último carácter.  | Devuelve "rama" de "aprenderaprogramar". |
| `slice(firstIn)`           | Análogo a `substring` pero extrae desde el índice hasta el final.| `textoUsuario.slice(-5)`        |
| `split('caracterSepara')`  | Devuelve un array dividiendo la cadena por el carácter separador. | `textoUsuario.split(' ')`       |
|                           | Si se pasan comillas vacías, extrae todos los caracteres.        | `textoUsuario.split('')`        |
| `nombreCadena[indice]`     | Devuelve el carácter en la posición indicada por el índice.      | `textoUsuario[3]`               |
|                           | Para obtener el último carácter, usar `textoUsuario.length-1`.   | `textoUsuario[textoUsuario.length-1]` |

**Funciones para recuperar índices de posiciones:**
Estas funciones permiten encontrar la posición de caracteres o subcadenas dentro de una cadena.

| **Función**                   | **Tarea y comentarios**                                              | **Ejemplo**                       |
|-------------------------------|----------------------------------------------------------------------|-----------------------------------|
| `charAt(indicePosicion)`       | Devuelve la letra en la posición `indicePosicion`. El primer índice es 0.| `var primeraLetra = textoUsuario.charAt(0)` |
| `indexOf('cadena')`            | Devuelve el índice de la primera aparición de la cadena.               | `textoUsuario.indexOf('p')`       |
|                               | Si no existe, devuelve `-1`.                                          |                                   |
| `indexOf('cadena', indiceInicial)` | Devuelve el índice de la primera aparición, buscando desde `indiceInicial`.| `textoUsuario.indexOf('p', 5)`    |
| `lastIndexOf('cadena')`        | Devuelve el índice de la última aparición de la cadena en el string.  | `textoUsuario.lastIndexOf('p')`   |
|                               | Si no existe, devuelve `-1`.                                          |                                   |

## 4.- ¿Qué es un condicional?
En programación, las condicionales son una herramienta esencial que nos permite tomar decisiones dinámicas a lo largo de la ejecución de nuestro programa. Estas instrucciones tienen la capacidad de dividir el flujo del programa en diferentes caminos lógicos, los cuales eventualmente se vuelven a unir en algún punto específico.

Mediante las condicionales, podemos definir la ruta que debe seguir el programa según la evaluación de ciertas expresiones. Estas expresiones, a menudo comparaciones o verificaciones lógicas, determinan la dirección que tomará la ejecución del código. Las condicionales proporcionan flexibilidad y control, permitiéndonos adaptar el comportamiento del programa en función de las circunstancias durante su ejecución.

JavaScript cuenta con 4 tipos de declaraciones para el uso de condicionales, aquí las diferentes formas de emplear condicionales en JavaScript:
**1.Declaración If**
En JavaScript, la declaración if se usa para evaluar una expresión. Si la expresión dentro de esta condición es evaluada como verdadera, se ejecutará la instrucción definida dentro del bloque if; en caso contrario, si la expresión es falsa, la instrucción no se ejecutará. Es una forma de introducir lógica condicional en el código, permitiendo que ciertas acciones se realicen solo cuando se cumplen ciertas condiciones.
```javascript
const n = parseInt(prompt("choose number"));
if(n % 2 == 0){
  console.log("The number is even");
}
```
Es importante señalar que la declaración condicional if en JavaScript realiza una conversión automática a booleano de la expresión proporcionada. Esto implica que si se le pasa un valor almacenado en una variable, es crucial tener en cuenta los tipos de datos considerados como falsos.En JavaScript, hay ciertos tipos de datos que se consideran automáticamente como valores falsos. Estos incluyen:

| **Valor**    | **Descripción**                   |
|--------------|-----------------------------------|
| **false**    | El valor booleano false.          |
| **null**     | El valor nulo.                    |
| **undefined**| El valor indefinido.              |
| **0**        | El número entero cero.            |
| **-0**       | El número entero negativo cero.   |
| **NaN**      | El valor Not-a-Number.            |
| **''**       | La cadena vacía.                  |
| **{}**       | El objeto vacío.                  |

**2. Declaración Else**
En JavaScript, la declaración **else** se utiliza en conjunto con una declaración if. La declaración else se ejecuta únicamente si la condición evaluada por la declaración if resulta ser **falsa**. En otras palabras, cuando la instrucción dentro del if no se ejecuta debido a que la condición es falsa, entonces la instrucción dentro del bloque else es la que se ejecuta. Esto proporciona una bifurcación en la lógica del programa, permitiendo definir acciones alternativas cuando la condición inicial no se cumple.
```javascript
const n = parseInt(prompt("choose number"));
if(n % 2 == 0){
  console.log("The number is even");
} else {
  console.log("The number is odd");
}
```

 **3. Declaración Else if**
En JavaScript, la declaración **else if** se emplea para especificar condiciones adicionales dentro de la estructura de un bloque if. Si la primera condición en el bloque if resulta ser falsa, el programa procederá a **verificar la siguiente condición** dentro de else if.
La declaración else if es útil para añadir casuísticas adicionales a la evaluación, permitiendo así gestionar múltiples condiciones de manera organizada. Es importante destacar que es posible anidar varias declaraciones else if según la necesidad y criterio del desarrollador. Esto proporciona flexibilidad en la lógica del programa al permitir manejar diferentes escenarios en función de las condiciones evaluadas.
```javascript
const aliceAge = parseInt(prompt("choose number"));

if (aliceAge < 18) {
  console.log("Alice is minor than 18 years.");
} else if (aliceAge >= 18 && aliceAge <= 21) {
  console.log("Alice has between 18 and 21 years.");
} else {
  console.log("Alice has more than 21 years.");
}
```
 **4. Declaración Switch**
A diferencia de las declaraciones previamente mencionadas, la estructura switch se enfoca en **realizar comparaciones precisas** de casos. En un bloque switch, se evalúa un valor contra diferentes casos hasta encontrar una coincidencia.
En lugar de utilizar expresiones booleanas como en if o else if, switch compara directamente el valor proporcionado con los casos definidos. Esto puede hacer que el código sea más legible y fácil de entender cuando se necesita comprobar una variable contra múltiples valores específicos. Además, switch permite ejecutar diferentes bloques de código según el caso coincidente, proporcionando una forma alternativa y estructurada de gestionar múltiples condiciones.

```javascript
const currentDay = new Date().getDay();
let day;
switch (currentDay) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

console.log(`Today is ${day}`);
```
## 5.- ¿Qué es un operador ternario? 
El operador ternario es una **alternativa al condicional if/else** de una forma mucho más compacta y breve, que en muchos casos resulta más legible. Sin embargo, hay que tener cuidado, porque su sobreutilización puede ser contraproducente y producir un código más difícil de leer.
La sintaxis de un operador ternario es la siguiente:
```javascript
condición ? expresión_si_verdadero : expresión_si_falso;
```
A continuación ponemos un ejemplo de su utilización:
```javascript
let nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

if (nota < 5) {                  // Acción A: nota es menor que 5
  calificacion = "suspendido";
} else {                        // Acción B: Cualquier otro caso diferente a A (nota es mayor o igual que 5)
  calificacion = "aprobado";
}
console.log("Estoy", calificacion);
```
En este caso dependiendo de la evaluación del condicional, se imprime en la consola "Estoy suspendido" o "Estoy aprobado".
Si reescribimos el código usando un operador ternario:

```javascript
let nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");
let calificacion = (nota < 5) ? "suspendido" : "aprobado";
console.log("Estoy", calificacion);
```
-Si nota es menor que 5, entonces devuelve "suspendido".
-Si no (es decir, si nota es mayor o igual que 5), devuelve "aprobado".
Así que en este caso, como la nota es 7, que es mayor que 5, la variable calificacion tomará el valor "aprobado", y el resultado impreso será: Estoy aprobado

## 6.- ¿Cuál es la diferencia entre una declaración de función y una expresión de función?
Las funciones en cualquier lenguaje de programación son una parte fundamental de cómo organizamos nuestro código. JavaScript al ser un lenguaje dinámico tiene ciertos mecanismos para garantizar que la ejecución de nuestro código sea la más óptima y correcta.
En JavaScript tenemos dos maneras principales de definir funciones, como una declaración o como una expresión.

### 1. Declaraciones de función:
 Una declaración de función es una forma tradicional de definir una función en JavaScript. 
 Las declaraciones de función son útiles cuando quieres definir una función y tener la certeza de que está disponible en todo el ámbito donde se declara, incluso antes de su aparición en el código.
 Utiliza la palabra clave function seguida del nombre de la función y un bloque de código.

```javascript
function suma1(a, b) {
  return a + b
}
```
### 2.Expresiones de función:
Una expresión de función define una función como parte de una expresión. Esta puede ser una función anónima (sin nombre) o una función nombrada, y se asigna a una variable.
Las expresiones de función son útiles cuando deseas definir funciones que se utilizarán dentro de un contexto específico o en asignaciones a variables. Las funciones de flecha son especialmente útiles en funciones de corta duración y en el manejo de this en funciones anidadas.Entre las expresiones de función tenemos:

**-	Función anónima:** No tiene nombre, y es asignada a una variable.
```javascript
var suma2 = function(a, b) {
  return a + b
}
```

**-	Función con nombre:** Tiene un nombre, que puede ser útil para depuración, pero aún se asigna a una variable.

```javascript
var suma2 = function suma2(a, b) {
  return a + b
}
```
**-	Función de flecha (anónima por defecto):** Es una forma concisa de escribir funciones. El uso de => (fat arrow) permite una sintaxis más corta y, por defecto, no tiene su propio this (hereda el this del contexto donde se define).
```javascript

var suma2 = (a, b) => {
  return a + b
}
```

Las diferencias de sintaxis son claras, las expresiones de funciones principalmente están a la DERECHA del símbolo igual, y las declaraciones no lo tienen.

## 7.- ¿Qué es la palabra clave ***this***  en JavaScript  ?
***this*** en JavaScript es una palabra clave muy utilizada dentro de funciones y clases, pues tiene un valor flexible. ***this*** significa "esto" en español y, como su nombre indica, hace referencia al objeto en cuestión. Es decir, si estamos creando cualquier función, la palabra clave this se usará para representar o llamar al objeto que dicha función está modificando.
A continuación, ponemos un ejemplo con una variable llamada ejemplo:
```javascript
const ejemplo = {
color: azul,
func: function ( ) {
return this.color;
},
};
```
Esta variable tiene dos propiedades, function y color. Aquí, ***this*** hace referencia a la constante ejemplo, pues es el objeto al que pertenece en este contexto. Entonces, al hacer que la función nos devuelva la propiedad this.color, el programa entiende que lo que hará realmente es devolvernos la propiedad ejemplo.color.
```javascript
console.log (ejemplo.func());                            // resultado esperado: azul
```

Una de las formas más comunes en las que se utiliza la palabra clave ***this*** en JavaScript es en las clases. Accedemos a ellas utilizando el comando objeto.propiedad. La diferencia es que, **en vez de utilizar el nombre del objeto, utilizamos this**. Esto es muy útil cuando queremos cambiar el nombre del objeto o este no tiene un nombre específico.
### Casos comunes donde se utiliza ***this***:

**1.	En un método de objeto:** Cuando ***this*** se usa dentro de un método, se refiere al objeto que contiene ese método.
```javascript
const persona = {
    nombre: "Juan",
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};
persona.saludar();  // Salida: "Hola, mi nombre es Juan"
```
Aquí, ***this*** hace referencia al objeto persona.

**2.	En una función normal (fuera de cualquier objeto):** Si ***this*** se utiliza dentro de una función regular, en modo estricto (strict mode), su valor será undefined, pero en modo no estricto, hará referencia al objeto global (en un navegador, sería window).
```javascript
function mostrarThis() {
    console.log(this);
}
mostrarThis();  // En modo no estricto: window (objeto global)
                // En modo estricto: undefined

```
**3.	En un constructor de objeto:** Cuando ***this*** se usa dentro de una función constructora (que se usa con new), se refiere al nuevo objeto que está siendo creado.
```javascript
function Persona(nombre) {
    this.nombre = nombre;
}
const juan = new Persona("Juan");
console.log(juan.nombre);  // Salida: "Juan"
```

Aquí, ***this*** hace referencia al nuevo objeto juan.
**4.	En el contexto de eventos: En el manejo de eventos, ***this*** hace referencia al elemento HTML que disparó el evento.
```javascript
const boton = document.querySelector("button");
boton.addEventListener("click", function() {
    console.log(this);  // Se refiere al botón que se hizo clic
});
```

**5.	En funciones flecha (arrow functions):** En las funciones flecha, ***this*** hereda el valor de ***this*** del contexto donde la función fue definida, en lugar de tener su propio valor de ***this***.
```javascript
const objeto = {
    nombre: "Juan",
    mostrarThis: () => {
        console.log(this.nombre);  // Aquí `this` no hace referencia a `objeto`, sino al contexto exterior
    }
};
objeto.mostrarThis();  // Salida: undefined
```

