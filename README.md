# Star Wars React

Aplicación web de exploración del universo Star Wars construida con React. Consume datos de la [SWAPI](https://swapi.dev/) (Star Wars API) y muestra personajes y planetas con imágenes de [Star Wars Visual Guide](https://starwars-visualguide.com/).

## Qué hace

- **Lista de personajes** — Muestra tarjetas con nombre, género, color de pelo y ojos. Incluye paginación (Anterior / Siguiente).
- **Lista de planetas** — Misma estructura para planetas con clima, gravedad y terreno.
- **Detalle de personaje** — Vista individual con imagen y atributos (nombre, año de nacimiento, género, altura, etc.).
- **Detalle de planeta** — Vista individual con clima, gravedad, terreno, diámetro y períodos orbital/rotacional.
- **Favoritos** — Marca personajes o planetas con el corazón y consúltalos desde el menú desplegable del header.
- **Navegación** — Rutas con React Router entre home, planetas y páginas de detalle.

## Stack tecnológico

| Tecnología | Versión |
|------------|---------|
| React | 18 |
| React Router | 5 |
| Bootstrap | 5 |
| Font Awesome | 6 |
| Create React App (react-scripts) | 5 |
| Node.js | >= 18 |

## Arquitectura

```
src/
├── components/       # App principal y spinner
├── shared/           # Header, footer, cards reutilizables
├── views/            # Páginas: personajes, planetas, detalle
├── store/
│   ├── flux.js       # Estado global y acciones (fetch a SWAPI)
│   └── appContext.js # Context API + inyección de store
└── utils/swapi.js    # Helper para extraer IDs de URLs de SWAPI
```

El estado global usa un patrón similar a **Flux**: un `store` centralizado con acciones async (`getCharacters`, `getPlanets`, `addFavorite`, etc.) inyectado vía React Context.

## APIs externas

- **Datos:** `https://swapi.dev/api/people/` y `https://swapi.dev/api/planets/`
- **Imágenes de personajes:** [Star Wars API (akabab)](https://akabab.github.io/starwars-api/) — Wikia/Fandom
- **Imágenes de planetas:** placeholder generado con el nombre del planeta

## Cómo levantar el proyecto

```bash
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build de producción en `build/` |
| `npm test` | Ejecutar tests |

## Rutas

| Ruta | Vista |
|------|-------|
| `/` | Listado de personajes |
| `/planetas` | Listado de planetas |
| `/personaje/:id` | Detalle de un personaje |
| `/planeta/:id` | Detalle de un planeta |

## Notas

- Proyecto educativo creado para practicar React, fetch, Context API y React Router.
- Requiere conexión a internet para cargar datos e imágenes de las APIs externas.
