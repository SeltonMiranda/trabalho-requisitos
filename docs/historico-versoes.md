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