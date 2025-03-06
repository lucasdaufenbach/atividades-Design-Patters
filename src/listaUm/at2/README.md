# Exercicio 02
## Converta um código que gerencia uma lista de tarefas (to-do list) usando funções para uma versão orientada a objetos.
```
let tarefas: string[] = [];

function adicionarTarefa(tarefa: string): void {
    tarefas.push(tarefa);
    console.log(`Tarefa "${tarefa}" adicionada.`);
}

function listarTarefas(): void {
    console.log("Lista de Tarefas:");
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa}`);
    });
}

function removerTarefa(index: number): void {
    if (index >= 0 && index < tarefas.length) {
        const tarefaRemovida = tarefas.splice(index, 1)[0];
        console.log(`Tarefa "${tarefaRemovida}" removida.`);
    } else {
        console.log("Índice inválido.");
    }
}

adicionarTarefa("Estudar TypeScript");
adicionarTarefa("Fazer exercícios de POO");
listarTarefas();
removerTarefa(0);
listarTarefas();
```