# PM-Example

## Client / Front-end

Para o exemplo atual, eu usei o script de criação de projetos vite, removi algumas dependências que eu não queria usar a adicionei outras, o comando que usei para criar o projeto foi:

```shell
npm create vite client --template react
```

Removi tudo relacionado ao eslint, tanto o arquivo `eslint.config.js` quanto as dependências dentro do `package.json`, e adicionei o [tailwind](https://tailwindcss.com/) e um tema para o tailwind com as cores do catppuccin, informações da instalação do tailwind pode ser encontrada [aqui](https://tailwindcss.com/docs/installation/using-vite), e o do tema de cores do catppuccin é irrelevante.

É importante lembrar dee modificar o `vite.config.js`, eu adicionei um parâmetro a ele para que seja possível usar o vite como um servidor web, dentro da função `defineConfig`, eu adicionei uma chave `preview: {host: true}` para facilitar minha vida, isso é uma prática bem comum, o lovable faz em todos os projetos.

## Server / Back-End

Inicializei um projeto com o comando:

```shell
npm init -y
```

Instalei o express:

```shell
npm install express --save # o "--save" é inútil, mas tá assim na documentação deles
```
O código é um exemplo que está na documentação do express, eu modifiquei ele um pouco para retornar um JSON e não um HTML. Criei alguns scripts para facilitar o desenvolvimento
