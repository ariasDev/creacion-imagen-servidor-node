# creacion-imagen-servidor-node


Para crear y ejecutar la imagen de ejemplo, siga los siguientes pasos

#### Paso 1: Clone este repositorio en tu maquina en el directorio que desees

```
git clone https://github.com/ariasDev/creacion-imagen-servidor-node.git
```

#### Paso 2: Abra una cmd y dirjace a la raiz del repositorio clonado


#### Paso 3: Ejecute el siguiente comando para construir la imagen a partir del Dokerfile que se encuentra en la raiz del proyecto

```
docker build -t server-node-example .
```

#### Paso 4: Ejecute el siguiente comando para ejecutar la imagen como contenedor

```
docker run -d -p 3000:3000 server-node-example
```


