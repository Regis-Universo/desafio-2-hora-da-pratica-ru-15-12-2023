// Desafios

// 01. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt('Que dia é hoje?');

if (diaDaSemana == 'Sábado' || diaDaSemana =='Domingo')  {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

// 02. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numeroDigitado = prompt('Digite um número para verificar se ele é POSITIVO ou NEGATIVO:');

if (numeroDigitado > 0) {
    alert(`O número ${numeroDigitado} é POSITIVO!!!`);
} else if (numeroDigitado < 0) {
    alert(`O número ${numeroDigitado} é NEGATIVO!!!`);
} else {
    alert(`O número ${numeroDigitado} é um NÚMERO NEUTRO`);
}

// 03. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = prompt('Quantos pontos você fez?');

if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar');
}

// 04. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

const nome = 'João';

let saldo = prompt('Quanto você tem de saldo no banco?');

let saldoAtualizado = `Olá, ${nome}, seu saldo atualizado é R$${saldo} reais.`
alert(saldoAtualizado);



// 05. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nomeDoUsuario = prompt('Por favor, digite o seu nome:');
alert(`${nomeDoUsuario}, Boas vindas ao nosso site.`);


