# Peticiones HTTP


## Servicios Web
Conjunto de actividades que permiten hacer un funcionamiento, ofrecido de forma pública y se puede acceder a través del protocolo HTTP (Web)

Es accesible a través de la Web y codifica los mensajes en un lenguaje estándar que pueda conocer cualquier cliente.

* Permite que una aplicación lo encuentre sin tener que conocerlo previamente
* Es distribuido, un servicio web no está disponible para un único cliente, son diferentes los que acceden a él por medio de Internet

![Petición HTTP](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1007%2F0*vnychnyQ4y5S4zWA.&f=1&nofb=1)

### Ofrecen varios beneficios
* **Interoperabilidad:** Los Servicios Web son independientes de la plataforma de desarrollo del cliente.
* **Usabilidad:** Sólo es necesario incluir la lógica de negocio específica a la aplicación en el lado del cliente.
* **Reusabilidad:** Facilitan la reutilización de componentes de otros servicios.

### Ejemplos de servicios Web
* Estado del tiempo de una ciudad
* Reconocimiento de imágenes
* Extracción de un documento
* Traducción de idioma por habla

## Métodos HTTP

### **GET**
Solicita una representación de un recurso específico. Estas peticiones sólo deben recuperar datos.

### **PUT**
Reemplaza todas las representaciones actuales del recurso de destino con la carga de petición.

### **POST**
Envía una entidad a un recurso específico.

### **DELETE**
Borra un recurso específico.

## Códigos de estado de respuesta HTTP
Se indican si se ha completado satisfactoriamente una solicitud HTTP específica.

Se agrupan en cinco clases:

1. **Respuestas informativas:** 100-199
2. **Respuestas satisfactorias:** 200-299
3. **Redirecciones:** 300-399
4. **Errores de los clientes:** 400-499
5. **Errores de los servidores:** 500-599

Los más comunes son
* **200 OK:** La solicitud tuvo éxito. Varía dependiendo del método HTTP
* **400 Bad Request:** El servidor no pudo interpretar la solicitud dada por una sintaxis inválida

Para realizar peticiones utilizando HTTP, descargar e utilizar [Postman](https://www.postman.com/downloads)