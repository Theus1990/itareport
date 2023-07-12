# :checkered_flag: ITAREPORT

Nosso projeto possibilita que o usuário possa fazer reports/denúncias, com o intuito de aprimorar socialmente e como comunidade á cidade de Itapajé, relatando um problema estruturaal, acidente de carro, falta acessibilidade ou prejudição ao meio ambiente, por exemplo.

## :technologist: Membros da equipe e Orientador

- 538897 - Antonio Lucas Melo de Sousa.
- 539355 - José Eric Mesquita Coelho.
- 540910 - Matheus Feitosa de Oliveira Rabelo.
- XXXXXX - Anderson Gonçalves Uchôa.

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

> Usuário Padrão Não Logado: Ele poderá acessar o site normalmente, podendo visualizar o mapa de denúncias, mas não terá a possibilidade de fazer as permissões de um usuário logado.

> Usuário Padrão Logado: Ele poderá acessar o site normalmente, podendo visualizar o mapa de denúncias, confirmar uma denúncia, criar uma deúncia de forma anônima, fazer um cadastro e logar na sua conta. Ele não poderá criar uma categoria, ou alterar alguma configuração do sistema.

## :spiral_calendar: Entidades ou tabelas do sistema

Liste as principais entidades do sistema.
- Usuario
- Denuncia
- Categoria

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

Descreve ou liste brevemente as principais funcionalidades da aplicação que será desenvolvida. Destaque a funcionalidades que serão acessévies a todos os usuários e aquelas restriras a usuários logados.

> Usuários em geral:
- Cadastrar
- Logar
- Visualizar denúncias
- Filtrar denúncia

> Usuários Logados:
- Criar uma denúncia
- Recuperar senha


----


## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.
- React
- Tailwindcss
- Next.js
- React leaflet

**Backend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.
- Prisma
- Nodemon
- Vercel Postgres
- Node.js


## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Usuario | X |  X  | X | X |
| Denuncia | X |  X |  X | X |
| Categoria | X | X |  |  |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| GET | /users | 
| GET | /user/{id_user} |
| GET | /reports |
| GET | /report/{id_report} |
| GET | /category |
| GET | /category/{id_category} |
| POST | /user |
| POST | /report |
| POST | /category/{id_user} |
| PUT | /user/{id_user} |
| PUT | /report/{id_report} |
| DEL | /user/{id_user} |
| DEL | /report/{id_report} |

## Documentação
* [Documento de visão do projeto](https://github.com/anderson-uchoa/github-template-projeto-integrador/blob/main/docs/documento_visao.docx)
* [Regras gerais da disciplina](https://github.com/anderson-uchoa/github-template-projeto-integrador/blob/main/docs/regras_gerais.pdf)
* [Apresentação do Projeto](https://youtu.be/-6jF9T1i58k)
