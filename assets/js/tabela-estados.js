function adicionarTabelaEstados() {
    const tabelaHTML = `
    <div id="tabela-container">
        <div id="legenda">
            <h2 style="text-align: center; margin: 0 auto 15px; width: fit-content;">Instituições com Projetos na Rede SisAssistiva - MCTI</h2>
            <table class="tabela-assistiva">
                <thead>
                    <tr>
                        <th>ESTADO</th>
                        <th>INSTITUIÇÕES</th>
                        <th>PROJETOS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bahia</td>
                        <td>UFBA</td>
                        <td class="centro">1</td>
                    </tr>
                    <tr>
                        <td>Espírito Santo</td>
                        <td>UFES</td>
                        <td class="centro">1</td>
                    </tr>
                    <tr>
                        <td>Goiás</td>
                        <td>IFG</td>
                        <td class="centro">1</td>
                    </tr>
                    <tr>
                        <td>Minas Gerais</td>
                        <td>UFMG / UFVJM / UFU</td>
                        <td class="centro">5</td>
                    </tr>
                    <tr>
                        <td>Paraíba</td>
                        <td>UFCG</td>
                        <td class="centro">1</td>
                    </tr>
                    <tr>
                        <td>Paraná</td>
                        <td>UFPR</td>
                        <td class="centro">1</td>
                    </tr>
                    <tr>
                        <td>Pernambuco</td>
                        <td>UFPE</td>
                        <td class="centro">4</td>
                    </tr>
                    <tr>
                        <td>Rio de Janeiro</td>
                        <td>UERJ / UFRJ / UFF / UFRRJ</td>
                        <td class="centro">5</td>
                    </tr>
                    <tr>
                        <td>Rio Grande do Norte</td>
                        <td>UFRN</td>
                        <td class="centro">2</td>
                    </tr>
                    <tr>
                        <td>Rio Grande do Sul</td>
                        <td>PUCRS</td>
                        <td class="centro">1</td>
                    </tr>
                    <tr>
                        <td>Santa Catarina</td>
                        <td>UDESC / UNIVALI</td>
                        <td class="centro">2</td>
                    </tr>
                    <tr>
                        <td>São Paulo</td>
                        <td>IPT / UNICAMP / UNIFESP</td>
                        <td class="centro">3</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="linha-total">
                        <th colspan="2">TOTAL</th>
                        <th class="centro">27</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>

    <style>
        #tabela-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: rgba(255,255,255,0.95);
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            max-width: 400px;
            max-height: 80vh;
            overflow-y: auto;
            transition: all 0.3s ease;
        }
         @media (min-width: 1600px) {
            #tabela-container {
             position: fixed;
                top: 0px;
                right: 20px;
                max-height: 70vh;
            }
        }

        #tabela-container.hidden {
            opacity: 0;
            transform: translateX(20px);
            pointer-events: none;
        }
        
        .tabela-assistiva, 
        .tabela-assistiva th, 
        .tabela-assistiva td {
            border-collapse: collapse;
            padding: 10px;
            text-align: left;
            border: 1px solid rgb(160, 160, 160);
            font-family: Arial, sans-serif;
        }
        
        .tabela-assistiva {
            width: auto;
            min-width: 300px;
            margin: 0 auto;
        }
        
        .tabela-assistiva th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        
        .tabela-assistiva tbody tr:last-child td {
            border-bottom: none;
        }
        
        .linha-total th {
            background-color: #e6e6e6;
            border-top: 2px solid rgb(160, 160, 160);
        }
        
        .centro {
            text-align: center;
        }
        
        #legenda h2 {
            color: #2c5282;
            font-size: 20px;
            margin-bottom: 15px;
            font-weight: bold;
        }
    </style>
    `;

    document.body.insertAdjacentHTML('beforeend', tabelaHTML);
}

// Adiciona funcionalidade para esconder a tabela quando um marcador é clicado
function configurarComportamentoTabela() {
    document.addEventListener('click', function (e) {
        const tabela = document.getElementById('tabela-container');
        if (e.target.closest('.leaflet-marker-icon')) {
            tabela.classList.add('hidden');
        } else if (e.target.closest('#close-sidebar')) {
            tabela.classList.remove('hidden');
        }
    });
}

// Espera o DOM carregar para adicionar a tabela
document.addEventListener('DOMContentLoaded', function () {
    adicionarTabelaEstados();
    configurarComportamentoTabela();
});