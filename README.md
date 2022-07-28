# Todolist Using React

<img src="src/img/Preview todo API.png">

## Instala el paquete npm

```
$ npm install
```

## ¡Empieza a programar!

For Windows, Mac, Linux or Gitpod, start the webpack server with live reload:
- `$ npm run start`
<p>
  <a href="https://gitpod.io#https://github.com/4GeeksAcademy/react-hello.git"><img src="https://raw.githubusercontent.com/4GeeksAcademy/react-hello/master/open-in-gitpod.svg?sanitize=true" />
  </a>
</p>
Esta plantilla es similar a create-react-app pero está pensada para los estudiantes de la Academia 4Geeks.

## 📝 Instrucciones
- Haz que tu TODO List se sincronice con la API de backend cada vez que se agregue o elimine una tarea.
- Agregue un botón de limpieza de todas las tareas que eliminará toda la lista del servidor y actualizará la lista vacía en el front-end.

- Hay 3 momentos críticos en la línea de tiempo de la aplicación (denominado tiempo de ejecución) para centrarse en su integración: 
- Después de que la lista se carga vacía por primera vez (componentDidMount): debes obtener (GET) los datos de la API y actualizar las tareas cuando la información finalmente llegue. 
- Cuando se agrega una nueva tarea: debes PONER (PUT) la nueva lista en el servidor. 
- Cuando se elimina una tarea: Debes PONER (PUT) la nueva lista en el servidor.

## ✨ Sobre el Proyecto

El proyecto esta basado en el ejercicio anterior del TODO LIST pero en esta ocasión utilizando una API, he tenido que modificar algunas partes del código para poder hacer las peticiones con el formato correcto.
1) En primer lugar cree el usuario para poder disponer de una nueva lista.
2) Actualicé las tareas, hice varias peticiones para ver si funcionaba correctamente
3) Eliminé las tareas en esta parte tuve algun problema ya que, según la documentación de la API debíamos usar DELETE, pero si lo hacía de esa manera se borraban las tareas y el usuario por completo, lo que suponía que si una vez eliminado el usuario y las tareas quería volver a escribir una nueva tenía que volver a crear el usuario, por otro lado tal y como esta diseñada para poder borrarlas debías pasarle el siguiente parametro [{ label: "Sample task", done: false }] así que a pesar de estar borradas las tareas creadas por el usuario siempre aparecía esa y en el ejercicio anterior nos ponía que cuando no hubiese tareas debía aparecer el siguiente mensaje : "No hay tareas. Añade una nueva", por lo que por el momento lo que he hecho es modificar el texto del label, hasta ser capaz de encontrar si hay otra posible solución.
4) Se añade botón que eliminá todas las tareas a la vez.


