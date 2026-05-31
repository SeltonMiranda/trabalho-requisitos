## Requisitos Funcionais

| ID | Descrição |
|----|-----------|
| RF01 | O sistema deve permitir que o usuário visualize os 23 problemas públicos, cada um vinculado a um Compromisso Decenal da criança e adolescente. |
| RF02 | O sistema deve permitir a visualização hierárquica de: Objetivo ➔ Linhas de Ação ➔ Tarefas |
| RF03 | O sistema deve permitir o monitoramento contínuo das tarefas/indicadores (ex. percentual concluído, status: não iniciada, em andamento, concluída) |
| RF04 | O sistema deve permitir que o usuário faça buscas no sistema para a exibição das informações correspondentes. (palavra-chave, Responsável, eixos do Plano Decenal, Compromisso) |
| RF05 | O sistema deve permitir que o usuário aplique filtros (ex. compromisso, indicador, período de tempo, responsável) para a exibição das informações do sistema. |
| RF06 | O sistema deve disponibilizar funcionalidade de exportação (Excel, CSV, PDF) dos dados de monitoramento de um conjunto filtrado. |
| RF07 | O sistema deve mostrar quando foi feita a última atualização dos dados |
| RF08 | O sistema deve manter um histórico de todas as atualizações feitas em uma tarefa, permitindo ver a evolução. |
| RF09 | O sistema deve possuir um painel de administrador, para elevar ou reduzir permissões de usuários e outras funcionalidades por usuários autorizados. |
| RF10 | O sistema deve fornecer um modo de alto contraste para os usuários. |
| RF11 | O sistema deve possuir um login de usuários. |
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
