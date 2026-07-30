const pedra = document.querySelector(".pedra");
const papel = document.querySelector(".papel");
const tesoura = document.querySelector(".tesoura");
const resultado = document.querySelector(".resultado");
const pontuacaoUsuario = document.querySelector("p span:nth-child(1)");
const pontuacaoAlexa = document.querySelector(".pontuacao-alexa");

function jogar(escolhabotao) {
  const escolhas = ["pedra", "papel", "tesoura"];
  const escolhaAlexa = escolhas[Math.floor(Math.random() * escolhas.length)];
  if (escolhabotao.classList.contains("pedra")) {
    if (escolhaAlexa === "pedra") {
      resultado.textContent = "Empate!";
    } else if (escolhaAlexa === "papel") {
      resultado.textContent = "Você perdeu!";
      pontuacaoAlexa.textContent = parseInt(pontuacaoAlexa.textContent) + 1;
    } else {
      resultado.textContent = "Você ganhou!";
      pontuacaoUsuario.textContent = parseInt(pontuacaoUsuario.textContent) + 1;
    }
  }

  if (escolhabotao.classList.contains("papel")) {
    if (escolhaAlexa === "pedra") {
      resultado.textContent = "Você ganhou!";
      pontuacaoUsuario.textContent = parseInt(pontuacaoUsuario.textContent) + 1;
    } else if (escolhaAlexa === "papel") {
      resultado.textContent = "Empate!";
    } else {
      resultado.textContent = "Você perdeu!";
      pontuacaoAlexa.textContent = parseInt(pontuacaoAlexa.textContent) + 1;
    }
  }
  if (escolhabotao.classList.contains("tesoura")) {
    if (escolhaAlexa === "pedra") {
      resultado.textContent = "Você perdeu!";
      pontuacaoAlexa.textContent = parseInt(pontuacaoAlexa.textContent) + 1;
    } else if (escolhaAlexa === "papel") {
      resultado.textContent = "Você ganhou!";
      pontuacaoUsuario.textContent = parseInt(pontuacaoUsuario.textContent) + 1;
    } else {
      resultado.textContent = "Empate!";
    }
  }
}
pedra.addEventListener("click", () => jogar(pedra));
papel.addEventListener("click", () => jogar(papel));
tesoura.addEventListener("click", () => jogar(tesoura));
