## Regras de Negócio

| ID   | Descrição |
|------|-----------|
| RN01 | A estrutura hierárquica do Plano Decenal segue a seguinte ordem: Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa. Cada nível é obrigatoriamente vinculado ao nível superior. |
| RN02 | Cada compromisso decenal está atrelado a exatamente um problema público e possui um ou múltiplos objetivos. |
| RN03 | Cada linha de ação possui uma ou múltiplas tarefas. |
| RN04 | Cada tarefa pode ter um ou múltiplos indicadores relacionados. |
| RN05 | Cada linha de ação deve estar vinculada a um Responsável Principal, sendo esse um conselho estadual/secretaria, e pode ter múltiplas entidades colaboradoras. |
| RN06 | Usuários com perfil "Conselho Estadual/Secretaria" possuem permissão de inserção e edição de dados de indicadores confinados à sua jurisdição, devendo estar cadastrados como entidade colaboradora ou responsável principal da linha de ação correspondente. |
| RN07 | Usuários com o perfil "Público Geral" não precisam realizar cadastro no sistema e possuem acesso à visualização e exportação de dados públicos somente e não podem realizar qualquer operação que altere o estado do sistema. |
| RN08 | Qualquer inserção, alteração ou exclusão de dados deve ser documentada e mantida em um registro histórico imutável, incluindo identificação do usuário, data, hora e tipo de ação (adição, alteração ou remoção). |
| RN09 | O acesso ao histórico completo de tarefas e indicadores é restrito aos perfis Administrador e Gestor SEDEF. |
| RN10 | Cadastros de usuários estão ligados a um único perfil de usuário, sendo esses: Administrador, SEDEF e Conselho Estadual/Secretaria. |
| RN11 | Sessões de usuários cadastrados devem ser automaticamente invalidadas após 30 minutos de inatividade contínua. |
| RN12 | O status de conclusão de cada tarefa deve ser classificado em um dos estados predefinidos: Não Iniciada, Em Andamento ou Concluída. |
| RN13 | Ao cadastrar um novo usuário, o sistema deve enviar automaticamente as credenciais de acesso (e-mail e senha inicial) para o e-mail cadastrado. |
| RN14 | No primeiro login, o usuário cadastrado pelo administrador deve obrigatoriamente alterar sua senha antes de acessar qualquer funcionalidade do sistema. |
| RN15 | O sistema deve oferecer um mecanismo de recuperação de senha via email, enviando um link de redefinição para o endereço cadastrado do usuário solicitante. |