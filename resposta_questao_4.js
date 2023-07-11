
function calcularAnosTrabalhado(matriz) {
    const anosTrabalhado = {}; // auxiliar para registrar os anos que tiveram pessoas trabalhando

    for (let i = 0; i < matriz.length; i++) {
        const [anoInicio, anoAposentadoria] = matriz[i]; // percorre a matriz

        for (let ano = anoInicio; ano <= anoAposentadoria; ano++) {
            if (anosTrabalhado[ano]) {
                anosTrabalhado[ano]++; // incrementa o ano
            } else {
                anosTrabalhado[ano] = 1; // insere o ano caso o mesmo ainda não exista no auxiliar
            }
        }
    }
    return calcularQuantidadeAnos(anosTrabalhado);
}
function calcularQuantidadeAnos(anos) {
    let maximo = 0; // maximo para verificar os maiores anos
    let pilha = [];

    for (const ano in anos) { // percorre ano a ano
        const quantidade = anos[ano];

        if (quantidade > maximo) {
            maximo = quantidade; 
            pilha = [ano]; // se o ano atual for o maior encontrado, o maximo recebe seu valor e a pilha conterá apenas este ano
        } else if (quantidade === maximo) { // se o ano atual tiver a mesma quantidade do maximo atual, entao a pilha é incrementada com ele
            pilha.push(ano);
        }
    }
    return pilha.map(Number); // retorna a pilha com os anos com maiores valores
}


// Exemplo
console.log(calcularAnosTrabalhado([[1961, 1965], [1960, 1961], [1962, 1966]]));  // [1961 a 1965]
console.log(calcularAnosTrabalhado([[1960, 2005], [1980, 2000], [1970, 1980]]));  // [1980]
console.log(calcularAnosTrabalhado([[1960, 2000], [1990, 2002], [1950, 1980]]));  // [1960 a 1980 e 1990 a 2000]
