# Node.js WebSocket Server:

## Implementación sencilla de un servidor websocket, utilizando el módulo websocket para node.js

### Instrucciones paso a paso:

1) Ejecutar comando en la consola:

        npm init --yes

Esto creará el archivo package.json con la configuración del proyecto.

2) Ejecutar el comando:

        npm i nodemon -D

Esto instalará el módulo nodemon como una dependencia de desarrollo, para trabajar con la consola de una manera mas sencilla, ya que se reinicia automáticamente el servidor sin necesidad de hacerlo manualmente al hacer cambios en el código.

3) Crear el archivo index.js para contener allí el código principal del servidor.

4) Agregar la siguiente línea en la sección scripts del archivo package.json, para definir un nuevo script para iniciar el servidor:

        "start": "nodemon index.js",

Así el servidor se podrá iniciar con el comando:

        npm start

5) Instalar el paquete websocket a través del comando:

        npm install websocket

6) El código utilizado en este ejemplo fue extraido de la documentación oficial del módulo websocket, en el enlace: [https://www.npmjs.com/package/websocket](https://www.npmjs.com/package/websocket)

7) La implementación del cliente se puede probar utilizando la página web que se encuentra en el directorio de este proyecto, cuyo nombre es client.html. (Abrir en el navegador) La funcionalidad de WebSockets se implementó usando la clase Websockets de javascript en el archivo client.js.

# Nota:
Si se descarga este proyecto desde GitHub, instalar las dependencias usando el comando:

                npm install
