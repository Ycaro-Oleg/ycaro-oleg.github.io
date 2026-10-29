---
title: "Larper, from resort to production"
title_en: "Larper, from resort to production"
title_ptbr: "Larper, do resort à produção"
short_title_en: "A resort, a POC and a rough first deploy"
short_title_ptbr: "Um resort, uma POC e um primeiro deploy complicado"
slug: "larper-from-golfville-to-production"
date: 2026-10-28T12:00:00-03:00
tags: ["Startup", "Larper", "Build in Public", "Infrastructure"]
description_en: "A day of brainstorming at GolfVille became the first Larper POC. Then came Railway trouble, API key rotation, a move to Hetzner, and the part we're still figuring out: marketing."
description_ptbr: "Um dia de brainstorming no GolfVille virou a primeira POC do Larper. Depois vieram o problema com a Railway, a rotação de chaves, a mudança pra Hetzner e a parte que ainda estamos descobrindo: marketing."
---

{{< langswitch default="en" >}}
{{< langblock lang="en" >}}
# Larper, from resort to production

So, another chapter.

Apparently I can't even go to a resort without coming back with a project to build lol.

A friend and I were at GolfVille, and in a single day of brainstorming we came up with Larper. The name, what the web app would actually do, how someone would use it. We kept bouncing ideas back and forth, cutting some, changing others, until there was something we could build.

And we built the POC. That same day.

I'm being specific about the POC part because having a proof of concept and having a product ready for people are very different things. We got a very quick reminder of that.

## What we were trying to solve

You do something worth sharing. Ship a feature, solve an annoying problem, learn something the hard way. Then you open LinkedIn or X, stare at the empty box and think: how the hell do I turn this into a post?

And even if you get one written, each platform speaks a different language. What works on LinkedIn doesn't necessarily work on Reddit. Copying the same paragraph everywhere feels exactly like copying the same paragraph everywhere.

That was the problem we started shaping Larper around.

You tell it what happened, in your own words. It turns that into posts adapted for LinkedIn, X, Threads and Reddit, with control over the tone. You edit what you want, and the workflow brings generation, scheduling and publishing together.

The fun part is the intensity. You can keep it grounded or push the framing all the way to full larp. Same thing that happened, very different ways of telling it.

But the point is still to start from something you actually did. The framing can get louder. Your résumé shouldn't suddenly acquire three companies you never worked for.

## One day at GolfVille

What I liked most about that day wasn't just how fast we coded.

It was having someone to bounce the idea off.

In my last post I wrote about how exhausting it gets to make every decision alone. You are the ticket queue, the engineer, the person questioning the whole thing at 2am. With Larper, there was another person asking questions, pushing back, helping turn a vague thought into an actual product idea.

We didn't arrive with a complete specification. We figured out the name, talked through the flow, changed our minds and kept molding it as we went.

By the end of that day, the conversation had become a POC.

That feeling is really damn good. Something that only existed in a conversation a few hours earlier is now on a screen, doing a thing.

Of course, reality was already warming up.

## The first deploy had other plans

We were initially hosting the service on Railway. We bought the domain, decided it was time for the first deploy, and right around that moment we got our first proper setback with the hosting.

Perfect timing, obviously.

What was supposed to be the day we put the app out there became a day of reacting fast. I had to rotate all our API keys and figure out where we could get the app running again.

I'm not going to turn this into a technical postmortem or pretend the whole experience fits into some neat lesson. At that moment, I had an app to get back online.

The annoying part is how quickly the job changes. A minute ago you're thinking about the product. Now you're dealing with credentials and hosting, and neither of those cares that you wanted to spend the day launching something.

Buying the domain was the easy part.

## Learning infrastructure because I had to

The next home ended up being Hetzner, with Coolify.

And that meant basically learning how to put the infrastructure together from scratch. Not just choosing a provider and hoping the deploy button would take care of the rest.

Server, SSH, firewall, Docker, database, DNS, HTTPS. Understanding where each piece lives and how the request actually gets from the domain to the app.

I'd worked on systems in production before, but putting the pieces together for our own product, under that pressure, was its own learning experience.

The app now runs with Next.js and PostgreSQL on that setup. Nothing about it needs to sound glamorous. What mattered was understanding it well enough to get Larper back up and keep working.

There's a big difference between knowing a service exists and being the person who has to make it work when the original plan falls apart.

This time, that person was me.

## Now we have to learn marketing

And here's the funny part.

After the brainstorming, the POC, the hosting problem, the key rotation and the infrastructure work, the thing we're struggling to understand now is marketing.

How do we explain the product so someone gets it quickly? Where do we find the people who have this problem? What makes them actually try it instead of thinking "cool" and closing the tab?

Those are real questions for us right now. I don't have a success story to attach to them yet.

As an engineer, it's very tempting to go back to the code. There's always something to improve there, and at least I understand what progress looks like. Another feature, another fix, another commit.

Getting the product in front of people is a lot less comfortable.

Which is a bit ironic considering we're building something to help people tell the story of their work. Apparently building the tool doesn't automatically teach you how to get people to care about the tool lol.

## Where we are

Larper is the project I'm putting my focus into now.

A day at GolfVille gave us the idea, the name and the first POC. Everything after that has been the part where a project starts becoming a product: decisions, unexpected problems and learning things you hadn't planned on learning that week.

I'm proud that we got it out of the conversation and into something real. And I'm trying to remember that the next part requires the same thing: doing the uncomfortable work instead of just thinking about it.

If you want to take a look, it's at [larpr.dev](https://larpr.dev/).

That's all, folks. Back to figuring this thing out.

Stay safe, y'all.
{{< /langblock >}}

{{< langblock lang="pt-br" >}}
# Larper, do resort à produção

E lá vamos nós, mais um capítulo.

Aparentemente eu não consigo nem ir pra um resort sem voltar com um projeto pra construir kkk.

Eu e um amigo estávamos no GolfVille e, em um único dia de brainstorming, bolamos o Larper. O nome, o que o web app ia fazer de verdade, como alguém usaria aquilo. Fomos trocando ideia, cortando algumas coisas, mudando outras, até ter algo que dava pra construir.

E fizemos a POC. Naquele mesmo dia.

Estou sendo específico na parte da POC porque ter uma prova de conceito e ter um produto pronto pras pessoas são coisas bem diferentes. A gente recebeu um lembrete bem rápido disso.

## O que a gente queria resolver

Você faz algo que vale a pena compartilhar. Entrega uma feature, resolve um problema chato, aprende alguma coisa na marra. Aí abre o LinkedIn ou o X, olha pra caixa de texto vazia e pensa: como caralhos eu transformo isso num post?

E mesmo que consiga escrever um, cada rede tem uma linguagem diferente. O que funciona no LinkedIn não necessariamente funciona no Reddit. Copiar o mesmo parágrafo pra todo lugar fica com exatamente essa cara: o mesmo parágrafo copiado pra todo lugar.

Foi em torno desse problema que começamos a moldar o Larper.

Você conta o que aconteceu, com as suas palavras. Ele transforma isso em posts adaptados pro LinkedIn, X, Threads e Reddit, com controle sobre o tom. Você edita o que quiser, e o fluxo junta geração, agendamento e publicação.

A parte divertida é a intensidade. Dá pra manter o pé no chão ou puxar o enquadramento até o full larp. A mesma coisa que aconteceu, com jeitos bem diferentes de contar.

Mas a ideia continua sendo partir de algo que você realmente fez. O jeito de contar pode ficar mais exagerado. Seu currículo não deveria ganhar três empresas onde você nunca trabalhou.

## Um dia no GolfVille

O que eu mais gostei daquele dia não foi só a velocidade de escrever código.

Foi ter alguém pra trocar ideia.

No meu último post falei sobre como cansa tomar todas as decisões sozinho. Você é a fila de tickets, o engenheiro, a pessoa questionando tudo às 2 da manhã. Com o Larper, tinha outra pessoa fazendo perguntas, discordando, ajudando a transformar um pensamento meio solto numa ideia de produto.

A gente não chegou com uma especificação completa. Fomos pensando no nome, discutindo o fluxo, mudando de opinião e moldando tudo pelo caminho.

No fim daquele dia, a conversa tinha virado uma POC.

Essa sensação é boa pra caramba. Uma coisa que existia só numa conversa poucas horas antes agora está numa tela, fazendo alguma coisa.

Claro que a realidade já estava aquecendo.

## O primeiro deploy tinha outros planos

Inicialmente, estávamos com o serviço hospedado na Railway. Compramos o domínio, decidimos que era hora do primeiro deploy e, bem naquele momento, veio o primeiro baque de verdade com a hospedagem.

Timing perfeito, obviamente.

O que era pra ser o dia de colocar o app pra fora virou um dia de reagir rápido. Tive que rotacionar todas as nossas API keys e descobrir onde a gente ia colocar o app no ar de novo.

Não vou transformar isso num postmortem técnico nem fingir que a experiência toda cabe numa lição bonitinha. Naquele momento, eu tinha um app pra colocar de volta no ar.

O chato é como o trabalho muda rápido. Um minuto atrás você estava pensando no produto. Agora está lidando com credenciais e hospedagem, e nenhuma dessas coisas se importa que você queria passar o dia lançando alguma coisa.

Comprar o domínio foi a parte fácil.

## Aprendendo infraestrutura porque precisava

A próxima casa acabou sendo a Hetzner, com Coolify.

E isso significou basicamente aprender a montar a infraestrutura do zero. Escolher um provedor passou a ser só o começo do trabalho.

Servidor, SSH, firewall, Docker, banco de dados, DNS, HTTPS. Entender onde cada peça fica e como a requisição sai do domínio e chega no app de verdade.

Eu já trabalhava com sistemas em produção, mas juntar essas peças pro nosso próprio produto, com aquela pressão, foi um aprendizado à parte.

Hoje o app roda com Next.js e PostgreSQL nessa estrutura. Não precisa soar glamouroso. O que importava era entender o suficiente pra colocar o Larper de volta no ar e continuar trabalhando.

Tem uma diferença enorme entre saber que um serviço existe e ser a pessoa que precisa fazer aquilo funcionar quando o plano original vai pro espaço.

Dessa vez, essa pessoa era eu.

## Agora a gente precisa aprender marketing

E aqui vem a parte engraçada.

Depois do brainstorming, da POC, do problema com hospedagem, da rotação de chaves e da infra, o que a gente está tentando entender agora é marketing.

Como explicar o produto de um jeito que alguém entenda rápido? Onde encontrar as pessoas que têm esse problema? O que faz alguém realmente testar em vez de pensar "legal" e fechar a aba?

Essas são perguntas reais pra gente agora. Ainda não tenho uma história de sucesso pra colocar junto delas.

Como engenheiro, é muito tentador voltar pro código. Sempre tem algo pra melhorar ali, e pelo menos eu entendo como o progresso aparece. Mais uma feature, mais um ajuste, mais um commit.

Fazer o produto chegar nas pessoas é bem menos confortável.

O que é meio irônico, considerando que estamos construindo algo pra ajudar as pessoas a contar a história do próprio trabalho. Aparentemente construir a ferramenta não te ensina automaticamente a fazer as pessoas se importarem com a ferramenta kkk.

## Onde estamos

O Larper é o projeto em que estou colocando meu foco agora.

Um dia no GolfVille deu pra gente a ideia, o nome e a primeira POC. Tudo depois disso tem sido a parte em que um projeto começa a virar produto: decisões, problemas inesperados e aprender coisas que você nem tinha planejado estudar naquela semana.

Tenho orgulho de termos tirado isso da conversa e colocado em algo real. E estou tentando lembrar que a próxima parte exige a mesma coisa: fazer o trabalho desconfortável em vez de só ficar pensando nele.

Se quiser dar uma olhada, está no [larpr.dev](https://larpr.dev/).

É isso, pessoal. Voltando a descobrir como fazer essa parada dar certo.

Se cuidem.
{{< /langblock >}}
