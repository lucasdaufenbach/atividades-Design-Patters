# Exercicio 09
## Sistema de Relatórios
User Story:
Como um gerente de uma empresa, eu quero poder gerar relatórios em diferentes formatos (PDF, Excel, HTML), para que eu possa analisar os dados da forma que preferir.

### Requisitos:
Crie uma interface Relatorio com o método:
- gerar(dados: string[]): void - Deve gerar um relatório com base nos dados fornecidos.

Implemente a interface em três classes:
- PdfRelatorio: Gera um relatório em PDF (exiba no console: "Gerando relatório em PDF com os dados: [dados]").
- ExcelRelatorio: Gera um relatório em Excel (exiba no console: "Gerando relatório em Excel com os dados: [dados]").
- HtmlRelatorio: Gera um relatório em HTML (exiba no console: "Gerando relatório em HTML com os dados: [dados]").

Crie uma classe Gerente com o método:
- solicitarRelatorio(relatorio: Relatorio, dados: string[]) que usa a interface para gerar um relatório.

Teste o sistema criando um gerente e gerando relatórios em diferentes formatos.