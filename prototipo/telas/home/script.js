// Base de dados simulada contendo a estrutura hierárquica completa
const dadosPlanoDecenal = [
    {
        id: "P1",
        titulo: "Problema 01: Elevada taxa de evasão e abandono escolar no Ensino Fundamental II",
        compromisso: {
            titulo: "Compromisso Decenal: Assegurar o acesso, permanência e êxito escolar de 100% das crianças e adolescentes paranaenses.",
            objetivo: {
                titulo: "Objetivo: Reduzir a evasão escolar local nos municípios prioritários através de monitoramento contínuo.",
                linhasDeAcao: [
                    {
                        titulo: "Linha de Ação: Fortalecimento da Busca Ativa Escolar em parceria com os CMDCAs municipais.",
                        tarefas: [
                            "Tarefa A: Mapear alunos infrequentes por meio da integração de dados da Secretaria de Educação.",
                            "Tarefa B: Realizar visitas técnicas e acompanhamento psicossocial das famílias identificadas."
                        ]
                    },
                    {
                        titulo: "Linha de Ação: Fomento a programas estaduais de fardamento, transporte e material didático complementar.",
                        tarefas: [
                            "Tarefa A: Auditar os repasses de insumos básicos nas escolas estaduais da periferia."
                        ]
                    }
                ]
            }
        }
    },
    {
        id: "P2",
        titulo: "Problema 02: Insuficiência de canais descentralizados para denúncias de violações de direitos",
        compromisso: {
            titulo: "Compromisso Decenal: Ampliar o alcance e a eficácia da rede de proteção integral nas macrorregiões do estado.",
            objetivo: {
                titulo: "Objetivo: Modernizar e interligar os sistemas informacionais de denúncia e conselhos tutelares.",
                linhasDeAcao: [
                    {
                        titulo: "Linha de Ação: Campanhas de conscientização regionais voltadas ao uso do Disque Denúncia.",
                        tarefas: [
                            "Tarefa A: Distribuir materiais gráficos atualizados em escolas e centros comunitários.",
                            "Tarefa B: Viabilizar canais digitais de denúncia via aplicativo ou chatbot oficial."
                        ]
                    }
                ]
            }
        }
    }
];

// Função genérica para construir os blocos usando as tags nativas do HTML5
function criarNoRetratil(titulo, classeNivel, elementoFilho = null) {
    const details = document.createElement('details');
    details.className = `tree-node ${classeNivel}`;

    const summary = document.createElement('summary');
    summary.innerText = titulo;
    details.appendChild(summary);

    if (elementoFilho) {
        const contentDiv = document.createElement('div');
        contentDiv.className = 'tree-content';
        contentDiv.appendChild(elementoFilho);
        details.appendChild(contentDiv);
    }

    return details;
}

// Renderizador da hierarquia pública
function renderizarLayoutCEDCA() {
    const container = document.getElementById('tree-container');
    
    dadosPlanoDecenal.forEach(p => {
        // Bloco interno de Linhas de Ação
        const containerLinhas = document.createElement('div');
        p.compromisso.objetivo.linhasDeAcao.forEach(linha => {
            
            // Bloco interno de Tarefas finais (não são retráteis)
            const containerTarefas = document.createElement('div');
            linha.tarefas.forEach(tarefa => {
                const divTarefa = document.createElement('div');
                divTarefa.className = 'level-tarefa';
                divTarefa.innerText = tarefa;
                containerTarefas.appendChild(divTarefa);
            });

            const noLinha = criarNoRetratil(linha.titulo, 'level-linha', containerTarefas);
            containerLinhas.appendChild(noLinha);
        });

        // Constrói os níveis de trás para frente subindo a hierarquia
        const noObjetivo = criarNoRetratil(p.compromisso.objetivo.titulo, 'level-objetivo', containerLinhas);
        const noCompromisso = criarNoRetratil(p.compromisso.titulo, 'level-compromisso', noObjetivo);
        const noProblema = criarNoRetratil(p.titulo, 'level-problema', noCompromisso);

        container.appendChild(noProblema);
    });
}

document.addEventListener('DOMContentLoaded', renderizarLayoutCEDCA);