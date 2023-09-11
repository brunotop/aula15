//Exercicio de interpretação
//Bruno de Freitas Leite

//1. resposta
// a) O codigo abaixo responde com a seguinte mensagem
// se a pessoa tiver mais de 18 anos, ela esta autorizada a dirigir,
// se a pessoa tiver menos de 18anos, esta negada a dirigir.

// b) a mensagem "Alice pode dirigir!" será impressa no console quando a idade for maior ou igual a 18
//se a mensagem "Alice nao pode dirigir" sera impressa no console que alice nao atingiu a maioridade para dirigir

//-------------------------------------------------------------
/*javascriptCopy code
const pessoa = {
nome: "Alice",
idade: 25,
temCarteiraDeMotorista: true
}
if (pessoa.idade >= 18 && pessoa.temCarteiraDeMotorista) {
console.log(`${pessoa.nome} pode dirigir!`)
} else {
console.log(`${pessoa.nome} não pode dirigir.`)
}

//--------------------------------------------------------------
//2. resposta
// a)
//ele diz baseado na informaçao dada, ele diz que o animal é ou nao carnivoro

// b)
//é um animal carnivoro

const animal = {
    nome: "Leão",
    carnivoro: true
    }
    if (animal.carnivoro) {
    console.log(`${animal.nome} é um animal carnívoro.`)
    } else {
    console.log(`${animal.nome} não é um animal carnívoro.`)
    }

//3. resposta
// a)Este codigo mostra a relacao a variavel se ela é maior ou menor e se é par ou impar

// b)as mensagens expressas no console serao
// O número é maior do que 5.
// O número é par.

const numero = 10;
if (numero > 5) {
console.log("O número é maior do que 5.");
} else {
console.log("O número é menor ou igual a 5.");
}
if (numero % 2 === 0) {
console.log("O número é par.");
} else {
console.log("O número é ímpar.");
}

//exercicio de escrita
//1. resposta

const pessoa = {
    idade:[prompt("Qual sua idade")]
}
    if(pessoa.idade >= 18){
        console.log("voce é maior de idade")
    } else {
        console.log("Voce é menor de idade")
}
//2. resposta
function turno(hora){
    if (hora === "manhã"){
        return("Bom Dia");
    } else if (hora === "Tarde"){
        return("Boa Tarde");
    } else if (hora === "Noite"){
        return("Boa Noite");
    } 
    else{return ("Nao coloco nenhum turno")}
};
console.log(turno(prompt("Qual seu turno")));

//3. resposta
let turno = prompt("Qual seu turno").toLocaleLowerCase
switch (turno) {
    case 'Manhã':
        console.log("Bom Dia");
    break;
    case 'Tarde':
        console.log("Boa Tarde");
    break;
    case 'Noite':
        console.log("Boa Noite");
    break;
    default:
        console.log("Nao selecionou nenhum turno")
        break;
}
//4. resposta

function aluno(nome, idade, tipodeCurso, temBolsa){
    if (idade < 30 && tipodeCurso == ("sim") && temBolsa == ("nao")){
        return("Voce pode se candidatar a uma bolsa de estudos!")
    } else 
        return("Desculpe mas voce nao tem os requisitos");
}
console.log(aluno(prompt("Qual seu nome?"), Number(prompt("Qual sua idade")), (prompt("Qual curso voce faz?")), (prompt("Tem bolsa?"))));
*/
//5. resposta

function produtos(nome, preço, desconto, fretegratis){{
    let precoDesconto = ((preço / 100) * desconto);
    if (fretegratis == 'sim'){
        if(desconto >0){
                    return ("com frete e desconto")
        }else{  return (nome + ' do item Preço final: [preço sem desconto] (fretegratis)');}
    }else{
        if(desconto == 0){
            return("sem frete, sem desconto")
        }
        else{
           
        }
    }
  }
};
console.log(produtos(prompt("nome do produto"), Number(prompt("Preço do item")), Number(prompt("Quantia de desconto")), (prompt("tem frete?"))));*/

function produto(nome, preço, desconto, fretegratis){{
    let preçodesconto = ((preço / 100) * desconto)
    if (desconto > 0 && fretegratis == "sim"){
        return (`Item: ${nome},  Preço: ${preço} Preço final: ${preçodesconto} Tem frete?: sim`)}
        else if (desconto > 0 && fretegratis == "não")
        {return (`Item: ${nome}, Preço: ${preço} Preço final: ${preçodesconto}`)}
        else if (desconto == 0 && fretegratis == "sim")
        {return (`Item: ${nome}, Preço: ${preço} Tem frete?: sim`)}
        else
        {return ("Item:", preço)}
    }
    };
    console.log(produto(prompt("nome do produto"), Number(prompt("preço do item")), 
    Number(prompt("quantia de desconto")), prompt("Tem frete?")));
