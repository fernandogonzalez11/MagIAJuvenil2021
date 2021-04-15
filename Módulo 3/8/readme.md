# Servicios REST (Referencia de Estado Representacional)
Es un estilo de arquitectura para desarrollar servicios web

Hay que seguir varios principios:
* Debe ser un sistema **cliente-servidor**
* Tiene que ser **sin estado**, es decir, cada petición tiene que ser independiente de los demás (sin restricción).
* Cada recurso debe de poder ser accedido mediante una URI (Uniform Resource Identifier)
* Se usa un pequeño conjunto de métodos bien definidos para manipular los recursos
* Cada mensaje debe incluir la suficiente información como para describir cómo procesar el mensaje.
* Tiene que ser un sistema por **capas**: un cliente no puede "discernir" si está accediendo directamente a un servidor, o a algún intermediario.

## Servicio Web REST
Los servicios web basados en la arquitectura REST se conocen como RESTful. Utilizan métodos HTTP para implementar el concepto de arquitectura REST.
Un servicio RESTful generalmente define un URI, un identificador uniforme de recursos, un servicio y un conjunto de servicios HTTP