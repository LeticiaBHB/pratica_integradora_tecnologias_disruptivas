# Gerenciamento de Projetos - README

Este projeto é uma aplicação de gerenciamento de tarefas, permitindo aos usuários criar, editar e listar tarefas. Este README descreve as alterações feitas nos componentes `CriarTarefa`, `EditarTarefa` e `ListarTarefa`.

## Estrutura do Projeto

A aplicação contém os seguintes componentes principais:

- **CriarTarefa**: Componente responsável por criar novas tarefas.
- **EditarTarefa**: Componente que permite editar tarefas existentes.
- **ListarTarefa**: Componente que lista todas as tarefas e permite a interação com elas.

## Alterações Realizadas

### 1. CriarTarefa.jsx

- **Estilização Melhorada**: A apresentação dos campos de entrada foi aprimorada para oferecer uma interface mais clara e atraente.
- **Consolidação de Estados**: O gerenciamento do estado `idTarefa` foi otimizado para garantir que o próximo ID seja gerado corretamente com base nas tarefas existentes.
- **Melhoria da Funcionalidade de Salvar**: O método `handleSalvar` agora garante que todas as informações da tarefa sejam salvas corretamente no estado principal.

### 2. EditarTarefa.jsx

- **Preenchimento Automático**: Agora, os campos de entrada são preenchidos automaticamente com os dados da tarefa selecionada para edição, melhorando a usabilidade.
- **Atualização Eficiente**: O método `handleEditar` foi otimizado para atualizar a tarefa selecionada de maneira mais eficiente, utilizando a função `map`.

### 3. ListarTarefa.jsx

- **Estrutura de Tabela Aprimorada**: A tabela que lista as tarefas foi organizada para melhor legibilidade, com alinhamento adequado e espaçamento.
- **Função de Edição**: A função de edição agora configura corretamente a tarefa a ser editada e abre o modal correspondente.
- **Remoção de Tarefas**: A funcionalidade de deletar tarefas foi mantida e melhorada para garantir que as tarefas sejam removidas de maneira eficiente.

## Funcionalidades

- **Criar Tarefa**: Permite adicionar novas tarefas preenchendo um formulário com título, descrição, datas de início e fim, recurso e status.
- **Editar Tarefa**: Permite editar tarefas existentes com preenchimento automático dos campos.
- **Listar Tarefas**: Exibe todas as tarefas em uma tabela, permitindo a edição e remoção de tarefas.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Material-UI**: Biblioteca de componentes React para um design moderno e responsivo.

## Instruções de Uso

1. Clone este repositório.
2. Instale as dependências utilizando `npm install`.
3. Inicie a aplicação com `npm start`.

## Contribuições

Contribuições são bem-vindas! Se você encontrar bugs ou deseja sugerir melhorias, por favor, crie uma nova issue ou envie um pull request.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
