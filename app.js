let listaNumeroEscolhido = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let contador = 1; 

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2}); 
}

function exibirMensagensIniciais(){
    exibirNaTela("h1","Jogo do número secreto!");
    exibirNaTela("p","Digite um número entre 1 e 50");
}
exibirMensagensIniciais();


function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        let tentativas = contador > 1? "tentativas" : "tentativa";
        let mensagemTentativas = `Parabéns, você acertou com ${contador} ${tentativas}`;
        exibirNaTela("h1",mensagemTentativas);
        exibirNaTela("p","Uhuul!");
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (chute > numeroSecreto){
            exibirNaTela("p","O número secreto é menor!");
        }else{ 
            exibirNaTela("p","O número secreto é maior!");
        }
        contador++;
        limparTexto();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosEscolhidos = listaNumeroEscolhido.length;

    if(quantidadeDeNumerosEscolhidos == numeroLimite){
        listaNumeroEscolhido = [];
    }

    if(listaNumeroEscolhido.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumeroEscolhido.push(numeroEscolhido);
        console.log(listaNumeroEscolhido);
        return numeroEscolhido;
    }
}
function limparTexto(){
    chute = document.querySelector("input");
    chute.value = '';
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparTexto();
    contador = 1;
    exibirMensagensIniciais();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}