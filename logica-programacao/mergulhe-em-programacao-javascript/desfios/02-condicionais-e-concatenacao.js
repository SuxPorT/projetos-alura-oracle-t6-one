/*
  1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou 
  "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
*/
let diaSemana = prompt("Qual o dia da semana?");

if (diaSemana === "Sábado" || diaSemana === "Domingo") console.log("Bom fim de semana!");
else console.log("Boa semana!");

/*
  2. Verifique se um número digitado pelo usuário é positivo ou negativo. 
  Mostre um alerta informando.
*/
let numero = Number(prompt("Digite um número:"));

if (numero > 0) console.log(`O número ${numero} é positivo`);
else if (numero < 0) console.log(`O número ${numero} é negativo`);
else console.log(`O número ${numero} é neutro`);

/*
  3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou 
  igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre 
  "Tente novamente para ganhar.".
*/
let pontuacao = Number(prompt("Digite a pontuação"));

if (pontuacao >= 100) console.log("Parabéns, você venceu!");
else console.log("Tente novamente para ganhar.");

/*
  4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma 
  template string para incluir o valor do saldo.
*/
let saldo = Number(prompt("Digite o saldo da conta:"));
console.log(`Saldo da conta: R${saldo}`);

/*
  5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um
  alerta de boas-vindas usando esse nome.
*/
let nome = prompt("Digite o seu nome:");

alert(`Boas-vindas, ${nome}!`);
