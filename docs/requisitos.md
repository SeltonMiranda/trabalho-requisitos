## Requisitos Funcionais

| ID | Descrição |
|----|-----------|
| RF01 | O sistema deve exibir os 23 problemas públicos cadastrados, cada um vinculado ao respectivo Compromisso Decenal da Criança e do Adolescente, permitindo ao usuário navegar entre eles de forma organizada. |
| RF02 | O sistema deve apresentar a estrutura hierárquica do Plano Decenal na seguinte ordem: Compromisso → Objetivo → Linhas de Ação → Tarefas, permitindo ao usuário navegar por cada nível da hierarquia. |
| RF03 | O sistema deve permitir o monitoramento contínuo de tarefas e indicadores, exibindo o percentual de conclusão e o status de cada item. Os status possíveis são: Não Iniciada, Em Andamento e Concluída. |
| RF04 | O sistema deve disponibilizar uma funcionalidade de busca textual e por atributos, permitindo que o usuário pesquise por: palavra-chave, responsável, eixo do Plano Decenal e compromisso. Os resultados devem ser exibidos de forma correspondente aos termos informados. |
| RF05 | O sistema deve permitir a aplicação de filtros cumulativos para refinamento da exibição das informações. Os filtros disponíveis são: Compromisso, Indicador, Período de Tempo e Responsável. |
| RF06 | O sistema deve disponibilizar a exportação de conjuntos de dados, filtrados ou não, nos formatos Excel, CSV e PDF, mantendo a fidelidade das informações exibidas na tela. |
| RF07 | O sistema deve registrar e exibir, em cada registro de Tarefas, a data, o horário e o nome do usuário responsável pela última atualização realizada. |
| RF08 | O sistema deve manter um histórico completo de todas as atualizações realizadas em uma Tarefa, ordenado cronologicamente da mais antiga para a mais recente, incluindo data, hora, usuário. |
| RF09 | O sistema deve disponibilizar um painel de administração que permita ao usuário administrador gerenciar o nível de acesso dos demais usuários, incluindo a elevação e a redução de permissões tanto de usuários quanto de funcionalidades do sistema. |
| RF10 | O sistema deve oferecer um modo de alto contraste como opção de acessibilidade, ativável pelo usuário, garantindo maior legibilidade para pessoas com deficiência visual ou sensibilidade a contrastes. |
| RF11 | O sistema deve exigir autenticação de usuários com permissões elevadas por meio de e-mail e senha, permitindo acesso apenas a usuários devidamente cadastrados e autorizados. |
| RF12 | O sistema deve permitir que usuários autorizados adicionem novos problemas, compromissos, objetivos, linhas de ação, tarefas e indicadores por meio de interface gráfica. |
| RF13 | O sistema deve manter um registro persistente de qualquer criação, adição ou exclusão de dados, armazenando o identificador do usuário, data e hora da operação, tipo de operação e valores alterados. |
| RF14 | O sistema deve realizar a validação e sanitização de todos os dados inseridos por usuários. |
| RF15 | O sistema deve gerar e exibir gráficos de progresso a partir dos dados inseridos de todos os indicadores cadastrados. |
| RF16 | O sistema deve disponibilizar um filtro temporal para os gráficos de processo, permitindo que o usuário selecione um ano específico para visualização. |
| RF17 | O sistema deve aplicar diferentes identidades visuais para cada tipo de indicador, mostrando distinção explícita entre cada um. |
| RF18 | O sistema deve exibir, no detalhamento de cada Linha de Ação, a identidade do Responsável Principal e entidades Colaboradoras para o avanço de cada tarefa. |
| RF19 | O sistema deve manter o controle de acesso baseado em função, registrando os perfis distintos de: Administrador, SEDEF, Conselho Estadual/Secretarias e público geral. Administradores e SEDEF possuem permissões máximas de administração do sistema, Conselho Estadual/Secretarias podem inserir e editar dados de suas jurisdições e o público geral pode visualizar e exportar dados públicos. |
| RF20 | O sistema deve permitir que usuários autorizados realizem o carregamento de dados por meio do upload de planilhas (csv, ods e xlsx), validando a consistência dos dados com o modelo do sistema. |
| RF21 | O sistema deve disponibilizar uma interface gráfica que permita usuários autorizados a atualização de qualquer registro de dado. |

## Requisitos Não Funcionais

| ID | Descrição |
|----|-----------|
| RNF01 | A interface deve ser acessível conforme os princípios do Design Universal, incluindo contraste adequado, configuração de tamanho da fonte e suporte a leitores de tela. |
| RNF02 | O sistema deve ser responsivo (adequado para desktop, tablet e dispositivos móveis). |
| RNF03 | O sistema deve ter capacidade de armazenamento para guardar dados de pelo menos 10 anos. |
| RNF04 | O sistema deve garantir a integridade dos dados exportados (Excel/PDF/CSV), sem perda de informações ou formatações incorretas. |
| RNF05 | O sistema deve ser bem documentado. |
| RNF06 | O design e a experiência devem ser minimamente semelhantes à interface do Conselho Estadual da Criança e do Adolescente. |
| RNF07 | O sistema deve suportar a inserção de um número arbitrário (grande) de dados. |
| RNF08 | O sistema deve encerrar a sessão do usuário automaticamente após 30 minutos de inatividade. |
| RNF09 | O sistema deve utilizar Tokens JWT para aumentar a segurança. |
