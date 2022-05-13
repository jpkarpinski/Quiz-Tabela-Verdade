
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')
let feedbackMessage   = document.querySelector('#feedbackMessage')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')
let e = document.querySelector('#e')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    alternativaE : "Alternativa E",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual a definição de 'Variável' na programação?",
    alternativaA : "É denominado arquitetura de Von Neumann, e é a arquitetura usada pela vasta maioria dos computadores atuais.",
    alternativaB : "É um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web",
    alternativaC : "Uma variável é uma classe capaz de representar apenas um valor.",
    alternativaD : "Uma variável é um objeto (uma posição, frequentemente localizada na memória) capaz de reter e representar um valor ou expressão.",
    alternativaE : "Fatos básicos, como o nome e a quantidade de horas trabalhadas, número de peças em estoque ou pedidos.",
    correta      : "Uma variável é um objeto (uma posição, frequentemente localizada na memória) capaz de reter e representar um valor ou expressão.",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "API é um acrônimo para...",
    alternativaA : "Automatic Programming Information",
    alternativaB : "Application Programming Interface",
    alternativaC : "Application Protocol Interface",
    alternativaD : "Application Programming Internet",
    alternativaE : "Application Page Information",
    correta      : "Application Programming Interface",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "De acordo com SI (Sistemas de Informações), o 'Conhecimento' pode ser definido como...",
    alternativaA : "Fatos básicos, como o nome e a quantidade de horas trabalhadas, número de peças em estoque ou pedidos.",
    alternativaB : "Conjunto de fatos organizados ou arranjados de maneira significativa, de modo a ter valor adicional.",
    alternativaC : "A informação trabalhada, de modo que constitua um saber. Produção de ideias e experiências.",
    alternativaD : "Informação.",
    alternativaE : "Dados.",
    correta      : "A informação trabalhada, de modo que constitua um saber. Produção de ideias e experiências.",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "xxxxxxx",
    alternativaA : "x",
    alternativaB : "x",
    alternativaC : "x",
    alternativaD : "x",
    alternativaE : "x",
    correta      : "x",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "xxxxxxx",
    alternativaA : "x",
    alternativaB : "x",
    alternativaC : "x",
    alternativaD : "x",
    alternativaE : "x",
    correta      : "x",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD
e.textContent = q1.alternativaE

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')
e.setAttribute('value', '1E')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    e.textContent = questoes[nQuestao].alternativaE
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    e.setAttribute('value', nQuestao+'E')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
    e.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
    e.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    bloquearAlternativas()

    if(respostaEscolhida == certa) {
        pontos += 10 // pontos = pontos + 10
        // atualizar placar
        placar = pontos
        instrucoes.textContent = "Pontos " + placar
        
        setFeedback(true)
        esconderAlternativas()
        setTimeout(function() {
            esconderAlternativas()
            mostrarProximaQuestao(numeroDaQuestao)
        }, 1500)
    } else {
        setFeedback(false)
        esconderAlternativas()
        setTimeout(function() {
            esconderAlternativas()
            mostrarProximaQuestao(numeroDaQuestao)
        }, 1500)
    }
}

function esconderAlternativas() {
    //Mostra/Esconde o article das questoes
    var elems = document.getElementsByClassName('questoes');
    for (var i=0;i<elems.length;i+=1){
        if(elems[i].style.display === 'none'){
            elems[i].style.display = 'block';
        } else {
            elems[i].style.display = 'none';
        }
    }

    //Mostra/Esconde o article do feedback
    var elems = document.getElementsByClassName('feedback');
    for (var i=0;i<elems.length;i+=1){
        if(elems[i].style.display === 'block'){
            elems[i].style.display = 'none';
        } else {
            elems[i].style.display = 'block';
        }
    }
}

function setFeedback(boolean){
    feedbackMessage.textContent = boolean ? "Acertou!" : "Errou!" //Altera o texto de feedback
    var elems = document.getElementsByClassName('feedback');
    for (var i=0;i<elems.length;i+=1){ //Altera a cor do article do feedback
        elems[i].style.backgroundColor = boolean ? 'rgba(0, 255, 42, 0.3)' : 'rgba(255, 0, 0, 0.3)'
    }
}

//Mostra a proxima questao, chamada após o feedback acontecer
function mostrarProximaQuestao(numeroDaQuestao){
    proxima = numeroDaQuestao+1

    if(proxima > totalDeQuestoes) {
        console.log('Fim do Jogo!')
        fimDoJogo()
    } else {
        proximaQuestao(proxima)
    }
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""
    e.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')
    e.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 200000)
}
