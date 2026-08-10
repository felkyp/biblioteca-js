import promptSync from "prompt-sync";

import { listarLivros } from "./listarLivros.js";
import { buscarLivro } from "./buscarLivro.js";
import { listarDisponiveis } from "./listarDisponiveis.js";
import { cadastrarLivro } from "./cadastrarLivro.js";
import { realizarEmprestimo } from "./realizarEmprestimo.js";
import { realizarDevolucao } from "./realizarDevolucao.js";
import { exibirEstatisticas } from "./exibirEstatisticas.js";

const prompt = promptSync();


// MENU PRINCIPAL
function menuPrincipal() {

    let opcao;

    do {

        console.log("\n===== MENU PRINCIPAL =====");
        console.log("1 - Entrar na biblioteca");
        console.log("0 - Sair");

        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {

            case "1":
                menuBiblioteca();
                break;

            case "0":
                console.log("\nPrograma encerrado!");
                break;

            default:
                console.log("\nOpção inválida!");
        }

    } while (opcao !== "0");
}


// MENU DA BIBLIOTECA
function menuBiblioteca() {

    let opcao;

    do {

        console.log("\n===== SISTEMA DE BIBLIOTECA =====");
        console.log("1 - Listar livros");
        console.log("2 - Buscar livro");
        console.log("3 - Listar livros disponíveis");
        console.log("4 - Cadastrar livro");
        console.log("5 - Realizar empréstimo");
        console.log("6 - Realizar devolução");
        console.log("7 - Exibir estatísticas");
        console.log("0 - Sair");

        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {

            case "1":
                listarLivros();
                break;

            case "2":
                const tituloBusca = prompt("Digite o título do livro: ");
                buscarLivro(tituloBusca);
                break;

            case "3":
                listarDisponiveis();
                break;

            case "4":
                cadastrarLivro();
                break;

            case "5":
                const tituloEmprestimo = prompt("Digite o título do livro: ");
                realizarEmprestimo(tituloEmprestimo);
                break;

            case "6":
                const tituloDevolucao = prompt("Digite o título do livro: ");
                realizarDevolucao(tituloDevolucao);
                break;

            case "7":
                exibirEstatisticas();
                break;

            case "0":
                console.log("\nVoltando ao menu principal...");
                break;

            default:
                console.log("\nOpção inválida!");
        }

    } while (opcao !== "0");
}




menuPrincipal();