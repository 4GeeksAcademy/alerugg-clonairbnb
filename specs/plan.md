# Plan de implementación

Referencias: `context.md` (requisitos) y `specs/spec.md` (vistas y decisiones).

## 1. Arquitectura

- `app/`: rutas, páginas Next.js y `layout.tsx`.
- `components/`: componentes reutilizables, uno por archivo.
- `hooks/` (raíz del proyecto): hooks reutilizables, como `usePhotoNavigation`.
- `types/`: interfaces y tipos TypeScript.
- `data/`: datos mock locales.
- `public/`: imágenes y recursos estáticos.
- `specs/`: especificaciones y plan.
- Páginas y `layout.tsx` como Server Components. Exportan `metadata`.
- Lógica interactiva (hooks, estados y eventos) en componentes cliente con `'use client'`. Usar `'use client'` solo cuando sea necesario.
- Máximo 80 líneas de JSX y lógica por componente, con una única responsabilidad. Si se supera, dividir. No aplica a páginas, `data/` ni `types/`.

## 2. Rutas

- `app/page.tsx`: Home (`/`).
- `app/catalog/page.tsx`: Catálogo (`/catalog`).
- `app/property/[id]/page.tsx`: Detalle (`/property/[id]`).
- `/` y `/catalog` delegan el listado interactivo y la carga simulada en un contenedor cliente.

## 3. Componentes

**Compartidos**
- `FavoritesProvider` (Client, `components/FavoritesProvider.tsx`): contexto de favoritos. `app/layout.tsx` lo usa para envolver `{children}`.
- `Navbar`, `Footer`: Home, Catálogo y Detalle.
- `PropertyCard`: Home y Catálogo. Incluye carrusel de fotos y `FavoriteButton`.
- `FavoriteButton` (Client): Home, Catálogo y Detalle. Lee y cambia el favorito por ID del alojamiento.
- `PhotoIndicator` (presentacional): usado por el carrusel de `PropertyCard` y por `Gallery`.
- `MapPlaceholder`: Catálogo y Detalle.
- `Gallery` (Client): Detalle. Fotos principales y adicionales.

**Home**
- `SearchBar`, `CategoryList`, `CategoryItem` (Client).
- Contenedor cliente del listado: búsqueda, categoría y carga simulada.

**Catálogo**
- `ResultsCount`, `SortSelect` (Client).
- Contenedor cliente del listado: búsqueda, ordenación y carga simulada.

**Detalle**
- `BackToCatalogButton`, `ReviewsSummary`, `ReviewList`, `ServiceGrid`, `HostInfo`, `Description`.
- `ShareButton`, `ReservationCard`, `AvailabilityCalendar` (Client).

## 4. Gestión de datos y estado

- Datos mock en `data/` (alojamientos, categorías, reseñas, anfitrión, servicios, descripción). Sin backend.
- Tipos en `types/` (`Property`, `Review`, `Host`, `Service`, `Category`).
- `FavoritesProvider`: favoritos indexados por ID del alojamiento. Se mantienen durante la navegación interna. Sin backend ni persistencia.
- `usePhotoNavigation` (`hooks/usePhotoNavigation.ts`): índice de foto, anterior y siguiente. Usado por `Gallery` y por el carrusel de `PropertyCard`.
- `useState`: búsqueda, categoría, ordenación, huéspedes y fechas del calendario.
- `useEffect` con `setTimeout` de 1 s para cargas simuladas, con función de limpieza que cancele el timeout.

## 5. Diseño

- Mobile-first a 375px; adaptación desde 768px.
- Tailwind CSS para todos los estilos, con los tokens definidos en `specs/spec.md` (sección 0).
- Reutilizar `PropertyCard`, `Navbar`, `Footer` y `Gallery` para mantener consistencia.

## 6. Navegación

- `Link` de Next.js para Home, Catálogo y Detalle, sin recargas completas.
- Tarjetas enlazan a `/property/[id]`.
- `BackToCatalogButton` enlaza a `/catalog`.

## 7. Estrategia de implementación

| Fase | Objetivo | Dependencias |
|---|---|---|
| 1. Preparación de estructura y datos | Crear carpetas `components/`, `hooks/`, `types/`, `data/`, definir tipos y datos mock. | Ninguna |
| 2. Componentes compartidos | Implementar `FavoritesProvider` (y su envoltura en `app/layout.tsx`), `Navbar`, `Footer`, `PropertyCard` con carrusel, `FavoriteButton`, `PhotoIndicator`, `MapPlaceholder`, `Gallery` y `usePhotoNavigation`. | Fase 1 |
| 3. Home | Página `/` con búsqueda, categorías, listado y carga simulada. | Fases 1 y 2 |
| 4. Catálogo | Página `/catalog` con resultados, ordenación, búsqueda y mapa. | Fases 1 y 2 |
| 5. Detalle | Página `/property/[id]` con galería, reserva, calendario y secciones informativas. | Fases 1 y 2 |
| 6. Responsive y ajustes visuales | Ajustar a 375px y 768px+, consistencia de colores y espaciados. | Fases 3 a 5 |
| 7. Pruebas y revisión final | Verificar flujos de navegación, estados de carga, favoritos y calendario. | Fase 6 |
