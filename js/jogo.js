// Declaração das variáveis globais
let desempenho = 0;
let tentativas = 0;
let acertos = 0;
let jogar = true;

// Captura os botões pelos ids e adiciona um evento de clique
const btnReiniciar = document.getElementById('reiniciar');
const btnJogarNovamente = document.getElementById('joganovamente');

// Função que zera os valores das variáveis controladoras e reinicia o jogo
function reiniciar() {
    desempenho = 0;
    tentativas = 0;
    acertos = 0;
    jogar = true;
    jogarNovamente();
    atualizaPlacar(0, 0);
    // Torna o botão "Jogar novamente" visível e o botão "Reiniciar" visível
    btnJogarNovamente.className = 'visivel';
    btnReiniciar.className = 'visivel';
}

// Função jogar novamente (não altera tentativas, apenas reinicializa o estado do jogo)
function jogarNovamente() {
    jogar = true;
    let divis = document.getElementsByTagName("div");
    for (let i = 0; i < divis.length; i++) {
        if (divis[i].id == 0 || divis[i].id == 1 || divis[i].id == 2 || divis[i].id == 3) {
            divis[i].className = "inicial";
        }
    }
    let imagem = document.getElementById("imagem");
    let imgerro = document.getElementById("imgerro");
    if (imagem) {
        imagem.remove();
        imgerro.remove();
    }
}

// Função que atualiza o placar
function atualizaPlacar(acertos, tentativas) {
    desempenho = tentativas === 0 ? 0 : (acertos / tentativas) * 100;
    document.getElementById("resposta").innerHTML = `Placar - Acertos: ${acertos} Tentativas: ${tentativas} Desempenho: ${Math.round(desempenho)}%`;
}

// Função executada quando o jogador acertou
function acertou(obj) {
    obj.className = "acertou";
    const img = new Image(100);
    img.id = "imagem";
    img.src = "https://luccazx12.github.io/anime_dashboards/dashboard/images/alan_vesgo.png";
    obj.appendChild(img);
}
function errou(obj) {
    obj.className = "errou";
    const img = new Image(100);
    img.id ="imgerro";
    img.src = "https://clipart.info/images/ccovers/1516942388she-hulk-png.png";
    obj.appendChild(img);

}
// Função que sorteia um número aleatório entre 0 e 3 e verifica se o jogador acertou
function verifica(obj) {
    if (jogar) {
        jogar = false;
        tentativas++;
        let sorteado = Math.floor(Math.random() * 4); // Para considerar id 0 a 3
        if (obj.id == sorteado) {
            acertou(obj);
            acertos++;
        } else {
            obj.className = "errou";
            errou(obj);
            const objSorteado = document.getElementById(sorteado);
            acertou(objSorteado);
        }
        atualizaPlacar(acertos, tentativas);
    } else {
        alert('Clique em "Jogar novamente"');
    }
}

// Adiciona eventos aos botões
btnJogarNovamente.addEventListener('click', jogarNovamente);
btnReiniciar.addEventListener('click', reiniciar);