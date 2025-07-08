# PM-Example

### Iniciando os contêineres

Para rodar o compose, é só usar o seguinte comando:

```shell
docker compose up --detach --build
```

Isso irá subir os contêineres, e caso já estejam em execução, irá atualiza-los para as novas alterações que foram feitas

### Parando os contêineres

Caso queira parar os contêineres, podemos usar o comando:

```shell
docker compose down --rmi local
```

Este comando irá parar tudo que esta escrito no docker compose, e irá remover as imagens geradas pelo build para não poluir o ambiente
