
import { dadosLivros } from "./dadosLivros.js";

export function buscarLivro(titulo) {

    const livro = dadosLivros.find(
        livro => livro.titulo.toUpperCase() === titulo.toUpperCase()
    );

    if (livro) {

        console.log("\n===== LIVRO ENCONTRADO =====");
        console.log(`Título: ${livro.titulo.toUpperCase()}`);
        console.log(`Autor: ${livro.autor}`);
        console.log(`Categoria: ${livro.categoria}`);
        console.log(`Páginas: ${livro.paginas}`);
        console.log(
            `Disponibilidade: ${livro.disponivel ? "disponível" : "indisponível"}`
        );

    } else {

        console.log("\nEste livro não foi encontrado!");

    }
}