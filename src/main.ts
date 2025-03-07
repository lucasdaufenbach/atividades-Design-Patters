import * as readline from "readline";

class AtividadeExecutor {
    private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }

    public iniciar() {
        console.log("Lista a ser corrigida = 1");
        this.executarAtividade();
    }

    private executarAtividade() {
        this.rl.question(
            "Escolha a atividade para executar (1-9) ou digite 'x' para encerrar: ",
            async (at) => {
                if (at.toLowerCase() === "x") {
                    console.log("Programa encerrado.");
                    this.rl.close();
                    return;
                }

                await this.executarAtividadeSelecionada(at);
            }
        );
    }

    private async executarAtividadeSelecionada(at: string) {
        try {
            const atividade = `./listaUm/at${at}/Resolucao`;
            const { default: run } = await import(atividade);
            run();
        } catch (error) {
            console.log("Atividade não encontrada ou erro ao executar.");
        }

        // loop
        this.executarAtividade();
    }
}

// Instancia a classe e inicia o sistema
const atividadeExecutor = new AtividadeExecutor();
atividadeExecutor.iniciar();
