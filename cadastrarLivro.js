import promptSync from "prompt-sync";
import { dadosLivros } from "./dadosLivros.js";
import { Livro } from "./Livro.js";

const prompt = promptSync();

export function cadastrarLivro() {

    console.log("\n===== CADASTRAR LIVRO =====");

    const titulo = prompt("Título: ").toUpperCase();
    const autor = prompt("Autor: ");
    const categoria = prompt("Categoria: ");
    const paginas = Number(prompt("Número de páginas: "));

    const novoLivro = new Livro(
        titulo,
        autor,
        categoria,
        paginas,
        true
    );

    dadosLivros.push(novoLivro);

    console.log("\nLivro cadastrado com sucesso!");
}