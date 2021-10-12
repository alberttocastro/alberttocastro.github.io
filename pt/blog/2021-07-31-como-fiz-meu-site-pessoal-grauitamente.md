---
date: 2021-07-32
excerpt: Neste post, entenda como eu hospedo este site no Github sem pagar nada. Entenda também o que são sites estáticos, e algumas ferramentas para te ajudar a criar os seus.
title: Como fiz meu site pessoal gratuitamente
image: https://bl6pap003files.storage.live.com/y4mATADhSS9NJXZhKp2slkuGlFJp7u1cD3HEHFi7cOw9tvyH4KnlfsvPlQB3famBBeaK6GwJIcHbbUaLFJP8KIPrjUAu1WOHmX3PY4rPootpYcahMXSkeODxNaf6Tn5gbtWHZ9Z3CUQf0JUPczapBYsWyRoNHOFaGCGZ071h_wPjicVwbBVC9uImboJhk3d0IMj?width=1920&height=1200&cropmode=none
tag:
  - Gerador de site estático
  - Hospedagem
  - Portfolio
---

Se você está entrando no mundo da programação, talvez tenha percebido que na maioria das vezes um computador vai ter que rodar uma séria de instruções para que finalmente seu site seja retornado na requisição. Caso você tenha avançado um pouco, já tenha feito algo no seu computador e acessado seu projeto de maneira incrível com um "localhost", e agora está pesquisando como colocar seu site na internet, você já percebeu que esse computador que roda seu site para a internet tem um custo.

É verdade que muitas vezes você vai ter custos para colocar seu site no ar. Principalmente se você tiver algum processamento complexo a ser feito no back-end. Mas existe um jeito de colocar um site que não envolva processamento complexo no back-end de graça! Na verdade, existem algumas maneiras de hospedar sites de graça, mas eu vou falar aqui especificamente sobre hospedagem de **sites estáticos**.

# Sites estáticos

Agora você está se perguntando, o que é um site estático?

O site da agencia Macan deu uma definição simples, que eu achei muito boa:

*"Sites estáticos são aqueles que são fixos e exibem o mesmo conteúdo para cada usuário, geralmente escritos exclusivamente em HTML. Um site dinâmico, por outro lado, é aquele que pode exibir diferentes conteúdos e proporcionar interação do usuário, fazendo uso de programação avançada e bancos de dados, além de HTML."*

Ou seja, um site estático não precisa ser processado por um computador no servidor pra ser entregue ao usuário. Ele já está pronto, e só precisa ser entregue.

Apesar disso, esses sites podem ter alguma interatividade. Por exemplo, aqui no blog você pode fazer comentários nos artigos. Só que o detalhe é que esse conteúdo não vai ficar no próprio site. Em outro post explico como consigo fazer isso. Mas se já quiser ir pesquisando, eu uso o Vssue para isso acontecer.

# Github pages

Aí é que entra o [Github pages](https://pages.github.com/). Provavelmente você já ouviu esse nome. O interessante é que o Github pages permite que, se seu site for estático, você sirva o conteúdo que está em seu repositório como se fosse um site como qualquer outro. A prova disso é que você está lendo este blog através de um conteúdo "hospedado" completamente no Github. Cada página que você acessa corresponde a um arquivo no repositório. E o site foi organizado, pasta por pasta, para ter essa navegabilidade que você está experimentando.

Caso você queira ver os arquivos que são esse site, fique à vontade para acessar o repositório [clicando aqui](https://github.com/alberttocastro/alberttocastro.github.io).

Mas talvez você esteja pensando: "*Puxa vida! Deve dar o maior trabalho de fazer um site completo! Ter que programar cada arquivo para cada página... E se no futuro eu quiser mudar alguma coisa que está em todas as páginas? Vou ter que mudar em cada arquivo?*"

Boa pergunta!

Como quase todo mundo na area de programação gosta de responder: sim, e não. Deixa eu explicar:

Sim, se você quer que uma alteração seja refletida em todas as páginas, você vai ter que alterar em todos os arquivos. Mas não, **você não precisa fazer isso tudo manualmente**.

# Geradores de site estático

Para te ajudar nessa tarefa, existem algumas ferramentas que geram sites estáticos. Isto é: você vai poder ver as alterações em tempo real no seu servidor local, e quando quiser colocar em produção você vai ter que fazer um *build* pra gerar os arquivos estáticos de cada página.

Se você entrar na página oficial do github pages, vai ver que eles mesmo recomendam um gerador de site estático chamado **Jekyll**. E a integração entre esse gerador e o Github pages é bem legal, já que você pode colocar apenas os arquivos em *Markdown*, e o próprio github vai interpretar como páginas html.

Mas aqui vai um ponto a ser considerado ao se usar o Jekyll: como ele é escrito em *Ruby*, talvez os iniciantes achem difícil o processo de instalar, configurar, até ter o primeiro site rodando.

Pra conseguir ser mais produtivo, já que não trabalho com Ruby no meu dia a dia, eu decidi usar o Vuepress. O Vuepress é um gerador baseado no framework front-end Vue, um concorrente do famoso React.js. Eu já estou familiarizado com Vue. Então pra mim não foi difícil conseguir deixar o site do jeito que eu gosto. E a vantagem pra quem está começando, é que ele é feito em Javascript. Se você quer programar pra web, inevitavelmente você vai ter que ter algum conhecimento nessa linguagem. Não tem como fugir.

Mas caso você esteja se interessando por alguma outra linguagem de programação, e queira utilizar o Github Pages para hospedar seu site estático, vou deixar uma pequena lista com algumas opções de geradores que você pode usar:

- JavaScript: Vuepress, GitBook, Docsify, Gatsby
- Ruby: Jekyll, Slate
- Python: MkDocs, Pelican, Sphinx
- PHP: Jigsaw, WP2Static, Cecil
- Java: JBake, Orchid

Então é isso. Se tiver alguma dúvida, deixa aqui em baixo. Vamos interagir! Espero que tenha ajudado, e até a próxima!

Referências:

[https://www.agenciamacan.com.br/blog/site-dinamico-vs-estatico-qual-a-diferenca-entre-eles](https://www.agenciamacan.com.br/blog/site-dinamico-vs-estatico-qual-a-diferenca-entre-eles)