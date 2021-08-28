let numeroDeAlunos = 10;

let contador = 1;

do {
    if (contador === 0) {
        console.log("O numero atual é ZERO")
    } else if(contador % 2 == 0 && contador > 5) {
        console.log("O número " + contador + " é PAR")
    } else {
        console.log("O número " + contador + " é IMPAR")
    }
    contador++
} while (contador <= numeroDeAlunos);

/*while (contador <= numeroDeAlunos) {
    if (contador === 0) {
        console.log("O numero atual é ZERO")
    } else if(contador % 2 != 0) {
        console.log("O número " + contador + " é PAR")
    } else {
        console.log("O número " + contador + " é IMPAR")
    }
    
    contador++;
}

for (let contador = 0; contador <= numeroDeAlunos; contador ++) {
    console.log(contador);

    if (contador === 0) {
        console.log("O numero atual é ZERO");
    } else if(contador % 2 == 0) {
        console.log("O número " + contador + " é PAR")
    } else {
        console.log("O número " + contador + " é IMPAR")
    }
}



let listaDeAlunos = ["Marcelo", "Juh", "Cleber", "Wesley", "Adriano"]

for (const aluno of listaDeAlunos) {
    console.log(aluno);
}

listaDeAlunos.forEach(aluno => {
    console.log(aluno)
});*/