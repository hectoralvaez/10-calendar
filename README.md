### Emojis

🆕 Inicio Sección

📝 App Journal
🚀 App Heroes

⚙️ Redux
🪝 Hooks

🚧 🔬 🧪 Pruebas

📚 Tarea

⭐ Clase interesante
💩 Clase muy pesada 

🖌️ Diseño
💾 Instalación y configuracion
🔒 Seguridad rutas


✏️  Create
📖  Read
♻️  Update
🗑️ Delete

📁📂 Carpeta
📄 Archivo

🏁 Fin Sección 
### URLS DEL PROYECTO:  

#### Heroes SPA:  
GitHub: https://github.com/hectoralvaez/07-heroes-spa  

#### Custom Hooks:  
GitHub: https://github.com/hectoralvaez/custom-hooks  

#### Festival del gif:  
Netlify: https://festivaldegifs.netlify.app  
GitHub: https://github.com/hectoralvaez/festival-de-gifs  
GitHub Pages: https://hectoralvaez.github.io/festival-de-gifs/  

React, Vite, GitHub, Jest, React Testing Library, Netlify, GitHub Pages, Postman, Firebase

---

# ARRANCAR UN PROYECTO:  
## YARN + VITE:  
En la Terminal, nos vamos a la carpeta donde vamos a instalar el proyecto (en este caso dentro de `www/react`):  
`yarn create vite`

1. Nos pide el nombre del proyecto:  
`07-heroes-spa`
2. Seleccionamos el framework "React"  
3. Seleccionamos la variante "JavaScript"  

En la Terminal, en la carpeta donde ya se ha instalado el proyecto ejecutamos:  
`yarn`

Para ejecutar la aplicación:
`yarn dev`

## ARRANCAR GIT  

### En github.com:

Creamos el nuevo repositorio con el nombre que deseamos, por ejemplo `09-toolkit-redux`.

### En terminal:  

```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/hectoralvaez/09-toolkit-redux.git
git push -u origin main`
```

## ARRANCAR REACT ROUTER DOM
['React Router'](https://reactrouter.com)

```
yarn add react-router-dom@6
```

## ARRANCAR 'REACT REDUX' Y 'REDUX TOOLKIT (RTK)'

### Para hacerlo con yarn (NO npm) y trabajando con Vite (NO Create React App) 
```
yarn add @reduxjs/toolkit react-redux
```
---

### Iniciar "store" (src/store/store.js):
```javascript
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {

  },
})
```


> ### NOTA IMPORTANTE:
> Hay que especificar que la versión que vamos a instalar es la 6 (@6) ya que hay muchas diferencias importantes respecto a la 5.


---

# LINKS DE INTERÉS:  
- [React: Documentación y recursos relacionados](https://es.reactjs.org/docs/getting-started.html)  
- [React: Aprende React](https://es.react.dev/learn): Documentación de React. Introducción al 80% de los conceptos de React de uso diario
- [React: Presentando Hooks](https://es.reactjs.org/docs/hooks-intro.html#motivation): Los _Hooks_ son una nueva incorporación en React 16.8. Te permiten usar estado y otras características de React sin escribir una clase.
- [React: Referencia de la API de los Hooks](https://es.reactjs.org/docs/hooks-reference.html)
- [React: Hooks "Motivación"](https://es.reactjs.org/docs/hooks-intro.html#motivation)

- [GitHub](https://github.com/): Plataforma de alojamiento de código para el control de versiones y la colaboración.
- [Netlify](https://www.netlify.com/): Desplegar desplegar aplicaciones sin BackEnd.
- [Jest](https://jestjs.io/): Para hacer tests en Babel, TypeScript, Node, React, Angular, Vue y más. (combinada con [React Testing Library](https://testing-library.com/docs/))
- [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro/): Librería para hacer tests en React (combinada con [Jest](https://jestjs.io/)).  
En las instalaciones CRA ya viene instalada, con Vite hay que hacer la instalación a parte.  
En terminal: `yarn add --dev @testing-library/react @types/jest jest-environment-jsdom`
- [Vite](https://vitejs.dev/): La alternativa a [Create React App (CRA)](https://create-react-app.dev/), es más ligero
- [Use Vite for React Apps instead of CRA](https://dev.to/nilanth/use-vite-for-react-apps-instead-of-cra-3pkg)
- [React Hook Form](https://react-hook-form.com/): Librería que te ayuda a validar formularios en React. Es una librería mínima sin otras dependencias, a la vez que es eficiente y fácil de usar, lo que requiere que los desarrolladores escriban menos líneas de código que otras librerías de formularios.
- [React Router](https://reactrouter.com): Biblioteca de enrutamiento con la que puedes definir diferentes rutas dentro de tu aplicación y asignar componentes específicos a cada ruta. Cuando el usuario navega a una ruta determinada, React Router se encarga de renderizar el componente correspondiente en el lugar adecuado de la interfaz de usuario. Es esencial para construir aplicaciones de una sola página (SPA) con múltiples rutas y vistas en React, ya que facilita el enrutamiento y la navegación entre componentes de manera eficiente y estructurada.

- [React Router (useNavigate)](https://reactrouter.com/en/main/hooks/use-navigate): Este hook nos devuelve la función 'navigate', que nos permite hacer redirecciones programáticas. Con esta función, podemos hacer lo mismo que con el componente navigate. Es decir, redirigir una URL al resultado de otra ruta.

  La diferencia entre el hook useNavigate y el componente navigate en React Router es que, con el uso del hook, podemos utilizar una función. Esto implica que podemos utilizarlo en cualquier parte del código. El problema de utilizar componentes en vez de funciones es que debemos renderizarlos. Ya que una función no necesita este proceso de render, podemos insertarla donde queramos.

- [Material UI components](https://mui.com/material-ui/all-components/)

    Material UI tiene como objetivo proporcionar elementos básicos para que los desarrolladores creen excelentes interfaces de usuario utilizando las pautas de Material Design como referencia.

- [Redux](https://redux.js.org): Biblioteca para el manejo del estado con un almacenamiento centralizado.
- [React Redux](https://react-redux.js.org): Conector oficial entre Redux y React.
- [Redux Toolkit (RTK)](https://redux-toolkit.js.org): Conjunto de herramientas para simplificar el uso de Redux.
- [Redux Toolkit Quick Start](https://redux-toolkit.js.org/tutorials/quick-start): Guía de inicio rápido.

- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview): Biblioteca para manejar la obtención de datos y el almacenamiento en caché, incluida en RTK.

- [Redux DevTools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?pli=1): Extensión de Google Chrome que nos permite depurar los cambios de estado de la aplicación.

La extensión proporciona potenciadores para su flujo de trabajo de desarrollo de Redux. Además de Redux, se puede utilizar con cualquier otra arquitectura que maneje el estado.

Este es un proyecto de código abierto. Consulte el repositorio oficial para obtener más detalles: https://github.com/reduxjs/redux-devtools.


- PETICIONES HTTP 
    - [Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) Viene en JavaScript
    - [Axios](https://axios-http.com) Fernando lo prefiere a Fetch


## BEST PRACTICES
### SOLID
Trabajar con los principios SOLID significa diseñar software de manera que sea fácil de entender, mantener y extender, separando responsabilidades, favoreciendo la reutilización y evitando dependencias innecesarias.


#### 1. S - Single Responsibility Principle (SRP)
##### Principio de Responsabilidad Única [Solo una cosa a la vez]
Este principio establece que una clase debe tener una única responsabilidad o motivo para cambiar. En otras palabras, una clase debe encargarse solo de un aspecto del sistema y no tener múltiples razones para ser modificada. Esto facilita el mantenimiento, ya que los cambios en una funcionalidad no afectarán a otras responsabilidades de la clase.

> Imagina que tienes un juguete que hace muchas cosas: es un auto, un avión, y también canta canciones. Si se rompe algo, es difícil arreglarlo porque no sabes si se rompió el auto, el avión o la música. Pero si tienes un auto, un avión y un juguete que canta por separado, es más fácil arreglar uno si se rompe, porque solo hace una cosa.

---
#### 2. O - Open/Closed Principle (OCP)
##### Principio Abierto/Cerrado [Las cosas se pueden mejorar, pero no romper]

Este principio dice que el software debe estar abierto para extensión, pero cerrado para modificación. En otras palabras, debes poder añadir nuevas funcionalidades sin modificar el código existente. Esto se logra a menudo mediante herencia y polimorfismo en lenguajes orientados a objetos.

> Piensa en tus juguetes de bloques. Puedes agregar más bloques y hacer que tu torre sea más alta, pero no necesitas destruir la torre que ya construiste. Así, siempre puedes mejorar tu torre sin tener que empezar de nuevo cada vez.

---
#### 3. L - Liskov Substitution Principle (LSP)
##### Principio de Sustitución de Liskov [Los sustitutos deben funcionar igual]

Este principio, enunciado por Barbara Liskov, establece que los objetos de una subclase deben poder reemplazar a los objetos de la superclase sin alterar el correcto funcionamiento del sistema. Básicamente, una subclase debe ser intercambiable con su clase base sin romper la lógica del programa.

> Imagina que tienes un perrito de juguete que ladra cuando lo aprietas, y luego te dan un gatito de juguete. Si aprietas al gatito, esperas que haga "miau" en vez de "guau". El gatito debería funcionar igual que el perrito, solo que con su propio sonido. Ambos son animales de juguete, pero hacen su sonido específico sin cambiar la manera en que juegas con ellos.

---
#### 4. I - Interface Segregation Principle (ISP)
##### Principio de Segregación de Interfaces [No pidas cosas que no necesitas]

Este principio sugiere que es mejor tener muchas interfaces específicas que una interfaz grande y general. Los clientes no deberían verse obligados a depender de interfaces que no utilizan. Esto evita que las clases implementen métodos innecesarios.

> Imagínate que tienes un control remoto que tiene muchos botones: uno para el auto, uno para la tele, uno para el tren, y uno para las luces. Pero tú solo quieres controlar tu tren de juguete. No necesitas todos esos botones extra, solo uno que controle el tren. Es mejor tener controles más simples, solo con los botones que de verdad usas.

---
#### 5. D - Dependency Inversion Principle (DIP)
##### Principio de Inversión de Dependencias [Las cosas importantes mandan, no los detalles]

Este principio establece que los módulos de alto nivel no deben depender de módulos de bajo nivel, ambos deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles; son los detalles los que deben depender de las abstracciones. Esto promueve el desacoplamiento entre diferentes módulos del sistema, facilitando su mantenimiento y modificación.


> Es como cuando armas un robot con piezas de construcción. El cerebro del robot (la parte importante) le dice a las piezas cómo moverse, pero no necesita saber exactamente cómo es cada pieza. Si cambias las piezas por otras diferentes, el robot sigue funcionando bien porque el cerebro sigue dando las órdenes, y las piezas solo hacen lo que les toca.

## HERRAMIENTAS
### [Firebase](https://console.firebase.google.com)
Plataforma de desarrollo de aplicaciones creada por Google que proporciona una variedad de herramientas y servicios diseñados para ayudar a los desarrolladores a construir, mejorar y escalar aplicaciones móviles y web de manera eficiente. Es particularmente popular debido a su integración con aplicaciones en tiempo real, su facilidad de uso y la variedad de productos que ofrece sin la necesidad de manejar servidores complejos.

---

# TESTS
> NOTA:  
> Siempre falta tiempo para hacer tests, por lo tanto, se recomienda, como mínimo, hacer el test de la ruta crítica, es decir, la parte principal de la app. Si fuera una tienda, la ruta crítica es el proceso de compra (añadir productos al carito, el cesto de la compra, etc...)  


> ⚠️ NOTA IMPORANTE:  
> Si da error a la hora de lanzar los test:
> 1.  Probar a eliminar la carpeta `node_modules` y volver a ejecutar `yarn install`. 
> 2. Cambiar la extensión del archivo `babel.config.js` a `babel.config.cjs`  

> CONSEJO:  
> Parece muy evidente, pero no está de más recordar empezar a testear los componentes más sencillos.  
> Por definirlos de diferentes maneras: con menos dependencias, que reciben menos properties, los más atómicos, etc.  
> De manera que conforme se vanyan testeando los más complicados, los sencillos ya estén testeados.  

### [Más info de tests AAA (Patrón AAA)](https://geeks.ms/jorge/2018/08/25/unit-testing-y-el-patron-aaa/)  
1. Arrange (Organizar/Inicializa) => Inicializa los objetos y establece los valores de los datos que vamos a utilizar en el Test que lo contiene.
2. Act (Actuar) => Realiza la llamada al método a probar con los parámetros preparados para tal fin.
3. Assert (Confirmar/Comprobar) => Comprueba que el método de pruebas ejecutado se comporta tal y como teníamos previsto que lo hiciera.

## JEST:

### [Guia de instalación y configuracion de Jest + React Testing Library](https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177)
### En proyectos de React + Vite

### 1. Instalaciones en consola:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

### 2. Opcional: Si usamos Fetch API en el proyecto:

Si estuvieramos usando Fetch API, como pasa en ejercicios anteriores en ejemplos en el hook `useFetch.js`

```javascript
const resp = await fetch(url);
```
Se tendría que hacer la instalación via terminal con el siguiente comando: 
```
yarn add --dev whatwg-fetch
```

A pesar de estar usando una versión de node superior a la 18.0.0 (actualmente la 18.7.0), es necesaria la instalación.


### 3. Actualizar los scripts del __package.json__ (ya existe en la raiz del proyecto)
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

### 4. Crear la configuración de babel __babel.config.cjs__ (crear el archivo en la raiz del proyecto)
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

### 5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.cjs__ (crear el archivo en la raiz del proyecto)
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__  (crear el archivo en la raiz del proyecto)
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

### Para iniciar los tests en la terminal:
```
yarn test
```

Una vez en la consola, pulsando 'W', tenemos estas opciones:
```
› Press c to clear filters.
› Press a to run all tests.
› Press f to run only failed tests.
› Press o to only run tests related to changed files.
› Press p to filter by a filename regex pattern.
› Press t to filter by a test name regex pattern.
› Press q to quit watch mode.
› Press Enter to trigger a test run.
```

### Para ejecutar los test de un solo component:

Pulsamos 'p' y a continuación el nombre del component a testear:
```
todoReducer
```


### Extra info Jest
[expect()](https://jestjs.io/docs/expect)
[mockFn.mockReturnValue(value)](https://jestjs.io/docs/mock-function-api#mockfnmockreturnvaluevalue)
[expect().toHaveBeenCalled()](https://jestjs.io/docs/expect#tohavebeencalled)
[beforeEach()](https://jestjs.io/docs/setup-teardown)
[jest.clearAllMocks()](https://jestjs.io/docs/jest-object#jestclearallmocks)

### REACT TESTING LIBRARY (RTL):  

`screen`  
El objeto `screen` de React Testing Library (RTL) proporciona métodos para consultar los elementos representados del DOM para hacer afirmaciones sobre su contenido de texto, atributos y más. [Queries](https://testing-library.com/docs/queries/about/)

---

# Material UI (MUI):  
## Instalación de Material UI

Material UI utiliza [Emotion](https://emotion.sh) como su motor de estilo predeterminado. 

Para hacer la instalación por defecto con `emotion`:
```
yarn add @mui/material @emotion/react @emotion/styled
```

Si vamos a utilizar [styled-components](https://styled-components.com):
```
yarn add @mui/material @mui/styled-engine-sc styled-components
```

Es importante que la versión de `react` y `react-dom` esten por encima de la 17.0.0 ya que tiene "peer dependencies". Para confirmar la versión tenemos que mirar `package.json` en la raiz del proyecto.

Actualmente estamos usando la versión 18.3.1
```
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "6"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    ...
  }
```
---

## Instalación de Roboto (de google fonts), la fuente que usa MUI

En `<head>` del `index.html` cargamos la fuente:
```
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>
```

## Instalación iconos de Material UI
Para utilizar el componente de icono de fuente o los iconos de material SVG prediseñados, primero debe instalar la fuente de iconos de material. Puede hacerlo con npm o con la CDN de Google Web Fonts.

Se recomienda hacer la instalación de los SVG y NO la fuente, ya que la fuente carga todos los iconos y con SVG vas haciendo `import` solo de los que necesitas:
```
yarn add @mui/icons-material
```

## EJEMPLO DE Material UI - Vite.js

[Aquí](https://mui.com/material-ui/getting-started/example-projects/) tenemos un listado de las diferentes tecnologías en las que se puede aplicar MUI

Aquí el ejemplo concreto con [Vite.js](https://github.com/mui/material-ui/tree/next/examples/material-ui-vite)


[stackblitz del ejemplo](https://stackblitz.com/github/mui/material-ui/tree/next/examples/material-ui-vite)


# APIS USADAS
- [breakingbadapi](https://breakingbadapi.com)

---

# RECURSOS
- [Animate.css](https://animate.style/) permite implementar varias animaciones de manera fácil.
- [sweetAlert2](https://sweetalert2.github.io/) librería que permite implementar mensajes de alerta con un diseño más trabajado.

- [cloudinary](https://cloudinary.com/) Backend para gestión de imágenes. [Documentación](https://cloudinary.com/documentation/image_upload_api_reference#banner)

---

# EXTRA INFO
## REACT:  
- Para evitar que, por ejemplo, aparezca duplicado el console.log de la llamada al `useEffect`, eliminar el `<React.StrictMode>` del `main.jsx`.

## GENERIC:
- Las dev tools de Chrome solo funcionan en desarollo, cuando estamos en producción, no funcionan.

## VISUAL STUDIO CODE:  
- Para crear un Functional Component usamos el snippet`rafc`.

- Para crear nuestro propio snippet (ejemplo, "redux-slice"):

1. Command + Shift + P
2. Buscamos "snippet"
3. Seleccionamos el lenguaje (JavaScript)
4. Nos abre un javascript.json con el ejemplo de snippet que nos servirá para preparar el nuestro:

```
	"Crear slice de Redux": {
		"prefix": "redux-slice",
		"body": [
            "import { createSlice } from '@reduxjs/toolkit';",
            "",
            "export const ${TM_FILENAME_BASE} = createSlice({",
            "    name: 'name',",
            "    initialState: {",
            "        counter: 10",
            "    },",
            "    reducers: {",
            "        increment: (state, /* action */ ) => {",
            "            state.counter += 1;",
            "        },",
            "    }",
            "});",
            "",
            "",
            "// Action creators are generated for each case reducer function",
            "export const { increment } = ${TM_FILENAME_BASE}.actions;"
            

		],
		"description": "Crear slice de Redux"
	}
```


## BUENAS PRÁCTICAS, RECORDATORIOS Y CONSEJOS:
- Cuando estamos trabajando un código, pero todavía no se ha terminado, para evitar pensar que está funcionando correctamente un `return`
```javascript
throw new Error ('action.type "ABC" todavía no se ha definido');
```

- Todo lo que va en los reducers tiene que ser síncrono, no puede ser asíncrono, son reducers, es decir, funciones puras. (🛢️ 299. JournalSlice)
- Cuando tenemos acciones asincronas como conectar con una base de datos y esperar respuesta, estas acciones asíncronas se trabajan en el `thunks.js` (🛢️ 300. Preparar la base de datos - CloudFirestore)

- Para cambiar el nombre de una variable en un componente (🛢️ 306. Activar una nota para su edición)

En el state de journal, la nota activa está definida como "active", pero para trabajar esa nota activa, dentro del NoteView.jsx tiene más sentido referise a ella como "note".

Para ello, en la desestructuración, hacemos lo siguiente:
```javascript
const { active:note } = useSelector( state => state.journal );
```

- Se recomienda que cada efecto esté lo más aislado y atómico posible, por lo tanto, creamos dos useEffect, uno para crear validadores y el otro para cargar la nota activa. (🛢️ 306. Activar una nota para su edición)
```javascript
useEffect(() => {
    createValidarots();
}, [formState])

useEffect(() => {
    setFormState( initialForm );
}, [initialForm])
```


<br />

# 🏁 SECCIÓN 22: 📅 🖌️ MERN Calendar - Estructura y Diseño

---
## 📅 🖌️ 358. Validaciones del formulario

Con `useMemo` controlamos cuando hay cambios en el título (`formValues.title`) o se envía el formulario (`formSubmitted`) y asignamos el valor `is-invalid` en caso de que el título no sea válido para aplicar esa class al input

```javascript
const titleClass = useMemo(() => {
    if ( !formSubmitted ) return '';

    return ( formValues.title.length > 0 ) 
        ? ''
        : 'is-invalid';
}, [ formValues.title, formSubmitted ]);
```

Aplicando la class al input:
```javascript
<input
    ...
    className={`form-control ${titleClass}`}
    ...
/>
```

También instalamos `sweetalert2` para las alertas al usuario:
```
yarn add sweetalert2
```

```javascript
Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error');
```



---
## 📅 🖌️ 357. Obtener la información del formulario del evento

Validamos que las fechas y el título sean correctos a la hora de hacer el envío del formulario antes de obtener la información:

```javascript
const onSubmit = (event) => {
    event.preventDefault();
    const difference = differenceInSeconds(formValues.end, formValues.start);

    if ( isNaN( difference ) || difference <= 0 ) {
        console.log('Error en las fechas');
        return;
    }

    if ( formValues.title.length <= 0 ) {
        console.log('Título obligatorio');
        return;
    }
    console.log(formValues);
};
```

Cada evento tendrá un ID, pero vendrá dado desde Back.



---
## 📅 🖌️ 356. Datepicker en español
Para añadir las traducciones al CalendarModal:

```javascript
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es );
```

---
## 📅 🖌️ 355. Contenido del Modal

Creamos el formulario modal donde asignaremos las fechas, título y notas.

Instalamos [react-datepicker](https://www.npmjs.com/package/react-datepicker) 
```
yarn add react-datepicker
```

Hacemos la gestión del formulario sin usar el useForm.

Usamos un useState para controlar el estado del formulario:
```javascript
const [formValues, setFormValues] = useState({
    title: "Héctor",
    notes: "Penalva",
    start: new Date(),
    end: addHours(new Date(), 2),
});
```


Para controlar si hay cambios en los inputs "titulo" o "nota":
```javascript
const onInputChange = ({ target }) => {
    setFormValues({
        ...formValues,
        [target.name]: target.value,
    });
};
```

Para controlar los cambios de fecha:
```javascript
const onDateChanged = (event, changing) => {
    setFormValues({
        ...formValues,
        [changing]: event,
    });
};
```

El `DatePicker` de `react-datepicker`:
```javascript
<DatePicker
    minDate={ formValues.start }
    selected={ formValues.end }
    onChange={ (event) => onDateChanged(event, 'end') }
    className="form-control"
    dateFormat="Pp"
/>
```


---
## 📅 🖌️ 354. Creando un modal sobre el calendario

Instalamos [react-modal](https://www.npmjs.com/package/react-modal) 
```
yarn add react-modal
```

Añadimos el `CalendarModal` dentro de <Calendar> en la página `CalendarPage.jsx`


---
## ⭐ ⭐ 📅 🖌️ 353. Escuchar eventos del calendario

Añadimos las funciones:
```javascript
const onDoubleClick = ( event ) => {
    console.log({ doubleClick: event});
}

const onSelect = ( event ) => {
    console.log({ click: event});
}

const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event);
    setLastView( event );
}
```

Se añaden en el component `Calendar` asignándolas a sus eventos definidos (`onDoubleClickEvent`, `onSelectEvent`, `onView`):

```javascript
<Calendar
    onDoubleClickEvent={ onDoubleClick }
    onSelectEvent={ onSelect }
    onView={ onViewChanged }
/>
```

Empezamos por la función `onViewChanged`:


Trabajamos con `useState` para almacenar en local el valor de la vista seleccionada. En caso de no tener una vista definida en `lastView`, asignamos por defecto 'month':

```javascript
const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');
```

En el component 'Calendar', definimos como vista por defecto el valor que se le asigna con el useState a "lastView".

```javascript
<Calendar
defaultView= { lastView }
/>
```


---
## 📅 🖌️ 352. Personalizar el cuadro de evento

Añadimos nuestro propio `CalendarEvent` que nos permitirá mostrar la información deseada con su propia estrutura:

`CalendarEvent.jsx`:

```javascript
export const CalendarEvent = ({ event }) => {
    const {title, user } = event;
    return (
    <>
        <strong>{ title }</strong> - { user.name }
    </>
  )
}
```

En nuestra página `CalendarPage` le pasamos al componente `Calendar` el atributo `components` referenciando "event" al recién creado "CalendarEvent":
```javascript
<Calendar
    culture='es'
    localizer={ localizer }
    events={ events }
    startAccessor="start"
    endAccessor="end"
    style={{ height: 'calc( 100vh - 90px)' }}
    messages={ getMessagesES() }
    eventPropGetter={ eventStyleGetter }
    components={{
        event: CalendarEvent
    }}
/>
```


---
## ⭐ 📅 🖌️ 351. Configuraciones adicionales al calendario

En esta classe se ha:
1. Optimizado y separado el código de `CalendarPage`
2. Añadido el `getMessagesES` con los textos traducidos
3. Añadido `eventPropGetter` que dispara la función `eventStyleGetter`


```javascript
const eventStyleGetter = ( event, start, end, isSelected ) => {
console.log({event, start, end, isSelected});

const  style = {
    backgroundColor: '#0095ff',
    borderRadius: '0px',
    opacity: 0.8,
    color: '#fff'
}

return { style }

}
```

```javascript
<Calendar
    ...
    eventPropGetter={ eventStyleGetter }
/>
```

---
## 📅 🖌️ 350. React Big Calendar

Instalamos [React Big Calendar](https://www.npmjs.com/package/react-big-calendar) con yarn:
```
yarn add react-big-calendar
```

>En la web de Node Package Manager, evidentemente la recomiendan con `npm`:
>```
>npm i react-big-calendar
>```

De las diferentes opciones que ofrece la librería React Big Calendar para manejar el formato de la fecha, es decir, los "localizadores" (Moment.js, Globalize.js, date-fns, Day.js), Fernando se decanta por "date-fns"

Hacemos la instalación con yarn
```
yarn add date-fns
```



---
## 📅 🖌️ 349. LoginScreen y Navbar

Arrancamos la maqueta de "LoginPage.jsx" y el "NavBar.jsx" con sus estilos (unos propios de Fernando, otros de Bootstrap).

También se importa font-awesome para el uso de iconos.

Iniciamos la maqueta de "CalendarPage.jsx" con el "NavBar"
```javascript
<>
    <NavBar />
</>
```
---
## 📅 🖌️ 348. Rutas de la aplicación
Creamos las páginas públicas (en la carpeta 'calendar') y las privadas (en 'auth')

En CalendarApp.jsx llamamos a `<AppRouter>` dentro del `BrowserRouter` que se encargará de lanzar el component según estemos o no logados:
```javascript
<BrowserRouter>
    <AppRouter />
</BrowserRouter>
```

En AppRouter.jsx controlamos si el usuario está o no logado para redirigirlo a login o a las páginas del calendario.
```javascript
<Routes>
    {
        (authStatus === 'not-authenticated')
        ? <Route path="/auth/*" element={ <LoginPage /> } />
        : <Route path="/*" element={ <CalendarPage /> } />
    }
    // A esta ruta en principio no tendría que llegar ningún usuario, pero es un "Fail-Safe", una ruta a prueba de fallos
    <Route path="/*" element={ <Navigate to="/auth/login" /> } />
</Routes>
```



---
## 📅 🖌️ 347. Inicio de proyecto - MERN-Calendar
1. Instalar el proyecto con Vite

```
yarn create vite
```
>También se podría hacer con Node Package Manager
>```
>npm create vite
>```

2. Instalar yarn
```
yarn
```

3. Arrancar en modo desarrollo:
```
yarn dev
```

4. Instalar React Router DOM   
['React Router'](https://reactrouter.com)

```
yarn add react-router-dom@6
```
5. Instalar Bootstrap   
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
```

6. Hacer limpieza de lo que no se usa y renombar archivos


---
## 📅 🖌️ 345. Temas puntuales de la sección

### ¿Qué veremos en esta sección?

- Estructura y diseño de nuestra aplicación de Calendario
- Uso de componentes de terceros
- Modals
- Configuración de Redux
- CRUD local
- Preparación de pantallas para futuras secciones
- Uso de MomentJS
- Manejo de fechas

Esta sección es el inicio de nuestro MERN, (Mongo Express React Node), luego crearemos nuestro backend y después regresaremos a esta app para conectarla y desplegarla en producción


# 🆕 SECCIÓN 22: 📅 🖌️ MERN Calendar - Estructura y Diseño

<br />

# 🏁 SECCIÓN 21: 🧪 Pruebas con Redux, Firebase, Firestore y autenticación

TODO: Hacer esta sección.

# 🆕 SECCIÓN 21: 🧪 Pruebas con Redux, Firebase, Firestore y autenticación

---

<br />

# 🏁 SECCIÓN 20: ✏️📖♻️🗑️ JournalApp - Redux - CRUD en Firestore y subida de archivos

---

## 🛢️ 318. Nota deploy en Vercel
Si suben la app a Vercel y encuentran un problema al crear una nueva nota, pueden probar a solucionarlo agregando `imageUrls: []` en el archivo `store/journal/thunks.js` en la función `startNewNote`:
```javascript
const newNote = {
    title: "",
    body: "",
    imageUrls: [],
    date: new Date().getTime()
};
```

---

## ⭐🛢️ 317. Borrar una nota

### `src/store/journal/thunks.js`

De momento no se eliminan las imágenes de cloudinary.

1. En el thunks de journal añadimos la función `startDeletingNote`.

```javascript
export const startDeletingNote = () => {
    return async( dispatch, getState ) => {
        // Recogemos el id de usuario de `auth` y la nota activa de `journal`.
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        // Buscamos la nota a eliminar de firebase con `doc()`
        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
  
        // Hacemos el "await" de la función `deleteDoc` de `firebase/firestore`
        await deleteDoc( docRef );

        // Disparamos el `dispatch` de `deleteNoteById`, quedando así eliminada en firebase.
        dispatch( deleteNoteById( note.id ));
    }
}
```


### `src/store/journal/journalSlice.js`

2. Añadimos en `journalSlice` el reducer `deleteNoteById`

```javascript
deleteNoteById: (state, action ) => {
    // Marcamos la nota activa como "null" 
    state.active = null;
    // Asignamos a las "notas" todas, menos la que viene en el payload, quedando así eliminada de forma local.
    state.notes = state.notes.filter( note => note.id !== action.payload );
},
```


### `src/journal/views/NoteView.jsx`

3. Añadimos la función `onDelete` que llamará al thunk `startDeletingNote` (que a su vez llamará al reducer `deleteNoteById`)

```javascript
const onDelete = () => {
    dispatch( startDeletingNote() );
}
```

4. Añadimos el botón con la función `onDelete`

```javascript
<Button
    onClick={ onDelete }
    sx={{ p: 2 }}
    color="error"
>
    <DeleteOutline />
    Borrar
</Button>
```




---

## 🛢️ 316. Limpiar notas al cerrar sesión

### `src/store/journal/journalSlice.js`

En `journalSlice` añadimos el reducer `clearNotesLogout` donde limpiamos el contenido que tenemos almacenado en nuestro store dejando vación el state de los siguientes valores:

```javascript
clearNotesLogout: (state) => {
    state.isSaving = false;
    state.savedMessage = '';
    state.notes = [];
    state.active = null;
},
```


### `src/store/auth/thunks.js`
En los `thunks` de Auth, añadimos el dispatch para limpiar el contenido de la nota que hemos creado en `journalSlice` (aunque Fernando no es muy partidario de llamar dispatch de otros "stores")

```javascript
export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();

        dispatch( clearNotesLogout() );
        dispatch( logout() );

    }
}
```

---

## 🛢️ 315. Corregir un posible error

### `src/auth/pages/LoginPage.jsx`
En esta clase se corrige el error que daba en el `formData`.

Ya se resolvió en el commit "FIX para evitar errores de consola."

---

## ⭐⭐⭐🛢️ 314. Mostrar las imagenes cargadas

### `src/journal/views/NoteView.jsx`

En `NoteView` buscamos el component `ImageGallery` y le pasamos las urls de las imágenes de la nota activa ("note"):

```javascript
<ImageGallery images={ note.imageURLS } />
```


### `src/journal/components/ImageGallery.jsx`

En el component `ImageGallery` hacemos el pasado de cargar las imágenes de `itemData` a las urls importadas recorriendo el map de `images`.

```javascript
export const ImageGallery = ({ images }) => {
  return (
    <Box sx={{ width: '100%', height: 500 }}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {images.map((image) => (
          <ImageListItem key={image}>
            <img
              srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${image}?w=248&fit=crop&auto=format`}
              alt="Imagen de la nota"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
```

El anterior array de imágenes:

```javascript
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  ...
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];
```



---

## ⭐🛢️ 313. Múltiples peticiones de forma simultánea

### `src/store/journal/journalSlice.js`

Añadimos un nuevo reducer `setPhotosToActiveNote` que nos permitirá añadir las urls generadas en cloudinary a nuestra nota activa para poder almacenar esa array de urls de imágenes en Firestore.

Para no perder las urls anteriores, se tiene que esparcir las imágenes anteriores (`...state.active.imageURLS`) y concatenar las nuevas esparcidas también (`...action.payload`)

Además, damos por finalizado el estado de estar guardando con `state.isSaving = false` de manera que volverán a estar activos los botones.

```javascript
setPhotosToActiveNote: (state, action ) => {
    state.active.imageURLS = [ ...state.active.imageURLS, ...action.payload ];
    state.isSaving = false;
},
```

### `src/store/journal/thunks.js`
En el thunk `startUploadingFiles` cambiamos:

`await fileUpload( files[0] )` 
(que solo nos guardaba la primera imágen)

por:

```javascript
const fileUploadPromises = [];
for ( const file of files ) {
    fileUploadPromises.push( fileUpload( file ))
}

const photosUrls = await Promise.all( fileUploadPromises );

dispatch( setPhotosToActiveNote( photosUrls ) );
```

que hace una subida en bloque de las imágenes.

Quedando finalmente el thunk `startUploadingFiles` de la siguiente manera:

```javascript
export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSavingNote() );
        
        // await fileUpload( files[0] );

        const fileUploadPromises = [];
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file ))
        }

        const photosUrls = await Promise.all( fileUploadPromises );

        dispatch( setPhotosToActiveNote( photosUrls ) );
    }
}
```


---

## ⭐🛢️ 312. Subir imagen a Cloudinary

### `src/helpers/fileUpload.js`
1. Creamos un helper para gestionar la subida del archivo:

```javascript
export const fileUpload = async( file ) => {
    if ( !file ) throw new Error('No hay archivos que subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/doukerhkf/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {

        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        console.log(resp);

        if ( !resp.ok ) throw new Error('No se pudo subir imagen');

        const cloudResp = await resp.json();
        console.log(cloudResp);

        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    }
}
```


### `src/store/journal/thunks.js`
2. Creamos un nuevo thunk dentro de journal `startUploadingFiles`:

```javascript
export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSavingNote() );
        
        await fileUpload( files[0] );

    }
}
```

### `src/journal/views/NoteView.jsx`
3. En `NoteView` simplemente hacemos el dispatch de `startUploadingFiles` dentro de la función `onFileInputChange`

```javascript
const onFileInputChange = ({ target }) => {
    if( target.files === 0 ) return;

    console.log('subiendo archivos');
    dispatch( startUploadingFiles( target.files ) );
}
```


---

## 🛢️ 311. Seleccionar archivos desde React

### `src/journal/views/NoteView.jsx`


En el Grid, añadimos el input `type="file"`, que nos permite subir archivos por defecto con la etiqueta "multiple". Como en MUI no está estilado este input, lo ocultamos `style={ { display: 'none' }}` y lo vinculamos con `useRef()` a el icono de `UploadFileOutlined`.

Para eso creamos `fileInputRef`

```javascript
const fileInputRef = useRef();
```

Añadimos `ref={ fileInputRef }` al `input type="file"`

Luego solo queda vincular el `onClick` del `IconButton` con el click del `fileInputRef` de la siguiente manera:
`onClick={ () => fileInputRef.current.click() }`

```javascript
<input type="file"
    multiple
    ref={ fileInputRef }
    onChange={ onFileInputChange }
    style={ { display: 'none' }}
/>
<IconButton
    color="primary"
    disabled={ isSaving }
    onClick={ () => fileInputRef.current.click() }
>
    <UploadFileOutlined />
</IconButton>
```

Por otra parte, añadimos la función `onFileInputChange` que estará vinculada al `onChange` del `input type="file"`:

```javascript
const onFileInputChange = ({ target }) => {
    if( target.files === 0 ) return;

    console.log('subiendo archivos');
    // dispatch( startUploadingFiles( target.files ) );
}
```

Queda pendiente lanzar el dispatch.



---

## ⭐🛢️ 310. Cloudinary.com - Backend para subir imágenes

En esta clase se explica cómo configurar cloudinary y un test de subida de archivo a cloudinary via Postman.

---

## 🛢️ 309. SweetAlert 2

En esta clase añadimos mensajes con "SweetAlert 2".

Para ello, tenemos que definir los mensajes que se van a lanzar en cada reducer de nuestro `journalSlice.js` de manera que cuando tenemos la nota activa `setActiveNote` o guardamos la nota `setSavingNote`, el mensaje tiene que estar vacío.

Pero en el momento de actualizarla `updateNote`, mostramos el mensaje:

```javascript
state.savedMessage = `${ action.payload.title }, actualizada correctamente`;
```

### `src/store/journal/journalSlice.js`

```javascript
setActiveNote: (state, action ) => {
    ...
    state.savedMessage = '';
},

setSavingNote: (state ) => {
    ...
    state.savedMessage = '';
},

updateNote: (state, action ) => {
    ...
    state.savedMessage = `${ action.payload.title }, actualizada correctamente`;
},
```


### `src/journal/views/NoteView.jsx`
En `NoteView`, añadimos un nuevo `useEffect` que estará controlando el estado de `savedMessage` y en caso de tener contenido el mensaje, cargará el SweetAlert 2 mediante `Swal.fire()`.

```javascript
useEffect(() => {
    if ( savedMessage.length > 0 ) {
    Swal.fire( 'Nota actualizada', savedMessage, 'success' );
    }
}, [savedMessage])

```

---

## 🛢️ 308. Resolución de la tarea

En esta clase se añade el contenido que hemos  captado del formulario al elemento de la barra lateral sin tener que conectar con Firebase, ya que tenemos la información almacenada en nuestro store.

### `src/store/journal/journalSlice.js`
En el reducer `updateNote` recorremos el array de notas y en caso de ser la que acabamos de actualizar, se carga ese contenido, si no, se carga la que teníamos de Firebase que no se ha modificado.

```javascript
reducers: {
    ...
    updateNote: (state, action ) => {
        state.isSaving = false;
        // Recorremos el array de notas
        state.notes = state.notes.map( note => {
            // Si la nota es la que tenemos cargada en nuestro payload, devolvemos ese contenido
            if ( note.id === action.payload.id ) {
                return action.payload;
            }
            // Si no, la nota que ya teníamos
            return note;
        })
    },
    ...
}
```

### `src/store/journal/thunks.js`

En `startSavingNote`, al final de la función le añadimos el dispatch de `updateNote` que hemos creado anteriormente en el reducer del `journalSlice`.

```javascript
export const startSavingNote = () => {
    return async( dispatch, getState) => {

        dispatch( setSavingNote() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
        await setDoc( docRef, noteToFirestore, { merge: true});

        dispatch( updateNote(note));

    }
}
```

---

## 🛢️ 307. Actualizar la nota actual

### `src/store/journal/thunks.js`

Creamos `startSavingNote`:
```javascript
export const startSavingNote = () => {
    return async( dispatch, getState) => {

        // hacemos el dispatch de setSavingNote para establecer isSaving a "true"
        dispatch( setSavingNote() );

        // Seleccionamos el id de usuario, lo necesitaremos para acceder a la nota activa
        const { uid } = getState().auth;
        // Seleccionamos la nota activa
        const { active:note } = getState().journal;

        // Creamos la constante `noteToFirestore` con toda la info de la nota
        const noteToFirestore = { ...note };

        // Eliminamos el id de la nota que enviaremos a Firestore
        delete noteToFirestore.id;

        // Conectamos con FirebaseDB para acceder a la nota con el id de la NOTA ACTIVA (con la info antigua, no la `noteToFirestore` a la que le hemos eliminado el id, pero tiene la info que queremos actualizar)
        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );

        // Aplicamos el cambio en Firebase con la info de `noteToFirestore`
        await setDoc( docRef, noteToFirestore, { merge: true});

        // En la tercera opción de `setDoc` tenemos un objeto con opciones. Nosotros usamos `merge`, que al estar en "true", lo que hace es dejar los campos que NO SE ENVÍAN tal y como estaban, por eso hemos eliminado anteriormente el id de noteToFirestore

    }
}
```


### `src/store/journal/journalSlice.js`

En los reducers `setSavingNote` y `updateNote` actualizamos el estado de `isSaving`

```javascript
reducers: {
    ...
    setSavingNote: (state ) => {
        state.isSaving = true;
        // TODO: menaje de error...
    },
    updateNote: (state, action ) => {
        state.isSaving = false;
        // state.notes = state.notes.map( )
    },
    ...
}
```

### `src/journal/views/NoteView.jsx`

Al botón de guardar le añadimos la función `onSaveNote`
```javascript
<Button 
    onClick={ onSaveNote }
    ...
>
    Guardar
</Button>
```


Creamos la función `onSaveNote` y llamamos al `setActiveNote` con la info del `formState`

```javascript
useEffect(() => {
    dispatch( setActiveNote( formState ) )
}, [formState])

const onSaveNote = () => {
    dispatch( startSavingNote() );
}
```

---

## 🛢️ 306. Activar una nota para su edición
### `src/journal/views/NoteView.jsx`
En `src/journal/views/NoteView.jsx` obtenemos la información de la nota activa mediante `useSelector` de nuestro store `journal`:

```javascript
const { active:note } = useSelector( state => state.journal );
```

A continuación cargamos `useForm` de la nota desestructurando los campos que vamos a necesitar:
```javascript
const { body, title, date, onInputChange, formState } = useForm( note );
```

Transformamos la data que tenemos almacenada en Firestore a "string":
```javascript
const dateString = useMemo(()=> {
    const newDate = new Date( date );
    return newDate.toUTCString();
}, [date]);
```
Una vez tenemos la información de la nota, la añadimos al `TextField`:
```javascript
<TextField
    ...
    name="title"
    value={ title }
    onChange={ onInputChange }
/>
```


### `src/hoks/useForm.js`
Para hacer que al cambiar la nota activa se se actualicen los campos del formulario hay que hacer un cambio en el hook `useForm.js`.
Actualmente el problema es que la nota activa cambia, pero el `initialForm`, que es el contenido que carga el formulario, no se actualiza.
```javascript
useEffect(() => {
    setFormState( initialForm );
}, [initialForm])

```

---
## 🛢️ 305. Activar una nota

### Tarea V1

En `src/journal/components/SideBarItem.jsx` añado la función `onClickNote`, que lo que hará será disparar el `dispatch` del "reducer" de `journalSlide` `setActiveNote` que tiene que recibir la información de la nota activa "note":

```javascript
const dispatch = useDispatch();

const onClickNote = () => {
    dispatch( setActiveNote({ note }) );
}
```

Y se añade al `ListItem` la función creada `onClickNote`

```javascript
<ListItem disablePadding onClick={ onClickNote }>
    ...
</ListItem>
```

NO FUNCIONA

### Tarea V2 (corrección)

El problema era que había que llamar a los campos desestructurados:

```javascript
export const SideBarItem = ({ title = '', body, id, date, imageURLS = [] }) => {
...
dispatch( setActiveNote({ title, body, id, date, imageURLS }) );
```

También, se cambia el `onClick={ onClickNote }` del `ListItem` a `ListItemButton`, pero funcionaba igual.


---
## 🛢️ 304. Mostrar las notas en el menú lateral

1. Generamos un nuevo component `SideBarItem`, ya que habrá que meter acciones en los botones y más programación, que si dejaramos los `ListItem` dentro de `List` como lo teníamos hasta ahora, nos haría más complicado el matenimiento y no estaríamos siguiendo los principios de SOLID.
```javascript
export const SideBarItem = ({ note }) => {
    return (
        <ListItem key={note.id} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={note.title} />
                    <ListItemText secondary={ note.body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
```



2. En `src/journal/components/SideBar.jsx` obtenemos las notas del usuario directamente del store con `useSelector` de `react-redux`:

```javascript
const { notes } = useSelector( state => state.journal );
```

Una vez tenemos las notas, las llamamos en el listado mediante el nuevo component `SideBarItem`:

```javascript
<List disablePadding>
    {
        notes.map( note => (
            <SideBarItem key={ note.id } note={ note } />
        ))
    }
</List>
```


4. Hemos desestructurado los campos que necesitamos esparciendo el contenido de la nota en la llamada al `SideBarItem`
```javascript
// ANTES
<SideBarItem key={ note.id } note={ note } />

// AHORA
<SideBarItem key={ note.id } { ...note } />
```

De manera que será más limpio trabajar con los campos sin tener que estar haciendo referencia constantemente a `note.xxx`:
```javascript
// ANTES
<ListItemText secondary={ note.body } />
// AHORA
<ListItemText secondary={ body } />
```



3. En esta V2, ya se ve que se empieza a añadir más lógica al component `SideBarItem`. Vamos a controlar el tamaño del titular mediante el hook `useMemo` y en caso de ser mayor de 17 caracteres, se va a cortar y vamos a añadir puntos suspensivos:

```javascript
const newTitle = useMemo( () => {
    return title.length > 17
        ? title.substring(0,17) + '...'
        : title;
},[title])
```

De manera que ahora ya no usaremos `title`, si no `newTitle`
```javascript
<ListItemText primary={ newTitle } />
```


---
## 🛢️ 303. Cargar notas de Firestore

En esta clase cargaremos todas las notas del usuario creadas en Firestore y las mantendremos en la aplicación, ya que actualmente, al refrescar el navegador, se pierden las notas de nuestro `store`, aunque, evidentemente, siguen en Firestore.

1. Creamos un "helper" llamado `loadNotes` que nos permitirá conectar con Firebase para obtener todas las notas vinculadas al usuario (leer comentarios dentro del código):

```javascript
import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async( uid = '' ) => {
    // Comprobamos que el id de usuario existe
    if ( !uid ) throw new Error('El UID del usuario no existe.');

    // Realizamos la consulta a BBDD para obtener la "collection" llamada "notes"
    const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` );
    const docs = await getDocs( collectionRef );

    // Se crea un array vacín "notes"
    const notes = [];
    // Se recorre el resultado obtenido en "docs" y se rellena el array "notes" con forEach + push
    docs.forEach( doc => {
        notes.push({ 
            id: doc.id,
            ...doc.data()
        });
    });
    
    console.log(notes);
    // Devolvemos "notes" con toda la info
    return notes;
}
```

2. En `src/store/journal/thunks.js` creamos `startLoadingNotes`:

```javascript
export const startLoadingNotes = () => {
    // Función asíncrona
    return async( dispatch, getState ) => {
        // desestructuramos `uid` de nuestro store "auth"
        const { uid } = getState().auth;
        // si el usuario no existe devolvemos el error:
        if ( !uid ) throw new Error('El UID del usuario no existe.');

        // Con el helper recién creado `loadNotes`, obtenemos las notas mediante el uid 
        const notes = await loadNotes( uid );

        // Despachamos las notas con el reducer `setNotes`
        dispatch(setNotes( notes ));
    }
}
```

3. Definimos el `setNotes` dentro de `src/store/journal/journalSlice.js`

```javascript
setNotes: (state, action ) => {
    state.notes = action.payload;
},
```

4. Es importante saber en qué punto llamar a las notas vinculadas al usuario. En nuestro caso, se hace la llamada al `startLoadingNotes` en `src/hoks/useCheckAuth.js`, es decir, en el momento de confirmar que el usuario está autentificado.
```javascript
dispatch( startLoadingNotes() );
```


---
## 🛢️ 302. Activar la nota creada

### src/store/journal/thunks.js
#### startNewNote
1. Asignamos el id que nos ha generado Firestore en nuestro newDoc a nuestra newNote:

```javascript
newNote.id = newDoc.id;
```

2. Generamos los dispatchs que gestionamos en `src/store/journal/journalSlice.js`
```javascript
dispatch( addNewEmptyNote( newNote ) );
dispatch( setActiveNote( newNote ) );
```


#### src/store/journal/journalSlice.js

1. Añadimos las acciones a las funciones:
```javascript
addNewEmptyNote: (state, action ) => {
    state.notes.push( action.payload );
    state.isSaving = false;
},
setActiveNote: (state, action ) => {
    state.active = action.payload;
},
```

En la tarea se bloquea el botón de "Añadir" con la variable `isSaving`.

Al final, lo que hacemos es mostrar la nota cuando está activa (`NoteView`) y el (`NothingSelectedView`) cuando no hay nota activa.

Para eso desestructuramos también el valor `active` del `state.journal`.

```javascript
const { isSaving, active } = useSelector( state => state.journal );
```

El condicional para mostrar una vista o la otra:

```javascript
{
    (!!active)
    ? <NoteView />
    : <NothingSelectedView />
}
```

---
## 🛢️ 301. Crear una nueva nota

Empezamos a trabajar con el `thunks.js` para conectar y obtener la información de Firestore.

Lo que necesitaremos importar para trabajar con Firestore:
```javascript
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
```

Mediante el `getState()` del store "auth", obtenemos el id de usuario (`uid`)

```javascript
const { uid } = getState().auth;
```

Generamos el `newDoc` y aplicamos al `setDoc`.
```javascript
const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );
await setDoc( newDoc, newNote );
```



---
## 🛢️ 300. Preparar la base de datos - CloudFirestore


Arrancamos el `thunks.js` con la estructura que tendrá `startNewNote`:

```javascript
export const startNewNote = () => {
    return async( dispatch ) => {

        // uid

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        // dispath( newNote)
        // dispath( activateNote)
    }
}
```

Cuando tenemos acciones asincronas como conectar con una base de datos y esperar respuesta, estas acciones asíncronas se trabajan en el `thunks.js`

### Firestore vs Realtime
Firestore Database y Realtime Database son dos servicios de bases de datos en la nube de Firebase, pero tienen diferencias clave:

#### Firestore Database
1. Estructura de Datos: Utiliza un modelo de documentos y colecciones, lo que facilita la organización y consulta de datos complejos.
2. Consultas: Ofrece consultas más avanzadas y potentes, como búsquedas complejas y filtros.
3. Escalabilidad: Está diseñado para escalar mejor con grandes volúmenes de datos y usuarios concurrentes.
4. Soporte Offline: Permite la sincronización de datos en modo offline más robusta.
5. Seguridad: Tiene un sistema de reglas de seguridad más flexible y detallado.

#### Realtime Database
1. Estructura de Datos: Utiliza un modelo de datos JSON que puede ser más simple pero menos organizado para datos complejos.
2. Consultas: Tiene capacidades de consulta más limitadas en comparación con Firestore.
3. Sincronización en Tiempo Real: Está optimizado para la sincronización de datos en tiempo real, lo que es ideal para aplicaciones que requieren actualizaciones instantáneas.
4. Costo: Puede ser más económico para aplicaciones pequeñas debido a su modelo de precios basado en el ancho de banda.

#### Recomendación
Si tu aplicación necesita consultas complejas, escalabilidad o una estructura de datos más organizada, Firestore es la mejor opción. 
Si priorizas la sincronización en tiempo real y tienes un proyecto más pequeño, Realtime Database podría ser suficiente.

En general, Firestore tiende a ser la opción más recomendada para nuevos proyectos.



---
## 🛢️ 299. JournalSlice

Añadimos en nuestra carpeta `src/store` la carpeta `src/store/journal` (a la altura de la carpeta "auth" que hemos trabajado en la sección anterior) y dentro de la carpeta "journal" repetimos la estructura de la carpeta "auth" con los siguientes archivos:

```
📂 store
    📁 auth
    📂 journal
        📄 index.js (archivo de barril)
        📄 journalSlice.js (initialState + reducers)
        📄 thunks.js
```


En journalSlice.js definimos el estado inicial y apuntamos el objeto que podría generarse cuando esté "active"

```javascript
initialState: {
    isSaving: true,
    savedMessage: '',
    notes: [],
    active: null,
    // active: {
    //     id: 'acb123',
    //     title: '',
    //     body: '',
    //     date: 1234567,
    //     imageURLS: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg...
    // }

},
```

En los "reducers" añadimos las funciones que necesitaremos para gestionar las "notas". Las accciones que forman el CRUD.

```javascript
reducers: {
    addNewEmptyNote: (state, action ) => {

    },
    setActiveNote: (state, action ) => {

    },
    setNotes: (state, action ) => {

    },
    setSavingNote: (state ) => {

    },
    updateNote: (state, action ) => {

    },
    deleteNoteById: (state, action ) => {

    },
}
```

Todo lo que va en los reducers tiene que ser síncrono, no puede ser asíncrono, son reducers, es decir, funciones puras.


---
## 🛢️ 297. Temas puntuales de la sección

### ¿Qué veremos en esta sección?

- CRUD hacia Firestore
- Expandiendo nuestro store añadiendo otros reducers
- Seleccionar y subir archivos
- Animaciones adicionales a nuestra aplicación
- Limpieza en el logout

Esta sección está enfocada ahora en las entradas de nuestro diario, asegurándose de que grabe únicamente en el documento del usuario autenticado.

# 🆕 SECCIÓN 20: ✏️📖♻️🗑️ JournalApp - Redux - CRUD en Firestore y subida de archivos

<br />

# 🏁 SECCIÓN 19: Introducción a Redux y autenticación en Firebase

## 📝 🖌️ 294. Animaciones para la aplicación

Añadimos las animaciones de "www.animate.style".

---
## 📝 ⚙️ 293. Logout de Firebase

1. En `src/store/auth/thunks.js` creamos la función `startLogout`.

```javascript
export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();

        dispatch( logout({}) );

    }
}
```

2. En `src/firebase/providers.js` creamos la función `logoutFirebase`.

```javascript
export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}
```

3. En `src/journal/components/NavBar.jsx` añadimos la función `onLogout` que mediante el `dispatch()` desencadena el `startLogout()`.

```javascript
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout() );
    }
```

EXTRA:
Mostrar el nombre del usuario `displayName` en la página:

```javascript
const { displayName } = useSelector( state => state.auth );

...

<Typography variant="h6" noWrap component='div' >{ displayName }</Typography>
```




---
## 📝 ⚙️ 292. Custom Hook para autenticación

Creamos un nuevo hook `useCheckAuth` con toda la lógica que habíamos creado dentro de `AppRouter.jsx`, de manera que es mucho más limpio, mantenible, flexible y escalable todo el código; siguiendo los principios SOLID.


---
## 📝 ⚙️ 291. Mantener el estado de la autenticación al recargar

### src/router/AppRouter.jsx
En `AppRouter`, controlamos el estado de autorización del usuario mediante `onAuthStateChanged`.

Si no se obtiene el usuario, hace el dispatch del "logout", si obtiene el usuario, hacer el "login".


>`onAuthStateChanged` es una función que regresa un "observable".
>
>Un observable es una función que está emitiendo valores siempre que cambi el estado que observamos. 
>
>En nuestro caso, cuando el estado de la autenticación cambia, se vuelve a disparar nuestra función `onAuthStateChanged`.
>
>Por lo general, este tipo de función se tendría que ir limpiando, pero en este caso no se hace, ya que nos interesa controlar en todo momento si está autorizado o no.

```javascript
const dispatch = useDispatch();

useEffect(() => {

    onAuthStateChanged( FirebaseAuth, async( user ) => {
        if( !user ) return dispatch( logout() );

        const { uid, email, displayName, photoURL } = user;
        dispatch(login({ uid, email, displayName, photoURL }));

    })

}, [])
```


En la parte de rutas pasamos a controlar con `status` si el usuario está autenticado o no para redirigirlo a las rutas del Journal en caso positivo o al login en caso negativo.

Se añade una reddirección a `/auth/login` fuera del condicional para asegurar la navegación.
```javascript
<Routes>
    {
    (status === 'authenticated')
    ? <Route path="/*" element={ <JournalRoutes /> } />
    : <Route path="/auth/*" element={ <AuthRoutes/> } />
    }

    <Route path="/*" element={ <Navigate to='/auth/login' /> } />
</Routes>
```
Queda pendiente para la siguiente clase "cerrar sesión" para poder volver a "Login"

---
## 📝 ⚙️ 290. Checking Authentication

### src/ui/components/CheckingAuth.jsx
Creamos un componente nuevo de UI `CheckingAuth`, que simplemente es un loading para cuando el estado de la autorización sea "checking".

### src/store/auth/authSlice.js
En `authSlice` definimos el estado inicial (`status`) a "checking".

### src/router/AppRouter.jsx
En `AppRouter`, antes de llegar a decidir si las rutas van a ser privadas o públicas, devolvemos el loading de `CheckingAuth` en caso de que el estatus sea "checking"

```javascript
const { status } = useSelector( state => state.auth );

if( status === 'checking') {
    return <CheckingAuth />
}
```

---
## 📚 📝 ⚙️ 289. Resolución de la tarea - Login de usuario

Ver los cambios aplicados en:

- LoginPage.jsx
- providers.jsx
- thunks.jsx


---
## 📚 📝 ⚙️ 288. Realizar el login de usuario con correo y contraseña

Primera versión de la tarea para realizar el login mediante el correo y contraseña almacenados anteriormente en Firebase.

---
## 📝 ⚙️ 287. Mostrar el mensaje de error de autenticación
### src/auth/pages/RegisterPage.jsx

En `src/auth/pages/RegisterPage.jsx`, con el hook de react-redux `useSelector` controlamos el status de la autorización del usuario y desestructuramos el `errorMessage`

```javascript
const { status, errorMessage } = useSelector( state => state.auth );
```

Además, añadimos un controlo de status con `isCheckingAuthentication`:
```javascript
const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );
```

Una vez tenemos esta información, podemos deshabilitar `disabled= { isCheckingAuthentication }` nuesto botón de envío:
```javascript
<Button 
    disabled= { isCheckingAuthentication }
    variant="contained"
    type="submit"
    fullWidth>
    Crear cuenta
</Button>
```

Y añadir un mensaje de error `errorMessage` que tendrá "display: none", siempre que NO tengamos un error:
```javascript
<Grid 
    item
    xs={ 12 }
    display={ !!errorMessage ? '' : 'none' }    
>
    <Alert severity="error">{ errorMessage }</Alert>
</Grid>
```


---
## 📝 ⚙️ 286. Actualizar el displayName y autenticar el usuario
### src/store/auth/thunks.js

Seguimos trabajando en `src/store/auth/thunks.js` y a la función `startCreatingUserWithEmailPassword` 

Añadimos el condicional para comprobar que si NO ha ido "ok", haga un return del dispatch "logout" con el mensaje de error:

```javascript
if( !ok ) return dispatch( logout({ errorMessage }) )
```

En caso de que todo vaya OK, hacemos el dispatch del "login" con toda la info necesaria:

```javascript
        dispatch( login({ uid, displayName, email, photoURL }));
```

Resultado final de la función `startCreatingUserWithEmailPassword`

```javascript
export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if( !ok ) return dispatch( logout({ errorMessage }) )

        dispatch( login({ uid, displayName, email, photoURL }));
    }
}
```
### src/firebase/providers.js
En el provider de firebase `src/firebase/providers.js` dentro de `registerUserWithEmailPassword`, añadimos la función `updateProfile` con await, ya que es una función asíncrona:

```javascript
        await updateProfile( FirebaseAuth.currentUser, { displayName } );
```

Resultado final de la función `registerUserWithEmailPassword`

```javascript
export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        await updateProfile( FirebaseAuth.currentUser, { displayName } );

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        console.log(error);
        return { ok: false, errorMessage: error.message }
    }
}
```


---
## 📝 ⚙️ 285. Crear usuario con email y password

En el provider de firebase `src/firebase/providers.js` creamos `registerUserWithEmailPassword`, que trabajará de fomra asincrona ya que recibe la información de Firebase mediante la función `createUserWithEmailAndPassword`

```javascript
export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        console.log(resp);
        // TODO: actualizar el displayName en Firebase

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        console.log(error);
        return { ok: false, errorMessage: error.message }
    }
    
}
```



Una vez definido `registerUserWithEmailPassword` en el provider de Firebase, podemos crear en el `src/store/auth/thunks.js` la función `startCreatingUserWithEmailPassword` donde poder gestionar el `email`, `password` y `displayName`.

```javascript
export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const resp = await registerUserWithEmailPassword({ email, password, displayName });
        
        console.log(resp);
    }
}
```

Ahora en `src/auth/pages/RegisterPage.jsx` con la ayuda de `useDispatch` de react-redux podemos trabajar la información del `formState` en nuestra función `startCreatingUserWithEmailPassword`

```javascript
dispatch( startCreatingUserWithEmailPassword( formState ) );
```

Una vez creado el usario mediante el formulario de la RegisterPage, lo podremos ver en el panel de control de Firebase, en el [listado de usuarios](https://console.firebase.google.com/project/react-cursos-8db57/authentication/users).


---
## 📝 ⚙️ 284. Mostrar errores en pantalla

En `src/hoks/useForm.js`, se añade la constante `isFormValid` que recorre el array `formValidations` para comprobar que ningún campo da error.
 
```javascript
const isFormValid = useMemo( () => {

    for (const formValue of Object.keys( formValidation )) {
        if ( formValidation[formValue] !== null ) return false;
    }

    return true;
}, [ formState ]);
```

En `src/auth/pages/RegisterPage.jsx` declaramos `formSubmited` mediante `useState`, con valor "false".

```javascript
const [formSubmited, setformSubmited] = useState(false);
```

Cambiaremos el valor a "true" en el momento de hacer el envío del formulario:

```javascript
const onSubmit = ( event ) => {
    event.preventDefault();
    setformSubmited(true);  // Cambio de estado a TRUE
    console.log( formState );
}
```

Se añade también el formato de error y el texto que va a devolver el input (son funcionalidades del `TextField` de mui):

```javascript
<TextField
    ...
    error={ !!displayNameValid && formSubmited }
    helperText={ displayNameValid }
/>
```
---
## 💩 📝 ⚙️ 283. Validar desde nuestro custom hook (Muy densa!)
Validar desde nuestro custom hook de forma dinámica los errores y mensajes que se van a lanzar en el form. 

---
## 📝 ⚙️ 282. Manejo de errores del formulario

La idea principal es realizar validaciones en Front, para evitar que llegue la petición a Back si no son correctos todos los campos.

En `src/auth/pages/RegisterPage.jsx` se crea manualmente una constante donde declaramos los campos a controlar sólo para ese formulario, el de la página de registro:

```javascript
const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
    password: [ (value) => value.length >= 6 , 'El password debe de tener más de 6 carateres'],
    displayName: [ (value) => value.length >= 1 , 'El nombre es obligatorio'],
}
```
`formValidations` es un objeto con el nombre del campo y un array para cada uno con la comprobación y el texto a mostrar en caso de no cumplirse la condición que se comprueba.

También en `src/auth/pages/RegisterPage.jsx`, a la hora de llamar al hook `useForm`, pasamos el objeto creado `formValidations` y añadimos también en la desestructuración los valores `displayNameValid`, `emailValid` y `passwordValid`.

```javascript
    const { displayName, email, password, onInputChange, formState, displayNameValid, emailValid, passwordValid } = useForm( formData, formValidations );
```

En `src/hoks/useForm.js`, se añade el objeto `formValidations` que vamos a manipular dentro del mismo hook.

```javascript
export const useForm = ( initialForm = {}, formValidations = {} ) => {
```

---
## 📝 ⚙️ 281. Formulario de registro de usuarios

En `RegisterPage.jsx`, se aplica el hook que hemos creado nosotros (`useForm`) tal y como se ha hecho anteriormente en `LoginPage.jsx`

Se crea el estado inicial de la 'data' del form:

```javascript
const formData = {
    displayName: 'Héctor Apellidos',
    email: 'hector@gmail.com',
    password: '123456',
}
```

Se llama `useForm` con la data generada.

```javascript
const { displayName, email, password, onInputChange, formState }  = useForm( formData );
```

Se crea la función onSubmit
```javascript
const onSubmit = ( event ) => {
    event.preventDefault();
    console.log( formState );
}
```

 Se aplica `onSubmit` al form.
```javascript
<form onSubmit={ onSubmit }>
```

Se añaden los valores `name`, `value` y `onChange` a los inputs.

Ejemplo del input "Nombre completo":
```javascript

<TextField
    label="Nombre completo"
    type="text"
    placeholder="Fernando Herrera"
    fullWidth
    name="displayName"
    value={ displayName }
    onChange={ onInputChange }
/>
```




---
## 📝 ⚙️ 280. Disparar acción de autenticación

En `src/store/auth/authSlice.js` se añade el state de cada reducer (`login`, `logout`):

```javascript
    reducers: {
        login: (state, { payload } ) => {
            state.status = 'authenticated'; // 'checking', 'not-authenticated', 'authenticated'
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload } ) => {
            state.status = 'not-authenticated'; // 'checking', 'not-authenticated', 'authenticated'
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
```

En el `thunk` (`src/store/auth/thunks.js`) se añaden los `dispatch` que devuelve `startGoogleSignIn`

```javascript
// Si NO es OK, devuelve el logout con el mensaje de error:
if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

// Si ES OK, devuelve el login con toda la info en el resultado:
dispatch( login( result ) );

```

En el LoginPage.jsx se añade el control para ver si tienen que estar desactivadoslos botones.

```javascript
const { status } = useSelector( state => state.auth );
...
const isAuthenticating = useMemo( () => status === 'checking', [status]);
...
<Button disabled={ isAuthenticating }>
```



---
## 📝 ⚙️ 279. Google SignIn - Firebase

Se crea el "provider" de firebase en `(src/firebase/providers.js)` que nos va a dar toda la información de la comunicación con Firebase a partir de `signInWithGoogle`:

```javascript
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayNAme, email, photoURL, uid } = result.user;

        return {
            ok: true,
            // User info
            displayNAme, email, photoURL, uid
        }
    }

    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,

        }
    }
}
```

Se importa al `src/store/auth/thunks.js` el nuevo provider `signInWithGoogle` para poder gestionar los datos obtenidos

```javascript
import { signInWithGoogle } from "../../firebase/providers";

....

const result = await signInWithGoogle()
console.log({result});
```

---
## ⭐ 📝 ⚙️ 278. Configuración inicial de Firebase

Arrancar un proyecto en Firebase


---
## 📝 ⚙️ 277. Manejo del formulario de login

En esta clase se ha creado el hook `useForm.js` importado directamente del repositorio de Fernando, guardado anteriormente en nuestro repositorio también.

Se inicia el control de los estados del formulario con `useDispatch` y las acciones vinculadas a los botones de acción.

---

## 📝 ⚙️ 276. Configurar el AuthSlice

Se crea el `authSlice.js` (`src/store/auth/authSlice.js`) usando el snippet `redux-slice` 

```javascript
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'not-authenticated', 'authenticated' 
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, action ) => {

        },
        logout: (state, payload ) => {

        },
        checkingCredentials: (state) => {

        }
    }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
```

Se añade en el store el nuevo 'slice' en los 'reducer':

```javascript
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})
```




---
## 📝 ⚙️ 275. Configurando Redux en nuestra aplicación

1. Instalación de `@reduxjs/toolkit` [`yarn add @reduxjs/toolkit react-redux`]

2. Arrancar el store: (`src/store/store.js`)
```javascript
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {

  },
})
```

3. Añadir provider a `main.jsx`
```javascript
<Provider store={ store }>
    ...
</Provider>
```
---

## 📝 ⚙️ 273. Temas puntuales de la sección

### ¿Qué veremos en esta sección?

- Redux aplicado en nuestro proyecto
- Firebase
- FireStore
- Redux Devtools
- Thunk
- Formularios
- Google SingIn
- Acciones Asíncronas
- Mantener el estado de la autenticación

En esta sección configuraremos Redux en nuestro proyecto por primera vez, aplicado al inicio en la parte de la autenticación y mantener el estado de la misma a lo largo de toda la aplicación.


# 🆕 SECCIÓN 19: Introducción a Redux y autenticación en Firebase

---
# 🏁 SECCIÓN 18: Redux - ¿Qué es y conceptos? + React Redux

---

## ⭐ ⚙️ 270. Obtener un Todo por ID

Muy interesante para ver cómo guarda en caché las llamadas a la api y los endpoints.

Añadimos un nuevo 'endpoint' a nuestra `todosApi.js`

```javascript
getTodoById: builder.query({
    query: (todoId) => `/todos/${ todoId }`
}),
```

Que nos genera automáticamente un nuevo hook `useGetTodoByIdQuery`

Usamos `useState` para controlar el estado de `todoId` para poder generar la navegación entre "todos" con las funciones `nextTodo` y `prevTodo`.

---

## ⭐ ⚙️ 269. Consumir el API mediante el custom hook

Añadimos al `store.js` 

1. El reducer para todosApi:

```javascript
[todosApi.reducerPath]: todosApi.reducer,
```

2. El `middleware` [NOTA: No imporatar el `getDefaultMiddleware`, está obsoleto]:
```javascript
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( todosApi.middleware )
```

Ya podemos usar `useGetTodosQuery` en nuestro `TodoApp.jsx`:

```javascript
const { data: todos = [], isLoading } = useGetTodosQuery();
```

```javascript
<h4>isLoading: { isLoading ? 'True' : 'False' }</h4>
```

```javascript
<ul>
    { todos.map( todo => (
    <li key={todo.id}>
        <strong>{ todo.completed ? 'DONE' : 'Pending' }</strong> { todo.title }
    </li>
    ))}
</ul>
```

---

## ⭐ ⚙️ 268. RTK Query
Ya viene integrado en `@reduxjs/toolkit`, así que si ya estamos trabajando con Redux Toolkit, no hay que instalar nada más.

Nos facilita la obtención de datos y almacenar en caché.

Hemos creado el component `TodoApp.jsx` donde recibiremos la información de la api.

Y también hemos creado `todosApi.js` dentro de la carpeta `store/apis`

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({

        getTodos: builder.query({
            query: () => '/todos'
        })

    })

})

export const { useGetTodosQuery } = todosApi;
```

---

## ⚙️ 267. Mostrar los pokemons paginadamente

En esta clase cargamos el contenido que nos pasa la API 
 
Con `useSelector` desestructuramos lo que necesitamos del state que devuelve `state.pokemon`:

```javascript
const { isLoading, pokemons = [], page } = useSelector( state => state.pokemon );
```

Una vez tenemos la información a mostrar, podemos hacer la llamada dentro del código "html" para:

1. Mostrar si está cargando o no (`isLoading`).
2. Listar los 10 primeros pokemons `pokemons.map` y desestructurando `name` para optimizar la llamada al nombre del pokemon y evitar tener que repetir `pokemon.name`.
3. Paginar a los 10 siguientes con `onClick={ () => dispatch( getPokemons( page ) )}`.
4. Deshabilitar el botón durante la carga: `disabled={ isLoading }`.


```javascript
<span>Loading: { isLoading ? 'True' : 'False' }</span>
<ul>
{
    pokemons.map( ({name}) => (
    <li key={ name }>{ name }</li>
    ))
}
</ul>
<button
disabled={ isLoading }
onClick={ () => dispatch( getPokemons( page ) )}
>
Next
</button>
```


---

## ⚙️ 266. Axios

En esta clase hacemos la petición http a la API.

Ejemplo con fetch:

```javascript
export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: Petición http
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        const data = await resp.json();

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }));
    }
}
```

Con Axios:

Instalación de Axios:

```
yarn add axios
```

Creamos la API de pokemon:

```javascript

import axios from "axios";

export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})
```

Cómo gestionamos la API en el thunks con Axios:

```javascript
export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: Petición http
        //OLD con 'fetch'
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json();

        // NEW CON AXIOS:
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }));
    }
}
```

---

## ⚙️ 265. Thunks  (by ChatGpt)

Los Thunks en React son una técnica utilizada en el manejo de estados y efectos secundarios, principalmente en el contexto de la gestión de estados con Redux. Un Thunk es una función que se retrasa o aplaza hasta un momento posterior. En el caso de Redux, un Thunk es una función que en lugar de devolver una acción (un objeto), devuelve otra función que recibe `dispatch` como argumento.

### Concepto de Thunk en Redux
En Redux, las acciones son objetos planos que describen qué está ocurriendo en la aplicación. Sin embargo, cuando necesitamos realizar acciones asíncronas, como solicitudes HTTP, las acciones tradicionales no son suficientes. Aquí es donde los Thunks entran en juego.

Un Thunk te permite escribir creadores de acciones que devuelven una función en lugar de una acción. Esta función recibe dispatch como argumento, permitiéndote despachar acciones de forma condicional o asíncrona.


### Ventajas de usar Thunks
- **Manejo asíncrono**: Permiten manejar operaciones asíncronas en Redux, como solicitudes HTTP o temporizadores.

- **Control del flujo**: Puedes despachar acciones de manera condicional y en diferentes momentos según sea necesario.

- **Modularidad**: Facilitan la organización de la lógica de las acciones asíncronas dentro de los creadores de acciones.

### (NO USADO DE MOMENTO EN EL CURSO) Middleware redux-thunk
Para que Redux soporte Thunks, necesitas un middleware específico llamado redux-thunk. Este middleware intercepta las acciones antes de que lleguen al reductor y, si la acción es una función, ejecuta esa función pasando `dispatch` y `getState` como argumentos.

#### Instala redux-thunk:
```
npm install redux-thunk
```

Configura el middleware en tu `store` de Redux:
```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
```



---

## ⭐ ⚙️ 264. pokemonSlice
Creamos dentro de nuestro `store` el `pokemonSlice.js` que nos permitirá controlar las acciones y el estado de todo lo referente a Pokemons.

En nuestro `pokemonSlice.js` definimos el "nombre", el "estado inicial" y los "reducers":

Nombre:
```javascript
name: 'pokemon',
```
Estado inicial:
```javascript
initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
},
```

Reducers:
```javascript
reducers: {
    startLoadingPokemons: (state, /* action */ ) => {
        state.isLoading = true;
    },
    setPokemons: ( state, actions ) => {
        console.log(actions);
    }
}
```

Añadimos a nuestro `store.js` el nuevo 'slice'

```javascript
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon' // nuevo slice

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer, //llamada al nuevo slice
  },
})
```

---

## ⚙️ 263. Snippet y Gists de Slice
Para crear un snippet en Visual Studio Code:

1. Command + Shift + P
2. Buscamos "snippet"
3. Seleccionamos el lenguaje (JavaScript)
4. Nos abre un javascript.json con el ejemplo de snippet que nos servirá para preparar el nuestro:

```
	"Crear slice de Redux": {
		"prefix": "redux-slice",
		"body": [
            "import { createSlice } from '@reduxjs/toolkit';",
            "",
            "export const ${TM_FILENAME_BASE} = createSlice({",
            "    name: 'name',",
            "    initialState: {",
            "        counter: 10",
            "    },",
            "    reducers: {",
            "        increment: (state, /* action */ ) => {",
            "            state.counter += 1;",
            "        },",
            "    }",
            "});",
            "",
            "",
            "// Action creators are generated for each case reducer function",
            "export const { increment } = ${TM_FILENAME_BASE}.actions;"
            

		],
		"description": "Crear slice de Redux"
	}
```

5. Para usar este snippet, tendremos que escribir "redux-slice".

### IMPORTANTE: No se pueden usar tabulaciones en el código que introducimos en el .json de los snippets, tienen que ser espacios.

> Nota: he hecho una mejora en el nippet, cambiando el `${1:template}Slice` por `${TM_FILENAME_BASE}` de manera que aplique de forma automática el nombre del archivo creado:

> OLD:
>```
>`export const ${1:template}Slice = createSlice({`
>```

> NEW:
>```
>`export const ${TM_FILENAME_BASE} = createSlice({`
>```


---

## ⚙️ 262. Tarea - decrement e incrementBy
Creamos los dos botones, 'decrementar' e 'incrementar con 2'.

Para la función de `incrementBy`, necesitaremos pasar el payload, que és informaciín que recibe el recucervia `action.payload`.

---

## ⚙️ 261. Usar valores del store y despachar acciones
En esta clase usamos dos hooks (`useSelector` y `useDispatch`) de `react-redux`.

`useSelector` nos servirá para seleccionar cualquier cosa que esté en nuestro `store`.
`useDispatch` nos dará acceso a las acciones que despacha el `store`.

---

## ⚙️ 260. ConfigureStore y Slices

En esta clase configuramos el `store` (nuestra "fuente de la verdad") con `ConfigureStore`.

En este `store` tendremos la infomración del estado de cualquier componente, por ejemplo, si el menú está abierto, si el usuario está autenticado, etc y poder compartir esa información con otros componentes.

Usar `Redux`, que nos permite trabajar con `store`, no significa que TODOS los estados tengan que pasar por este `store`, podemos seguir usando estados locales con `useState` o `UseReducer`.

Aquí vemos la ventaja de usar Redux Toolkit en lugar de construir nuestros propios estados con `UseReducer` como hacíamos en la clase "🪝 141. Idea general de un reducer - Vía código", y las siguientes donde teíamos que definir el state, action.payload, dispatch etc...

---

## ⚙️ 259. Inicio de proyecto - Redux-Tool

Instalamos 'React Redux' y 'Redux Toolkit (RTK)'

Para hacerlo con yarn (NO npm) y trabajando con Vite (NO Create React App) 
```
yarn add @reduxjs/toolkit react-redux
```
---

## ⚙️ 258. Redux, React Redux y RTK Query (by ChatGpt)

Entender la diferencia entre Redux, React Redux, React Toolkit y RTK Query puede ayudarte a escoger la herramienta adecuada para manejar el estado en tus aplicaciones de React. Aquí tienes una descripción de cada uno:

### 1. Redux

Redux es una biblioteca para manejar el estado de la aplicación. Está basada en el concepto de un almacenamiento centralizado donde todo el estado de la aplicación es almacenado en un único objeto. Los principales conceptos de Redux son:

- Store: El almacén central que contiene el estado de la aplicación.
- Actions: Objetos que describen un cambio en el estado.
- Reducers: Funciones puras que toman el estado actual y una acción y devuelven un nuevo estado.
- Dispatch: Método para enviar una acción al store.

Redux es independiente de cualquier librería de UI, incluyendo React.

### 2. React Redux

React Redux es la biblioteca oficial para conectar Redux con React. Proporciona un conjunto de componentes y funciones que facilitan la integración de Redux en una aplicación React:

- Provider: Un componente de React que hace que el store de Redux esté disponible para todos los componentes de la aplicación.
- connect: Una función de orden superior que conecta un componente de React a la store de Redux.
- Hooks: Como `useSelector` y `useDispatch`, que permiten acceder y manipular el estado de Redux de una manera más sencilla dentro de componentes funcionales.

### 3. Redux Toolkit (RTK)
Redux Toolkit (RTK) es un conjunto de herramientas oficiales para simplificar el uso de Redux. Está diseñado para hacer que Redux sea más fácil de usar y reduce la cantidad de código que los desarrolladores necesitan escribir. RTK incluye:

- configureStore: Una función para configurar el store con buenas prácticas y configuraciones predeterminadas.
- createSlice: Una función que combina la definición de acciones y reducers en un solo lugar.
- createAsyncThunk: Una utilidad para manejar acciones asíncronas.
- createReducer y createAction: Funciones para definir reducers y acciones de manera más sencilla.

RTK es una forma recomendada de usar Redux en nuevas aplicaciones, ya que simplifica muchas de las tareas comunes.

### 4. RTK Query
RTK Query es una biblioteca incluida en Redux Toolkit que facilita la obtención de datos y el almacenamiento en caché de esos datos. Proporciona herramientas para hacer peticiones a API de manera eficiente y manejar el estado del lado del cliente relacionado con la obtención de datos. Sus principales características son:

- createApi: Una función para definir un servicio de API.
- endpoints: Métodos para describir operaciones de consulta (GET) y mutación (POST, PUT, DELETE).
- caching: Gestión automática de la caché para mejorar el rendimiento de las solicitudes a la API.
- optimistic updates: Soporte para actualizaciones optimistas, lo que permite que la UI refleje los cambios inmediatos mientras la solicitud está en proceso.

RTK Query se integra perfectamente con Redux y es una solución poderosa para manejar datos asíncronos en aplicaciones React.

### Resumen
- Redux: Biblioteca para el manejo del estado con un almacenamiento centralizado.
- React Redux: Conector oficial entre Redux y React.
- Redux Toolkit (RTK): Conjunto de herramientas para simplificar el uso de Redux.
- RTK Query: Biblioteca para manejar la obtención de datos y el almacenamiento en caché, incluida en RTK.

Cada una de estas herramientas se construye sobre la anterior, proporcionando niveles adicionales de abstracción y funcionalidad para facilitar el desarrollo con Redux y React.


---

## ⚙️ 257. Explicación visual del patrón Redux

### ¿Qué es Redux? (by ChatGpt)

Redux es una librería de JavaScript que se utiliza para manejar el estado de aplicaciones. Fue creada por Dan Abramov y Andrew Clark en 2015 y se basa en el concepto de un almacén centralizado para el estado de toda la aplicación, lo que facilita la gestión del estado de una manera predecible y estructurada.

#### Principios Clave de Redux

1. **Un único almacén de estado (single source of truth)**:
   Todo el estado de la aplicación se almacena en un solo objeto JavaScript, conocido como el "store". Esto facilita el seguimiento de los cambios en el estado y la depuración de la aplicación.

2. **El estado es de solo lectura**:
   La única forma de cambiar el estado es emitir una acción, un objeto que describe lo que sucedió. Esto asegura que las mutaciones sean predecibles y rastreables.

3. **Cambios en el estado utilizando funciones puras**:
   Para especificar cómo cambia el estado en respuesta a una acción, se utilizan reductores (reducers), que son funciones puras que toman el estado anterior y una acción y devuelven el nuevo estado.

#### Componentes Principales de Redux

- **Store**: El almacén que contiene el estado de la aplicación.
- **Actions**: Objetos que describen un cambio en el estado. Deben tener al menos una propiedad `type` que indica el tipo de acción a realizar.
- **Reducers**: Funciones puras que toman el estado actual y una acción y devuelven un nuevo estado.
- **Middleware**: Funciones que se ejecutan entre el envío de una acción y el momento en que esta llega al reductor, permitiendo manipular o inspeccionar acciones y el estado.

#### Uso de Redux
Redux se puede usar con cualquier librería de interfaz de usuario, pero es comúnmente utilizado con React a través de la integración con `react-redux`. Esto permite que los componentes de React se conecten al estado de Redux y reciban actualizaciones automáticas cuando el estado cambia.

### Ejemplo de Uso

1. **Definir acciones**:
   ```javascript
   const increment = () => ({ type: 'INCREMENT' });
   const decrement = () => ({ type: 'DECREMENT' });
   ```
2. **Crear un reductor**:
   ```javascript
    const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return state + 1;
        case 'DECREMENT':
        return state - 1;
        default:
        return state;
    }
    };
   ```
3. **Crear el store**:
   ```javascript
    import { createStore } from 'redux';
    const store = createStore(counter);
   ```

4. **Enviar acciones**:
   ```javascript
    store.dispatch(increment());
    store.dispatch(decrement());
   ```

Redux es una herramienta poderosa para aplicaciones que requieren un manejo complejo del estado, como aplicaciones de una sola página (SPA) y aplicaciones que manejan muchos datos interactivos.

---

## ⚙️ 256. Temas puntuales de la sección

### ¿Qué veremos en esta sección?

- Redux
- Store
- Middlewares
- Dispatch
- Actions
- State
- Acciones asíncronas
- RTK Query
- Redux Toolkit
- Slices

Es una sección sumamente pequeña, pero quiero darles una explicación teórica sobre Redux antes de entrar en él, pero la ventaja es que para estas alturas, ya deberíamos de saber sobre el Reducer, el cual es el corazón del Redux, por consecuencia aprender Redux en este instante debería ser más fácil!

# 🆕 SECCIÓN 18: Redux - ¿Qué es y conceptos? + React Redux

<br />

# 🏁 SECCIÓN 17: JournalApp  - MaterialUI - Estructura y Diseño

---

## 📝 🖌️ 253. Boton Flotante

Añadimos el botón flotante con `IconButton` de MUI:

```javascript
<IconButton
    size='large'
    sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': { backgroundColor: 'error.main', opacity: .9 },
        position: 'fixed',
        right: 30,
        bottom: 30,
    }}
>
```

Puntos interesantes:
1. Cuando hacemos estilos con `sx`, tenemos acceso a los colores del theme, en este caso `error.main`, si usaramos `style`, no tendíamos acceso.

2. Dentro de `sx` podemos hacer como si fuera sass y anidar elementos.

Marcamos el elemento anidado entre `''`, añadimos dos puntos `:` y a continuación un objeto con las propiedades separadas por comas:
```javascript
':hover': { backgroundColor: 'error.main', opacity: .9 },
```

---

## 📝 🖌️ 252. ImageList - Galería de imágenes

Añadimos la galería de [imágenes de MUI](https://mui.com/material-ui/react-image-list/).

Yo instalo la versión `MasonryImageList`, pero la adapto a nuestro `ImageGallery` con una función de flecha de la siguiente manera:

```javascript
// MUI
export default function MasonryImageList() {
...

// PROYECTO
export const ImageGallery = () => {
...
```


---

## 📝 🖌️ 251. NoteView

Preparamos otra vista, la `NoteView`, que nos permitirá añadir nuevas notas.

Así que en `JournalPage` llamamos a la vista `NoteView` en lugar de la `NothingSelectedView`

---

## 📝 🖌️ 250. NothingSelectedView - No hay nada seleccionado

Añadimos la carpeta "views", que es el CONTENIDO que carga DENTRO de la página.


Ahora mismo tenemos esta jerarquía:
1. Layout
2. Page
3. View

### 1. Layout (JournalLayout)
Estructura general que contiene todo y donde se llama al `children` que será la página:
```javascript
<Box sx={{ display: "flex" }}>
    <NavBar drawerWidth = { drawerWidth } />
    <SideBar drawerWidth = { drawerWidth } />

    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {children}
    </Box>
</Box>
```
### 2. Page (JournalPage)
En la página llamamos el layout y dentro ponemos el `children` que es el propio contenido de la página, en este caso `NothingSelectedView`.

```javascript
<JournalLayout>
    <NothingSelectedView />
</JournalLayout>
```

### 3. View (NothingSelectedView)
Aquí generamos el contenido FINAL que aparecerá en el espacio reservado para el contenido principal de la página
```javascript

<Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"◊
    sx={{ minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main", borderRadius: 3 }}
>
    <Grid item xs={ 12 }>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
    </Grid>
    <Grid item xs={ 12 }>
        <Typography color='white' variant="h5">Selecciona o crea una entrada</Typography>
    </Grid>
</Grid>
```



---

## 📝 🖌️ 249. SideBar

Preparamos el SideBar con las listas que proporciona MUI dentro del `Drawer`:

`List`
`ListItem`
`ListItemButton`
`ListItemIcon`
`ListItemText`

En este ejemplo, Fernando añade un componente `ToolBar` para salvar el espacio que tiene que dejar el texto que hay en la página. No me parece muy limpio, a no ser que más adelante se le dé una utilidad a ese `ToolBar`
---

## 📝 🖌️ 248. NavBar

Creamos NavBar en la carpeta "components", pero se podría haber creado tambien en en la carpeta "ui", ya que es algo que va a ser estandard en toda la aplicación cuando estás autenticado.

En NavBar vamos a trabajar con elementos ya creados por MUI como `AppBar` y `Toolbar`

Se van a trabajar estilos en linea con mobile first:

### Ejemplo 1:

Tanto el `width` como el `margin-left` se están aplicando de mobile para arriba:
```javascript
sx={{ 
    width: { sm: `calc(100% - ${drawerWidth}px)`},
    ml: { sm: `${drawerWidth}px`}
}}
```

### Ejemplo 2:

el `display: none`, se aplica de mobile para arriba
```javascript
sx={{ mr: 2, display: {sm: 'none'}}}
```


---

## 📝 🖌️ 247. JournalLayout y JournalPage

En esta clase creamos el layout de Journal `JournalLayout.jsx` y la aplicamos a `JournalPage.jsx`.

Queda pendiente definir Navbar, Sidebar y Toolbar.

---

## 📝 🖌️ 246. RegisterPage - Diseño

En esta clase simplemente se ha copiado todo el contenido que teníamos en `LoginPage.jsx` y se ha pegado en `RegisterPage.jsx`.

Una vez copiado lo único que se ha tenido que hacer es cambiar el nombre del component de `LoginPage` > `RegisterPage` y adaptar los campos del formulario.

---

## 📝 🖌️ 245. AuthLayout

Creamos el `AuthLayout.jsx` con la estructura de lo que se repetirá en las páginas de "Login" y "Register" con el `children` que será el contenido que cargue dentro del layout y el título que llevará en este caso el formulario:

```javascript
export const AuthLayout = ( {children, title=''} ) => {
...

<Grid>
    <Grid>
        <Typography>{ title }</Typography>
        { children }
    </Grid>
</Grid>

```

En el `LoginPage.jsx`
podremos llamar directamente al layout con la variable title y automáticamente, lo que hay dentro ya es el children que cargará en el `AuthLayout.jsx`

```javascript
<AuthLayout title="Login">
    <form>
    </form>
</AuthLayout>
```

### Otras cosas a tener en cuenta de esta clase:
Para añadir estilos según la media query (en la declaración del `<Grid>`, en este caso) marcamos el ancho que va a tener el elemento siempre teniendo en cuenta que la filosofía es Mobile First, por lo tanto, le decimos que hasta sm, el ancho sea "450px":

```javascript
<Grid
    item
    className="box-shadow"
    xs={3}
    sx={{ 
        width: { sm: 450 },
        backgroundColor: "white",
        padding: 3,
        borderRadius: 2
    }}
>
```

---

## 📝 🖌️ 244. LoginPage - Diseño sin Layout - Segunda Parte

Para usar los links, tenemos que distingir entre el `<Link>` de "MUI" y el de `react-router-dom`

Para evitar conflico entre los imports y el uso de `<Link>`, hay que llamar al de `react-router-dom` con un alias, en este caso `RouterLink`:
```javascript
import { Link as RouterLink} from "react-router-dom";
```

Y podemos hacer el import del de MUI como "Link"
```javascript
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
```

A la hora de construir el `<Link>`, podemos usar por defecto el de MUI, pero asignando al `component` el valor del alias (`RouterLink`) asignado al Link de `react-router-dom`:
```javascript
<Link component={ RouterLink } color='inherit' to="/auth/register">
    Crear una cuenta
</Link>
```


---

## 📝 🖌️ 243. LoginPage - Diseño sin Layout

En este ejemplo se va a maquetar la página de "login" como pàgina independiente sin tener en cuenta que se podrían usar "layouts" que reutilicen estructuras iguales.

Trabajaremos con [`Grid`](https://mui.com/material-ui/react-grid2/) de MUI


---

## 📝 🖌️ 242. Configuración de MUI con Vite


> *CssBaseline:*
> 
>Material UI proporciona un componente CssBaseline opcional. Corrige algunas inconsistencias entre navegadores y dispositivos y, al mismo tiempo, proporciona restablecimientos que se adaptan mejor a la interfaz de usuario de Material que las hojas de estilo globales alternativas como normalize.css.

Del ejemplo concreto que nos facilita MUI, para trabajar con [Vite.js](https://github.com/mui/material-ui/tree/next/examples/material-ui-vite), ellos lo aplican directamente en el `main.jsx`, pero nosotros crearemos el archivo `AppTheme.jsx` dentro de la carpeta "theme".

### Su ejemplo:
```javascript
<ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
</ThemeProvider>
```

### Nuestra implementación
#### Creación de `purpleTheme`
Creamos nuestro template en la raiz de "theme" (también creamos el archivo de barril con el tema y el AppTheme)

Para crearlo usamos el `createTheme` de MUI:
```javascript
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
      primary: {
        main: '#262254',
      },
      secondary: {
        main: '#543884',
      },
      error: {
        main: red.A400,
      },
    },
  });
```

#### Implemantación en `AppTheme.jsx`
Se implementa como un Higher-Order Component aplicando el tema `purpleTheme` creado en la misma carpeta:
```javascript
export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={ purpleTheme }>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            { children }
        </ThemeProvider>
    );
};
```
#### Aplicación del HOC `AppTheme.jsx` en `JournalApp.jsx`
Para aplicarlo finalmente en `JournalApp.jsx` como un Higher-Order Component
```javascript
<AppTheme>
    <AppRouter />
</AppTheme>
```

#### Otras aplicaciones de MUI (Typography)
Se ha aplicado `Typography` de MUI a `JournalPage.jsx` con la `variant="h1"` para que se comporte como un `H1`

---

## 📝 🖌️ 241. Instalación de Material UI

Hemos instalado:
> 1. Material UI
> 2. Fuente de google fonts Roboto, la fuente que usa MUI
> 3. Iconos de Material UI


### 1. Para hacer la instalación por defecto con `emotion`:
```
yarn add @mui/material @emotion/react @emotion/styled
```

### 2. Instalación de Roboto de google fonts, en <head> con los preloads:

```
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>
```


### 3. Instalacion de iconos SVG, NO fuente:
```
yarn add @mui/icons-material
```


---

## 📝 🖌️ 240. Nota importante

En la próxima clase instalaremos los íconos de material, pero al hacerlo, esto incrementa el bundle size y el tiempo de transpilación, tengan presente esto porque hemos recibido bastantes preguntas relacionadas al tema.


Más información y posibles acciones aquí: [mui.com - minimizing-bundle-size](https://mui.com/material-ui/guides/minimizing-bundle-size/)

---

## 📝 🖌️ 239. Configuración de Rutas principales y secundarias

En esta clse hemos instalado React Router DOM para poder trabajar las rutas.

No vamos a usar rutas públicas y privadas.

Vamos a configurar el `AppRouter.jsx` de la carpeta "router" de manera que apunte (según la url) a las rutas establecidas en la carpeta "routes" dentro de las respectivas carpetas "auth" y "journal".


### AUTH
En la carpeta `auth/pages` creamos las páginas `LoginPage.jsx` y `RegisterPage.jsx` (además, creamos el archivo de barril `index.js` con las dos páginas)
```
📁 auth
    📂 pages
        📄 LoginPage.jsx
        📄 RegisterPage.jsx
```

En la carpeta `auth/routes` creamos la página `AuthRoutes.jsx`.
```
📁 auth
    📂 routes
        📄 AuthRoutes.jsx
```

En `AuthRoutes.jsx` redireccionaremos según la url a cada página y en caso de estar en la raiz, sin estar dentro de la ruta "auth", te lleva a "login".
```javascript
<Routes>
    <Route path="login" element= { <LoginPage /> } />
    <Route path="register" element= { <RegisterPage /> } />

    <Route path="/*" element={ <Navigate to="/auth/login" /> } />

</Routes>
```

### JOURNAL

En la carpeta `journal/pages` creamos la página `JournalPage.jsx`.

```
📁 journal
    📂 pages
        📄 JournalPage.jsx
```

En la carpeta `journal/routes` creamos la página `JournalRoutes.jsx`.
```
📁 journal
    📂 routes
        📄 JournalRoutes.jsx
```
En `JournalRoutes.jsx` si está en la raiz, te lleva a `JournalPage`, si no, navega a la raiz.

```javascript
<Routes>
    <Route path="/" element={ <JournalPage /> } />

    <Route path="/*" element={ <Navigate to="/" /> } />

</Routes>
```

### ROUTER

En la carpeta `router` creamos `AppRouter.jsx`.
```
📂 router
    📄 AppRouter.jsx
```

En `AppRouter.jsx` si está en `/auth/*` te lleva a las rutas de la carpeta "auth" `<AuthRoutes/>`, si no, te lleva a las rutas de la carpeta "journal" `<JournalRoutes />`.

```javascript
<Routes>
    
    {/* Login y registro */}
    <Route path="/auth/*" element={ <AuthRoutes/> } />
    
    {/* JournalApp */}
    <Route path="/*" element={ <JournalRoutes /> } />

</Routes>
```


### MAIN.JSX

Para poder utilizar las rutas, la llamada al componente principal tiene que estar dentro de `BrowserRouter`, que como hemos visto anteriormente es un Componente de Nivel Suprerior (Higher-Order Component "HOC").

Se recomiendo poner en el componente superior, ya que todos los hijos que estén dentro de ese HOC tendrán acceso a información que tenga este padre (siempre que interese que esto sea así y queremos que todos los hijos tengan acceso a esta información).

Este `BrowserRouter` se podría haber puesto en `JournalApp.jsx` y funciona perfectamente, pero como hemos dicho, lo ponemos en el de nivel superior `main.jsx`

```javascript
<BrowserRouter>
    <JournalApp />
</BrowserRouter>
```



---

## 📝 🖌️ 238. Inicio de proyecto - JournalApp

Arrancamos el proyecto eliminando los archivos que no vamos a usar y creamos los nuevos. 

También creamos las nuevas carpetas que necesitaremos:
- auth
- journal
- router
- theme

---

## 📝 🖌️ 236. Temas puntuales de la sección

### ¿Qué veremos en esta sección?

- Material UI
- Diferentes componentes de material
- Uso de funciones propias de MaterialUI
- Configuración de temas personalizados
---


# 🆕 SECCIÓN 17: JournalApp  - MaterialUI - Estructura y Diseño

<br />

# 🏁 SECCIÓN 16: Pruebas de nuestra aplicación de Heroes
---

## 🔬 234. Resumen de las pruebas realizadas

Propuestas de test a realizar en todas las pàginas del proyecto.

---

## 🔬 233. Tarea - requireActual

En el primer test comprobamos que en caso de no encontrar un heroe (batman123) aparece el mensaje de error, es decir, que el `alert-danger` deja de tener el `display: none`.

Sería igual que el del ejercicio anterior, pero confirmando que `alertDanger.style.display` está vacío ('').

En el segundo comprobamos que cuando usas el formulario para buscar heroes, te lleva a la página del heroe en cuestión.

Para eso necesitamos crear un mock de `useNavigate`: 

```javascript
const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));
```

IMPORTANTE:

Siempre que hagamos un mock, hay que resetear los mocks justo al inicio del `describe` de las prueba:
```javascript
beforeEach( () => jest.clearAllMocks() );
```
 
En el test, se simular la implementación del input con `fireEvent`:

```javascript
fireEvent.change( input, { target: { name: 'searchText', value: inputValue }} );
```

Una vez está el input implementado, disparamos el form:
```javascript
fireEvent.submit( form );
```

Y finalmente confirmamos que navega a la nueva url con el mock del `UseNavigate` (`mockedUseNavigate`):

```javascript
expect( mockedUseNavigate ).toHaveBeenCalledWith('?q=superman');
```

NOTA:

En el ejercicio se ha pasado "superman" a variable:
```javascript
const inputValue = 'superman';
```

---

## 🔬 232. Pruebas con los queryParameters

En este test hemos forzado el `initialEntries` del `MemoryRouter` con la query ('q') igual a "batman".

Una vez configurada la query hemos comprobado con `getByRole` que el `textbox` sea igual a "batman" y que la `img` contenga la url de la imagen.

Hemos añadido un `aria-label` y con `getByLabelText` hemos podido comprobar que contiene el `style="none"` accediendo a la propiedad `display` del elemento de la siguiente manera:
`alertDanger.style.display`

Como teníamos funcionando un `snapshot`, al hacer cambios en el cógigo para añadir el aria-label, nos daba error:

```
› 1 snapshot failed.
Snapshot Summary
› 1 snapshot failed from 1 test suite. Inspect your code changes or press `u` to update them.
```

 Hay que ASEGURARSE de que el cambio es correcto y entonces actualizar el snapshot con la tecla "u".

---

## 🔬 231. Pruebas en el SearchPage

En este test comprobamos que funciona el componente <SearchPage>

Volvemos a hacer un test con "Snapshot", lo que compara la maqueta que tenemos actualmente por defecto con el contenido que genera el código. De esta manera, hacemos una foto del estado actual estático de la pàgina y nos aseguramos de que siempre se va a mantener así.

Para ello es necesario desestructurar del `render` el `container`:

```javascript
const { container } = render(
    <MemoryRouter>
        <SearchPage />
    </MemoryRouter>
);
```

Para luego poder hacer el  de ese `container`:

```javascript
expect( container ).toMatchSnapshot()
```

---

## 🔬 230. Solución de la tarea

Mucha info nueva, complicado, repasar.

---

## 🔬 229. Pruebas en el NavBar 

Para probar el NavBar, tendremos que hacer pruebas en:
- HeroesRoutes.jsx
- NavBar


Para testear el `<HeroesRoutes>` habría que montarlo dentro de `<MemoryRouter>` y evaluaremos que esté dentro de cada ruta comprobando que haya contenido de cada página, como ya hemos hecho en la pàgina de "Login" o "Marvel", por lo tanto, no se repiten las pruebas.

Para testear el `<NavBar>` tendremos que comporbar:
- Aparece el nombre de la persona (enviado desde el contexto)
- Evaluar que cuando se hace click en logout
    1. Navigate con login y el replace
    2. Que se llama el `logout();`

---

## 🔬 228. Pruebas en el AppRouter

En este test comprobamos que funciona el componente <AppRouter>, si va a la ruta pública o privada según si está o no logado.

Una vez hacemos las pruebas, si hacemos este `expect`:
```javascript
expect( screen.getByText('Login')).toBeTruthy();
```

Recibimos el siguiente error:
```javascript
TestingLibraryElementError: Found multiple elements with the text: Login
```

Donde nos informa de que estamos recibiendo multiples elementos con el texto "Login"

Para pasar el test con la estructura actual de la página `LoginPage.jsx`, tenemos que confirmar que aparezca 2 veces la palabra "Login".
```javascript
expect( screen.getAllByText('Login').length).toBe(2);
```

En la segunda prueba (confirmar que estamos logados) comprobamos que aparece almenos una vez el texto "Marvel"

```javascript
expect( screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
```



---

## 🔬 227. Pruebas en el PrivateRoute

En este test volvemos a comprobar que accedemos a la página que nos redirige cuando hacemos login, como en el anterior ejercicio, pero además, vamos a testear no solo que el `localStorage` haya sido llamado, si no que además vamos a asegurarnos que se llama con el valor que le facilitamos.

Para saber si se ha llamado al `localStorage`, sería suficiente este expect:
```javascript
expect( localStorage.setItem ).toHaveBeenCalled();
```

Pero si nos queremos asegurar de que se llama con los valores que le facilitamos, tendremos que confirmarlo de la siguiente manera:
```javascript
expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/search?q=batman");
```

Para eso, anteriormente, tenemos que haber añadido al `MemoryRouter` la ruta de la que partimos
```javascript
<MemoryRouter initialEntries={['/search?q=batman']}>
```

---

## 🔬 226. Pruebas en el PublicRoute - Parte 2

En este test comprobamos que accedemos a la página que nos redirige cuando hacemos login.

Para ellos necesitaremos importar varios elementos del `react-router-dom`:

`const { MemoryRouter, Routes, Route } = require("react-router-dom");`

Ya que necesitamos la siguiente estructura para simular el entorno:

```javascript
<AuthContext.Provider value={ contextValue}>
    <MemoryRouter initialEntries={['/login']}>
        <Routes>
            <Route path='login' element={
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            } />
            <Route path='marvel' element={<h1>Página Marvel</h1>} />
        </Routes>
    </MemoryRouter>
</AuthContext.Provider>
```
También debemos inicializar la variable `contextValue` con el con `logged` a true y simulado el valor de un usuario:

```javascript
const contextValue = {
    logged: true,
    user : {
        name: 'Héctor',
        id: '12345',
    }
}
```


---

## 🔬 225. Pruebas en el PublicRoute

Para renderizar el PublicRoute, necesitamos hacerlo dentro del "context" <AuthorContext>

En esta prueba comprobamos si está logeado.

Si lo está, carga el navigate a "/marvel" `<Navigate to="/marvel" />`, si no, carga el children del `<PublicRoute>` que es `<LoginPage />` (que te lleva al "login").

En nuestro test, el children, o sea, el elemento que tenemos dentro del `<PublicRoute>`, será un `H1` con el texto "Ruta pública".

---

## 🔬 224. Pruebas sobre los Types

Esta es una prueba muy fácil pero está bien hacerla para controlar los "Types" que estamos usando en el reducer.

Aquí lo único que se hace es un "candado", de manera que nos aseguramos de que esos types siempre se van a llamar así.

Si se llamara a la type por un nombre que no es, por ejemplo "logou" en lugar de "logout", nos dariá un error "undefined" difícil de localizar si no tenemos implementado este test.

Lo único que hacemos es importar los types al test y confirmar que la constante 'types' devuelve exactamente las dos que tenemos.

---

## 🔬 223. Pruebas en el authReducer

✅ Debe retornar el estado por defecto.
> Confirmamos que llamando a `authReducer` con el estado por defecto `logged: false` y sin pasar ninguna acción; el estado que devuelve (`expect`) es igual (`toEqual`) a `logged: false`.

✅ [LOGIN] Debe llamar el login, autenticar y establecer el "user".
> Confirmamos que llamando a `authReducer` con el estado `logged: false` y pasándole la acción con el `type: types.login` y el payload con la información del usuario; el estado que devuelve (`expect`) es igual (`toEqual`) a `logged: true` y el usuario tiene la información que hemos cargado anteriormente en el payload del action (`action.payload`).


✅ [LOGOUT] Debe borrar el nombre del usuario y pasaar el "logged" a false.
> Confirmamos que llamando a `authReducer` con el estado `logged: true` y el payload con la información del usuario y pasándole la acción con el `type: types.logout`; el NUEVO estado que devuelve (`expect`) es igual (`toEqual`) a `logged: false`.

---

## 🔬 222. Inicio de la sección - Pruebas en HeroApp
Creamos toda la configuración del entorni de pruebas siguiendo los pasos "Guia de instalación y configuracion de Jest + React Testing Library"

---

## 🔬 221. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Nuevos tipos de pruebas
- Pruebas en rutas privadas y públicas
- MemoryRouter
- Pruebas en nuestro DashboardRouter
- Pruebas en el AppRouter
- Simular URLs y segmentos
- Simular queryParams y queryStrings

Recuerden que el objetivo de las pruebas, es ir probando cosas nuevas cada vez y tener un repertorio completo de diferentes casos.


# 🆕 SECCIÓN 16: Pruebas de nuestra aplicación de Heroes

<br />

# 🏁 SECCIÓN 15: Protección de rutas

# 🔒 217. Recordar la última página visitada

- En este capítulo, conseguiremos que al hacer logout, guarde tanto la url como la información que teníamos en el "search". De esta manera, al hacer login, nos devuelva a esa misma url i ncluso con la query hecha con el search.

---

# 🔒 216. Rutas públicas

- Creamos las rutas públicas
- Si estás logeado, no tendrías que poder acceder al login

En AppRouter.jsx, pasamos a llamar al login `<LoginPage />` de aquí:

```javascript
<Route path="/*" element={ <LoginPage /> } />
```

A caargar las rutas pasando por el filtro de `<PublicRoute>`, de manera que sólo dejará ir a `/login` si el usuario no está logeado:
```javascript
<Route path="/login" element={
    <PublicRoute>
        <LoginPage />
    </PublicRoute>
} />
```

Este método nos permite controlar las rutas que tenemos en el módulo `<LoginPage />`, así como en la clase anterior lo hacíamos por módulos también pero los que tenemos en `<HeroesRoutes />`.

Si en vez de hacerlo llamando a los módulos, quisieramos hacerlo por las rutas explícitas:
```javascript
<Route path="/login/*" element={
    <PublicRoute>
        <Routes>
            <Route path="/*" element={ <LoginPage /> } />
            <Route path="/*" element={ <LoginPage /> } />   // Las diferentes rutas
            <Route path="/*" element={ <LoginPage /> } />   // Las diferentes rutas
            <Route path="/*" element={ <LoginPage /> } />   // Las diferentes rutas
        </Routes>
    </PublicRoute>
} />
```



---

# 🔒 215. Rutas privadas

- Empezamos creando las rutas privadas 
- Se trabaja como un Higher-Order Components con `<Route>` anidadas. 
- Con este control de rutas públicas/privadas empezamos a filtrar al usuario en la parte de Front para evitar hacer trabajar de más a Back, ya que evitaremos que pasen a las rutas privadas si NO detectamos un `user`.
- La estructura que preparemos ahora nos servirá para futuros proyectos y se podrá exportar de manera que no tengamos que estar replanteando este punto en cada proyecto.

En `PrivateRoute.jsx` hacemos el control de las rutas que va a mostrar dependiendo de si está o no "logged" el usuario:
```javascript
export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);
    return (logged)
        ? children                  // Si está logeado, le deja entrar a todas las rutas hijas
        : <Navigate to="/login" />  // Si no lo está, lo saca a "login"
};
```


En AppRouter.jsx, pasamos de llamar a las rutas de los heroes `<HeroesRoutes />` de forma abierta a todos los usuarios como una ruta más:

```javascript
<Route path="/*" element={ <HeroesRoutes /> } />
```

A caargar las rutas pasando por el filtro de `<PrivateRoute>`:
```javascript
<Route path="/*" element={
    <PrivateRoute>
        <HeroesRoutes />
    </PrivateRoute>
} />
```

De esta manera, no podrás ver ninguna ruta de las que hay dentro de `<HeroesRoutes />`, todas te llevarán a `/login`

---

# 🔒 214. Logout del usuario
En esta clase hacemos el logout limpiando el State y el Local Storage, y una avez "explulsado" el usario, navegamos a la página de "login".

Es importante que en la parte del Front se hagan todas las validaciones para que envíe la información lo más limpia posible a la parte de Back. 

Hay que intentar que Front envíe a Back solo peticiones válidas, aunque luego Back haga también sus validaciones.

---

# 🔒 213. Mantener el usuario activo

#### INFO IMPORTANTE: 
El local storage no se tiene que llamar dentro del reducer (en este caso `authReducer.js`), ni siquiera un console.log dentro del reducer.

Usaremos el local storage en el `AuthProvider.jsx`, en concreto en el inicializador de la función.

Usamos el inicializer para inicializar su estado y aquí sí podemos llamar el Local Storage.


### IMPORTANTE:
Actualmente el logout no está haciendo la limpiando ni el State ni el Local Storage, ahora solo hace la navegación. 

---

# 🔒 212. Login de un usuario

En esta clase podremos recuperar la información almacenada en el usuario en el momento de hacer "login"

Necesitaremos el `useContext` de react y nuestro `AuthContext` par poder acceder a esta información.

Además, en `AuthProvider.jsx` creamos la función `login`:

```javascript
const login = ( name = '' ) => {
    const action = {
        type: types.login,
        payload: {
            id: 'ABC',
            name: name
        }
    }
    dispatch(action);
}
```

Que luego usaremos en nuestro `AuthContext.Provider` 
```javascript
<AuthContext.Provider value={{
    ...authState,
    login: login
    }}>
    { children }
</AuthContext.Provider>
```

Una vez hecho esto, ya podremos llamar al nombre del usuario en `Navbar.jsx`.

Pero antes, habrá que volver a poner en "contexto" la información mdiante el `useContext` de react y nuestro `AuthContext`.

---

# 🔒 211. Context y Reducer de mi aplicación

En el archivo types.js, definimos los dos tipos de de acciones que se pueden disparar:

```javascript
export const types = {
    login:  '[Auth] Login',
    logout: '[Auth] Logout',
}
```

NOTA: Cuando se trabaja con Redux, esiste una función "Action Creators" que nos evitaría tener que crear el archivo types.js

En AuthProvider usaremos el AuthContext para proveer la información de login a toda la aplicación.

Creamos un 'reducer' que va a controlar los estados. Se podría hacer con un `useState`, pero cuando se necesita mucho control sobre el estado, es preferible un 'reducer'

CLASE MUY DENSA, ACABAMOS CREANDO:
- Reducer
- Provider
- Context

Con esto podemos acceder a la información del usuario llamando al contenido de la app dentro del "AuthProvider" para saber en todo momento si el usuario está logado o no.

```javascript
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
```
---

# 🔒 210. Continuación de proyecto - Protección de Rutas

En esta clase se explica la diferencia entre ruta privadas y rutas públicas, más adelante se aplicará una autenticación real contra un backend.

Nuestra apicación tiene que saber en todo momento que estás logeado para permitirte acceder a las diferentes páginas y por ejemplo, mostrar el nombre de usuario.

Vamos a necesitar un "context" en el que tendremos nuestro proveedor de atenticación.

Hay varias maneras de gestionar la protección de rutas, en este caso, decidimos crear dentro de la carpeta "auth" las carpetas "context" y "types".

---

# 🔒 208. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Rutas públicas
- Rutas privadas
- Login y logout - Sin backend aún
- Recordar cuál fue la última ruta visitada para mejorar la experiencia de usuario.
- Context
- Reducer

Esta es una sección pequeña pero importante para trabajar las bases de la autenticación y protección de nuestra aplicación.

# 🆕 SECCIÓN 15: Protección de rutas

<br />

---

# 🏁 SECCIÓN 14: HeroesApp - Single Page Application (SPA)

---

# 🚀 205. Mostrar mensajes condicionales

En esta clase se muestran varias maneras de ocultar los mensajes.

Creo que la solución que se aplica no es buena, estaría bien que NO se tuviera que hacer un `display: none` y que directamente el mensaje no apareciera.

Para aplicar esta solución, creamos dos variables que nos devolverán un boleano y nos ayudarán a saber en qué punto estamos:

```javascript
const showSearch = ( q.length === 0 );
const showError = ( q.length > 0 ) && heroes.length === 0;
```

Además se ha eliminado la linea que salía de la función `onSearchSubmit` si el input no tenía más de un caracter:
```javascript
if (searchText.trim().length <=1 ) return;
```

De esta manera, si aplicamos la busqueda sin valor en el input, nos vuelve a mostrar el mensaje "Search a Hero".

---

# 🚀 204. Mostrar listado de héroes

Añadimos un nuevo helper llamado `getHeroesByName.js`:

Analizamos el helper `getHeroesByName`:

```javascript
// Importamos la data de los "heroes"
import { heroes } from "../data/heroes"

// Seteamos el valor de "name" como vacío ('')
export const getHeroesByName = ( name = '' ) => {

    // Pasamos a minúsculas y sin espacios delante o detrás el "name"
    name = name.toLocaleLowerCase().trim();
    
    // Si el name no tiene valor, devolvemos un arreglo vacío
    if (name.length === 0) return [];
    
    // En caso de tener un valor "name", aplicamos el 'filter' a la data de heroes, teniendo en cuenta que hay que pasarlo a minúsculas el nombre del super heroe que tenemos guardado en la data, ya que usa mayúsculas
    return heroes.filter(
        heroe => heroe.superhero.toLocaleLowerCase().includes( name )
    );
}
```


En la página `SearchPage.jsx` importamos el nuevo helper:
```javascript
import { getHeroesByName } from "../helpers";
```

Creamos una constante con todos los heroes partiendo del valor introducido en el input (pasado a la url en la variable "q")
```javascript
const heroes = getHeroesByName( q );
```

En el return pintamos todos los heroes que recibimos
```javascript
{
    heroes.map( hero => (
        <HeroCard key={ hero.id } { ...hero } />
    ))
}
```

#### EXTRA:
Para mantener el valor del input en caso de navegar, asignamos el valor de `searchText` en lugar de vacío ('') a el valor del query (q). De esta manera, el input siempre tendrá el valor introducido en la url.

```javascript
searchText: q
```

---

# ⭐ 🚀 203. SearchComponent

### Custom hook utilizados:
- useForm (Creado por nosotros)
- useLocation (React Router DOM)
- useNavigate (React Router DOM)

Se va a preparar la app para hacer busquedas con query parameter pasado por url, no hará un full refresh, se mantendrá en la misma url, pero cargando el valor pasado por el formulario a la url.

Usaremos nuestro hook `useForm`, lo podemos descargar de nuestro repositorio [Custom Hooks](https://github.com/hectoralvaez/custom-hooks).

`searchText` tiene que ser el valor del "name" del input que estamos utilizando para, en nuestro caso, buscar, ya que el "name" es lo que vamos a usar para establecer el valor de ese campo.


Preparamos para navegar a "otra pantalla", aunque no nos movemos de la misma, ya que vamos a apuntar a la que estamos (en nuestro ejemplo "search"). El hecho de cambiar la url con la variable va a hacer que se trate como una "navegación"

```javascript
const navigate = useNavigate();
```

Analizamos la función `onSearchSubmit`:
```javascript
const onSearchSubmit = ( event ) => {    
    //Para evitar que se haga un "submit" del form. De esta manera nos mantenemos en la misma url.
    event.preventDefault();

    //No hará una búsqueda si la cadena que intriducimos en el input no es mayor de 2 caracteres.
    if (searchText.trim().length <=1 ) return; 

    navigate(`?q=${ searchText }`);
}
```


Con el hook `useLocation`, si hacemos un console log, podemos ver que obtenemos toda esta información:

```javascript
hash: ""
key: "default"
pathname: "/search"
search: "?q=batman&order=asc"
state: null
```

Pero las variables que se pasan por url, no están separadas. Nosotros podríamos "parsear" esa variable y sacar el valor de cada una de las variables, pero para evitar esto, usaremos "query-string".

Lo instalamos mediante `yarn add query-string` y ya está listo para ser usado:

Lo importamos:
```javascript
import queryString from "query-string";
```

Con el uso de `query-string`:
```javascript
const query = queryString.parse( location.search );
```

Si hacemos un console log obtenemos:
```javascript
order: "asc"
q: "superman"
```

Como del query que estamos realizando ahora, actualmente sólo nos interesa la "q", desestructuramos el query para que solo nos devuelva la "q" y lo inicializamos vacío, para que siempre esté declarado:

```javascript
const { q = '' } = queryString.parse( location.search );
```

De esta manera ya podemos usar la variable de búsqueda pasada por url ("q") en nuestro código:
```javascript
<div className="alert alert-danger">
No hero with <b>{ q }</b>
</div>
```

---

# 🚀 202. Diseño de la pantalla de búsqueda

Preparamos el formulario de búsqueda.


---

# 🚀 201. Animaciones en nuestro componente

Añadimos la libreria [Animate.css](https://animate.style/)  que permite implementar varias animaciones de manera fácil.



---

# ⭐ 🚀 200. Nota: useMemo

Para optimizar nuestra aplicación, usaremos el hook `useMemo` que nos permite memorizar el valor de una constante y solo volverá a calcular ese valor memorizado cuando una de las dependencias haya cambiado. Esta optimización ayuda a evitar cálculos costosos en cada render.

Actualmente, en esta aplicación no sería necesario, pero es una buena práctica.

---

# 🚀 199. Estilo del componente HeroScreen

En esta sección mostramos toda la información del superheroe en su página `HeroPage.jsx`.

Además añadimos un botón para volver atrás con la ayuda del `useNavigate` de `react-router-dom`:

```javascript
// Definimos la función antes del return
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  }

```
...

```javascript
// Usamos la función en el botón dentro del return
<button
    className="btn btn-outline-primary"
    onClick={onNavigateBack}>
    Back
</button>

```




---

# 🚀 198. Leer argumentos por URL

En esta sección, pasamos variables por url para cargar el contenido concreto de cada superheroe

En `HeroesRoutes.jsx` añadimos la ruta del heroe con el argumento que encontrará en la url del navegador,
```javascript
<Route path="hero/:id" element={ <HeroPage /> } />
```

El nombre que le demos a esta variable (en este  caso "id", pero podría ser heroId), lo recibirá automáticamente el `HeroPage.jsx` gracias al `useParams` de `react-router-dom`.

Creamos el helper `getHeroeById` que nos ayuda a filtar el superheroe dentro de la data (en este caso el objeto ubicado en `data/heroes.js`)

Esta función lo único que hace es recibir el id y filtar dentro de la data para devolver el contenido del superheroe indicado.

```javascript
export const getHeroeById = ( id ) => {
    return heroes.find( heroe => heroe.id === id );
}
```

Ahora en el `HeroPage.jsx` ya tenemos el id que recibimos por parámatro en la url:
```javascript
const {id} = useParams();
```

Y podemos llamar a la función `getHeroeById` pasándole el id obtenido mediante la url con `useParams()`
```javascript
const heroe = getHeroeById(id);
```

Para evitar errores, en caso que se envie por url un valor que no exista, es decir, no coincida con ningún superheroe de nuestra lista, hacemos la siguiente comporbación en el `HeroPage.jsx`:

```javascript
  if ( !heroe ) {
    return <Navigate to="/marvel" />
  }
    // En este return, podríamos devolver un mensaje de error 404 o cargar otro componente, pero con el uso de `Navigate`, cargamos directamente el componente deseado via router
```



---

# 🚀 197. Tarjeta del Héroe - parte 2

Diferentes maneras de evitar ver la información duplicada de `alter_ego` y `characters` (en caso de ser la misma información) NO mostraremos el contenido de `characters`:

En principio, solo para esto, no sería necesario un componente independiente, pero hay 3 maneras distintas de gestionar este problema

### 1. Con el condicional directamente tirado en el component, no es muy limpio y algo complicado de leer:
```javascript
{
    ( alter_ego !== characters ) && (<p>{ characters }</p>)
}
```

### 2. Con el condicional directamente tirado en el component, no es muy limpio y algo complicado de leer. Aquí la diferencia es que definimos previamente la constante `charactersByHero` antes del `return` del component:

```javascript
const charactersByHero = (<p>{ characters }</p>);

....

{
    ( alter_ego !== characters ) && charactersByHero
}
```

### 3. Creando un component interno que no habrá que exportar y solo funcionará dentro del componente `HeroCard.jsx`:

```javascript
const CharactersByHero = ({ alter_ego, characters }) => {

    if ( alter_ego === characters ) return (<></>);
    return <p>{ characters }</p>
}
....
<CharactersByHero characters = { characters } alter_ego = { alter_ego } />
```

### 4. Creando un component interno que no habrá que exportar y solo funcionará dentro del componente `HeroCard.jsx`. Pero con un condicional ternario:

```javascript
const CharactersByHero = ({ alter_ego, characters }) => {

    return ( alter_ego === characters )
     ? <></>
     : <p>{ characters }</p>;
}
....
<CharactersByHero characters = { characters } alter_ego = { alter_ego } />
```


---

# 🚀 196. Tarjetas con la información del Héroe

Añadimos el componente `<HeroCard />` al `HeroList.jsx` haciendo el spread para traer todas las propiedades del heroe "esparcidas" y no tener que definirlas una a una.

IMPORANTE: Sí marcamos directamente el `key` con el `heroe.id`

```javascript
<HeroCard 
    key={ heroe.id }
    { ...heroe }
/>
```


---

# 🚀 195. Lista de Heroes

Aquí vamos a empezar a aplicar componentes para elementos que se repiten.

En este ejemplo, haremos el listado de los heroes por "Publisher", que será la misma estructura tanto en la página `DcPage.jsx` como en la de `MarvelPage.jsx`

Hemos usado el `map` en el component `HeroList.jsx` para recorrer la información de los heroes:

```javascript
<ul>
    {
        heroes.map( (heroe) => ( 
            <li key={heroe.id}>{ heroe.superhero }</li>
        ) ) 
    }
</ul>
```

Hemos usado el component `HeroList` en las páginas `DcPage.jsx` y `MarvelPage.jsx`
```javascript
<HeroList publisher={ 'DC Comics' } />
```

---

# 🚀 194. Navigate push / replace - useNavigate

En esta clase se inicia el control de la navegación y el historial, pera evitar que una vez des-logueado, no puedas volver a acceder a contenido exclusivo para usuarios logados.

`useNavigate` es un custom hook creado por el equipo de "React Router DOM"

Con `replace: true` evitamos que la persona vuelva al historial anterior, ya que lo está reemplazando el historial. Si ya estás deslogeado, ya no puedes volver al contenido de la página en la que necesitas estar logado para ver.

---

# 🚀 193. Creando un segundo Router

Creamos un segundo router para tener diferentes menús para diferentes contenidos, por ejemplo apartado de login tiene que ser diferente de la del resto de la web.

Como pasamos a tener dos rutas, una para `herores` y otra para `auth` crearemos una carpeta "routes" dentro de cada carpeta.

Quitamos la llamada al `<Navbar />` general para que solo aparezca en el `HeroesRoutes.jsx`, de manera que ahora en el router por defecto `AppRouter.jsx` solo vamos a distinguir entre login/heroes (resto de páginas):

```javascript
<Routes>
    <Route path="login" element={ <LoginPage /> } />

    <Route path="/*" element={ <HeroesRoutes /> } />
</Routes>
```

Una vez compruebe que el path no es "login", pasará a buscar el elemento `<HeroesRoutes />` y aquí sí hará la distinción entre rutas de heroes:

```javascript
<Routes>
    <Route path="marvel" element={ <MarvelPage /> } />
    <Route path="dc" element={ <DcPage /> } />

    <Route path="/*" element={ <Navigate to="marvel" /> } />
</Routes>
```



---

# 🚀 192. Colocar clase de la ruta activa

### 1. Colocar clase de la ruta activa

Ejemplo que pone Fernando:
```javascript
<NavLink
    className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }`}
    to="marvel">
    Marvel
</NavLink>
```

Realmente no hace falta el condicional ternario, por defecto ya te añade la class `active` si está en la ruta marcada.
```javascript
<NavLink
    className="nav-item nav-link" 
    to="marvel">
    Marvel
</NavLink>
```

### 2. Crear archivo barril por módulo
Tal y como hemos hecho con el módulo de "ui" preparamos los módulos de "heroes" y el de "auth"

---

# 🚀 191. Creando un primer Router
En este capítulo hacemos:
- Instalación de React Router 6 vía Yarn `yarn add react-router-dom@6`
- Importar `BrowserRouter` en `Main.jsx` 
```javascript
import { BrowserRouter } from 'react-router-dom'

...

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
```

- Crear directorio "router" donde pondremos todos los componentes con las rutas vinculadas.  
En nuestro caso de momento solo crearemos `AppRouter.jsx`, que es el nombre que se le suele dar al router principal de la aplicación. Aquí irán todas las rutas, pero podríamos tener otro component para la administración de otros tipos de rutas.
```javascript
<Routes>
    <Route path="marvel" element={ <MarvelPage /> } />
    <Route path="dc" element={ <DcPage /> } />
    
    <Route path="login" element={ <LoginPage /> } />

    <Route path="/*" element={ <Navigate to="marvel" /> } />
</Routes>
```


- Creamos las páginas dentro de la carpeta `heroes/pages` y en `auth/pages`




---

# 🚀 189. Inicio de proyecto - HeroesApp

En este capítulo:

1. Arrancamos el proyecto con YARN + VITE (quedará pendiente prepara la parte de Jest + React Testing Library)
2. (fuera del video) Inicializo repositorio en GITHUB
3. Limpieza y orden general
4. Se prepara estructura de carpetas para trabajar en dos módulos independientes representados en dos carpetas dentro de la carpeta `src`:
    - auth
    - heroes

El módulo de `auth` será independiente del de `heroes`.



# 🆕 SECCIÓN 14: HeroesApp - Single Page Application (SPA)

<br />

---

# 🏁 SECCIÓN 13: Bonus: Repositorio de Custom Hooks




# 🧰 🪝 183. Repositorio con customHooks
https://github.com/hectoralvaez/custom-hooks

---

# 🧰 🪝 182. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Subir código a nuestro repositorio

- Tener un listado de customHooks y código que podemos reutilizar

- Una idea para mantener tu repositorio ordenado con ejemplos

No es una sección obligatoria, pero puede ayudarles a tener su código ordenado y fácil de utilizar en proyectos futuros.


# 🆕 SECCIÓN 13: Bonus: Repositorio de Custom Hooks

<br />

---

# 🏁 SECCIÓN 12: Pruebas unitarias y de integración - Hooks

---
# 🚧 🪝 179. Pruebas generales en nuestro AppRouter

Para testear las rutas, es necesario llamar al componente a testear dentro del `<MemoryRouter>` que substituye a lo que se usa en el componente `<BrowserRouter>`

Para pasar el valor de la ruta al `<MemoryRouter>`:
```javascript
<MemoryRouter initialEntries={['/about']}>
    <MainApp />
</MemoryRouter>
```

---

# 🚧 🪝 178. Pruebas de funciones del context

## Importante:

1. Definir el mock para poder hacer la acción del botón

```javascript
const setUserMock = jest.fn();
```

2. El UserContext, tiene dos valores, el inicial `user` y el final `setUser`, quando se aplica la acción (en este caso, hacer click en el botón)

```javascript
<UserContext.Provider value={{ user: null, setUser: setUserMock }}>
```

---

# 🚧 🪝 177. Pruebas con useContext

No vamos a probar el `createContext`, ya que es una libreria de terceros (en este caso React) y damos por hecho que está testeada y funciona.

Lo que vamos a comprobar es que `useContext` funciona como nosotros queremos dentro de nuestra aplicación.


>GENERAL DE REACT PARA HACER REFERENCIA A UNA VARIABLE:
>
>Si definimos un usuario:
>```javascript
>const user = {
>    id: 1,
>    name: 'Fernando'
>}
>```
>
>Podemos referirnos a este usuario así:
>
>```javascript
><UserContext.Provider value={{ user: user }}>
>```
>
>o así: 
>```javascript
><UserContext.Provider value={{ user }}>
>```

SOLUCIÓN A LA TAREA:

Así funcionaría, ya que comprueba que tanto el nombre como el id son correctos:
```javascript
expect( preTag.innerHTML).toContain('"name": "Fernando"');
expect( preTag.innerHTML).toContain('"id": 1');
```
Pero es más limpio y elegante así:

```javascript
expect( preTag.innerHTML).toContain(user.id);
expect( preTag.innerHTML).toContain(user.name);
```

De esta manera el id da error, ya que se pasa como 'string'.

Se puede solucionar de dos maneras:

1 - Pasándolo a string con 'toString()':
```javascript
expect( preTag.innerHTML).toContain(user.id.toString());
```

2 - Con un "Template string":
```javascript
expect( preTag.innerHTML).toContain( `${user.id}`);
```

---

# 🚧 🪝 176. Pruebas en el TodoApp

Si solo hacemos el render sin pasar valores, sin hacer el mock del hook useTodos, no sabemos si los valores que estamos pasando son correctos o no, ya que, aunque no da error, devuelve todo vacío.

---

# 🚧 🪝 175. Pruebas en los eventos del TodoItem

Al testear que el todo está completado, para no tener que volver a definir un nuevo "todo", con el "done" a TRUE, en el mismo test forzamos el valor:
```javascript
todo.done = true;
```
Una vez empecemos a trabajar con fixtures podremos tener diferentes todos con características específicas y podremos hacer referéncia a cada uno de ellos sin necesidad de forzar este valor en cada test.

Es importante tener en cuenta que aquí no se está comprobando el funcionamiento del cambio de estado de cada item, eso ya se testeó en el reducer, aquí se está testeando el click de los elementos, NO el funcionamiento del todo, eso queda más arriba del TodoItem, se está analizando de la forma más atómica posible.

---

# 🚧 🪝 174. Pruebas en el componente TodoItem

Definimos el 'todo':
```javascript
const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false
}
```

> Próximamente se explicará cómo definir una sola vez un objeto (en este caso "todo") que podamos reutilizar en todos los tests del proyecto. 
> Es lo que se conoce como "fixtures", data ficticia que se importa en cada prueba.

y las funciones (con el nombre de la función original + "Mock" para indicar que es una función de test):
```javascript
const onDeleteTodoMock = jest.fn();
const onToggleTodoMock = jest.fn();
```

antes de los tests, ya que se van a reutilizar en cada uno de los test.

Precisamente por la reutilización de estas funciones, es necesario que hagamos el `clearAllMocks` después de cada ejecución para resetear las funciones:
```javascript
beforeEach( () => jest.clearAllMocks() );
```

En la aserción para confirmar que la class del span és correcta, creo que es mejor dejar el espacio para asegurarse de que NO se borra el espacio que hay detrás de la class, ya que si se quita, se juntan las clases y se pierden las dos clases.
```javascript
expect(spanElement.className).toBe("align-self-center ")
```
---

# 🚧 🪝 173. Resolución de la tarea

## "Debe eliminar un Todo"
### ERROR EN ACTION:
En realidad el payload SOLO devuelve el id:

```javascript
// 05-hook-app/src/hooks/useTodos.js

const handleDeleteTodo = ( id ) => {
    dispatch({
        type: '[TODO] Delete Todo',
        payload: id
    });
}
```

En el caso anterior, cuando hacíamos el test "Debe agregar un Todo" sí teníamos en el 'payload' todo el objeto 'todo':
```javascript
// 05-hook-app/src/hooks/useTodos.js

const handleNewTodo = ( todo ) => {
    const action = {
        type: '[TODO] Add Todo',
        payload: todo
    }
    dispatch( action );
}
```


Por lo tanto, cuando probamos el "Debe eliminar un Todo", en lugar de plantear el action así:

```javascript
const action = {
    type: "[TODO] Delete Todo",
    payload: {
        id: 1,
    },
};
```

Hay que plantearlo de la siguente manera:
```javascript
const action = {
    type: "[TODO] Delete Todo",
    payload:1,
};
```

## "Debe realizar el toggle del Todo"
### ERROR EN ACTION:

(el mismo caso que en el anterior, solo se usa el ID, no el objeto entero)

### ERROR EN EXPECT:
Faltaba hacer referencia al elemento concreto del newState, al primer elemento del array:

En lugar de:
```javascript
expect(newState.done).toBe(true);
```
Es:
```javascript
expect(newState[0].done).toBe(true);
```

Es lo mismo que hacer:
```javascript
expect(newState[0].done).toBeTruthy;
```

#### EXTRA:
Para confirmar que el toggle funciona (no sería necesario, pero no está de más), a partir del 'newSate' que hemos generado en la prueba, volvemos a realizar el toggle para que quede de nuevo en false:

```javascript
const newState = todoReducer(initialState, action);
expect(newState[0].done).toBe(true);

const newState2 = todoReducer(newState, action);
expect(newState2[0].done).toBe(false);
```

Es importante crear un nuevo state "newState2" y que se le aplique la acción a "newState" (el que hemos generado anteriormente) para comprobar en "newState2" que vuelve a ser FALSE.


---


# 🚧 🪝 172. Pruebas sobre el Reducer

Probrar el 'Reducer' es importante ya que es quin cambia el estado.

Es muy sencillo de testear ya que, al ser una función pura, lo unico que hace es:
- Recibir un estado inicial > Enviarle una acción > Confirmar que el nuevo estado es el correcto.

> NOTA:
> Como el reducer por defecto no hacía un 'return' el test daba error ya que esperaba el contenido con el que hemos definido el initial state, pero recibía "undefined"

> ```
> Expected: [{"description": "Demo Todo", "done": false, "id": 1}]
> Received: undefined
> ```

Al pasar la función con el objeto del action vacío, no entra en el switch del `action.type` y devuelve el default, es decir, el `initialState`.

---


# 🚧 🪝 171. Evaluar respuesta del useFetch

No se va a evaluar el funcionamiento de `useFetch`, ya se hizo en la sección pasada.

Lo que se va a evaluar son los resultados del `useFetch`.

En este caso `useFetch` está devolviendo la 'data', 'isLoading' y 'hasError' (05-hook-app/src/hooks/useFetch.js) 

```javascript
return {
    data:       state.data,
    isLoading:  state.isLoading,
    hasError:   state.hasError,
};
```

Haremos un "mock" completo del `useFetch` y simularemos los valores de retorno.

>NOTA:
>Para la importación del `useFetch` se recomiendo apuntar directamente a `useFetch` dentro del "barril" `hooks`.
>
>Si lo importamos así, 
>```javascript
>import { useFetch } from "../../src/hooks";
>```
>Tendríamos que hacer un mock del useCounter también, que se está usando en el "MultipleCustomHooks" y está dentro del "barril".
>
>Por lo tanto, hacemos la importación de este modo:
>```javascript
>import { useFetch } from "../../src/hooks/useFetch";
>```
>SPOILER ALERT: Acabaremos haciendo el mock del useCounter



Una vez importado el hook, si hacemos el mock, 
```javascript
jest.mock('../../src/hooks/useFetch');
```
los tests darán error, porque el `useFetch` no se ha definido (undefined) por lo tanto, no hay nada que desestructurar.

Hay que implementar el mock en los test simulando el valor de cada variable en cada caso.

### Por defecto:
```javascript
useFetch.mockReturnValue({
    data: null,
    isLoading: true,
    hasError: null
});
```
### Mostrando un quote:
```javascript
useFetch.mockReturnValue({
    data: [{author: 'Fernando', quote: 'Hola Mundo'}],
    isLoading: false,
    hasError: null
});
```

Finalmente, hay que hacer el mock de `useCounter` para poder testear la función de incrementar del botón.

Para simular el `mockReturnValue`, tenemos que tener claro qué devuelve la función que estamos evaluando, en este caso, el hook `useCounter` (05-hook-app/src/hooks/useCounter.js) devulelve:

```javascript
return {
    counter,
    increment,
    decrement,
    reset,
}
```

Una vez tenemos claro el return de la función pasamos a simularla:

```javascript
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });
```

Si este mock lo llamamos solo dentro del test "Debe llamar la función de incrementar", nos dará error, ya que al hacer el mock del useCounter 
```javascript
jest.mock('../../src/hooks/useCounter');
```

en cada uno de los tests, se está usando el useCounter. 

Entonces, en vez de llamar el useCounter en cada test, sacamos
```javascript
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });
```
del test específico "Debe llamar la función de incrementar" y lo ponemos antes de los 'test()', justo debajo del 'describe()' de manera que todos puedan acceder al mock del `useCounter`

Si además, queremos asegurarnos de que en cada test la función se "resetea" a su estado inicial, añadimos:
```javascript
beforeEach( () => {
    jest.clearAllMocks();
});
```

---


# 🚧 🪝 170. Pruebas con múltiples hooks simultáneos

Se podría hacer con un "screen shot" (snapshot), pero se va a hacer elemento por elemento.

Usaremos `screen` (con screen.debug en el test, imprimimos la estructura completa de lo que estamos testeando, lo que permite ver cada elemento html) para analizar cada cada elemento por separado.

Si intentas llamar a un elemento con `getByRole` y no pones el nombre correctamente: 

```javascript
const nextButton = screen.getByRole('button', {name: 'Nex Quote' });
```

La consola te lanza el siguiente error:

```
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name "Nex Quote"

Here are the accessible roles:

heading:

Name "Breaking Bad Quotes":
<h1 />

--------------------------------------------------
separator:

Name "":
<hr />

--------------------------------------------------
button:

Name "Next quote":
<button
class="btn btn-primary"
disabled=""
/>

--------------------------------------------------
```

---


# 💩 🚧 🪝 169. Pruebas sobre useForm - CustomHook

Clase bastante densa para testear cambios de valor (campo "name") en el formulario.

---


# ⭐ 🚧 🪝 168. Ejecutar funciones del customHook dentro de las pruebas

Cuando necesitamos hacer un cambio de estado de React en un componente para testearlo, es necesario que este cambio de estado esté dentro de un `act()`.  

Este es el error y la información que lanza la consola si no llamas la función dentro del `act()`.  

```
console.error
Warning: An update to TestComponent inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):
```

```javascript
act(() => {
    /* fire events that update state */
});
/* assert on the output */

```

```
This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at TestComponent (/Users/hectorpenalvapelaez/www/react/05-hook-app/node_modules/@testing-library/react/dist/pure.js:278:5)
```

Con la función dentro del `act()`, ya no da error, pero ahora no está testeando bien la función:
```javascript
test('Debe incrementar el contador.', () => {
    const { result } = renderHook( () => useCounter() );
    const { counter, increment} = result.current;

    act( () => {
        increment();
    });

    expect( counter ).toBe(11);


});
```

El valor del `conuter` desestructurado y llamado en el "expect" `expect( counter ).toBe(11);` no se actualiza cuando pasa por el `increment` dentro del `act()`.  

El problema es que no se actualiza porque cuando trabajamos con valores primitivos (`strings`, `números`, `boleanos`...) estos valores se extran y se crean nuevas variables, por lo tanto esa variable va a tener siempre el valor con el que se ha extraido (esto no pasa con los `objetos`, ya que los `objetos` pasan por referencia).  

Para evitar este error, hay que hacer referencia a la variable sin desestructurar `result.current.counter`  

Quedando el test de la siguiente manera:  
```javascript
test('Debe incrementar el contador.', () => {
    const { result } = renderHook( () => useCounter() );
    const { increment} = result.current;

    act( () => {
        increment();
    });

    expect( result.current.counter ).toBe(11);
});
```


Si quisieramos llamar dos veces la función `increment()` dentro de un mismo `act()`, tendríamos que repasar el código del hook, ya que cada vez que se llama la función `increment()`, el valor del `counter` se reinicia, es decir, no recibe el valor modificado en la llamada al anterior `increment()`.
```javascript
test('Debe incrementar el contador.', () => {
    const { result } = renderHook( () => useCounter() );
    const { increment} = result.current;

    act( () => {
        increment();
        increment(2);
    });

    expect( result.current.counter ).toBe(13);
});
```

El cambio en el hook sería el siguiente:  
En lugar de hacer referencia a `counter`

```javascript
setCounter( counter + value);
```

Usaremos el valor `current`:
```javascript
setCounter( (current) => current + value );
```

De esta manera cada vez que se llame a `increment()`, parte del valor actual del counter.  


```javascript

test('Debe resetear el contador.', () => {
    const { result } = renderHook( () => useCounter(5) );
    const { increment, decrement, reset} = result.current;

    act( () => {
        // Variamos el valor inicial del contador
        increment();
        decrement();

        // Reseteamos el valor para ver si funciona o no
        reset();
    });

    expect( result.current.counter ).toBe(5);


});
```




# ⭐⭐ 🚧 🪝 167. Pruebas sobre useCounter - CustomHook
Para empezar a testear hooks, lo primero es importar `renderHook` de React Testing Library:
```javascript
import { renderHook } from "@testing-library/react";
```

Y el hook a testear:
```javascript
import { useCounter } from "../../src/hooks/useCounter";
```

Una vez tenemos esto, describimos el test general del hook donde iremos haciendo las pruebas puntuales de funcionamiento:
```javascript
describe('Pruebas en el UserCounter', () => {
    // Aqui cargaremos los tests.
});
```

Dentro de la descripción, iremos añadiendo los tests puntuales:
```javascript
describe('Pruebas en el UserCounter', () => {
    test('Debe retornar el valor por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        console.log(result);
    });
});
```

Para recordar los valores que devuelve el hook podemos utilizar la función `renderHook` de manera que almacenando el resultado en un objeto, al pintarlo en consola, aparecerá la siguiente información:
```
// Lo que devuelve el console.log
{
    current: {
        counter: 10,
        increment: [Function: increment],
        decrement: [Function: decrement],
        reset: [Function: reset]
    }
}
```
Ahora que sabemos que el objeto principal es `current`, podemos desestructurarlo para poder trabajar de forma independiente con cada uno de los valores que devuelve:   


```javascript
describe('Pruebas en el UserCounter', () => {
    test('Debe retornar el valor por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset} = result.current;
    });
});
```

Y ya podemos iniciar nuestros tests, en este caso, confirmar que el valor por defecto del contador (`counter`) que se envía a la función es "10":

```javascript
describe('Pruebas en el UserCounter', () => {
    test('Debe retornar el valor por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset} = result.current;

        expect( counter ).toBe(10);

        // (También se podría usar sin desestructurar "result.current":)
        expect( result.current.counter ).toBe(10);
    });
});
```

---

# 💾 🪝 166. Inicio de proyecto - Pruebas sobre Hooks (instalación y configuracion de Jest + React Testing Library)

### [Guia de instalación y configuracion de Jest + React Testing Library](https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177)
### En proyectos de React + Vite

### 1. Instalaciones en consola:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

### 2. Opcional: Si usamos Fetch API en el proyecto:

En nuestro caso estamos usando Fetch API en el hook `useFetch.js`

```javascript
const resp = await fetch(url);
```
Por lo tanto, se tendría que hacer la instalación via terminal con el siguiente comando: 
```
yarn add --dev whatwg-fetch
```

A pesar de estar usando una versión de node superior a la 18.0.0 (actualmente la 18.7.0), es necesaria la instalación.


### 3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

### 4. Crear la configuración de babel __babel.config.cjs__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

### 5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.cjs__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

### Para iniciar los tests:
```
yarn test
```


## Extra info Jest
[expect](https://jestjs.io/docs/expect)

# 🪝 165. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Pruebas sobre Hooks y CustomHooks

Ese es el tema principal, demostrar cómo podemos evaluar cada unos de los hooks aplicados anteriormente con sus casos reales de uso.

Hay varios extras, como la prueba de un Reducer, que realmente no es nada complicado, también quiero aclarar qué nos toca evaluar a nosotros y qué no es responsabilidad nuestra.

<br />

---

# 🆕 SECCIÓN 12: Pruebas unitarias y de integración - Hooks

<br />

---

# 🏁 SECCIÓN 11: Profundizando Hooks - useContext


<br />
---


# ⭐🪝 161. useContext

---

Para hacer uso del contexto, lo único que hay que hacer es, en la página donde necesitamos utilizar  ese contexto, importar el `useContext` de React y nuestro contexto, en este caso, el contexto del usuario `UserContext`:

```javascript
import { useContext } from "react"
import { UserContext } from "./context/UserContext"
```

Una vez tenemos esta información, ya podemos trabajar con ella:

De esta manera mostramos en consola toda la información que hay en `UserContext`:
```javascript
const algo = useContext( UserContext );
console.log(algo);
```

Pero lo que realmente necesitamos es desestructurar esa información para trabajar mejor de la siguiente manera:

```javascript
const { user } = useContext( UserContext );
```

Ahora ya podemos llamar a cada parte de ese contenido dentro del "html":
```javascript
<h1>HomePage <small>{ user.name }</small></h1>

<pre>
    { JSON.stringify( user, null, 3 )}
</pre>
```

# ⭐🪝 161. useContext (v2)

Establecer la información del usuario desde una página, para comprobar que una vez hecho, todas tendrán acceso a esa información, aunque no estuviera previamente establecido:


Para evitar errores, como NO vamos a establecer en un inicio el valor de usuario, cuando se llama, hay que añadirle un "?" para que en caso de que no existe, no pinte nada y evitar así el error:

```javascript
<h1>HomePage <small>{ user?.name }</small></h1>
```

IMPORTANTE:  
Ver las diferencias que se han aplicado en el código en el commit de los archivos. Se ve cómo cambia el funcionamiento y la carga de la información del usuario.

(Según Fernando, no está bien hecho, pero sirver para ver el funcionamiento)





# 🪝 160. CreateContext y ContextProvider

[`createContext`](https://es.react.dev/reference/react/createContext) te permite crear un "contexto" que los componentes pueden proporcionar o leer.


> ℹ️ [Contexto](https://es.react.dev/learn/passing-data-deeply-with-context):
> Por lo general, pasarás información desde un componente padre a un componente hijo por medio de props. Pero pasar props puede convertirse en una tarea verbosa e inconveniente si tienes que pasarlas a través de múltiples componentes, o si varios componentes en tu aplicación necesitan la misma información. El contexto permite que cierta información del componente padre esté disponible en cualquier componente del árbol que esté por debajo de él sin importar qué tan profundo sea y sin pasar la información explícitamente por medio de props. 

El contexto es la estructura de componentes de nuestra aplicación que se genera en el navegador, se puede ver al inspeccionar elemento yendo a la pestaña de React "Components". 

Por lo general se usaran Higher-Order Components anidados. Estos HOC generan su propia estructura y sus "proveedores". En el caso de "BrowserRouter" genera:

```
<BrowserRouter> 
    <Router>
        <Navigation.Provider>
            <Location.Provider>
```

Los "providers" proveen de información y control del componente que se podrá compartir con el resto de componentes dentro del arbol generado.

En este ejercicio creamos el `UserContext.jsx` donde guardaremos toda la información referente al usuario, podríamos tener otros context de cualquier otro tipo dentro de la carpeta "context". 

Este `UserContext.jsx` es un HOC, no usamos el "rafc" para generarlo. Es un context especializado.

```javascript
import { createContext } from "react";

export const UserContext = createContext();
```

Creamos también `UserProvider.jsx` aquí sí usamos el "rafc" para generarlo ya que es el típico Functional Component, pero en este caso va a tener una cosa que diferencia al Functional Component tradicional.

```javascript
// Creado como un Functional Component tradicional
export const UserProvider = () => {
  return (
    <div>UserProvider</div>
  )
}
```

Al ser un HOC, a parte de recibir las propiedasdes que necesite, va a poder recibir los "childrens".

```javascript
// Impotamos el "UserContext" para poderlo usar
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
  return (
    // Pasamos el valor al que van a poder acceder todos los hijos dentro del arbol del "context"
    <UserContext.Provider value={{ hola: 'Mundo' }}>
        {children}
    </UserContext.Provider>
  )
}
```

Para poderlo usar, lo tenemos que colocar en el punto más alto donde los hijos lo vayan a necesitar.

En este ejemplo lo ponemos en el `MainApp.jpx`, cambiando el fragmento "<>" por "<UserProvider>". De esta manera, todos los components y subcomponents, podrán acceder a esta información.

---

# ⭐🪝 159. NavLink

[React Router (Nav Link)](https://reactrouter.com/en/main/components/nav-link)
Un `<NavLink>` es un tipo especial de `<Link>` que sabe si está o no "activo" o "pendiente". Esto es útil al crear un menú de navegación, como un menú o un conjunto de pestañas donde nos gustaría mostrar cuál de ellas está seleccionada actualmente. También proporciona un contexto útil para la tecnología de asistencia, como los lectores de pantalla.

Ejemplo que pone Fernando:
```javascript
<NavLink
    className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
    to="login">
    Login
</NavLink>
```

Realmente no hace falta el condicional ternario, por defecto ya te añade la class `active` si está en la ruta marcada.
```javascript
<NavLink
    className={"nav-link"}
    to="login">
    Login
</NavLink>
```


---

# 🪝 158. Link
Añadimos un menú de navegación con `Link`

[React Router (Link)](https://reactrouter.com/en/main/components/link)

Un `<Link>` es un elemento que permite al usuario navegar a otra página haciendo clic o tocándola. En react-router-dom, un `<Link>` representa un elemento `<a>` accesible con un href real que apunta al recurso al que se vincula. Esto significa que cosas como hacer clic con el botón derecho en un `<Link>` funcionan como cabría esperar. Puede usar `<Link reloadDocument>` para omitir el enrutamiento del lado del cliente y dejar que el navegador maneje la transición normalmente (como si fuera un `<a href>`).


Si utilizamos el clásico anchor tag `<a>`, cada vez que hagamos click en ese link, al ir a esa página hay un full refresh de la aplicación, lo que implica volver a cargar toda la librería de React, TODOS los componentes, etc... cuando en realidad SOLO se está cambiando una parte concreta de nuestra aplicación.

```
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/login">Login</a>
```

Uso de `<Link>` para cargar SOLO la parte de la aplicación que cambia:
```
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/login">Login</Link>
```


---

# 🪝 157. Configurar Router en React

Documentación de ['React Router'](https://reactrouter.com/).

En esta clase creamos la navegación entre diferentes pantallas en nuestra aplicación.

Hay varias formas de configurar nuestras rutas, pero idealmente se tendrían que definir en el punto más alto de nuestra aplicación, en nuestro caso en `MainApp.jsx`.

Routes es otro HOC (Higher-Order Component) que va a recibir un arreglo de hijos con las rutas de la aplicación.

Ejemplo: en `MainApp.jsx`
```javascript
<Routes>
    <Route path="/" element={ <HomePage /> } />
    <Route path="login" element={ <LoginPage /> } />
    <Route path="about" element={ <AboutPage /> } />

    <Route path="/*" element={ <Navigate to="about" /> } />
</Routes>
```


```javascript
// Para definir una ruta en caso de que no exista:
// 1 - De esta manera te lleva a "About", pero en la barra de navegación se queda la ruta errónea que se ha introducido:
<Route path="/*" element={ <AboutPage /> } />

// 2 - Es una mejor práctica realizar las redirecciones con `Navigate` (hay que importarlo también de 'react-router-dom')
<Route path="/*" element={ <Navigate to={ <AboutPage /> } /> } />
```


---

# 🪝 156. Preparación de nuestra aplicación con rutas

1.  Iniciar `09-useContext`con las diferentes páginas que tendrá el proyecto y que se comunicarán entre si utilizando el `Context`.


2. Instalación de ['React Router'](https://reactrouter.com/es/main/start/tutorial#setup):
```
$ yarn add react-router-dom@6
```


3. Configuración de `BrowserRouter`
`BrowserRouter` es un Componente de Nivel Suprerior (Higher-Order Component "HOC").

Los HOC son componentes como cualquier otro, solo que recibe otros componentes dentro de él, como si un `<div>` fuera un HOC por contener dentro un `<h1>`, `<h2>`, `<p>`, etc.

Esto es útil ya que de esta manera, todos los hijos que estén dentro de ese HOC tendrán acceso a información que tenga este padre.

Ejemplo: en `main.jsx`
```javascript
<BrowserRouter>
    <MainApp />
</BrowserRouter>
```


---

# 🪝 155. Introducción al Context
Clase teórica sobe lo que significa el `Contex` y comparar el uso que hacíamos anteriormente sin el uso del context y cómo era la comunicación entre componentes.

<br />

---


# 🪝 154. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Context
- Provider
- useContext
- React Router
- Links y NavLinks
- CreateContext
- SPA ( Single Page Application )

El objetivo de la sección es principalmente aprender sobre el Context, el Router es un valor agregado que explotaremos mucho más en próximas secciones, pero al usar un Router, podemos explicar claramente el problema y necesidad del context.


---


# 🪝 153. Introducción a la sección

[`useContext`](https://es.react.dev/reference/react/useContext) es un Hook de React que te permite leer y suscribirte a un contexto desde tu componente.

<br />

---

# 🆕 SECCIÓN 11: Profundizando Hooks - useContext

<br />

---

# 🏁 SECCIÓN 10: Profundizando Hooks - useReducer


<br />
---

# 📝🪝 151. Resolución de la tarea - useTodos 
En esta tarea se saca toda la lógica de `TodoApp` al hook `useTodo`.

En la segunda parte de la clase crean en el hook `useTodo` las variables `todosCount`y `pendingTodosCount` y las recogemos en `TodoApp`.

---

<br />

# ⭐🪝 149. Toggle Todo - Marcar como completado o pendiente un TODO 
Clase muy fácil, se entiende muy bien el toggle y el funcionamiento.

Para añadir un condicional en la class pasamos de:
```javascript
className="align-self-center"
```

a:
```javascript
className={`align-self-center`}
```
para poder añadir variables:
```javascript
className={`align-self-center ${todo.done && 'text-decoration-line-through'}`}
```
En el ejemplo anteior, el problema es que si la variable es `false`, le añade la clase "false" al elemento, para evitarlo, hacemos un ternario:
```javascript
className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
```

---

<br />

# 💩🪝 148. Borrar un TODO 
Clase muy densa, en las próxima y con Redux, se simplificará el funcionamiento, actualmente, la comunicación va de padre a hijo, y de hijo llega a nieto

```javascript
return initialState.filter( todo => todo.id !== action.payload );
```
Con el `filter` el return está devolviendo un array con el estado inicial menos el "todo" eliminado filtrado por el `id`
    
---

<br />

# ⭐🪝 147. Guardar y Leer TODOs en LocalStorage

[Video extra de Fernando explicando el LocalStorage](https://www.youtube.com/watch?v=hb8O0qRqiSk&t=2s)

Aquí haremos persistente la información en LocalStorage.  


>LocalStorage y sessionStorage son propiedades de HTML5 (web storage), que permiten almacenar datos en nuestro navegador web. De manera muy similar a como lo hacen las cookies.  
>
>Ya hace años que los navegadores tienen la opción de guardar información en LocalStorage (Application > Storage > LocalStorage).  
>
>Las características de Local Storage y Session Storage son:
>- Permiten almacenar entre 30mb a 50mb (dependiendo del navegador) de información; incluyendo texto y multimedia
>- La información está almacenada en la computadora del cliente y NO es enviada en cada petición del servidor, a diferencia de las cookies
>- Utilizan un número mínimo de peticiones al servidor para reducir el tráfico de la red
>- Previenen pérdidas de información cuando se desconecta de la red
>- La información es guardada por domino web (incluye todas las páginas del dominio)


Se podría hacer por cookies también, pero las cookies tienen menos capacidad de almacenamiento y además, viajan con las peticiones http. El LocalStorage se mantienen en el ordenador a no ser que se elimine manualmente.  

Para conseguir almacenar información en LocalStorage, tenemos que ejecutar algo cuando los `todo` cambien, es decir, tenemos que ejecutar un efecto secundario, y eso con conseguiremos mediante un `useEffect`

Usando esta manera el `useEffect` pasamos los `todos`al `localStorage`.  

Es importante el uso de `JSON.stringify`para pasar el objeto a cadena de caracteres.  
```javascript
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
```

Solo con esto no es suficiente para mantener en memoria los `todos`. Actualmente el problema es que el `useEffect` se dispara cuando cambian los `todos`, pero también cuando el componente se carga por primera vez y en este punto, en la primera carga, está vacío.  

Por lo tanto, lo que hay que hacer es incializar nuestro "state" con los `todos` que previamente existían en el `localStorage`.  

Usaremos la tercera función del `useReducer` que es el inicializador (`initializer`). Es la función que inicializa el reducer, normalmente se declara como `init`.  

Declaramos el inicializador `initializer` (`init`):
```javascript
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
```

>`JSON.parse(todos)` es lo contrario que el `JSON.stringify(todos)`, es decir, lo vuelve a objeto.


Pasamos el inicializador (init) al `useReducer`:
```javascript
const [todos, dispatch] = useReducer(todoReducer, initialState, init);
```




---

<br />

# ⭐🪝 146. Agregar un nuevo TODO

Como tenemos el reducer, vamos a utilizarlo para agregar un elemento a la lista de tareas.  

Hay declarar los casos de uso que tendremos en nuestro reducer.  

Empezamos con "añadir un nuevo elemento" definiendolo en el `case`.  

Este case SIEMPRE tendrá asociado un return que devovlerá el NUEVO estado, este state puede ser un string, boleando, array, objeto... En nuestro caso, es un array `[]`  

Como siempre, en React, vamos a evitar mutar los arreglos y no vamos a usar el `push`, vamos a usar el Spread Operator (`...`) para recuperar los valores anteriores del array


```javascript
//todoReducer.js

switch ( action.type ) {
    case '[TODO] Add Todo':
        return [ ...initialState, action.payload ]

default:
        initialState;
}
```

En `TodoApp.jsx` es donde tenemos de aplicar el reducer.  

El `todo` es el nuevo estado que queremos insertar, es el `payload` que tenemos que enviar al reducer.

Hay que declarar la `action` (con el `type` declarado en el switch del reducer y el `payload` que es el nuevo estado) y esta `action` la enviaremos al `dispatch`.

```javascript
//TodoApp.jsx

const [todos, dispatch] = useReducer(todoReducer, initialState);

const handleNewTodo = ( todo ) => {
    const action = {
        type: '[TODO] Add Todo',
        payload: todo
    }

    dispatch( action );
    
}

```




---

<br />

# ⭐🪝 144/145. Tarea: Crear componentes y emitir eventos

Para el `TodoAdd.jsx` se podría usar un `useState`, pero como ya tenemos un hook creado para gestionar formularios, es mejor utilizar el `useForm.js`.


---

<br />

# 🪝 143. Creando el cascarón de la lista de TODOs
Aquí preparamos la maqueta que no servirá para añadir toda la programación.

Toda esta maqueta se separará en componentes ya que crecerá y al tenerlo por separado mejorará la gestión del código y será más cómodo de trabajar.

---

<br />

# 🪝 142. useReducer - Todo List

>Este Hooks forma parte de los [Hooks adicionales](https://es.reactjs.org/docs/hooks-reference.html#additional-hooks) son variantes de los [Hooks básicos](https://es.reactjs.org/docs/hooks-reference.html#basic-hooks) o solo son necesarios para casos extremos específicos.

```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

En la firma del `useReducer` tenemos:  
1. La desestructiración de un arreglo con el `state` y el `dispatch` (la acción que tiene que aplicar el `useReducer`, la acción que tiene que "despachar")
2. El `reducer`: la función que hemos visto en el capítulo anterior. `initialArg`: estado inical. `init`: función de inicialización.


El hook [useReducer](https://es.reactjs.org/docs/hooks-reference.html#usereducer) es una alternativa a `useState`. Acepta un reducer de tipo `(state, action) => newState` y devuelve el estado actual emparejado con un método `dispatch`. (Si está familiarizado con Redux, ya sabe cómo funciona).  

`useReducer` a menudo es preferible a `useState` cuando se tiene una lógica compleja que involucra múltiples subvalores o cuando el próximo estado depende del anterior. `useReducer` además te permite optimizar el rendimiento para componentes que activan actualizaciones profundas, porque puedes pasar hacia abajo dispatch en lugar de callbacks.  


Para la llamada al `useReducer`:
```javascript
const [state, dispatch] = useReducer(todoReducer, initialState);
```

`state` y `dispatch`son los valores que aparecen por defecto, pero en este caso, sería preferible cambiar `state` por `todos`, ya que aunque es un `state` lo que estamos gestionando, realmente es el listado de "todos".  

En cuanto al `dispatch`, normalmente se llama así si solo tenemos un "reducer". Si tenemos más de un "reducer" en el mismo funcitonal component, es mejor cambiar el nombre por algo más descriptivo como `dispatchTodoAction` para indicar que esta es la función que "despacha" acciones hacia ese reducer en particular.

---

<br />

# 🪝 141. Idea general de un reducer - Vía código

RECORDATORIO:  
En React, NO se tienen que añadir elementos a un array con "push", es una mala práctica.  

Explicación de un "reducer" (sin entrar todavía en el hook) para comprender la teoría.  

1. Necesitamos un estado inicial `initialState` que en este caso será un array con una colección de objetos.

Definición del estado inicial:
```javascript
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];
```

2. El Reducer: No es más que una función pura.
```javascript
const todoReducer = () => {

}
```
 
El Reducer tiene que recibir dos argumentos `state` y `action`:  

a) `state`, en este ejemplo, si no recibe un estado, el valor por defecto será el `initialState`  

b) `action`, que le da la información de como quiere que se cambie el estado. Una acción dentro del Reducer NO MODIFICA el estado del reduceer, lo que está haciendo es devolver uno NUEVO.

Definición inicial de la función "reducer" (con los argumentos "estado" y "acción" y con el return del NUEVO estado, pero sin haber aplicado la acción)
```javascript
const todoReducer = ( state = initialState, action = {} ) => {

    return state;
}
```

3. El reducer siempre tiene que devolver un estado (`state`)

```javascript
return state;
```

Definición inicial de `todos` asignando el estado inicial (`initialState`) que recibe el `todoReducer` y al que no se le aplica ninguna acción:
```javascript
let todos = todoReducer();
```

Definición del nuevo `todo`:
```javascript
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false,
}
```

Definición de la acción:
```javascript
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}
```

Ahora que tenemos definida la acción `addTodoAction` se la podemos enviar al "reducer" de manera que el nuevo estado de `todos` contenga el inicial, más el nuevo que se ha añadido.
```javascript
todos = todoReducer( todos, addTodoAction );
```

Para que devuelva UN NUEVO ESTADO hay que aplicarle una acción que hemos declarado previamente, en este ejemplo `addTodoAction`

Definición FINAL de la función "reducer" (con los argumentos "estado" y "acción", la acción a realizar y con el return del NUEVO estado, ahora sí, ya que le hemos aplicado la acción '[TODO] add todo')

```javascript
const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] add todo' ) {
        return [ ...state, action.payload ];
    }

    return state;
}
```
---

<br />

# 🪝 139. Introducción al concepto de un reducer
## ¿Qué es un Reducer?

### El Reducer es una función común y corriente o incluso más sencilla, ya que no puede ser asíncrona.  

Ejemplo de función de "Tareas por hacer" (TODOS):

```javascript
const todoReducer = () => {

}
```


### Debe de ser una función pura, es decir tiene que resolverse de manera interna.
1. No tiene que tener efectos secundarios, es decir, tiene que poder resolver todo lo que se pide internamente sin necesidad de llamar a otras funciones
2. No tiene que realizar tareas asíncronas, se tienen que ejecutar de forma síncrona
3. Debe retornar siempre un nuevo estado, no debemos mutar nunca el estado
4. No debe de llamar el `localStorage`o `sessionStorage`, son tareas síncronas pero la llamada a esas funciones son consideradas efectos secundarios y si fallan no vamos a devolver un nuevo state, vamos a devolver un error.
5. Para modificar el state no debe de requerir más que una acción que puede tener o no un argumento.


#### Porqué es importante que sea una "función pura"   
En la función "recuder" tienen que quedar claras las acciones y las modificaciones que realiza esa aplicación.   
En el reducer tiene que estar la lógica de la manipulación de cada una de las acciones que esa aplicación puede realizar.

## Ciclo de vida de un Reducer:  

### 1 STATE
En nuestro ejemplo el state es un array de `TODOS` (ahora mismo solo hay un item en el state "Comprar el pan")
```javascript
[{
    id: 1,
    todo: 'Comprar el pan',
    done: false
}]
```

### 2 SE MUESTRA EL COMPONENTE EN PANTALLA:
El "state" pasa a la vista del componente para mostrar su estado actual en la página o vista.

### 3 EL USUARIO QUIERE REALIZAR CAMBIOS
Aquí viene lo interesante, cuando el usuario quiere hacer cambios, no habla directamente con el "state", si lo hicieramos así, estaríamos mutando el state y en los reducers NO está permitido cambiar el estado.   

En cambio, la página o la vista va a crearse una acción (Create, Update, Delete) y esa acción es lo que pasamos al reducer, ya que el reducer tienen el mapa con la lógica de todas las acciones que puede realizar y una vez realizadas las acciones dentro del reducer, se va a actualizar el "state" que pasará la información a la página o vista.  

De esta manera toda la información fluye en una sola vía y queda controlada, esta es la base de Redux.



### Esta función "Reducer" tiene que devolver un nuevo estado, que es algo que hemos ido haciendo durante todo el curso. Cuando queremos aumentar un contador, no hacemos `counter ++`, lo que hacemos es `setCounter( counter + 1 )` de esa manera estamos devolviendo un nuevo valor al contador y no estamos mutando el estado anterior.

### Normalmente solo reciben dos argumentos:
    - El valor inicial (initialState)
    - La acción a ejecutar 

---

<br />

# 🪝 138. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- useReducer
- Reducers
- Teoría de un reducer
- Aplicación de TODOs
- CRUD local

Esta es una sección dedicada a comprender el concepto de un Reducer, el cual es sumamente importante para poder entrar a Redux o bien usar el contextAPI fácilmente.

---

<br />

# 🆕 SECCIÓN 10: Profundizando Hooks - useReducer

---

# 🏁 SECCIÓN 9: Profundizando Hooks - Generales


# 🪝 135. Tarea Memorize

Un componente "padre", con 5 botones (componentes) "hijos" que solo se tienen que generar la primera vez que se ejecuta el código, pero NO cada vez que se suma uno de los valores de los botones.

MI SOLUCIÓN:  
Padre.jsx:  
- Añadir el `React.memo` al component ❌ (El `React.memo` se tiene que aplicar al componente hijo, no al padre)
- Utilizar el hook `useCallback` para memorizar la función `incrementar` ✅
- Cambiar el incremento del valor (del useState) de `setValor( valor + num )` por un "call back" con el valor actual del counter (c) y a partir de ahí, sumarle `num` a ese mismo valor `setValor( (c) => c + num )`. ✅ (pero para que tenga más sentido, cambiar `c` por `oldValue`)

NO FUNCIONA:  
Sigue llamando a los hijos por cada cambio que se hace en cualqueira de ellos.

En esta definición del error tenía la respuesta, lo que se tiene que memorizar es el componente hijo, que es el que dispara el mensaje de consola "Me volví a generar :("


---

<br />

# 🪝 134. useCallback con argumentos

En el component "ShowIncrement" pasamos el valor a incrementar desde la función dentro del botón, en este ejemplo `5`.

```javascript
onClick={() => {
    increment( 5 );
}}
```

En el component "CallbackHook" recibimos el valor como `value`

```javascript
const incrementFather = useCallback(
    ( value ) => {
        setCounter( (c) => c + value );
    },
    [],
)
```

PD: Pasamos los anteriores "value" a "c" (de "counter") y ahora el "value" es el valor que enviamos desde la llamada a la función.


---

<br />

# 🪝 133. useCallback

El hook [useCallback](https://es.reactjs.org/docs/hooks-reference.html#usecallback) devuelve un valor memorizado.  

Pasa un callback en línea y un arreglo de dependencias. useCallback devolverá una versión memorizada del callback que solo cambia si una de las dependencias ha cambiado. Esto es útil cuando se transfieren callbacks a componentes hijos optimizados que dependen de la igualdad de referencia para evitar renders innecesarias (por ejemplo, shouldComponentUpdate).


El `useCallback` es parecido al `useMemo` pero sirve para memorizar funciones que solo se procesarán cuando algo cambie.  


## ERROR 1:  
Pensar que no se volverá a redibujar el componente completo usando `React.memo(...)` y toda la función del ShowIncrement dentro de los parentesis:

```javascript
import React from "react";

export const ShowIncrement = React.memo( ({ increment }) => {
    console.log("me volví a generar");
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment();
            }}
        >
            Incrementar
        </button>
    );
});
```

### Motivo del error 1:
En Javsacript, las funciones y los objetos siempre apuntan a posiciones en memoria diferentes.  

Cada vez que el componente se vuelve a dibujar, la función dentro del componente está en una posición distinta en memoria y el objeto es diferente.  

## ERROR 2:  
Utilizar el `useCallback` para la función `incrementFather` con el valor `counter` del `useState`.  

```javascript
const incrementFather = useCallback(
    () => {
    console.log("setCounter(counter + 1)");
    setCounter(counter + 1);
    },
    [],
)
```

### Motivo del error 2:
De esta manera se está llamando a la función bien, entra cada vez que se clica el botón, pero como el `counter` está memorizado, cada vez que entra al `useCallback` de la función `incrementFather` el valor es siempre "10", por lo tanto, siempre que hacemos clik, el resultado es 10+1

## ERROR 3:  
Pensar que el problema es que al usar el `useCallback` sin argumento en el array, solo se redibuja la primera vez.

Sería lógico entonces que si añadimos el `counter` en el array, quede solucionado.  

```javascript
const incrementFather = useCallback(
    () => {
    console.log("setCounter(counter + 1)");
    setCounter(counter + 1);
    },
    [counter],
)
```

### Motivo del error 3:
No es la solición adecuada, ya que cada vez que el `counter` cambia, se vuelve a memorizar `incrementFather` y por lo tanto es una función nueva y se vuelve a dibujar todo de nuevo (volvemos a la situación inicial, como si no estuvieramos usando el `React.memo(...)`).

## SOLUCIÓN:  
El `setCounter()` se puede llamar con el valor del counter (como estábamos haciebdo hasta ahora):
```javascript
setCounter(counter + 1);
```

Pero también le podemos mandar un "call back" con el valor actual del counter (value) y a partir de ahí, sumarle uno a ese mismo valor:

```javascript
setCounter( (value) => value + 1 );
```

La función `setCounter` iternamente sabe que va a cojer el valor del state y le va a sumar uno.

Además, la función `incrementFather` está memorizada y no está cambiando, React lo sabe y la mantiene en el mismo espacio de memoria. Por lo tanto, cuando pasamos `incrementFather` como un argumento `<ShowIncrement increment={incrementFather} />` y el componente está memorizado, entonces no cambia el espacio de memoria.


---

<br />

# 🪝 132. useMemo

Ejemplo de uso:
```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

El hook [useMemo](https://es.reactjs.org/docs/hooks-reference.html#usememo) devuelve un valor memorizado.  

Pasa una función de “crear” y un arreglo de dependencias. useMemo solo volverá a calcular el valor memorizado cuando una de las dependencias haya cambiado. Esta optimización ayuda a evitar cálculos costosos en cada render.   

Nos ayuda a mejorar el proceso de tareas pesadas.   

Es como el `React.memo()` pero usando el hook `useMemo`  

Para entender el uso del hook `useMemo`, creamos una función fuera de la función principal (componente), para que solo se procese cuando sea necesario, no siempre que se llame a la función.

Es una buena práctica hacer una tarea o función fuera del componente, para evitar que se vuelva a asignar la función en memoria.   

```javascript
const memoizedValue = useMemo(() => heavyStuff( counter ), [] );
```
(Si dejamos el arreglo vacío, solo lo memoriza la primera vez)

```javascript
const memoizedValue = useMemo(() => heavyStuff( counter ), [counter] );
```
Si en el array le metemos el valor que queremos controlar, memorizará cada vez que cambie ese valor, en nuestro caso `counter`.

`useMemo` memoriza un valor. `memoizedValue` solo cambiará si las dependencias de `useMemo` cambian. 

---

<br />

# 🪝 131. Memo - Método de React
Memo es un método de React, no es un hook, pero nos sirve para poder ver más adelante el funcionamiento del hook que se encarga de hacer lo mismo que este método.  

Con este ejemplo vamos a ver que solo se tiene que dibujar el hijo si tiene cambios él mismo, NO si el padre tiene cambios.  

Se usa el `{ JSON.stringify(show) }` porque no se pueden mostrar en pantalla los valores boleanos.

Para alternar el valor de "show" con el `useEffect`: 
```javascript
onClick={ () => setShow( !show ) }
```

Para evitar que se dibuje el componente hijo si no ha sufrido cambios, usamos el Memo.

Esto solo es recomendado si el componente es muy grande o cuando hay un proceso pesado y solo se quiere volver a dibujar cuando cambien sus propiedades, no las del padre.  

Para un componente muy sencillo, es más rápido que no lo memorice, pero si hay funcionalidades internas relativamente pesadas y hay una depreciación a la hora de renderizar cada componente, es buena opción poder usar el `memo`

Añadiendo dentro de "memo()" el componente, solo se ejecutará si hay cambios en ese componente hijo, no cuando se aplican cambios al componente padre.

 NO se suele utiliza el `memo()` importado directamente de react:
```javascript
import { memo } from "react"
```

Normalmente se llama de la siguiente manera `React.memo()`, de esta manera es más claro a qué hace referencia el "memo".

Si estamos trabajando en un proyecto de CRA (Create React App) nos va a funcionar porque existe la referencia a React de forma global.

Si estamos trabajando en Vite, no nos va a funcionar (a no ser que lo hayamos referenciado de forma global). Para que nos funcione, lo podemos referenciar en el mismo componente:
```javascript
import React from "react"
```
---

<br />

# 🪝 130. useLayoutEffect

[`useLayoutEffect`](https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect) La firma es idéntica a `useEffect`, pero se dispara de forma síncrona después de todas las mutaciones de DOM. Use esto para leer el diseño del DOM y volver a renderizar de forma sincrónica. Las actualizaciones programadas dentro de `useLayoutEffect` se vaciarán sincrónicamente, antes de que el navegador tenga la oportunidad de pintar.  

(Se recomiendo el uso de `useEffect` siempre que sea posible)

Tiene la misma etructura el que `useEffect`
```javascript
useLayoutEffect(() => {
    first;

    return () => {
        second;
    };
}, [third]);
```


---

<br />

# 🪝 129. useRef - Primer uso

[`useRef`](https://es.reactjs.org/docs/hooks-reference.html#useref) es un hook que nos sirve para controlar el valor de una variable. Podemos cambiar ese valor, trabajar con él, pero no va a disparar ninguna re renderización cuando se aplica un cambio.

En este ejemplo estamos usando el `useRef` para hacer referencia a un input para evitar problemas en caso de tener más de uno, es una manera limpia y rápida de seleccionar un elemento del DOM sin tener que recurrir a:
```javascript
document.querySelector('input');
```

Ni siquiera usando una class o un ID para seleccionar el elemento nos aseguramos de estar seleccionando el correcto, ya que si usamos varios componentes podrían tener la misma nomenclatura repetida.


---

<br />

# 🪝 128. Optimizaciones al código anterior

Buenas prácticas:
1. Preparar un "archivo de barril" para reducir el número de lineas y mejorar la lectura del código. Podemos desestructurar la llamada a todos los hooks del directorio.

```javascript
// OLD
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

// NEW
import { useFetch, useCounter } from "../hooks";

```

2. Para una mejor lectura del condicionarl `isLoading`, pasamos el "loading" y la "quote" a componentes independientes.


```javascript
// OLD
{
    isLoading
        ? (
            <div className="alert alert-info text-center">
                Loading...
            </div>
        )

        : (
            <blockquote className="blockquote text-end">
                <p>{ quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
            </blockquote>
        )
}

// NEW
{
    isLoading
        ? <LoadingQuote></LoadingQuote>
        : <Quote quote={quote} author={author} ></Quote>
}

```

---

<br />

# 🪝 127. Conectando ambos Hooks (EJERCICIO)
## Comunicación entre hooks

Ejercicio completo OK 
Importante, para imprimir variables dentro de una cadena:
- Entre ``
- Con `${counter}`
- `https://www.breakingbadapi.com/api/quotes/${counter}`

Mejora de Fernando:  
1. Añadir al botón `disabled={isLoading}`, de manera que mientras esté cargando esté deshabilitado el botón.   
2. Como por defecto la función "increment" ya lleva el valor "1" no es necesario pasarselo: `onClick={ () => increment() }`

---

<br />

# 🪝 126. useFetch + useCounter
## Comunicación entre hooks

### El condicional ternario:  
En este ejemplo se usa con varias líneas, no se recomienda usarlo si son demasiadas ya que dificulta la lectura del código, aquí un poco justo.

```javascript
{
    isLoading
        ? (
            <div className="aleert alert-info text-center">
                Loading...
            </div>
        )

        : (
            <blockquote className="blockquote text-end">
                <p className="mb-2">Hola mundo</p>
                <footer className="blockquote-footer">Fernando Herrera</footer>
            </blockquote>
        )

}
```

Para ver la `data` que recibimos podemos hacerlo directamente en consola:  
`console.log(data)` < Aquí la data en crudo, como lo devuelve la API, en este caso, es un 'array'    
 
`console.log({data})` < De esta manera lo pasamos a objeto: 


La API devuelve la data en un array `[]`, esto hace que se tenga que trabajar la data de la sieguiente manera:  

En determinado momento, antes de obtener la `data` su valor es 'null', pero una vez obtenemos la data, hay que trabajar con la primera posición `[0]`, ya que es un array.  

Por lo tanto, el uso de la data será este `{ data[0].quote }`:  

```
<blockquote className="blockquote text-end">
    <p>{ data[0].quote }</p>
    <footer className="blockquote-footer">{ data[0].author }</footer>
</blockquote>
```

### Desestructurando la data:
Como lo que devuelve es un array y en cierto momento la data es "null", javascript daría error al intentar desestructurar un valor "null".  

Si desestructuramos de la siguiente manera:  
```javascript
const { author, quote } = data;
```

Da error y peta la aplicación.

Para asegurarnos de que la 'data' tiene contenido hacemos el siguiente condicional `!!data && data[0]`:
```javascript
const { author, quote } = !!data && data[0];  //Hacemos condicional para evitar el "null" de la 'data'
```

Este condicional con doble negación (!!) se traduce en:  
SI la data tiene valor `!!data` entonces `&&` asigna el primer valor del array `data[0]`.  

Ahora sí ha quedado desestructurada la data y la podemos usar simplemente con `{ author }` y `{ quote }`.  

Si la API devolviera fuera un objeto, no necesitaríamos hacer todo esto.

---

<br />

# 🪝 125. useFetch - CustomHook
###### (Implementación de API [breakingbadapi](https://breakingbadapi.com))

## Comunicación entre hooks


Cada vez que cambie la url en el `useFetch` (es la variable que le pasamos al component), se disparará el `useEffect`, ya que tiene definida la url como dependencia:

```javascript
export const useFetch = ( url ) => {

    useEffect(() => {

    }, [url])
    
    return ;
}
```


Dentro del useEffect haremos la petición a Fetch API, que es la api que permite hacer peticiones http. Existen alternativas como Axios, que veremos más adelante.  

useEffect internamente puede tener tareas asíncronas, pero su callback no puede ser asincrono. useEffect espera una función pura NO una promesa, que es lo que se pasaría al hacerla "async". Espera una función pura que sirva para hacer una limpieza, NO espera una promesa.  

⛔ MAL: useEffect NO SE PUEDE USAR COMO FUNCIÓN ASÍNCRONA. De esta manera está devolviendo una promesa 
```javascript
    useEffect(async() => {

    }, [url])
```


---

<br />

# 🪝 124. Tarea - Implementar funcionalidad de Reset

La idea es añadir un botón de "reset" al formulario que vacíe los campos, es decirl, lo vuelva al estado inicial.

1 - En el form (FormWithCustomHooks.jsx) añadimos al botón el `onClick` que llame a la función. En este caso `onClick={ onResetForm }`

```
<button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
```

2 - Creamos la función en el Hook (useForm.js)

```javascript
const onResetForm = () => {
    setFormState( initialForm );
}
```

3 - Exportamos la función en el Hook (useForm.js)

```javascript
return {
    ...formState,       // Desestructuramos el formState (en este caso tiene el user, emai, pass) para que cree esas propiedades y las exponga
    formState,          // El Valor del formulario
    onInputChange,      // La función para cambiarlo
    onResetForm,        // La función para resetear el formulario
}
```

4 - En el form (FormWithCustomHooks.jsx) añadimos a la llamada al Hook `useForm` la función `onResetForm`

```javascript
const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
});
```

---

<br />

# 🪝 123. Formulario con custom Hook

(Repasar todo el proceso en los commits)

---

<br />

# 🪝 122. useEffect - Precauciones

En esta clase sí queda claro el uso de la limpieza (cleanup) en el `useEffect`


Si no hacemos el cleanup, aunque desaparezca el componente, el listener sigue ahí. Además, por cada vez que el componente se genera, se está creando un nuevo listener (el ejemplo de crear muchas veces el componente, minuto 2:15) 

Así controlamos el evento `mousemove`, pero a la que se active el useEffect al entrar al componente, SIEMPRE se disparará el "listener", es decir siempre printará en consola las coordenadas y por cada vez que vuelves a llamar al componente (en este caso, poniendo en el inout "Héctor2") el listener se activa una vez más.

```javascript
// De esta manera no podemos hacer referencia al espacio donde tenemos definida la función
window.addEventListener( 'mousemove', (event) => {
    console.log(event.x, event.y);
})

```

Para poder hacer el `cleanup` tenemos que definir la referencia a la función, al ESPACIO EN MEMORIA donde está definida la función.   

En nuestro caso la función definida es `onMouseMove`y ahora sí podemos hacer referencia con el `addEventListener` y en el return para el "cleanup" podemos desmontarla con `removeEventListener`

```javascript
const onMouseMove = ( {x, y} ) => {
    const coords = { x, y };
    console.log(coords);
}
window.addEventListener( 'mousemove', onMouseMove)
```

Ahora sí, en el `return` de la función, ya le podemos añadir el "cleanup":
```javascript
return () => {
    window.removeEventListener( 'mousemove', onMouseMove)
};
```

Es importante hacer el cleanup del componente ya que es un ERROR que se quiera acceder a el state de un componente que no existe. En versiones anteriores marcaba error o incluso llegaba a petar la aplicación, a partir de React 18, no da problemas, pero no se tiene que hacer.


Para imprimir objetos, hay que utilizar el `JSON.stringify` ya que no se pueden imprimir directamente, habría que pasarlo a un string o extraerlo de forma independiente `coords.y`, por ejemplo 

```javascript
JSON.stringify(coords)
```

---

<br />

# 🪝 120. useEffect unmount - Cleanup

Cuando llamamos el snippet del `useEffect` automáticamente genera 3 partes:

Tenemos el callback, o función de retorno formado por el cuerpo `first` y el "cleanup" (limpieza) que sería el return con el contenido `second`. 

A continuación encontramos la array con las dependencias `[third]`
```javascript
useEffect(() => {
    first;

    return () => {
        second;
    };
}, [third]);
```

### Cleanup `second`
Esta función la utilizaremos para limpiar, cancelar observables, cancelar algún tipo de subscripción o listener para evitar que siga consumiendo memoria. 


Este `if` solo muestro el component <Message /> si el `username` es exactamente igual a "Héctor2".

```javascript
{
    (username === 'Héctor2') && <Message />
}
```

Simplemente con esto, ya desaparece por completo todo el componente, no hace falta el Cleanup para hacerlo desaparecer. En este ejemplo, no es muy útil el cleanup, de hecho, no está haciendo nada, solo el console.log para saber que el componente se ha desmontado.  

Esto será útil cuando en el momento de desmontar un componente, tengamos que liberar espacio cancelando observables, algún tipo de subscripción o listener.



---

<br />

# 🪝 119. Dependencias del useEffect

`useEffect` está formado por dos argumentos:  
El primero es el callback, es decir, la función que se va a disparar.  
El segundo son las dependencias, que es un array en el cual marcamos las condiciones que van a hacer que se dispare el `useEffect`. 

Si llamamos el `useEffect` sin dependencias (no se recomienda poner un `useEffect` sin dependencias) este se disparará cada vez que el componente es redibujado (al cargarse o al hacer cambios en cualquier elemento que lo forma).  

Seguramente este no sea el comportamiento que queremos, ya que lo normal sería que el `useEffect` esté vinculado a una acción en concreto, no a todos los cambios del componente.  

> React recomienda tener UN EFECTO POR CADA ACCIÓN que se quiera ejecutar, es decir, en lugar de tener un solo efecto que haga muchas acciones, es mejor tener EFECTOS ESPECÍFICOS por cada efecto secundario o acción que se quiera ejecutar.


EJEMPLO [NO RECOMENDADO]: Se ejecuta SIEMPRE que se redibuja el componente, ya que no tiene dependencias.

```javascript
useEffect( () => {
    console.log('useEffect called!');
});
```

Si en las dependencias pasamos un array vacío, el `useEffect` solo se ejecutará la primera vez que se renderize el componente:

```javascript
useEffect( () => {
    console.log('useEffect called!');
}, []);
```

Si en las dependencias pasamos la referencia del formulario (`formState`) solo se ejecutará cuando haya cambios en el formulario (y la primera vez que se carga el componente):

EJEMPLO: Se ejecuta SOLO si hay cambios en el FORM.

```javascript
useEffect( () => {
    console.log('formState changed!');
}, [formState]);
```

Si en las dependencias pasamos la referencia del email dentro del formulario (`email`) solo se ejecutará cuando haya cambios en el email (y la primera vez que se carga el componente):

EJEMPLO: Se ejecuta SOLO si hay cambios en el EMAIL del formulario.

```javascript
useEffect( () => {
    console.log('email changed!');
}, [email]);
```
---

<br />

# 🪝 118. [useEffect](https://es.reactjs.org/docs/hooks-effect.html) - SimpleForm

useEffect es uno de los hooks más usados junto con useState.  

Antes de empezar con `useEffect`, necesitamos mantener el "estado", es decir, mantener la información del formulario.  

Hay más hooks que nos permiten mantener estados, pero hasta el momento, el que conocemos es `useState`.  

```javascript
const [formState, setFormState] = useState({
    username: 'Héctor',
    email: 'hector@gmail.com'
});
```

Desestructuramos el `formState`:  
```javascript
const { username, email } = formState;
```

De esta manera ya podemos llamar al valor en los inputs `value={ email }`:
```
<input
    type="email"
    className="form-control mt-2"
    placeholder="email@loquesea.com"
    name="email"
    value={ email }
/>
```

Ahora ya podemos ver el valor asignado en los inputs, pero no se pueden cambiar porque React "trabaja en una sola vía", quiere decir que si se hace un cambio en el state, se tiene que volver a dibujar, es decir, llamar a una función que vuelva a pasar por el state.  

Creamos una función que nos permita hacer cambios en los inputs:


```javascript
const onInputChange = ( event ) => {
    console.log(event);
}
```

```
<input
    type="email"
    className="form-control mt-2"
    placeholder="email@loquesea.com"
    name="email"
    value={ email }
    onChange={ onInputChange }
/>
```


### PROCESO DE OBTENCIÓN DE DATOS:

Hacemos console log dentro de la función, de manera que cada vez que cambie el input tocando cualquier tecla, se dispare la función `onChange={ onInputChange }`  

1 - `console.log(event)`
Así recibimos toda la información vinculada al evento. 
```javascript
const onInputChange = ( event ) => {
    console.log(event);
}
```
Podemos ver TODA la información.  


2 - `console.log(event.target)`
```javascript
const onInputChange = ( event ) => {
    console.log(event.target);
}
```
Con `event.target` recibimos el input completo en html.
```
<input type="email" class="form-control mt-2" placeholder="email@loquesea.com" name="email" value="hector@gmail.com">
```


3 - `console.log(event.target.value)`
```javascript
const onInputChange = ( event ) => {
    console.log(event.target.value);
}
```
Con `event.target.value` recibimos el valor del input con el cambio aplicado al valor inicial.
```
Héctor2
```

4 - `console.log(event.target.name)`
```javascript
const onInputChange = ( event ) => {
    console.log(event.target.name);
}
```
Con `event.target.name` recibimos el nombre del input que se está cambiando.
```
email
```

5 - Del `event`, desestructuramos el `target`
```javascript
const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log({ name, value });
}
```
Recibimos el objeto con los dos valores indicados y m´s información del objeto:
```
{name: 'username', value: 'Héctor2'}.
```

Ahora ya tenemos la información que necesitamos (name, value) del input al que estamos aplicando cambios para poder aplicar el `setFormState`


### ASIGNAR EL VALOR AL INPUT:

En la función `onInputChange`, llamamos al `setFormState` para registrar el valor del input.  

Antes de nada, desestructuramos el `formState`, ya que podría tener muchos otros valores que no queremos perder, para eso usamos Spread Operator `...formState,`  

A continuación, usamos las "propiedades computadas el objeto" y hacemos referencia al "name" de la siguiente manera para asignarle el nuevo valor:  
`[ name ]: value`

Este es el resultado de la función

```javascript
const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [ name ]: value
    });
}
```



---

<br />

# 🪝 117. Exponer métodos del Hook

## PARA CREAR FUNCIONES DENTRO DE UN HOOK Y PODERLAS REUTILIZAR: 
### Declarar la función dentro del hook (useCounter.js):

```javascript
const increment = () => {
    setCounter( counter + 1);
}
```

### Enviar la función desde el hook (useCounter.js):
Pasar el resultado de la función al `return`:  
```javascript
return {
    counter,
    increment,
}
```
(el `counter`ya se lo estábamos pasando)


### Recibir la función en el component (CounterWithCustomHook.jsx):
Desestructuramos el contenido que recibimos de `useCounter.js`, es necesario tener importado el hook `import { useCounter } from "../hooks/useCounter";`  
```javascript
const { counter, increment } = useCounter();
```
(el `counter`ya se lo estábamos recibiendo)

### Usar la función en el component (CounterWithCustomHook.jsx):
```javascript
onClick={ increment }
```

Una forma sencilla de controlar que el contador no llegue a valores negativos.  
```javascript
const decrement = () => {
    if ( counter === 0 ) return; // Aquí sale de la función.
    setCounter( counter - 1);
}
```

### Usar onClick con y sin argumentos:
Cuando hacemos `onClick`, estamos pasando el *evento del click* como **primer argumento**.  

#### VERSIÓN 1 SIN ARGUMENTO:
Si la función no tienen ningún argumento:  
```javascript
const increment = () => {
    setCounter( counter + 1);
}
```
Se puede hacer la llamada a la función dentro del onClick sin ningún problema:
```javascript
onClick={ increment }
```

#### VERSIÓN 2 CON ARGUMENTO:
La función dentro del onClick, en realidad lo que está haciendo es lo siguiente:
```javascript
onClick={ () => increment() }
```


Si la función tiene que recibir un argumento la declaramos así:  
```javascript
const increment = ( value = 1 ) => { // Si no se pasa el argumento "value", por defecto será "1"
    setCounter( counter + value );
}
```

Ahora sí podemos pasar el valor que va a incrementar:
```javascript
onClick={ () => increment(2) }
```



`[object Object]` es la representación `toString` de un objeto, es decir, deja de funcionar como `object` y pasa a ser un `string`



---


<br />

# 🪝 116. useCounter - CustomHook

La ventaja de crear un custom hook es que lo puedes reutilizar en toda la aplicación y no tener que repetir toda la lógica y "carpintería" para algo tan sencillo.  

Nuestros hooks los añadimos en la carpeta `hooks` y es un estandar que empiecen con 'use', en este caso `useCounter.js`.   

Un hook no es más que una simple función con un `return`que puede ser un objeto `return{}`, un array `return[]`, un boleano `return true`, puede ser lo que necesitemos que devuelva.  

Dependiendo de lo que devuelva, a la hora de usarlo habrá que definirlo como objeto:  
```javascript
const {} = useCounter();
```
O como array:
```javascript
const [] = useCounter();
```

En nuestro caso, lo hacemos como objeto, ya que la desestructuración ya que nos permite desestructurar exactamente lo que necesitamos por nombre y además es la práctica más habitual.  

Para aplicar la desestructuración al objeto:  
```javascript
const { counter } = useCounter();
```

Y poder usar el valor dentro del código:  
```javascript
{ counter } 
```

Normalmente los Customs Hooks están vinculado con hooks propios de React, en este caso el `useState`.

---

<br />

# 🪝 115. [useState](https://es.reactjs.org/docs/hooks-state.html)  [IMPORTANTE] ⭐

useState es el hook más sencillo.  

## useState con un valor:

Podemos inicializar el useState con un valor:  
```javascript
const [counter, setCounter] = useState(10)
```

Al que luego hacemos referencia de la siguiente manera:  
```javascript
{ counter }
```

Y que podemos manipular así:  
```javascript
onClick={ () => setCounter( counter + 1 ) }
```


Dicho esto, podemos inicializar useState con:
- **valor primitivo** (el ejemplo anterior)
- **array**
- **objecto**, 
- **la instancia de una clase**
- o lo que necesite el state...


## useState con un objeto:
```javascript
const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
})
```

Al que luego hacemos referencia de la siguiente manera:  
```javascript
{ counter.counter1 }
```

NO LO PODEMOS MANIPULAR ASÍ, ya que es un objeto y cambia el state de todos los valores del objeto:  
```javascript
onClick={ () => setCounter( counter.counter1 + 1 ) }
```

## useState con un objeto DESESTRUCTURADO:
```javascript
const [{counter1, counter2, counter3}, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
})
```

Al que luego hacemos referencia de la siguiente manera:  
```javascript
{ counter1 }
```

NO LO PODEMOS MANIPULAR ASÍ, ya que es un objeto y cambia el state de todos los valores del objeto:  
```javascript
onClick={ () => setCounter( counter1 + 1 ) }
```

Para ver el estado de los hooks, vamos a chrome, en la pestaña de React "Components" veremos que el estado del objeto al iniciar la aplicación es:  
```javascript
{counter1: 10, counter2: 20, counter3: 30}
```

Pero al hacer click en el botón el State pasa a ser `11`.  

> NOTA: Nada impide cambiar un estado dentro de un useState (pasar de objeto a numérico), trabajando con typeScrript, podríamos obligar a que no cambie de estado.

Para manipular el objeto con useState, hay que preservar los valores anteriores.  
Al llamar a `setCounter`, lo que estamos haciendo es establecer el nuevo valor del state.  

```javascript
onClick={ 
    () => setCounter( {
        counter1: counter1 + 1,
        counter2: counter2,
        counter3: counter3
    } )
}
```

Para simplificarlo:  
VERSIÓN 1:  
```javascript
const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
})
```

Como el valor és el mismo, no hace falta volver a asignarle el valor
```javascript
onClick={ 
    () => setCounter( {
        counter1: counter1 + 1,
        counter2, 
        counter3,
    } )
}
```

VERSIÓN 2:  
Con `state` y desestructurando el propio `state` para facilitar el uso de "Spread Operator", ("esparcir" las propiedades), lo que nos permite copiar rápidamente todo o parte de una array u objeto existente en otra array u objeto.

```javascript
const [ state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
})

const {counter1, counter2, counter3 } = state
```

Usamos `...` en "state" para recuperar el valor del resto de los valores del objeto y solo aplicamos el cambio al que queremos modificar.  
```javascript
onClick={ 
    () => setCounter( {
        ...state,
        counter1: counter1 + 1,
    } )
}
```


<br />

---
# 🪝 113. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Profundizar en el tema de los Hooks
- Crear otros customHooks
- useState
- useCounter - Personalizado
- useEffect y sus precauciones
- useRef
- useFetch - Personalizado + optimizaciones
- useLayoutEffect
- Memo
- useMemo
- useCallback

Estos son los Hooks relativamente simples, aún hay mas que explicaremos más adelante, pero en esta sección nos enfocaremos en estos trabajos y para qué nos pueden servir.  
Adicionalmente estaremos dejando las bases para lo que será una sección de pruebas sumamente interesante después.  

<br />

---

# 🆕 SECCIÓN 9: Profundizando Hooks - Generales

---

# 🏁 SECCIÓN 8: Testing - Probando la aplicación de GifExpert


## 🔬 110. Pruebas de tarea (sobre GifExpert)

### TODO: Hacer las pruebas, por ejemplo:  
✅ Tomar un snapshot  
🔳 Escribir en input i enviar formulario y ver qué pasa  
🔳 Que pasa si se envía la misma cataegoria  
🔳 Que pasa si se envía una cataegoria diferente  

<br />

---

## 🔬 109. Pruebas sobre customHooks
En la versión 16 y 17 de React se utilizaba el [React Hooks Testing Library](https://react-hooks-testing-library.com).  

En la versión 18 no se recomienda utilizarlo, ya no funciona, pero se ha fusionado con React Testing Library (RTL), por lo tanto, los hooks están integrados en React Testing Library (RTL).  


Con los Hooks tenemos que evaluar:  
- Elementos de entrada
- Salida

Por lo general los Hooks usan sus propias funciones para cambiar el estado, pero en este caso, hacemos nosotros el cambio manualmente de `isLoading: true` a `isLoading: false`

Los Hooks solo pueden ser llamados dentro del cuerpo de un Functional Component.  

Aparentemente, se podría hacer de la siguiente manera:  

```javascript
const { images, isLoading } = useFetchGifs();
```

Pero no funciona porque los Hooks necesitan parte del ciclo de vida de los componentes de React, no se pueden evaluar de forma aislada.  

Para eso podemos usar la funcion `RenderHook` de React Testing Library (antes (React 16/17) se tenía que importar de "React Hooks Testing Library", pero ya está integrado en RTL).  

Creamos un Call Back (una función) en la que mandamos llamar el hook "useFetchGifs" pasándole la categoría 'APM'

```javascript
renderHook( ()=> useFetchGifs('APM') );
```

`renderHook` devuelve varias cosas, así que lo desestructuramos:
```javascript
const { result } = renderHook( () => useFetchGifs('APM') ); 
```
Obteniendo este objeto:  
`{ current: { images: [], isLoading: true } }`

Desestructuramos el resultado "result.current"  
```javascript
        const { images, isLoading } = result.current;   
```
Y ya podemos hacer los Aserts:  
```javascript
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
```


El segundo test, bastante denso, con un async/await e importando `waitFor`de RTL  

<br />

---
## 🔬 108. Hacer un mock completo de un Custom Hook
Hace un Mock completo de este path "../../src/hooks/useFetchGifs":  
```javascript
jest.mock('../../src/hooks/useFetchGifs');  
```
(Hay que importarlo previamente `import { useFetchGifs } from "../../src/hooks/useFetchGifs";`)

Una vez dentro del test, usamos `mockReturnValue`, una función de Jest para simular que se dispara la función:  
```javascript
useFetchGifs.mockReturnValue({      
    images: [],
    isLoading: true
});
```


<br />

---
## 🔬 107. Pruebas del componente GifGrid - Mock customHook

Este component trabaja con un Custom Hook, lo que hace un poco más complicado el testeo.  

Pero en este test solo nocs centramos en probar el GifGrid, el custom hook useFetchGifs se testeará a parte, para simplificar los tests.  

Tienen que ser tests unitarios, no es obligatorio comporbar todo lo que hay dentro del componente, solo el funcionamiento del componente en sí.

<br />

---

## 🔬 106. Jest Functions
Tenemos que evaluar el comportamiento de una función, en nuestro caso, que onNewCategory sea llamada con el valor que tenía la caja de texto.  

onNewCategory, es una función que se está enviando como argumento a "AddCategory" y además esa función es obligatoria, definida con propTypes como .isRequired  

La función cuando se está evaluando en el test es esta `()=> {}`  

¿Cómo evaluamos esa función? Hay que saber si ha sido llamada, con qué valor ha sido llamada, que se haya llamado una vez, etc  

Así definimos una función "Mock" con Jest (en testing llamamos "Mock" a una simulación).  

```javascript
const onNewCategory = jest.fn();
```

  

<br />

---


## 🔬 105. Simular un submit del formulario

Tenemos que hacer dos pruebas
1. El submit del form
2. El valor del input (si va vacío/si tiene datos)

NOTA:  
React testing Library no detecta el "form" si no le añadimos el `aria-label="form"`  


<br />

---

## 🔬 103. Pruebas en el helper getGifs

No nos vamos a detener a analizar cada parte del código de la función.  
Sí analizaremos el resultado de la función, pasando una categoría, tiene que devolver una respuesta concreta, pero no entramos a testear el `fetch`ni nada en concreto.

Si estamos evaluando el funcionamiento de una API externa, no podemos estar seguros de la respuesta que va a dar.  
Por ejemplo, no podemos hacer un console.log de lo que devuelve la función pasando por la api y compararlo ya que podrían añadir nuevos gifs.  

APUNTE:  
Si la función es asíncrona, el test también lo hacemos como "async" `test('Tiene que retornar un array de gifs', async() => {` y podemos usar el "await" al llamar la función `const gifs = await getGifs(category);`  

✕ TEST QUE NO NOS SIRVEN PARA CONFIRMAR EL FUNCIONAMIENTO DE LA FUNCIÓN:  
1. No sirve pillar la respuesta que nos da el `console.log(gifs)` y compararla con lo que devuelve el test, podrían haber cambios en la API
2. Si supieramos que SIEMPRE va a devolver un array de 20 elementos, si la categoría devuelve menos de 20 resultados, petaría, pero no querría decir que falla nuestra aplicación. Por lo tanto, `expect( gifs.length ).toBe( 20 );` no sería un buen test.


✓ TEST QUE SÍ NOS SIRVEN PARA CONFIRMAR EL FUNCIONAMIENTO DE LA FUNCIÓN:  
1. Para asegurar que por lo menos devuelva un elemento en el array `expect( gifs.length ).toBeGreaterThan( 0 );` (pero no nos aseguramos de que sea un array de gifs)
2. Para asegurar que devuelva un arreglo de gifs como mínimo con la estructura que tenemos marcada en la función (id, title, url)  
```javascript
expect( gifs[0] ).toEqual({
    id: expect.any( String ),
    title: expect.any( String ),
    url: expect.any( String ),
});
```
(Simplemente evaluamos que devuelvan "strings", no miramos que la url tenga "http" ni nada parecido)

<br />

---

## 🔬 102. Pruebas del componente - GifGridItem

`screen.debug();`  
Con screen.debug en el test, imprimimos la estructura completa de lo que estamos testeando, lo que permite ver cada elemento html  

Uso de `screen`  
Se recomienda desestructurar el objeto generado con 'screen', en este caso "screen.getByRole('img')"  
Para evitar repetir `screen.getByRole('img')` y tener que hacer referencia a cada atributo así `screen.getByRole('img').alt` o así `screen.getByRole('img').url`  
<br />

Lo desestructuramos  
```javascript
const { src, alt } = screen.getByRole('img'); // Aquí está el objeto desestructurado
```  

Para usarlo de la siguiente manera:  
```javascript
expect( src ).toBe( url );      // expect(screen.getByRole('img').src).toBe( url );
expect( alt ).toBe( title );    // expect(screen.getByRole('img').alt).toBe( title );
```  


<br />

---

## 🔬 100. Implementando PropTypes

Instalar las PropTypes (en termminal):  
`yarn add prop-types`
<br />



> ### TAREA:
> 1. Añadir PropTypes
>     - title obligatorio
>     - url obligatorio
> 
> 2. Evaluar el snapshot  


### 1 - Añadir PropTypes  
En el component `GifItem.jsx`, hacer el import de PropTypes:  
`import PropTypes from 'prop-types'` 

A continuación, en el component, definir las PropTypes:  
```javascript 
GifItem.propType = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
```

### 2 - Evaluar el snapshot  
En el test `GifItem.test.jsx`:

- Importar el component a testear
- Importar el `render` de `@testing-library/react`
- Declaración del grupo de pruebas referentes al component `<GifItem />`
- Declarar las variables a testear (`title`, `url`)
- Test del render al objeto `container`
- "Expect": `expect(container).toMatchSnapshot();`

```javascript 
// Contenido de "GifItem.test.jsx"
import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem />", () => {
    const title = 'el título';
    const url = 'http://www.google.com';

    test("Tiene que hacer match con el snapshot", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
});
```

IMPORTANTE:  
Esta prueba no asegura que la imagen o el título estén correctamente colocados, solo asegura que las piezas del html están sintácticamente igual que cuando se generó. Es útil, pero no en componentes que cambian mucho

---

## 🔬 99. Configurar el ambiente de pruebas
Seguir los pasos indicados en el documento `vite-testing-config.md`.


# Instalación y configuracion de Jest + React Testing Library
## En proyectos de React + Vite

1. Instalaciones:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:
```
yarn add --dev whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel __babel.config.cjs__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.cjs__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```



## 🔬 98. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Seguir el camino de las pruebas
- Pruebas en componentes específicos
- Pruebas en componentes de forma individual
- Pruebas con customHooks
- Esperar cambios en un customHook
- Simular eventos en inputs y formularios
- Simular llamadas a funciones
- Evaluar si existen elementos en el componente

En esta sección seguiremos expandiendo todo lo que habíamos visto anteriormente en otras secciones de pruebas, pero ahora veremos más a detalle los temas y adicionalmente introduciremos nuevos conceptos y nuevos tipos de pruebas.

<br />

---

## 🔬 SECCIÓN 8: Testing - Probando la aplicación de GifExpert


---


# SECCIÓN 7: Generando el build de producción y despliegues


# 95. Desplegando aplicación en Github Pages
# 96. Actualizar Github pages
Lo que tenemos en el repositiorio es un proyecto de Node.  
Para publicar en Github Pages:
- Hacer el `build` para que genere la carpeta `dist`
- Una vez hecha la carpeta, renombrarla a `docs`
- Subir el repositorio a GitHib
- Para que funcione en Github Pages hay que actualizar las rutas dentro del index.html de la carpeta docs para que lo haga de forma relativa a donde está

<br />

---

# 94. Subir a GitHub
> - [GitHub](https://github.com/): Plataforma de alojamiento de código para el control de versiones y la colaboración.


<br />

---
# 93. Preparación del proyecto - Github Pages
Arrancar git  

Terminal:  
`git init`

<br />

---

# 92. Desplegar en Netlify
Para desplegar aplicaciones sin BackEnd  
[Netlify](https://www.netlify.com/)

https://festivaldegifs.netlify.app


<br />

---

# 91. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Aprender cómo realizar backups a repositorios de Git
- Subir nuestro repositorio a GitHub
- Uso de Github Pages
- Desplegar nuestra aplicación de React
- Generar build de producción de nuestra aplicación

Aunque es una sección pequeña, les puede servir para desplegar infinidad de proyectos de React de forma gratuita, sin contar que tendrán respaldos de sus proyectos por si llegan a perder su trabajo que tenían localmente en su computadora.





<br />

---


# SECCIÓN 7: Generando el build de producción y despliegues


---


# SECCIÓN 6: GifExpertApp - Aplicación

# 88. Archivos de barril
Los "Archivos de barril" sirven para unificar los compoents, o heplers, o hooks en un solo archivo encargado de exportar, de manera que en ua sola linea se pueden hacer todos los imports, como trabaja React:  

```javascript
import { useEffect, useState } from "react";
```
De manera que podemos pasar de esto:
```javascript
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
```

A esto:
```javascript
import { AddCategory, GifGrid } from "./components";
```

Si el archivo de barril se llama index.js, no hace falta especificar el nombre, ya que por defecto, si hasces una llamada a la carpeta sin definir el archivo, carga el index (como en todos los lenguajes de programación)




<br />

---
# 87. Mostrar mensaje de carga
VERSIÓN 1: Condicional ternario  

```javascript
isLoading
? (<h2>Cargando...</h2>)
: null
```

VERSIÓN 1.1: Condicional ternario (sin los paréntesis, también funcionaría) 

```javascript
isLoading
? <h2>Cargando...</h2>
: null
```

VERSIÓN 2: if corto con una sola condición.  
Si isLoading = true, ejecuta lo que hay después de "&&"  
Si isLoading = false, ya no continua y salta  
"&&" se conoce como "AND LÓGICO"  
```javascript
isLoading && (<h2>Cargando...</h2>)
```


<br />

---

# 86. Custom Hook - useFetchGifs (clase muy densa, repasar)

> Construir tus propios Hooks te permite extraer la lógica del componente en funciones reutilizables.

Los Hooks tienen que empezar siempre por "use", es un estandar de React.  

Un Hook no es más que una función que devuelve algo, en este ejemplo "useFetchGifs" devuelve un objeto.  

MÁS INFO:  
[Construyendo tus propios Hooks](https://es.reactjs.org/docs/hooks-custom.html)


<br />

---

# 85. className - Clases de css

VERSIÓN 1  
Desestructurando el objeto para sacar las props que necesitamos de manera independiente
```javascript
images.map( ({id, title, url}) => (
    <GifItem 
        key={id} 
        title={title}
        url={url}
    />
 ) ) 
```

VERSIÓN 2  
Pasando como props "image" para enviar todas las propiedasdes completas

```javascript
images.map( ( image ) => (
    <GifItem 
        key={image.id} 
        title={image.title}
        url={image.url}
    />
 ) ) 
```

VERSIÓN 3 ESPARCIR LAS PROPS  
Esparcir las "props", de esta manera el component recibe TODAS las properties
```javascript
images.map( ( image ) => (
    <GifItem 
        key={image.id} 
        { ...image }
    />
    ) ) 
```

<br />

---


# 84. Mostrar los títulos de las imágenes

### IMPORTANTE:  
useEffect no puede usar "async", tiene que retornar una función, no una promesa.  

```javascript
// ESTO NO ES CORRECTO:
useEffect ( async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
}, []);
```

```javascript
// CORRECTO VERSIÓN 1, con "then":
useEffect ( () => {
    getGifs(category)
    .then( newImages => setImages(newImages));
}, []);
```

```javascript
// CORRECTO VERSIÓN 2, con función asíncrona independiente:
const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
}

useEffect ( () => {
    getImages();
}, []);
```
Esta función SÍ puede ser asíncrona, podemos pasarle la promesa y luego llamar a esta función dentro del "useEffect" para que no se ejecute siempre, solo la primera vez que carga el componente  
<br />

### IMPORTANTE:  
Para hacer el bucle de los elementos, hay que partir del "map" que se genera con el `useState`:  
```javascript
const [images, setImages] = useState([]);
```

Por lo tanto, el "map" parte de "images" de manera que se usa asi:

```javascript
{
    images.map( ({id, title}) => ( 
        <li key={id}>{ title }</li>
    ) ) 
}
```

<br />

---

# 83. Demostración de producción rápido

Para generar el build de producción, simplemente hay que llamar al comando `yarn build`, que genera el bundel final, en la carpeta "dist" que sería el contenido a subir al hosting.

<br />

---

# 82. useEffect

Hay que solucionar dos problemas muy comunes cuando estamos empezando en React:  
1. ¿Por qué se está llamando dos veces?
2. ¿Por qué se está llamando cada vez que se hace algún cambio?  

React, cada vez que detecta un cambio, lo vuelve a ejecutar para redibujar, es decir, está volviendo a ejecutar el componente.  
  
Hay ciertas funciones especiales que pueden sobrevivir y mantener el estado.  
  
También hay funciones que le pueden decir a React que se ejecute solo una vez, y aunque hayan nuevos cambios, no se vuelve a ejecutar.  

### 1. Solución a ¿Por qué se está llamando dos veces?
Quitando el `<React.StrictMode>` del `main.jsx` solucionamos que se ejecute dos veces cada vez que hacemos una acción.

> NOTA:
> Se puede dejar el strict mode en modo DEV y PROD, ya que no tiene impacto cuando se lleva a producción con el `build`  
> https://reactjs.org/docs/strict-mode.html

### 2. Solución a ¿Por qué se está llamando cada vez que se hace algún cambio?
Usar el hook de React `useEffect`.  

`useEffect` sirve para disparar efectos secundarios, es decir, algo que queremos ejecutar cuando algo suceda, por ejemplo, cuando el 'counter' cambie, que se dispare un efecto o que se dispare solo cuando se renderice por primera vez el componente.  

El Hook useEffect está formado por dos partes:  
La primera la función que se ejecuta:  
```javascript
    () => {
        //Aquí va el código que queremos ejecutar en este "useEffect"
        getGifs(category); 
    }
```
La segunda se definen las dependencias dentro de un array.  
Si se dejan las dependencias vacías, significa que este hook (useEffect) solo se va a disparar la primera vez que se crea el componente.  
```javascript
useEffect( () => {
    //Aquí va el código que queremos ejecutar en este "useEffect"
    getGifs(category); 
}, [ ] ); // En el array se van a definir las dependencias. 
```


<br />

---

# 81. Fetch API - Obtener las imágenes deseadas

> NO LLAMAR NUNCA LA EJECUCIÓN DE UNA FUNCIÓN DENTRO DE UN FUNCTIONAL COMPOENT!  
> Cada vez que se llama al Functional Component `<GifGrid />` y se renderiza, vuelve a ejecutar la función `getGifs(category)`


PENDIENTE EN ESTA CLASE:  
Mover la llamada a la función `getGifs(category)` fuera del functional component para que NO se dispare cada vez que se llama al functional component.

---

# 80. GifGrid - Nuevo componente
Este componente mostrará cada grid independiente.

---

# 79. Validar que sean únicos los nombres

> IMPORTANTE: 
> No usar el index "i" del `.map()` en el "key" para solucionar el problema con el Unique Key que dispara React ya que ese valor lo usa React para saber cuando un elemento se eliminó.
> Si borramos el 0, la posición 0 sigue exsistiendo.
> TOTAL, que no se use la i del map para las unique keys. 

### MAL:
```javascript
categories.map( (category, i) => {
    return <li key={ i }> { category } </li>
} ) 
```

---

# 78. Emitir un evento al padre
## OBJETIVO: Mejora del componente AddCategory, ya que lo único que tiene que hacer es enviar el valor a insertar

```javascript
<AddCategory setCategories={ setCategories }/>
```

No está mal pasar la función ahí directamente, pero seríam mejor solo enviar el valor a insertar.

Pero mejor separarlo de manera que quede así:
```javascript
<AddCategory onNewCategory={ ( value ) => onAddCategory(value) }/>
```

En realidad podría ser así:
```javascript
<AddCategory onNewCategory={ onAddCategory }/>
```


> IMPORTANTE: 
> usar el prefijo "on" para eventos que disparen los botones, o lo que sea.
> En este caso `onAddCategory` 

<br />

---
# SECCIÓN 6: GifExpertApp - Aplicación
# 08-journal-app
