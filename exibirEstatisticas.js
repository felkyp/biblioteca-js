import { dadosLivros } from "./dadosLivros.js";

export function exibirEstatisticas() {

    let totalPaginas = 0;
    let quantidadeDisponiveis = 0;
    let quantidadeIndisponiveis = 0;

    dadosLivros.forEach(livro => {

        totalPaginas += livro.paginas;

        if (livro.disponivel) {
            quantidadeDisponiveis++;
        } else {
            quantidadeIndisponiveis++;
        }

    });

    const totalLivros = dadosLivros.length;

    const mediaPaginas = totalPaginas / totalLivros;

    console.log("\n===== ESTATÍSTICAS =====");
    console.log(`Total de livros cadastrados: ${totalLivros}`);
    console.log(`Quantidade de livros disponíveis: ${quantidadeDisponiveis}`);
    console.log(`Quantidade de livros indisponíveis: ${quantidadeIndisponiveis}`);
    console.log(`Total de páginas: ${totalPaginas}`);
    console.log(`Média de páginas por cada livro: ${mediaPaginas.toFixed(2)}`);
}