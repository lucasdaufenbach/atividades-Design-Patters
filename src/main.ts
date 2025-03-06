import * as readline from "readline";

class AtividadeExecutor {
    private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }

    // Método para iniciar o sistema de execução
    public iniciar() {
        console.log("Bem-vindo ao sistema de atividades!");
        this.executarAtividade();
    }

    // Método para perguntar qual atividade o professor deseja executar
    private executarAtividade() {
        this.rl.question(
            "Escolha a atividade para executar (1-9) ou digite 'sair' para encerrar: ",
            async (at) => {
                if (at.toLowerCase() === "sair") {
                    console.log("Programa encerrado.");
                    this.rl.close();
                    return;
                }

                await this.executarAtividadeSelecionada(at);
            }
        );
    }

    // Método para executar a atividade selecionada
    private async executarAtividadeSelecionada(at: string) {
        try {
            const atividade = `./listaUm/at${at}/Resolucao`;
            const { default: run } = await import(atividade);
            run();
        } catch (error) {
            console.log("Atividade não encontrada ou erro ao executar.");
        }

        // Chama novamente a função para continuar executando o loop
        this.executarAtividade();
    }
}

// Instancia a classe e inicia o sistema
const atividadeExecutor = new AtividadeExecutor();
atividadeExecutor.iniciar();
