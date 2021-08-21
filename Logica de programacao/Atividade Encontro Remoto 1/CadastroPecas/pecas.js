const listaDePecas = ["Ar condicionado", "Motor", "Amortecedor"]

console.log(listaDePecas)

// Verificar a quantidade de peças cadastra, no maximo 10 itens.
if (listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças")    
} else {
    console.log("Não há mais espaço na lista")
}

// verificar peso das peças, peça deve ter mais de 100g.
var  peso  =  100;

if  (peso  >=  100)  {
    console.log ("Peso da peca adequado.") ;
}  else  {
    console.log ("Peso insuficiente.") 
}

// Verificacao se a quantidade de caracteres e adequada para cadasto, sendo maior que 3. 
let  nomePeca  =  "Disco de Freio" ;

if  (nomePeca.length  >  3)  {
    console.log ("Nome adequado!") 
}  else if (nomePeca.length  ==  0)  {
    console.log ("Nome não pode ser vazio.")
}  else  {
    console.log ("Peca precisa mais de 3 letras.") ;
}

//Verificacao da quantidade de caracteres das pecas em if 
switch (nomePeca.length)  {
    case  0 :
        console.log ("Nome não pode ser vazio.") ;
        break ;
    case  1 :
    case  2 :
    case  3 :
        console.log ("Peca precisa mais de 3 letras.") ;
        break;

    default:
            console.log ("Nome adequado!") ;
        break ;
}

// =   -> Atribuição de valor, recebe
// ==  -> Verificação se o valor é igual
// === -> Verifica se o valor, e o tipo de dado, são iguais