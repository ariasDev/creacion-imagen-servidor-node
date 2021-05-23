# creacion-imagen-servidor-node
creación de una imagen de un servidor de node con docker

## comando para construir la imagen

```
docker build -t server-node-example .
```

## comando para ejecutar la imagen como contenedor

```
docker run -d -p 3000:3000 server-node-example
```


