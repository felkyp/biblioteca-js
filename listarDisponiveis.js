import { dadosLivros } from "./dadosLivros.js";

export function listarDisponiveis() {

    console.log("\n===== LIVROS DISPONÍVEIS =====");

    const livrosDisponiveis = dadosLivros.filter(
        livro => livro.disponivel === true
    );

    if (livrosDisponiveis.length === 0) {

        console.log("Não há livros disponíveis.");

    } else {

        livrosDisponiveis.forEach((livro, indice) => {

            console.log(`\nLivro ${indice + 1}`);
            console.log(`Título: ${livro.titulo.toUpperCase()}`);
            console.log(`Autor: ${livro.autor}`);
            console.log(`Categoria: ${livro.categoria}`);
            console.log(`Páginas: ${livro.paginas}`);
            console.log("Disponibilidade: disponível");

        });

    }
}