class Retangulo {           // Encapsulamento: esconde os detalhes internos da class e expoe apenas o necessario 
  private largura: number;  // por ser private, impede que largura e altura seja acessado diretamente de fora da calss. significa que retangulo.largura = 50; nao vai funcionar.
  private altura: number;

  constructor(largura: number, altura: number) {
      this.largura = largura;
      this.altura = altura;
  }

  calcularArea(): number {
      return this.largura * this.altura;
  }

  exibirArea(): void {
      console.log(`A área do retângulo é: ${this.calcularArea()}`);
  }
}

// Criando um objeto da classe Retangulo
const retangulo = new Retangulo(10, 5);

// Chamando o método para exibir a área
retangulo.exibirArea(); // Saída: A área do retângulo é: 50
