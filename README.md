Esta aplicação utiliza o framework [Next.js](https://nextjs.org/) e foi criada inicialmente usando o comando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Iniciando o Projeto

```bash
#Instalar as dependências:
yarn

#Rodar teste da aplicação:
yarn test

#Rodar a aplicação em modo de desenvolvimento:
yarn dev

#Abra http://localhost:3000 com seu browser para ver o aplicação rodando.
```

## Problematica

Este projeto foi desenvolvido com o intuito de automatizar a montagem de um sistema eliminatório, onde um conjuntos de jogadores se enfrentam em partidas de 2, sendo o vencedor de cada partida que avança até chegar na final onde será definido o vencedor de todo o sistema.

A maior complexidade do problema consiste quando o sistema não possui uma quantidade de participantes equivalente a uma potência de 2, tornando o sistema assimétrico, para tornalo simétrico definimos alguns participantes como cabeça de chave, os quais avançam na primeira rodada com intuito de deixar a quantidade de jogos da segunda rodada equivalente a uma potencia de dois.

## Solução

#### Lógica

Nesta aplicação faço a montagem do objeto 'torneio' que possui dois atributos, o primeiro se chama 'rounds' que seriam as partidas do torneio e o segundo seria o 'winner' que seria o ganhador.

Para montar as rodadas vericamos se o numero de jogadores é potencia de dois dividindo o logaritmo do numero de jogadores pelo logaritmo de 2 e verificamos se o resultado é inteiro.

O tamanho de 'rounds' sempre será numero de jogadores menos um, quando o sistema é simétrico apenas distribuimos os jogadores em pares, quando não for iremos definir uma quantidade de cabeças de chaves equivalente a, diferença da potencia de 2, mais próxima e maior que a quantidade de jogadores, pela propia quantidade de jogadores, os cabeças de chave passam pela primeira partida com o intuito de deixar a quantidades de jogos da segunda partida potência de dois e tornando o sistema simétrico.

Importante ressaltar que após definir a quantidade de cabeças de chave é feito uma distribuição deles, para que dessa forma evite disputa entre eles no começo do torneio, tendo em vista que muitos dos torneios definem eles como os competidores favoritos e preferem seus confrontos nas finais do torneio.

#### Estrutura

Framework/Roteamento: [NextJS](https://github.com/vercel/next.js).

UI: [NextJS](https://github.com/mui-org/material-ui).

Notification: [React Toastify](https://github.com/fkhadra/react-toastify).

Formulários: [Formik](https://github.com/formium/formik) & [Yup](https://github.com/jquense/yup).

Mascaras de Input:[React Input Mask](https://github.com/sanniassin/react-input-mask).

## Resultados

![AppGif](https://drive.google.com/uc?export=view&id=1lKTRXmgjCm6Y2b1H4SQj8nmwOhLN3eXd)
