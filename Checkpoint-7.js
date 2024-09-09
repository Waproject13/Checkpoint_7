/*Cree una función JS que acepte 4 argumentos. 
Suma los dos primeros argumentos, luego los dos segundos y multiplícalos.
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!".
Si es más pequeño, la consola registra "¡El número es menor que 50!"*/

function num(a,b,c,d) {
  const suma1 = a + b;
  const suma2= c+d;
  const multiplicacion = suma1 * suma2;

  if (multiplicacion > 50) {
    console.log("¡El número es mayor que 50!"); 
  }

  else (multiplicacion < 50) {
    console.log("¡El número es menor que 50!");

  }
}

num(5, 10, 4, 3);

