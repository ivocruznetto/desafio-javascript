
function fatorial(n) {
    if (!Number.isInteger(n) || n < 0) { // valida se é um inteiro positivo
        return 'Inválido'
    }
    if (n >= 0 && n <= 1) { // o fatorial de 0 e 1 é sempre 1
        return 1;
    } else {
        let fatorial = 1;
        for (let i = 2; i <= n; i++) {
            fatorial *= i; // incrementa o fatorial
        }
        return fatorial;
    }
}

// Exemplo
console.log(fatorial(0));  // 1
console.log(fatorial(1));  // 1
console.log(fatorial(3));  // 6
console.log(fatorial(5));  // 120
console.log(fatorial(-1));  // Inválido
console.log(fatorial(1.5));  // Inválido
