let QuantidadedeCartas = prompt("Com quantas cartas quer jogar ?");
let ParouImpar = QuantidadedeCartas%2;

// Loop para perguntar com quantas cartas quer jogar
while(QuantidadedeCartas > 14 || QuantidadedeCartas < 4 || ParouImpar != 0){
QuantidadedeCartas = prompt("Com quantas cartas quer jogar ?");
ParouImpar = QuantidadedeCartas%2;
}
