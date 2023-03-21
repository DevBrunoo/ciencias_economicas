// Define a função que será executada quando o botão for clicado
function verificarParImpar() {
  // Captura o elemento HTML que contém o número digitado pelo usuário
  const numeroInput = document.getElementById('numero');

  // Converte o valor digitado em um número inteiro
  const numero = parseInt(numeroInput.value);

  // Verifica se o número é par ou ímpar usando o operador %, que retorna o resto da divisão por 2
  if (numero % 2 === 0) {
    alert(`O número ${numero} é par!`);
  } else {
    alert(`O número ${numero} é ímpar!`);
  }
}
