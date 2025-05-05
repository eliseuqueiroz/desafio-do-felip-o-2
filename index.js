// desafio do felipão 2 
function calcularRank(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return "O Herói tem de saldo de " + saldo + " está no nível de " + nivel;
}


let vitorias = 199;
let derrotas = 1;

console.log(calcularRank(vitorias, derrotas));
