const caixaPrincipal = document.querySelector(".caixa-principal"); 
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixalternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaTexto = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "qual arte marcial a mais forte?",
        alternativas: ["muay thai","jiu-jitsu","karate"]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: ["aternativa1","alternativa2","alternativa3"]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: ["aternativa1","alternativa2","alternativa3"]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: ["aternativa1","alternativa2","alternativa3"]
    },
];