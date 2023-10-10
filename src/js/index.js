const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desmarcarBotao();

        botao.classList.add("selecionado");

        desmarcarPersonagem();

        personagens[indice].classList.add("selecionado");
    });
})
function desmarcarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desmarcarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

