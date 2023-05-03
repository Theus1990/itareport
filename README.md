# itaReport

## Arquitetura de branchs.

Utilizamos a arquitetura de branch em ciclos para gerenciar o desenvolvimento
de novas funcionalidades. O fluxo de trabalho é dividido em três ramos principais: **main**, **develop** e **feature**.

O ramo **main** é a versão estável do site que é usada em produção. O ramo **develop**
é onde as alterações que serão adicionadas ao próximo ciclo de desenvolvimento são
feitas. O ramo **feature** é onde o desenvolvimento de novas funcionalidades é realizado.

Para criar uma nova funcionalidade, o padrão de nomenclatura de branch é
**feature-nome_da_feature-numero_sprint**. Onde **nome_da_feature** é um nome descritivo
da funcionalidade e **numero_sprint** é o número do sprint em que a funcionalidade será
desenvolvida. Por exemplo, **feature-login-sp1**.

Ao desenvolver uma nova funcionalidade, crie um novo ramo de **feature** com base no ramo
**develop**. Quando a funcionalidade estiver pronta, o ramo **feature** será mesclado com o
ramo **develop**.

## Arquitetura de criação dos componentes.

A arquitetura de criação de componentes é baseada em componentes reutilizáveis. Cada
componente deve ter sua própria pasta no diretório "components" com o nome do componente, caso seja grande, a inicial da segunda palavra, em diante deve ser em maiúsculo, além disso deve incluir um arquivo index.js que exporta o componente. Além disso, cada componente deve ter um arquivo **\* \*.module.css**, para a estilização O uso de componentes reutilizáveis ajuda a manter o código limpo e fácil de
gerenciar.

[back to top](#itareport)
