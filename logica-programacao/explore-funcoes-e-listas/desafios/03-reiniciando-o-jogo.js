/*
  1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa,
   a partir de sua altura, em metros, e peso, em quilogramas, que serão 
   recebidos como parâmetro.
*/
function IMC(altura, peso) {
  return peso / (altura * altura);
}

/*
  2. Crie uma função que calcule o valor do fatorial de um número passado como
   parâmetro.
*/
function fatorial(numero) {
  if (numero == 1 || numero == 0) return 1;
  return numero * fatorial(numero - 1);
}

/*
  3. Crie uma função que converte um valor em dólar, passado como parâmetro, e 
  retorna o valor equivalente em reais. Para isso, considere a cotação do dólar 
  igual a R$4,80.
*/
function dolarParaReais(valor) {
  return valor * 4.8;
}

/*
  4. Crie uma função que mostre na tela a área e o perímetro de uma sala 
  retangular, utilizando altura e largura que serão dadas como parâmetro.
*/
function detalhesSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);

  console.log(`Sala retangular ${altura} x ${largura}`);
  console.log(`Área: ${area}`);
  console.log(`Perímetro: ${perimetro}`);
}

/*
  5. Crie uma função que mostre na tela a área e o perímetro de uma sala 
  circular, utilizando seu raio que será fornecido como parâmetro. 
  Considere Pi = 3,14.
*/
function detalhesSalaCircular(raio) {
  const PI = 3.14;
  let area = PI * raio ** 2;
  let perimetro = 2 * PI * raio;

  console.log(`Sala circular com ${raio} de raio`);
  console.log(`Área: ${area}`);
  console.log(`Perímetro: ${perimetro}`);
}

/*
  6. Crie uma função que mostre na tela a tabuada de um número dado como 
  parâmetro.
*/
function tabuada(numero) {
  for (let i = 0; i <= 10; i++) {
    let multiplicacao = numero * i;
    console.log(`${numero} x ${i} = ${multiplicacao}`);
  }
}
