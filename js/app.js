function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Confirmação antes de devolver
        let confirmar = confirm('Tem certeza que deseja devolver este jogo?');
        if (!confirmar) {
            return; // cancela a ação
        }

        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
}


function jogosAlugados() {
    let alugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`Total de jogos alugados: ${alugados}`);
}

function ehPalindromo(texto) {
    let normalizado = texto.toLowerCase().replace(/\s+/g, ''); // remove espaços
    let invertido = normalizado.split('').reverse().join('');
    return normalizado === invertido;
}

// Exemplos de uso:
console.log(ehPalindromo("ovo")); // true
console.log(ehPalindromo("A sacada da casa")); // true
console.log(ehPalindromo("javascript")); // false

function ordenarNumeros(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    return numeros;
}

// Exemplo de uso:
console.log(ordenarNumeros(9, 2, 5)); // [2, 5, 9]

