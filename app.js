/**
 * Pesquisa os dados e exibe os resultados na seção com o ID "resultados-pesquisa".
 *
 * Itera sobre um array de objetos `dados` e para cada objeto, cria um elemento HTML
 * com as informações do dado.
 *
 * @param {Array} dados - Um array de objetos contendo as informações a serem pesquisadas.
 * Cada objeto deve ter as propriedades `titulo`, `descricao` e `link`.
 * @throws {Error} Se o elemento com o ID "resultados-pesquisa" não for encontrado.
 * @example
 * pesquisar([
 *     { titulo: 'Título 1', descricao: 'Descrição 1', link: 'https://example.com' },
 *     { titulo: 'Título 2', descricao: 'Descrição 2', link: 'https://example.com' }
 * ]);
 */
function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    //console.log(campoPesquisa);
    campoPesquisa = campoPesquisa.toLowerCase();

    if(!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado! Digite alguma palavra e clique em Pesquisar.</p>"
        return
    }

    // Inicializa uma string para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre os dados e cria elementos HTML para cada item
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p><a href=${dado.link} target="_blank">Mais informações</a></p>
                </div>
         `;

        }

    }

    if(!resultados) {
        section.innerHTML = "<p>Nada foi encontrado!</p>"
    } else {
        // Atualiza o conteúdo da seção com os resultados gerados
        section.innerHTML = resultados;
    }

}

