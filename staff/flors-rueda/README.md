# ¡Git y Github Explicado con un Restaurante!

Podemos imaginarnos Git como la forma que tiene un restaurante (¡un gitstaurante!) para gestionar cómo trabajan los distintos chefs en sus tareas y cómo se rastrean y registran los cambios en la cocina.

Github en este caso sería la cocina donde estan todos los chefs juntos, y aquí pueden colaborar y compartir sus progresos.

<br/>

## Conceptos Básicos

Vamos a analizar que serían las distintas features de Git y Github si pensamos en todo esto como un restaurante:

- **Repositorio:** Piensa en la cocina como el espacio de trabajo principal donde se hornea, fríe y... cocina todo. Cada estación de trabajo (dicho horno, los fogones, planchas, zonas para emplatar, etc) representa una rama concreta.

<br/>

- **Repositorio remoto:** Mientras que cada cocina tiene sus propias estaciones de trabajo, y cada cocinero puede experimentar en las cocinas de su casa (repositorios locales, vuestros forks), GitHub sirve como cocina central en el restaurante principal. Esto sería el repositorio remoto, En nuestro caso eso sería el [repositorio principal](https://github.com/b00tc4mp/isdi-parttime-202406). Aquí se reúnen y almacenan los resultados de todas las cocinas particulares. Esto permite al grupo de chefs compartir sus progresos y recetas.

<br/>

- **Commits:** Cada vez que un cocinero termina un paso de la receta, como mezclar la masa o hervir patatas, registra lo que ha hecho. Este registro incluye detalles de los cambios realizados, como la cantidad de ingredientes utilizados o las técnicas especiales aplicadas. Entraremos más a fondo en el tema de los commits en un rato.

<br/>

- **Log** La cocina mantiene un historial de todos los cambios realizados en cada zona de trabajo. Esto permite mirar atrás y ver qué cambios se hicieron, quién los hizo y cuándo. Si se produce un error (se cae una patata hervida al suelo), se puede volver al estado anterior y seguir cómo si nada. Sí, ¡en el gitstaurante eso es posible!.

<br/>

- **Branches (Ramas):** A veces, un cocinero quiere probar una nueva versión de una receta sin alterar un menú que ya funciona. Pueden irse a otra estación de trabajo (rama) en la que experimentar con diferentes ingredientes o métodos. Por ejemplo, pueden crear una rama "vegan-cookies" para intentar hacer galletas sin huevos ni lácteos. También aprofundizaremos después en el tema de las ramas.

<br/>

- **Merge:** Si la nueva versión de la estación de trabajo experimental da buenos resultados, el cocinero puede incorporar estos cambios al menú principal. Esto significa que las nuevas recetas, técnicas e ingredientes ya forman parte del día a día en la cocina: los clientes pueden pedir estas nuevas galletas sin problemas.

<br/>

- **Cloning**: En el mundo del gitstaurante podemos crear una nueva cocina en nuestra casa que sea identica a la del restaurante principal y con esto practicar como añadir cositas al menú por nuestra cuenta, pero contando con todos los hornos, fogones e ingredientes que también tenemos en la cocina central. A este proceso se le llama clonación.

<br/>

- **Issues**: Digamos que nos hemos dado cuenta de que muchos clientes sufren intolerancia al gluten y en nuestra carta rica en carbohidratos no ofrecemos muchas alternativas. En ese caso podemos abrir un issue "add-gluten-free-food" en Github y asignarnos a este para hacerle saber al resto de chefs en que estamos trabajando.

<br/>

- **Pull Requests:** Si un chef ha desarrollado una nueva técnica o receta en su estación de trabajo, puede enviar una solicitud al restaurante principal para incorporarla al menú. Normalmente, el resto de chefs revisaran que esa receta no lleve arsénico, y si no estan conforme con el uso de las almendras porque prefieren las nueces... pueden comentar y aprobar o solicitar cambios antes de que se añada (merge) al menú.

<br/>

## Ramas en la cocina

- **Rama Principal (main)**

    La rama principal representa las recetas probadas y el menú como tal que se ofrece en el restaurante día a día. Es u menú que se ha puesto a prueba, que hace felices a quiens lo comen y tiene un 0,0000012% de riesgo de intoxicación alimentaria.
    Con esta rama principal podemos asegurarnos que el conjunto de recetas  siguen un estándar para garantizar una calidad consistente. Solo los cambios estables, no venenosos, y completamente probados llegan a la rama principal.

    <br/>

- **Rama de Desarrollo (develop)**

    La rama develop es como la cocina de pruebas que se esconcde detrás del restaurante, allí es donde se perfeccionan nuevas recetas y técnicas antes de empezar a venderlas. Es un paso intermedio entre experimentar con nuevas ideas y lanzarlas al menú principal.Aquí el grupo de chefs integra, prueba y mejora nuevas recetas u otras que ya existian. Los cambios en develop son más estables que en ramas más especificas, pero aún no están confirmados totalmente para el menú principal.
    
    <br/>

- **Ramas por features**

    Las ramas por features corresponen a issues especificos. Si queremos añadir recetas nuevas sin gluten o con carne de canguro vamos a trabajar en una rama a parte en nuestra cocina, antes de enviarlo a la cocina de pruebas, para evitar interrumpir el flujo de trabajo habitual.

    Luego, pediremos añadir ese cambi a la cocina de pruebas con una pull request y el resto de chefs nos darán su feedback antes de permitir el mergeo.

## Comandos principales

### `git add`

Imagina que un chef ha probado un nuevo paso en la receta y quiere preparar los cambios para ser registrados oficialmente. El primer paso es tomar nota en una libretita de todos los nuevos ingredientes y pasos que ha usado.

`git add` se utiliza para seleccionar los archivos que queremos incluir en el próximo commit.

```sh
git add receta_de_galletas.md
```

<br/>

### `git commit`

Una vez que los ingredientes están escritos en la libreta, el chef accede a su mail para enviarle la receta al encargado de cocina, y añade la información de la libreta como contenido, y un mensaje breve y conciso sobre que cambios ha realizado como asunto. 
    
`git commit` se utiliza para guardar los cambios seleccionados en el repositorio local con un mensaje que describe los cambios.

```sh
git commit -m "Añadir harina de almendra para versión sin gluten de las galletas"
```

<br/>

### `git push`

Escrito el mensaje para el encargado de cocina solo queda darle al botón de enviar. Antes de este paso puede el mail (el commit) sin problemas, pero una vez pulsado enviar se complica la cosa.

`git push` se utiliza para enviar los commits del repositorio local al repositorio remoto en GitHub.

```sh
git push
```

<br/>

### `git status`

Cada vez que el chef revisa la mesa de trabajo para ver qué ingredientes (cambios) se han preparado, cuáles ya están apuntados en la libreta o en el mail y cuáles aún no se han registrado usa este comando.

`git status` se utiliza para ver el estado de los archivos en el repositorio local, incluyendo qué archivos han cambiado y cuáles están listos para ser añadidos al commit.
```sh
git status
```

<br/>

### `git log`

Al mismo tiempo, el chef puede mirar su libreta y el historial de su mail para ver todos los cambios realizados en las recetas, quién los hizo y cuándo.

`git log` se utiliza para ver el historial de commits en el repositorio.

```sh
git log
```

<br/>

### `git branch`

Ya habíamos comentado que en cada cocina puede haber distintas estaciones de trabajo. Este comando sirve para ver cuales hay disponibles y creadas en la cocina en la que estas en ese momento. Al mismo tiempo, te permite añadir un horno (o una nueva rama) si te hace falta, pero para ahorrarte un paso entre crear ese horno y acercarte a él, mejor usar `git checkout`.
`git branch` se utiliza para listar todas las ramas en el repositorio o para crear una nueva.
- Listar todas las ramas:
```sh
git branch
```

- Crear una nueva:
```sh
git branch receta-nueva
```

<br/>

### `git checkout`

Un chef puede moverse del horno a los fogones sin problema, con este comando se navega entre las distintas ramas de tu cocina.
`git checkout` se utiliza para cambiar de rama, se puede combinar con git branch para crear una rama nueva y moverte a esta directamente.
- Cambiar a una rama existente:
```sh
git checkout develop
```
- Crear y cambiar a una nueva rama:
```sh
git checkout -b nueva-receta
```

<br/>

### `git fetch`

Sirve en caso de que un chef quiere ver las actualizaciones más recientes del libro de recetas central sin aplicarlas apuntarlas todas aun a su libreta de recetas.

`git fetch` se utiliza para traer los cambios del repositorio remoto al repositorio local, pero sin fusionarlos automáticamente. Esto permite revisar los cambios antes de integrarlos.

```sh
git fetch origin
```

### `git pull`

En este caso el chef principal del restaurante ha realizado cambios en el libro de recetas central (repositorio remoto) y los otros panaderos necesitan actualizar sus libros de recetas locales para asegurarse de que están trabajando con las versiones más recientes.

`git pull` se utiliza para traer (fetch) y fusionar (merge) los cambios del repositorio remoto en el repositorio local en un solo paso.

```sh
git pull origin develop
```

<br/>

<!--TODO Completar!
## Ejemplo practico:

- Forkear y clonar el repo

- traete rama develop

- Crear issue de lo que vas a hacer
(nombre: tarea-en-ingles-con-guiones)

- crear rama para ese issue
(numeroissue-tarea-en-ingles-con-guiones)
¡¡Asignarte el issue!!

- trabajar y commitear en la rama
(commit -m infinitivo ingles complemento #numeroissue)

- una vez terminas -> pull request
(#numeroissue-nombre-rama), asignar a gente para revisar!



-->

