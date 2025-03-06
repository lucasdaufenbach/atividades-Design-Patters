# Exercicio 08
## Sistema de Pagamentos
User Story:
Como um cliente de uma loja online, eu quero poder pagar minhas compras usando diferentes métodos de pagamento (cartão de crédito, PayPal, boleto), para que eu possa escolher a opção mais conveniente.

### Requisitos:
Crie uma interface MetodoPagamento com o método:
- pagar(valor: number): void - Deve processar o pagamento.

Implemente a interface em três classes:
- CartaoCredito: Processa o pagamento por cartão de crédito (exiba no console: "Pagamento de R$[valor] realizado com cartão de crédito.").
- PayPal: Processa o pagamento via PayPal (exiba no console: "Pagamento de R$[valor] realizado via PayPal.").
- Boleto: Processa o pagamento por boleto (exiba no console: "Pagamento de R$[valor] realizado com boleto.").

Crie uma classe Compra com o atributo:
- valor (number)
- E um método realizarPagamento(metodo: MetodoPagamento) que usa a interface para processar o pagamento.

Teste o sistema criando uma compra e realizando pagamentos com diferentes métodos.
