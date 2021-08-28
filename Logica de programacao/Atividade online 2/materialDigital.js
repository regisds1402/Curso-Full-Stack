// variável, seu valor pode ser alterado no decorrer do programa
let nomeEstudante = "Helena";
console.log(nomeEstudante);

// constante, seu valor não pode ser alterado
const nomeDoEstudante = "Helena";
console.log(nomeDoEstudante);

//Em outras linguagens, portanto, você encontrará algo semelhante a:
String: nomeEstudante = "Helena";

//Lista de estudante
let listaDeEstudantes = ["Helena", "Chico", "Mário"];
console.log(listaDeEstudantes);

//Quantidade de estudante
let quantidadeDeEstudantes = listaDeEstudantes.length;
console.log(quantidadeDeEstudantes);
if (quantidadeDeEstudantes >100) {
    console.log("Cadastro Não Liberado.")
} else {
    console.log("Cadastro Liberado.")
}