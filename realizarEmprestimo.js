import { dadosLivros } from "./dadosLivros.js";

export function realizarEmprestimo(titulo) {

    const livro = dadosLivros.find(
        livro => livro.titulo.toUpperCase() === titulo.toUpperCase()
    );

    if (livro && livro.disponivel === true) {

        livro.disponivel = false;

        console.log("\nEste livro foi emprestado com sucesso!");

    } else {

        console.log("\nEste livro não está disponível para empréstimo!");

    }
}