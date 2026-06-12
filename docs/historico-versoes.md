# Versão 1.0 - Semana 1 - 29/05

## Requisitos Adicionados
- Nenhum nessa versão

## Requisitos Alterados
- RF02: Adição de mais uma hierarquia "Compromisso" antes de "Objetivo"
- RF05: Filtros são acumulativos 
- RF06: Dados podem ser exportados filtrados ou não
- RF07 e RF08: Especificado o que deve ser mostrado: data, horário e nome
- RF11: Especificado os campos para login 
- RF12: Agora apenas usuários autorizados podem inserir dados
- RF13: Especificado as ações que devem ser registradas
- RF18: Detalhamento em o que deve ser exibido
- RF19: Detalhamento sobre os perfis de cada tipo de usuário
- RF20: Adicionado validação do formato do arquivo
- RF21: Somente usuários autorizados podem alterar dados
- RF23 do levantamento inicial foi realocado para RNF09

## Requisitos Removidos
- RF15 do levantamento inicial foi removido, uma vez que era igual ao RF09

## Justificativa
- RF02 foi corrigido pois o levantamento inicial omitia o nível "Compromisso"
- RF05 e RF06 surgiram após conversa com o cliente
- RF07 e RF08 foram aprimorados pois na versão do levantamento inicial não indicavam o que deveria ser mostrado
- RF11 surgiu após conversa com o cliente
- RF12 alterado pois o perfil Usuário Público terá somente visualização
- RF13 a versão do levantamento inicial não indicava quais ações deveriam ser guardadas
- RF18 a versão do levantamento inicial não especificava o que deveria ser mostrado
- RF19 a versão do levantamento inicial não continha as especificadades dos usuários
- RF20 alterado pois não indicava se havia validação do formato do arquivo
- RF21 A versão do levantamento inicial não especificava o usuário que podia fazer modificações nos dados
- O requisito RF23 do levantamento inicial não era do tipo funcional, portanto foi movido para os não funcionais
- RF15 do levantamento inicial foi removido pois era idêntico ao RF09

# Versão 1.1 - Semana 2 - 11/06

## Requisitos Alterados
- RF03: Definição de quem pode visualizar os status, definição de que são tarefas que possuem status e tornada explicita a relação de indicadores com as tarefas.
- RF04 e RF05: Definição de quem pode realizar a busca e especificação do que deve ser retornado.
- RF06: Definição de quem pode realizar a exportação
- RF08: Redução de ambiguidade sobre o responsável pela alteração e definição de quem pode visualizar o histórico
- RF10: Definição de que estado e quem pode fazer uso da funcionalidade
- RF12: Detalhamento de quem são os usuários autorizados
- RF14: Especificação de usuário autorizado e detalhamento sobre sanitização e validação
- RF15: Definição de quem pode visualizar e especificação do tipo do gráfico
- RF20: Detalhamento dos usuários autorizados e dados importados. Definição de impedimento de inserções inválidas
- RF21: Definição de quais usuários são permitidos a realizar a alteração de dados e quais dados são alterados por eles.

## Justificativa
- RF03: Não estava claro quem tinha permissão para tal e também havia ambiguidade sobre oque possuía status, se era tarefa ou indicadores
- RF04 e RF05: Faltava informações a respeito do que exatamente seria exibido, se eram partes isoladas das informações ou problemas que possuíam tal correspondência.
- RF06: Não estava especificado o ator.
- RF08: As regras de autorização na visualização do histórico não estavam claras o suficiente.
- RF10: Não estava explicito que o usuário poderia ativar de qualquer parte do sistema.
- RF12: Não estava especificado o ator.
- RF14: Não estava especificado o ator e os termos "sanitização" e "validação" estavam ambíguos.
- RF15: O ator não estava especificado e o tipo do gráfico também.
- RF20: Os dados que seriam importados não estavam bem descritos. O termo "autorizado" poderia tanto se referir a usuários autorizados no sistema quanto usuários autorizados a realizar a importação.
- RF21: O termo "autorizado" poderia tanto se referir a usuários autorizados no sistema quanto usuários autorizados a realizar as alterações, neste caso, foi dada uma definição mais precisa. Quais dados seriam alterados não estavam bem descritos.