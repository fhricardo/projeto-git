# Entendendo Git e GitHub

**Confira essa aula no YouTube [clicando aqui](https://youtu.be/anr9aDIJ3YM "Aula sobre Git e GitHub no YouTube"){:target="\_blank"}**

## O que é Git?

Git é um sistema de controle de versão distribuído amplamente utilizado para rastrear as mudanças em arquivos de código-fonte durante o desenvolvimento de software. Ele permite que várias pessoas trabalhem em um mesmo projeto, façam alterações nos arquivos e gerenciem essas mudanças de forma eficiente. Com o Git, os desenvolvedores podem acompanhar o histórico completo de alterações em um projeto, comparar versões anteriores, mesclar diferentes alterações e até mesmo reverter para uma versão anterior, se necessário.

Uma das características mais poderosas do Git é a sua capacidade de permitir que os desenvolvedores trabalhem em paralelo em diferentes ramos (branches) do projeto. Isso significa que você pode trabalhar em uma nova funcionalidade ou correção de bug em um ramo separado sem interferir no trabalho principal que está acontecendo em outro ramo. Uma vez concluído o trabalho em um ramo, é possível mesclar (merge) as mudanças de volta ao ramo principal.

Além disso, o Git é distribuído, o que significa que cada desenvolvedor tem uma cópia completa do repositório em seu próprio computador. Isso torna o Git robusto e resiliente a falhas, pois não depende de um único servidor centralizado.

No geral, o Git é uma ferramenta essencial para o desenvolvimento de software colaborativo e é amplamente utilizado por equipes de desenvolvimento em todo o mundo.

### Instalando o Git

Para utilizar o sistema de controle de versão Git em seus projetos, é necessário instalar o Git em seu computador local.
O link para download é o listado abaixo:

[https://git-scm.com/](https://git-scm.com/ "Download do Git").

Após fazer o download, basta instalar o Git em seu computador. Não são necessárias configurações avançadas.

Após a instalação, é possível utilizar o próprio terminar do Git (Git Bash) para executar os comandos ou utilizar o terminal do Visual Studio Code. No nosso caso, ficaremos com a segunda opção, que facilitará a utilização e execução dos comandos em nossos projetos.

## O que é GitHub?

O GitHub é uma plataforma de hospedagem de código-fonte baseada na web que utiliza o sistema de controle de versão Git. Ele oferece uma variedade de recursos para desenvolvedores e equipes de desenvolvimento colaborarem em projetos de software.

No GitHub, os desenvolvedores podem hospedar seus repositórios Git de forma pública ou privada, permitindo que eles compartilhem seu código com outros colaboradores ou mantenham o código privado para uso interno da equipe. Além disso, o GitHub fornece ferramentas poderosas para colaboração, como rastreamento de problemas (issue tracking), pull requests, revisões de código (code reviews), wikis e integração contínua.

As pull requests são uma característica fundamental do GitHub, permitindo que os desenvolvedores solicitem a revisão de suas alterações de código por outros membros da equipe antes de mesclar as alterações no ramo principal do repositório. Isso promove a transparência, qualidade e colaboração no processo de desenvolvimento de software.

O GitHub também é uma comunidade ativa de desenvolvedores, onde as pessoas podem descobrir, contribuir e colaborar em uma ampla variedade de projetos de código aberto. Ele se tornou um dos principais hubs para o desenvolvimento de software de código aberto, fornecendo uma plataforma central para desenvolvedores de todo o mundo compartilharem e colaborarem em projetos.

Em resumo, o GitHub é uma plataforma essencial para o desenvolvimento de software colaborativo, fornecendo ferramentas poderosas para hospedar, gerenciar e colaborar em projetos Git.

### Utilizando o GitHub

Para utilizar o GitHub, é necessário criar uma conta na plataforma e realizar o login com seu usuário e senha.

O endereço para a plataforma é [https://github.com/](https://github.com/ "https://github.com/").

#### Criando um novo Repositório

Para criar um novo repositório no GitHub, basta acessar seu perfil, clique na opção Repositories e, em seguida, clique sobre o botão "New" (em azul).

Na tela que vai se abrir, dê um nome ao seu repositório, escreva um descrição e selecione o tipo de repositório que será criado, Público ou Privado e clique em Create Repository.

É importante observar que o novo repositório terá um endereço específico, esse endereço é o que utilizaremos para vincular o repositório local com o repositório remoto.

## Comandos Git

### Para verificar a versão do Git, dentro do terminal do Visual Studio Code, digite:

`git --version`
O resultado deve ser algo do tipo:
`git version 2.45.0.windows.1`

### Para inicializar um repositório:

`git init`

### Para alterar o nome da branch principal

`git branch -M main`

### Para adicionar um arquivo específico à uma branch

`git add readme.md`

### Para verificar o status de um repositório local Git

`git status`

### Para adicionar o repositório remoto à um projeto Git

`git remote add origin https://github.com/fhricardo/projeto-git.git`

### Para realizar um commit de um repositório

`git commit -m "Primeiro Commit"`

### Para enviar um commit ao repositório remoto

`git push -u origin main`

### Para adicionar todos os arquivos do projeto para um commit

`git add .`

### Para enviar todos os arquivos de um projeto

`git push origin main`

## Documentação Oficial

Para entender mais sobre esses e outros comandos Git, recomendo visitar a documentação oficial em:
[https://git-scm.com/doc](https://git-scm.com/doc "https://git-scm.com/doc").

## Entendendo o Markdown

Para entender um pouco mais sobre a linguagem Markdown (.md) recomendo a visita a este site:

[Referências Rápidas de Markdown _(em inglês)_](https://wordpress.com/support/markdown-quick-reference/ "Referências Rápidas de Markdown (em inglês)")
