## Server / Back-End

Inicializei um projeto com o comando:

```shell
npm init -y
```

Instalei o express:

```shell
npm install express --save # o "--save" é inútil, mas tá assim na documentação deles
```

O código é um exemplo que está na [documentação do express](https://expressjs.com/), eu modifiquei ele um pouco para retornar um JSON e não um HTML. Criei alguns scripts para facilitar o desenvolvimento


# Rotas

```shell
npm install cors body-parser
```

Este comando irá baixar umas dependências para deixar mais fácil a integração de tudo, habilitando o CORS e inicializando um Body Parser para as requests


```shell
npm install pg sequelize
```

Este irá baixar o ORM do sequelize juntamente do drive do postgres, para que possamos interagir com o banco sem precisar escrever SQL
