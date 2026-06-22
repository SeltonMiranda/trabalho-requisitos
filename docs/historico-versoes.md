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

# Versão 1.2 - Semana 2 - 14/06

## Requisitos Alterados
- RF02: Adição da camada "Problema público".
- RF05: Adição dos filtros por município e região.
- RF09: Especificação do gerenciamento.
- RF12: Correção de ator e funcionalidades de cadastramento.
- RF13: Correção de ator, detalhamento sobre o que os dados se referem e mudança nas opções de visualização.
- RF15: Definição de um dashboard para centralização da visualização dos gráficos.
- RF16: Detalhamento sobre o que os dados se referem.
- RF20: Correção de ator e separação da validação em outro requisito.
- RF21: Remoção da funcionalidade de alterar problemas públicos e demais dados relacionados, fora indicadores e tarefas.
- RF21: Adição de requisito para validação de dados importados ou alterados.
- RF22: Adição da funcionalidade de cadastro de usuários por parte do Administrador
- RF23: Adição de funcionalidade para apoiar o cadastro.
- Rf24: Adição de funcionalidade para apoiar o cadastro.

## Justificativa
- RF02: Camada estava ausente na especificação.
- RF05: Definido novo tipo de filtro após esclarecimento de dúvidas com o cliente.
- RF09: Gerenciamento estava ambíguo e não definia como o gerenciamento ocorria.
- RF12: Ator responsável não estava correto e as condições de cadastro não estavam claras.
- RF13: Ator não estava definido e os tipos de operações não estavam claras.
- RF15: Definido após esclarecimento com o cliente.
- RF16: Tudo que se refere a "dado" são sobre dados de indicadores, definido após esclarecimento com o cliente.
- RF20: Além do requisito estar muito grande o ator também não estava corretamente indicado.
- RF21: Após a reunião de esclarecimentos fora definido que os problemas seriam fixos, portanto não haveria necessidade de alteração.
- RF21: Originado a partir da remoção de validação do RF20.
- RF22: A maneira de cadastro não estava definida.
- RF23: Seria necessário definir como o usuário cadastrado receberia acesso ao login.
- Rf24: Requisito para impedir que o Administrador mantenha com a senha do novo usuário.

#  Versão 2 - Semana 3 - 21/06

## Requisitos Adicionados
- RF25: Requisito para recuperação de senha
- RF26: Exibição da última atualização por indicador
- RF27: Definição das permissões do Administrador e SEDEF para visualizar o histórico completo
- RF28: Requisito de tradução de libras em tempo real.
## Requisitos Alterados
- RF07: Inclusão do tipo de ação (adição, alteração ou remoção) nas informações da última atualização das tarefas.
- RF08: Ampliação do histórico de tarefas para registrar o tipo de ação realizada e separação das permissões de visualização para o RF27.
- RF09: Reestruturação do gerenciamento de permissões por meio de uma hierarquia de acesso.
- RF19: Refinamento das permissões para cada perfil
## Requisitos Removidos
- Nenhum nesta versão

## HU Adicionadas
- HU19: Definição de HU para utilizar a opção de acessibilidade em libras
- HU20: Definição de HU para cadastro de usuários
- HU21: HU para visualização das ultimas atualizações de indicadores
## HU Alteradas
- HU01: Inclusão da relação com RF02
- HU02: Inclusão da relação com RF24
- HU06: Inclusão da relação com RF27
- HU09: Pequena mudança de especificação
- HU10: Adição de gestor SEDEF na gestão de usuários
- HU12: Especificação do dashboard para visualização dos gráficos
- HU16: Ampliação da visualização para o histórico de tarefas e relacionamento com RF08 e RF27
## HU Removidas
- Nenhum nesta versão

## Justificativas
- RF07: Os tipos de ações possíveis no histórico estavam faltantes
- RF08: Os tipos não estavam especificados e também achamos válido separar a permissão de validação em outro requisito que contemplasse os dois históricos, nesse caso o RF27
- RF09: Após uma reunião de validação foi especificado que as permissões seriam hierárquicas, então esse requisito sofreu alterações para refletir isto.
- RF19: Apesar de parecidas as permissões de Administradores e SEDEF são levemente diferentes, mas anteriormente os dois estavam no mesmo "nível" de permissão, assim foi incluído também a permissão de gerenciar uma tarefa por parte do administrador.
- RF25: Apesar de ter requisitos em torno do login e cadastro não havia uma contra medida para caso o usuário perdesse ou esquecesse a senha, neste caso esse requisito foi adicionado para contemplar essa possibilidade.
- RF26: Só tinham especificações de atualizações mais recentes por tarefas, e como são dois históricos diferentes, esse requisito foi adicionado para garantir que o usuário público visualiza-se os dois.
- RF27: Novo requisito para separar a especificação de permissão de visualização do histórico da definição do histórico em si.
- HU01: O RF02 se relaciona diretamente com a HU01 dado que determina o formato da visualização.
- HU02: O RF24 se relaciona com o HU02 dado que também trata de uma situação de login
- HU06: Adição da nova RF27 para determinação das permissões de visualização.
- HU09: A Descrição foi alterada para deixar um pouco mais clara HU relacionada a alto contraste.
- HU10: Após reunião de validação foi confirmado que o Gestor SEDEF também possuí papel na gestão de usuários como cadastro e mudança de permissões.
- HU12: Após reunião de validação foi discutido a implementação de um dashboard para centralizar a visualização dos dados referentes aos indicadores.
- HU16: Contemplava somente tarefas, os RF08 e RF27 se relacionam com a HU
- HU19: Após uma reunião de validação foi levantada a necessidade de uma opção de acessibilidade em libras, essa HU serve para apoiar o RF28 e o RNF01
- HU20: Uma HU referente a especificamente o cadastro de um usuário estava em falta, adicionada também as relações com RF22 e RF23
- HU21: Não havia HU direcionada a visualização da alteração mais recente sobre indicadores, somente sobre tarefas. Relação com RF26 e RF13