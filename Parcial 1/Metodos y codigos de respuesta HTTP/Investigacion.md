#  Http

## Metodos de peticion HTTP

HTTP define un connjunto de metodos de peticion para iindicar accio que se desea realizar para un recurso determinado. Cada uno de ellos implementa una semantica diferente.

> - **Get:** El metodo GET solicita una representacion de un recurso especifico. Las peticiones que usan GET solo deben recuperar datos.
> - **HEAD:** El metodo HEAD pide una respuesta identica a la de una peticion GET, pero sin e cuerpo de la respuesta.
> - **POST:** El metodo POST se utiliza para enviar una identidad a un recurso en especifico, causando a menudo un cambio en el estrado o efecros secundarios en el servidor.
> - **PUT:** El metodo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga util de la peticion.
> - **DELETE:** El metodo DELETE borra un recurso en especifico.
> - **CONNECT:** El metodo CONNECT estable un tunel hacia el servidor identificado por el recurso.
> - **OPTIONS:** El metodo OPTIONS es utilizado para describir las opciones de comunicacion para el recurso de destino
> - **TRACE:** El metodo TRACE realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.
> - **PATCH:** El metodo PATCH es utilizado para aplicar modificaciones parciales a un recurso.


## Codigos de respuesta HTTP

|Codigo de error         |Descripcion                                             |
|------------------------|--------------------------------------------------------|
|200                     |Aceptar.                                                |
|400                     |Argumento no valido o solicitud incorrecta.             |
|401                     |Acceso no autorizado.                                   |
|403                     |Acceso prohibido Verifica Cloud Console y el archivo de credenciales para asegurarte de que el servicio se habilito correctamente.        |
|404                     |No se encontró el recurso.                              |
|409                     |Se intento crear un recurso que ya existe o se anulo.   |
|429                     |Demasiadas solicitudes. El cliente superó las restricciones de la cuota asignada. Consulta Cuotas y límites para obtener más información sobre tu cuota.                                                       |
|499                     |La operación se cancelo.|
|500                     |Error del servidor interno                              |
|501                     |La operación no se implemento, no está habilitada o no se admite.                                                                        |
|503                     |Servicio no disponible. Vuelve a intentarlo mas tarde.                                                                            |
|504                     |Tiempo de espera de la solicitud de la puerta de enlace |

![imagen](https://www.twaino.com/wp-content/uploads/2022/07/Protocolo-de-transferencia-de-hipertexto-HTTP.png)