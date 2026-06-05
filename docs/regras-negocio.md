## Regras de Negócio

| ID | Descrição |
|----|-----------|
| RN01 | Cada compromisso decenal está atrelado a um problema público e possui exatamente um objetivo.|
| RN02 | Cada objetivo possui uma ou múltiplas linhas de ação. |
| RN03 | Cada linha de ação possui uma ou múltiplas tarefas. |
| RN04 | Cada tarefa possui múltiplos indicadores relacionados. |
| RN05 | Cada linha de ação deve estar vinculada a um Responsável Principal, sendo esse um conselho estadual/secretaria, e pode ter múltiplas entidades colaboradoras. | 
| RN06 | Usuários com perfil "Conselho Estadual/Secretaria" possuem permissão de inserção e edição de dados confinados à sua jurisdição, devendo ser cadastrada comoentidade colaboradora ou responsável principal.  |
| RN07 | Usuários com o perfil "Público Geral" não precisam realizar cadastro no sistema e possuem acesso irrestrito para visualização e exportação de dados, mas não podem realizar qualquer operação que altere o estado do sistema. | 
| RN08 | Qualquer inserção, alteração ou exclusão de dados deve ser documentada e mantida em um registro histórico imutável. |
| RN09 | Usuários com perfil "Administrador" ou "SEDEF" possuem acesso global de leitura e escrita, podendo inserir, editar, excluir ou aditar dados vinculados a qualquer secretaria ou jurisdição. |
| RN10 | Cadastros de usuários estão ligados a um único perfil de usuário, sendo esses: Adiministrador, SEDEF e Conselho Estadual/Secretaria. |
| RN11 | Sessões de usuários cadastrados devem ser automaticamente invalidadas caso haja inatividade contínua. |
| RN12 | O progresso de tarefas e indicadores deve ser classificado em um dos estados predefinidos: Não Iniciada, Em Andamento ou Concluida. |
