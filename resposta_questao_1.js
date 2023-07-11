
function verificarOrdenacaoSequencial(numero) {
    // valida se a entrada é inteiro e positivo
    if (!Number.isInteger(numero) || numero <= 0) {
        return 'Insira um número inteiro positivo.';
    }

    // faz um cast para string para poder utilizar a função split e separar os caracteres
    // faz o map para voltar os digitos para tipo number
    const digitos = String(numero).split('').map(Number);

    // valida se é uma ordem crescente, verificando se a difença entre vizinhos diferente de -1 ou se são iguais
    let crescente = true;
    for (let i = 1; i < digitos.length; i++) {
        if ((digitos[i - 1] - digitos[i] !== -1) && (digitos[i - 1] !== digitos[i])) {
            crescente = false;
            break;
        }
    }
    // valida se é uma ordem decrescente, verificando se a difença entre vizinhos diferente de 1 ou se são iguais
    let decrescente = true;
    for (let i = 1; i < digitos.length; i++) {
        if ((digitos[i - 1] - digitos[i] !== 1) && (digitos[i - 1] !== digitos[i])) {
            decrescente = false;
            break;
        }
    }

    // se for uma ordem sequencial crescente ou decrescente passará no teste
    if (crescente || decrescente)
        return 'Está ordenado';
    else
        return 'Não está ordenado';
}

// Exemplo
console.log(verificarOrdenacaoSequencial(12345678)) // -> Está ordenado
console.log(verificarOrdenacaoSequencial(1223455678)) // -> Está ordenado
console.log(verificarOrdenacaoSequencial(876543210)) // -> Está ordenado
console.log(verificarOrdenacaoSequencial(152456457)) // -> Não está ordenado
console.log(verificarOrdenacaoSequencial(12356789)) // -> Não está ordenado
console.log(verificarOrdenacaoSequencial(13579)) // -> Não está ordenado
console.log(verificarOrdenacaoSequencial(9765421)) // -> Não está ordenado
console.log(verificarOrdenacaoSequencial(123454321)) // -> Não está ordenado
console.log(verificarOrdenacaoSequencial(12222222)) // -> Está ordenado
console.log(verificarOrdenacaoSequencial(2111111)) // -> Está ordenado
console.log(verificarOrdenacaoSequencial(1599)) // -> Não está ordenado
console.log(verificarOrdenacaoSequencial(1599.5)) // -> Não inteiro
console.log(verificarOrdenacaoSequencial(-1599)) // -> Não positivo

