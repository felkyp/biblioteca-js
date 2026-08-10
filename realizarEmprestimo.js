import { dadosLivros } from "./dadosLivros.js";

export function realizarEmprestimo(titulo) {

    const livro = dadosLivros.find(
        livro => livro.titulo.toUpperCase() === titulo.toUpperCase()
    );

    if (livro && livro.disponivel === true) {

        livro.disponivel = false;

        console.log("\nLivro emprestado com sucesso!");

    } else {

        console.log("\nLivro indisponível!");

    }
}