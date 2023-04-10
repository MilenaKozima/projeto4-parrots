let QuantidadedeCartas = prompt("Com quantas cartas quer jogar ?");
let ParouImpar = QuantidadedeCartas % 2;

// Loop para perguntar com quantas cartas quer jogar
while (QuantidadedeCartas > 14 || QuantidadedeCartas < 4 || ParouImpar != 0) {
    QuantidadedeCartas = prompt("Com quantas cartas quer jogar ?");
    ParouImpar = QuantidadedeCartas % 2;
}

const jogo = document.querySelector(".jogo");
for (let indice = 0; indice < QuantidadedeCartas; indice++) {
    
    image = [];
    //${indice % 2 == 0 ? 'fiestaparrot' : 'bobrossparrot'}
    /*let image = '';
    if(indice % 2 == 0){
        image = 'fiestaparrot';
    }*/

    jogo.innerHTML += `
        <div data-teste="card" class="card" onclick="virar(this)">
            <div class="front-face face">
                <img data-test="face-down-image" src="./imagens/back.png">
            </div>
            <div class="back-face face">
                <img data-test="face-up-image" src="./imagens/${image}.gif">
            </div>
        </div>
    `;
}
 

function virar(element) {
    element.classList.toggle('active')
}




