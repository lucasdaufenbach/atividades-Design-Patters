class ContaBancaria {
  private numero: number;
  private saldo: number;

  constructor(numero: number, saldoInicial: number) {
      this.numero = numero;
      this.saldo = saldoInicial;
      console.log(`Conta ${this.numero} criada com saldo inicial de R$${this.saldo}.`);
  }

  depositar(valor: number): void {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado na conta ${this.numero}. Novo saldo: R$${this.saldo}.`);
  }

  sacar(valor: number): void {
      if (this.saldo >= valor) {
          this.saldo -= valor;
          console.log(`Saque de R$${valor} realizado na conta ${this.numero}. Novo saldo: R$${this.saldo}.`);
      } else {
          console.log("Saldo insuficiente.");
      }
  }

  consultarSaldo(): void {
      console.log(`Saldo da conta ${this.numero}: R$${this.saldo}.`);
  }
}

class GerenciadorDeContas {
  private contas: ContaBancaria[] = [];

  criarConta(numero: number, saldoInicial: number): void {
      const novaConta = new ContaBancaria(numero, saldoInicial);
      this.contas.push(novaConta);
  }

  buscarConta(numero: number): ContaBancaria | undefined {
      return this.contas.find(conta => conta["numero"] === numero);
  }
}

const gerenciador = new GerenciadorDeContas();

gerenciador.criarConta(123, 1000);

const conta = gerenciador.buscarConta(123);
if (conta) {
  conta.depositar(500);
  conta.sacar(200);
  conta.consultarSaldo();
}
