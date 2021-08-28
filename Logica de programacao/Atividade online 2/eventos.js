// Selecionar a Data do evento (Inferior a Data Atual)

const dataAtual = new Date();
const dataEvento = new Date ("2021/08/10");

console.log(dataAtual);
console.log(dataEvento + " - Data Digitada!");

// Validação da Data para liberação do evento
if (dataAtual > dataEvento) {
    console.log("Data do Evento Não Está Mais Disponível.");
    console.log("Favor Digitar Uma Nova Data!");
       
} else if (dataAtual < dataEvento) {
    console.log("Data do Evento Disponível. ")
}

// Selecionar Nova Data do evento (Superior a Data Atual - Só mesmo pra testar essa segunda verificação)
const novaDataEvento = new Date ("2021/11/30");

//console.log(dataAtual);
console.log(novaDataEvento + " - Data Digitada!");

// Validação da Data para liberação do evento
if (dataAtual > novaDataEvento) {
    console.log("Data do Evento Não Está Mais Disponível.");
    console.log("Favor Digitar Uma Nova Data!");
       
} else if (dataAtual < novaDataEvento) {
    console.log("Data do Evento Disponível. ")
}



// Verificação Da Quantidade De Inscritos

let qtdParticipantes = 12;

let contador = 0;

for (let contador = 0; contador < qtdParticipantes; contador++) {
    
    if (contador > 99) {
        console.log("Evento Atingiu o Número Máximo De Inscritos, Cadastro Não Permitido. ");
    } 
}

// Validação Da Idade

let dataNascimento = new Date ("1987", "01", "14");

let anos = (dataAtual.getUTCFullYear() - dataNascimento.getUTCFullYear());

if (anos >= 18) {
    console.log("Participante Tem " + anos + " Maior De Idade.")
} else {
    console.log("Participante Tem " + anos + " Menor De Idade.")
    console.log("Cadastro Não Permitido.")
}



// Listar Participantes
let listaDeParticipantes = ["Marcelo", "Juh", "Cleber", "Wesley", "Adriano", "Abner", "Alex", "Andre", "Regis", "Arthur"]
let listaDePalestrantes = ["Odirlei", "Thiago"]

for (let palestrantes of listaDePalestrantes) {
    console.log("Palestrante; " + palestrantes);
}
for (let participantes of listaDeParticipantes) {
    console.log("Participante; " + participantes + contador);
}

