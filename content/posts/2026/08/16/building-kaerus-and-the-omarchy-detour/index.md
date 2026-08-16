---
title: "Building Kaerus, and the detour that became a top 10 Omarchy plugin"
title_en: "Building Kaerus, and the detour that became a top 10 Omarchy plugin"
title_ptbr: "Construindo o Kaerus, e o desvio que virou um plugin top 10 do Omarchy"
date: 2026-08-16T13:40:00-03:00
tags: ["Startup", "Open Source", "Kaerus", "Omarchy"]
description_en: "Some thoughts on building Kaerus from scratch, the accidental detour into Omarchy that turned into a top 10 most-copied community plugin, and the actual struggle of shipping a new product alone."
description_ptbr: "Algumas ideias sobre construir o Kaerus do zero, o desvio acidental pro Omarchy que virou um plugin entre os 10 mais copiados da comunidade, e a dificuldade real de lançar um produto novo sozinho."
---

{{< langswitch default="en" >}}
{{< langblock lang="en" >}}
# Building Kaerus, and the Detour That Became a Top 10 Omarchy Plugin

So, new chapter.

Since the start of this year I've been heads down building Kaerus, my own thing this time. Founder, and for now, the only engineer.

Kaerus is a debugging assessment platform. The pitch is simple to say and annoyingly hard to build: measure someone's real, unaided engineering skill through deterministic incident simulations and sandboxed graders. No LLM whispering the answer in your ear, no copy-pasting a stack trace into a chat window. Just you, a broken system, and a clock.

I got the idea after years of doing exactly that kind of debugging in production for public-sector clients. You learn pretty fast that reading a stack trace and actually understanding a system under pressure are two very different skills, and almost nothing out there measures the second one honestly anymore.

## The part nobody warns you about

Building something for a company is hard. Building something of your own, from absolute zero, is a different kind of hard.

At a job, the hard part is usually the problem itself. When you're building your own product, the hard part is everything around the problem too: the infrastructure decisions with no one to review them, the sandboxing so incidents run the same way every single time, the grading logic that has to be fair and deterministic and not just "looks right to me," the UI, the copy, the domain, the "should I even be doing this" 2am thoughts.

There's no ticket queue telling you what's next. You are the ticket queue.

I underestimated how much of building a product is just deciding, over and over, with nobody to bounce it off. Deciding is exhausting in a way that writing code never was for me.

## The detour: Omarchy

Somewhere in the middle of all that, I needed a break that wasn't just scrolling my phone, so I went down a rabbit hole into Omarchy, DHH's Arch/Hyprland-based Linux setup that's been getting a lot of attention lately.

I started poking around the plugin ecosystem out of pure curiosity, and thought, why not build something small just to decompress. So I built a Tetris plugin for it in Python. Nothing fancy in theory: desktop integration, persistent high scores, theme-aware rendering so it doesn't look out of place next to your Omarchy theme, sound, and CLI support.

I published it and went back to Kaerus. Almost overnight, from one day to the next, it was already being downloaded a lot.

It didn't take long to climb into the top 10 most-copied plugins in the whole Omarchy community. A side project I built to decompress from my actual startup ended up being one of the most visible things I've shipped this year.

Repo's here if you want to see it: [github.com/Ycaro-Oleg/omarchy-my-tetris](https://github.com/Ycaro-Oleg/omarchy-my-tetris)

## What that taught me

There's something almost funny about spending months carefully designing a serious debugging platform, and then a weekend Tetris clone quietly out-charting it in terms of raw reach.

But I don't think that's really a contradiction. It's the same muscle. Ship something real, keep the scope tight, care about the details that people actually feel (the theme matching, the sound, the persistence), and put it out there instead of sitting on it.

The Tetris plugin also did something for my head that I didn't expect: it reminded me that finishing and shipping feels good, and that feeling is fuel. Building Kaerus is a long grind with no finish line in sight yet. Building and shipping omarchy-my-tetris took a weekend and gave me an immediate, measurable result. I needed that reminder more than I realized.

## Where this leaves me

Kaerus is still the main thing. Still early, still just me, still figuring out a lot of it as I go. But I'm treating this stretch as the actual test of whether I can build something of my own from zero and see it through, not just start it.

The Omarchy detour wasn't a distraction from that test, it was practice for it. Small scope, real users, real feedback, shipped fast. That's the loop I'm trying to run on Kaerus too, just at a much bigger scale and with a much longer horizon.

If you're curious about Kaerus, the site is at [kaerus.dev](https://kaerus.dev/).

That's all, folks. Back to it.

Stay safe, y'all.
{{< /langblock >}}


{{< langblock lang="pt-br" >}}
# Construindo o Kaerus, e o Desvio que Virou um Plugin Top 10 do Omarchy

E lá vamos nós, novo capítulo.

Desde o início deste ano estou de cabeça baixa construindo o Kaerus, dessa vez um projeto meu mesmo. Fundador e, por enquanto, o único engenheiro.

O Kaerus é uma plataforma de avaliação de debugging. O pitch é fácil de falar e irritantemente difícil de construir: medir a habilidade real de engenharia de alguém, sem ajuda externa, através de simulações determinísticas de incidentes e avaliadores (graders) rodando em sandbox. Sem LLM sussurrando a resposta no ouvido, sem colar um stack trace num chat. Só você, um sistema quebrado, e o relógio correndo.

A ideia surgiu depois de anos fazendo exatamente esse tipo de debugging em produção para clientes do setor público. A gente aprende rápido que ler um stack trace e realmente entender um sistema sob pressão são duas habilidades bem diferentes, e quase nada por aí mede a segunda de forma honesta hoje em dia.

## A parte que ninguém te avisa

Construir algo para uma empresa é difícil. Construir algo seu, do absoluto zero, é um tipo diferente de difícil.

Num emprego, a parte difícil geralmente é o problema em si. Quando você constrói o seu próprio produto, a parte difícil é tudo ao redor do problema também: as decisões de infraestrutura sem ninguém pra revisar, o sandboxing pra garantir que os incidentes rodem sempre do mesmo jeito, a lógica de avaliação que precisa ser justa e determinística e não só "parece certo pra mim", a UI, os textos, o domínio, e aqueles pensamentos de "será que eu deveria mesmo estar fazendo isso" às 2 da manhã.

Não existe uma fila de tickets te dizendo qual é o próximo passo. Você é a fila de tickets.

Eu subestimei o quanto de construir um produto é só decidir, repetidamente, sem ninguém pra trocar ideia. Decidir cansa de um jeito que escrever código nunca cansou pra mim.

## O desvio: Omarchy

No meio disso tudo, eu precisava de uma pausa que não fosse só ficar rolando o feed do celular, então entrei numa espiral chamada Omarchy, a configuração de Linux baseada em Arch/Hyprland do DHH que tem ganhado bastante atenção ultimamente.

Comecei a mexer no ecossistema de plugins por pura curiosidade e pensei: por que não construir algo pequeno só pra descomprimir a cabeça. Aí construí um plugin de Tetris pra ele em Python. Nada muito complexo em teoria: integração com o desktop, pontuações persistentes, renderização adaptada ao tema pra não destoar do seu tema do Omarchy, áudio e suporte a CLI.

Publiquei e voltei pro Kaerus. Quase da noite pro dia, de um dia pro outro, ele já estava sendo bastante baixado.

Não demorou pra subir pro top 10 dos plugins mais copiados de toda a comunidade do Omarchy. Um projeto paralelo que construí só pra descomprimir da minha startup de verdade acabou sendo uma das coisas mais visíveis que lancei esse ano.

O repositório está aqui, se quiser dar uma olhada: [github.com/Ycaro-Oleg/omarchy-my-tetris](https://github.com/Ycaro-Oleg/omarchy-my-tetris)

## O que isso me ensinou

Tem algo quase engraçado em passar meses desenhando cuidadosamente uma plataforma séria de debugging, e depois um clone de Tetris feito num fim de semana silenciosamente ultrapassar isso em alcance bruto.

Mas eu não acho que isso seja realmente uma contradição. É o mesmo músculo. Lançar algo real, manter o escopo enxuto, se importar com os detalhes que as pessoas realmente sentem (o tema combinando, o som, a persistência), e colocar pra fora em vez de ficar guardando.

O plugin de Tetris também fez algo pela minha cabeça que eu não esperava: me lembrou que terminar e lançar algo é uma sensação boa, e essa sensação é combustível. Construir o Kaerus é uma maratona longa e sem linha de chegada visível ainda. Construir e lançar o omarchy-my-tetris levou um fim de semana e me deu um resultado imediato e mensurável. Eu precisava desse lembrete mais do que percebia.

## Onde isso me deixa

O Kaerus continua sendo a prioridade. Ainda é cedo, ainda sou só eu, ainda estou descobrindo muita coisa no caminho. Mas estou encarando essa fase como o teste de verdade se eu consigo construir algo meu do zero e levar até o fim, não só começar.

O desvio pro Omarchy não foi uma distração desse teste, foi um treino pra ele. Escopo pequeno, usuários reais, feedback real, lançado rápido. É esse o ciclo que estou tentando rodar no Kaerus também, só que numa escala bem maior e com um horizonte bem mais longo.

Se você tiver curiosidade sobre o Kaerus, o site é o [kaerus.dev](https://kaerus.dev/).

É isso, pessoal. Voltando ao trabalho.

Se cuidem.
{{< /langblock >}}
