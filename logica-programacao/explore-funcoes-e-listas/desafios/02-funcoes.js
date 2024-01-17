// 1. Criar uma função que exibe "Olá, mundo!" no console.
function HelloWorld() {
  console.log("Olá, mundo!");
}

/*
  2. Criar uma função que recebe um nome como parâmetro e exibe 
  "Olá, [nome]!" no console.
*/
function exibirNome() {
  console.log(`Olá, ${nome}!`);
}

/*
  3. Criar uma função que recebe um número como parâmetro e retorna o dobro 
  desse número.
*/
function dobro(numero) {
  return numero * 2;
}

/*
  4. Criar uma função que recebe três números como parâmetros e retorna a média
   deles.
*/
function media(valor1, valor2, valor3) {
  return (valor1, valor2, valor3) / 3;
}

/*
  5. Criar uma função que recebe dois números como parâmetros e retorna o maior 
  deles.
*/
function maior(valor1, valor2) {
  return valor1 > valor2 ? valor1 : valor2;
}

/*
  6. Criar uma função que recebe um número como parâmetro e retorna o resultado 
  da multiplicação desse número por ele mesmo
*/
function multiplica(numero) {
  return numero * numero;
}
