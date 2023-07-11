function verificarSequencia(sequencia) {
    const pilha = [];
    const chaves = { // utilizado um objeto chave-valor para comparação do dados de entrada
        '[': ']',
        '(': ')',
        '{': '}'
    };

    for (let i = 0; i < sequencia.length; i++) {
        const char = sequencia[i];

        if (char === '[' || char === '(' || char === '{') { // adiciona na pilha se for um tipo de entrada
            pilha.push(char);
        } else if (char === ']' || char === ')' || char === '}') {
            const aberto = pilha.pop(); // remove o ultimo elemento da pilha caso a entrada atual seja um tipo de fechamento

            if (chaves[aberto] !== char) {  // se o valor contido nas chaves na posicao do ultimo elemento aberto for 
                return 'não é uma sequência válida'; // diferente do valor atual de entrada, entao a sequencia é inválida
            }
        }
    }

    return pilha.length === 0 ? 'é uma sequência válida' : 'não é uma sequência válida';
}

// Exemplo
console.log(verificarSequencia('{[()(){}[]]{}}')) // é uma sequência válida
console.log(verificarSequencia('{[(()]}')) // não é uma sequência válida(Há um parêntese posicionado incorretamente)
console.log(verificarSequencia('{}[]()')) // é uma sequência válida
console.log(verificarSequencia('((){}[[])')) // não é uma sequência válida(Há uma chave posicionado incorretamente)
console.log(verificarSequencia('[{}([)]]')) // não é uma sequência válida(O número de caracteres está correto, mas o posicionamento de uma chave / parêntese está incorreto)
