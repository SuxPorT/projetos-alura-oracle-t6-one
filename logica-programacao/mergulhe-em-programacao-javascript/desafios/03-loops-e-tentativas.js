/*
  1. Crie um contador que comece em 1 e vá até 10 usando um loop while. 
  Mostre cada número.
*/
let contador = 1;

while (contador <= 10) {
  console.log(`Contador: ${contador}`);
  contador++;
}

/*
  2. Crie um contador que começa em 10 e vá até 0 usando um loop while. 
  Mostre cada número.
*/
let contadorInvertido = 10;

while (contadorInvertido >= 0) {
  console.log(`Contador: ${contadorInvertido}`);
  contadorInvertido--;
}

/*
  3. Crie um programa de contagem regressiva. Peça um número e conte deste 
  número até 0, usando um loop while no console do navegador.
*/
let contagem = Number(prompt("Digite um número:"));

while (contagem >= 0) {
  console.log(`${contagem}...`);
  contagem--;
}

/*
  4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até 
  esse número, usando um loop while no console do navegador.
*/
let contagemInvertida = Number(prompt("Digite um número:"));
let numero = 0;

while (numero <= contagemInvertida) {
  console.log(`${numero}...`);
  numero++;
}
