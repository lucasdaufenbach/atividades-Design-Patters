# Exercicio 01
## Converta um código que calcula a área de um retângulo usando funções para uma versão orientada a objetos.
```
function calcularAreaRetangulo(largura: number, altura: number): number {
    return largura * altura;
}

function exibirArea(largura: number, altura: number): void {
    const area = calcularAreaRetangulo(largura, altura);
    console.log(`A área do retângulo é: ${area}`);
}

console.log(exibirArea(10, 5)); // Saída: A área do retângulo é: 50
```