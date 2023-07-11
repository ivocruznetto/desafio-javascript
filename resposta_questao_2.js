
function existemDuplicados(array) {
    const valoresDuplicados = []; // necessario array auxiliar para armazenar os valores duplicados exclusivos
    const valoresUnicos = []; // necessario array auxiliar para armazenar os valores unicos

    for (let i = 0; i < array.length; i++) {
        const valor = array[i];

        if (valoresUnicos.includes(valor)) {  // se ja existir o valor então inclui no array de duplicados caso o mesmo
            if (!valoresDuplicados.includes(valor)) { // ainda não esteja lá (pode ter mais que 2)
                valoresDuplicados.push(valor);
            }
        } else {
            valoresUnicos.push(valor); // caso contrato adiciona nos valores unicos
        }
    }

    return valoresDuplicados;
}

// Exemplo
console.log(existemDuplicados([4, 5, 44, 98, 4, 5, 6, 7]));  // [4, 5]
console.log(existemDuplicados([7, 7, 1, 2, 3, 7]));  // [7]
console.log(existemDuplicados([7, 1, 2, 3]));  // []
