// Desafio Classificador de Nível de Herói

let user = "Hero123"
let exp = 5.000

let elo;

if (exp < 1.000) {
    elo = "Ferro";
} else if (exp >= 1.001 && exp <= 2.000) {
    elo = "Bronze";
} else if (exp >= 2.001 && exp <= 5.000) {
    elo = "Prata";
} else if (exp >= 5.001 && exp <= 7.000) {
    elo = "Ouro";
} else if (exp >= 7.001 && exp <= 8.000) {
    elo = "Platina";
} else if (exp >= 8.001 && exp <= 9.000) {
    elo = "Ascendente";
} else if (exp >= 9.001 && exp <= 10.000) {
    elo = "Imortal";
} else {
    elo = "Radiante";
}

console.log ("O Herói de nome " + user + " está no nível de " + elo) 