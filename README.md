# Desafio - Front-End

Olá tudo numa boa? :expressionless:

Nesse desafio iremos utilizar a <a href="https://developer.github.com/v3/" target="_blank">API</a> do Github. Teremos duas páginas a **Home** e **Detalhes do Repositório**.

## Páginas

**Home** iremos poder buscar os repositórios públicos de um usuário e mostrar uma listagem desses repositórios, quando clicarmos em um repositório da listagem devemos ir para a página de Detalhes do Repositório.

- Ednpoint para trazer os repositórios públicos por usuário: `https://api.github.com/users/:username/repos`

**Detalhes do Repositório** iremos mostrar informações mais detalhadas do repositório como Branches e Commits

- Endpoint para trazer as branches do repositório `https://api.github.com/repos/:username/:reponame/branches`
- Endpoint para trazer os commits do repositório `https://api.github.com/repos/:username/:reponame/commits`

## Funcionalidades em detalhe

- Página - Home:
  - Campo de busca:
    - Com base no nome de usuário inserido no campo de busca devemos trazer uma lista dos repositórios públicos do usuário.
  - Listagem dos repositórios:
    - Após buscar os respositórios do usuário cada item deve conter no mínimo:
      - nome do repositório
      - stars
      - data de criação
- Página - Detalhes do Repositório:
  - Mostrar nome do repositório
  - Mostrar nome do dono do repositório
  - Mostrar data do repositório
  - Mostrar quantidade de stars do repositório
  - Branches:
    - Listar as branches do repositório
  - Commits:
    - Listar os commits do repositório

## Requerimentos técnicos

- Utilizar `ES6`
- Utilizar `ReactJS`
- Utilizar `Redux`
- Utilizar `Styled-Components`
- Utilizar `Jest`, `Enzyme`
- Utilizar `Babel`
- Utilizar `Webpack`
- Aplicação responsiva
- Escreva documentação pro que faça sentido
- Escreva teste unitário pro que faça sentido
- Não utilize framework de CSS como Bootstrap, Materialize, entre outros do mesmo seguimento.
- Não utilizar `react-create-app`
- Projeto disponível online usando `firebase`, `gh-pages`, `netlify` ou outro.

## Plus

- Design System
- Atomic Design
- Redux Saga

## O que será avaliado

- Estrutura do projeto
- Padrões utilizados
- Reutilização de código
- Semântica
- Documentação
- Testes
- Build
- Peso do projeto

### Obs

Mesmo que não consiga concluir o desafío por completo, iremos avaliar o que for entregue.

Divirta-se! :joy:
