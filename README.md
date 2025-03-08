# Atividades Design Patterns
Este repositório contém um sistema de execução e visualização de atividades relacionadas a diciplina Design Patterns do meu curso de Engenharia de Software. O sistema foi construído utilizando TypeScript e Node.js, com uma estrutura baseada em Programação Orientada a Objetos (POO).

---

## Instalação
**Clone este repositório para sua máquina local:**

```
git clone https://github.com/lucasdaufenbach/atividades-Design-Patters.git
```
**Navegue até o diretório do projeto:**
```
cd atividades-Design-Patters
```

**Instale as dependências do projeto:**
```
npm install
```

## Como usar
**Para executar o sistema de atividades, rode o seguinte comando:**
```
npm run dev
```

O sistema o guiará entre os arquivos para executar cada atividade sem precisar modificar linhas do código. Mas sinta-se à vontade para acessar o arquivo que quiser.

O sistema carregará o arquivo ```Resolucao.ts```  da atividade correspondente e executará o código dentro dele.

## Estrutura do Código
**Programação Orientada a Objetos (POO):** O código foi estruturado utilizando POO, onde a classe ```AtividadeExecutor```  é responsável por gerenciar o fluxo de execução e a interação com o usuário.

**Importação Dinâmica:** As atividades são carregadas dinamicamente utilizando o ```import()```  do ES Modules, permitindo a execução do arquivo correto com base na escolha do professor.

## Tecnologias Utilizadas
**TypeScript:** A linguagem principal utilizada para a construção deste sistema.

**Node.js:** Ambiente de execução para o código TypeScript.

**TS-Node:** Utilizado para executar os arquivos TypeScript diretamente no terminal sem a necessidade de transpilar para JavaScript previamente.
