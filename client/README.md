## Client / Front-end

Para o exemplo atual, eu usei o script de criação de projetos vite, removi algumas dependências que eu não queria usar a adicionei outras, o comando que usei para criar o projeto foi:

```shell
npm create vite client --template react
```

Removi tudo relacionado ao eslint, tanto o arquivo `eslint.config.js` quanto as dependências dentro do `package.json`, e adicionei o [tailwind](https://tailwindcss.com/) e um tema para o tailwind com as cores do catppuccin, informações da instalação do tailwind pode ser encontrada [aqui](https://tailwindcss.com/docs/installation/using-vite), e o do tema de cores do catppuccin é irrelevante.

É importante lembrar de modificar o `vite.config.js`, eu adicionei um parâmetro a ele para que seja possível usar o vite como um servidor web, dentro da função `defineConfig`, eu adicionei uma chave `preview: {host: true}` para facilitar nossa vida.
