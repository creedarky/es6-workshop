# ES2015-Workshop

## Bienvenido

Bienvenido a este workshop de ES2015. La meta es ayudar a todos a dar sus primeros pasos en lo mas nuevo de la sintaxis y funcionalidades de ECMAScript
y como usarlo.

Este repositorio fue hecho para ser usando en paralelo con la lectura de
[las nuevas mejoras](https://github.com/lukehoban/es6features).

## Tu meta

Este repositorio está lleno de test fallando. La unica manera de pasarlos es usando tu conocimiento recientemente adquirido de ES2015 y
todas las nuevas mejoras que son parte del ultimo release. Para cada test, tendras que escribir o reescribir el codigo usando
el ultimo sintaxis de ES2015. Una vez que hagas pasar todos los tests de un archivo, pasaras a la siguiente sección del codigo.

Cuando termine este workshop, todos tus tests estaran corriendo y pasando
By the time that the workshop is over, all of your tests will be running and passing.

## Cómo empezar

### Clonar el repositorio

Tendras que partir clonando este repositorio desde tu terminal:

```
git clone https://github.com/creedarky/es6-workshop.git && cd es6-workshop
```

### Instalar dependencias

Una vez que has clonado el repositorio, debes instalar las dependencias locales desde tu terminal:

```
npm install
```

# Como correr los tests
Una vez que tengas todo instalando, estás listo para correr los tests. Hay dos directorios con tests en ellos: `test` and `test-final`.
El directorio `test-final` es un apoyo si no logras resolver alguno de los test, todos estos tests incluyen el codigo de ES2015 necesario para pasar los tests.
Tendrás que editar los tests en el directorio `test` y hacer que lo tests pasen.

Para correr los tests en tu terminal escribe:

```
npm test
```

 Si quieres que los tests continuen corriendo mientras haces cambios, escribe:

```
npm start
```

Esto ejecutara los tests en el directorio `test`. Actualmente estos tests estan deshabilitados, usando `it.skip`.
Tu trabajo es activar uno por uno y hacer que el test pase, escribiendo el codigo de ES2015 requerido.
Cuando hayas escrito el codigo, el test pasara y podrás pasar al siguiente test.

# Thanks

Si tienes alguna pregunta, [let me know](https://twitter.com/creedarky).

