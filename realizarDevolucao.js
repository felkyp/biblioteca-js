import { dadosLivros } from "./dadosLivros.js";

export function realizarDevolucao(titulo) {

    const livro = dadosLivros.find(
        livro => livro.titulo.toUpperCase() === titulo.toUpperCase()
    );

    if (livro) {

        livro.disponivel = true;

        console.log("\nLivro devolvido com sucesso!");

    } else {

        console.log("\nLivro não encontrado!");

    }
}