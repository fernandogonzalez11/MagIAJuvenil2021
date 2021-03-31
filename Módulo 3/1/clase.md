# Módulo 3

## Arquitectura Cliente - Servidor
Modelo para diseñar software en el que las tareas se reparten entre proveedores de un servicio **(Servidores)** y los demandantes de éste **(Clientes)**


<img src="https://siaguanta.com/wp-content/uploads/2019/12/arq-1024x433.png" alt="Arquitectura Cliente-Servidor" width=400 />

### El Cliente
* Demanda las solicitudes, papel **activo** en la comunicación
* Espera y recibe respuestas del servidor

### El Servidor
* Al iniciarse espera las solicitudes de los clientes, papel **pasivo**
* Tras la recepción de la solicitud, la procesa y la envía
* Acepta las solicitudes de gran número de clientes (simultáneamente)

## Red de Computadoras
Interconexión de un conjunto de computadoras, en donde se puede enviar y recibir información.

<img src="https://i.ytimg.com/vi/5ynsSiD3oI8/hqdefault.jpg" alt="Red de Computadoras" width=350 />

## Internet
Red de computadoras conectadas a nivel mundial para compartir información.

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.privateinternetaccess.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F06%2FNextGenNetwork.jpg&f=1&nofb=1" alt="Internet" width=300 />

## Protocolo de Comunicación Web
**Protocolo:** Conjunto de reglas y procedimientos que deben respetarse para el envío y recepción de datos.

### Protocolo HTTP (Web)
Protocolo que nos permite realizar cualquier intercambio de datos en la Web, tiene una estructura cliente-servidor y la petición de datos normalmente la realiza un navegador Web.

## Página Web
Es un documento capaz de contener distintos contenidos y puede ser accedida mediante un navegador web.
### Partes de URL
* Protocolo: `https://`, `ftp://`
* Subdominio: `www.`, `osu.`
* Dominio: `discord.com`, `ppy.sh`
* Rutas: `/app/index.html`
* Parámetros de endpoint: `?lang=es`

## HTML
Es un lenguaje que permite definir la estructura de una página web por medio de etiquetas.
* Es un lenguaje de etiquetas, **no** de programación.
```html
<!DOCTYPE html>
<html>
    <head>
        <!-- Información técnica para el navegador (e.g. metadata) -->
    </head>
    <body>
        <!-- Contenido que aparecerá en la página (o no si es tracking LMAO) -->
    </body>
</html>