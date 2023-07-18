# MssFeGcPokeApp072023

Básicamente me ha dado tiempo de hacer lo siguiente:
- Hacer el apartado visual con bootstrap de la web con las páginas que se pedia y usando un navbar
- Página home de bienvenida
- About con info
- Login (vacio, no ha dado tiempo)
- Página de Pokemon con una lista de 12 pokemon aleatorios de la API de un máximo total de 1000
- Cada pokemon aparece en la casilla de un grid con su foto, el nombre y un botón "ver más"
- "Ver más" abre una vista detalle en primer plano de la tarjetita en cuestion añadiento alguna información más (hay un problema con el apartado "tipos" porque no he conseguido encontrar la ruta correcta en la api"
- La vista detalle tiene un botón cerrar
- Cada vez que se refresca la página cambia la lista

Estaba implementando la barra de busqueda (que lo tengo hecho en la app de Rick and Morty) pero estaba teniendo problemas entre componentes porque el navbar y su barra de búsqueda está en app.component y todo el código de las listas en pokemon.component. Como petaba todo al estar inacabado he ido retrocediendo hasta una version de la app que funcionaba. 

Los componentes utilizan un service (pokemon.service.ts) con unos GET para coger la info de la API. 

![image](https://github.com/Santbrau/mss-fe-gc-poke-app-07-2023/assets/135845147/c3e1a274-d4d4-4417-89cc-4fd41d50e798)

![image](https://github.com/Santbrau/mss-fe-gc-poke-app-07-2023/assets/135845147/3062e3a0-7736-4029-9ea4-4f1b8db93f95)

![image](https://github.com/Santbrau/mss-fe-gc-poke-app-07-2023/assets/135845147/ac665e8b-3c2c-495f-a1dd-012380649b30)






This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
