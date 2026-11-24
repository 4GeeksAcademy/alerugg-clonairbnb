# Tareas de implementación

Referencias: `context.md`, `specs/spec.md` y `specs/plan.md`.

## Fase 1. Estructura y datos

- [x] 1.1 Crear las carpetas `components/`, `hooks/`, `types/` y `data/` en la raíz. Resultado: existen las cuatro carpetas.
- [x] 1.2 Definir los tipos `Property`, `Review`, `Host`, `Service` y `Category` en `types/`. Resultado: el proyecto compila sin errores de TypeScript.
- [x] 1.3 Crear datos mock de alojamientos en `data/`, con ID, fotos, precio, anfitrión, servicios y descripción. Resultado: varios alojamientos con ID único, tipados como `Property`.
- [x] 1.4 Crear datos mock de categorías y reseñas en `data/`, asociadas a los alojamientos por ID. Resultado: categorías y reseñas tipadas y vinculadas.

## Fase 2. Componentes y hooks compartidos

- [x] 2.1 Implementar `FavoritesProvider` (Client) en `components/FavoritesProvider.tsx`, con favoritos indexados por ID. Resultado: se puede leer y cambiar el favorito de un ID sin afectar a otros.
- [x] 2.2 Envolver `{children}` con `FavoritesProvider` en `app/layout.tsx`. Resultado: el layout sigue siendo Server Component y el favorito se conserva al navegar.
- [x] 2.3 Implementar `usePhotoNavigation` en `hooks/usePhotoNavigation.ts`. Resultado: devuelve el índice actual y permite ir a la foto anterior y siguiente.
- [x] 2.4 Implementar `PhotoIndicator` (presentacional). Resultado: muestra las fotos totales y resalta la activa según sus props.
- [x] 2.5 Implementar `FavoriteButton` (Client). Resultado: alterna entre corazón vacío y relleno para el alojamiento indicado.
- [x] 2.6 Implementar `PropertyCard` con carrusel de fotos (`usePhotoNavigation` y `PhotoIndicator`), `FavoriteButton` y enlace a `/property/[id]`. Resultado: la tarjeta muestra el carrusel, el favorito y enlaza a su detalle.
- [x] 2.7 Implementar `Navbar` y `Footer` adaptados a móvil. Resultado: aparecen en Home, Catálogo y Detalle, con enlaces a Home y Catálogo.
- [x] 2.8 Implementar `MapPlaceholder`. Resultado: bloque de tamaño fijo con texto de ubicación.
- [x] 2.9 Implementar `Gallery` (Client) con `usePhotoNavigation` y `PhotoIndicator`. Resultado: navega entre fotos anteriores y siguientes de los datos mock.

## Fase 3. Home

- [x] 3.1 Crear `app/page.tsx` como Server Component con `metadata` y un contenedor cliente del listado. Resultado: `/` renderiza sin errores.
- [x] 3.2 Implementar `SearchBar` (Client) con filtrado en tiempo real. Resultado: escribir filtra las tarjetas por texto.
- [x] 3.3 Implementar `CategoryList` y `CategoryItem` (Client) con selección. Resultado: seleccionar una categoría filtra el listado.
- [x] 3.4 Mostrar el listado de `PropertyCard` con carga simulada de 1 s y placeholders grises. Resultado: aparecen placeholders durante 1 s y después las tarjetas.
- [x] 3.5 Cancelar el timeout de carga al desmontar el contenedor. Resultado: no hay actualizaciones de estado tras desmontar.

## Fase 4. Catálogo

- [x] 4.1 Crear `app/catalog/page.tsx` como Server Component con `metadata` y un contenedor cliente del listado. Resultado: `/catalog` renderiza sin errores.
- [x] 4.2 Implementar `ResultsCount` y `SortSelect` (Client) por precio ascendente y descendente. Resultado: el contador y el orden cambian según la selección.
- [x] 4.3 Implementar la búsqueda de alojamientos. Resultado: filtra por texto y actualiza el contador.
- [x] 4.4 Mostrar el listado vertical de `PropertyCard` con `MapPlaceholder` debajo en móvil y a su derecha en escritorio. Resultado: en móvil listado y mapa en columna; en escritorio, mapa a la derecha.
- [x] 4.5 Añadir carga simulada de 1 s con placeholders grises. Resultado: aparecen placeholders durante 1 s antes del listado.

## Fase 5. Detalle

- [x] 5.1 Crear `app/property/[id]/page.tsx` como Server Component con `metadata` dinámico por ID. Los datos mock deben poder consultarse desde el servidor para generar la `metadata`. Resultado: `/property/[id]` muestra el alojamiento del ID.
- [x] 5.2 Añadir la carga por ID con `useEffect` y `setTimeout` de 1 s en un contenedor cliente. Resultado: el detalle aparece tras 1 s.
- [x] 5.3 Implementar `BackToCatalogButton` con `Link` a `/catalog`. Resultado: enlaza al catálogo sin recarga completa.
- [x] 5.4 Integrar `Gallery` con fotos principales y adicionales del alojamiento. Resultado: la galería muestra ambas fotos con navegación.
- [x] 5.5 Implementar título, ubicación, `ShareButton` y `FavoriteButton`. Resultado: `ShareButton` usa `navigator.share()` y copia el enlace si no está disponible.
- [x] 5.6 Implementar `ReservationCard` (Client) con precio, contador de huéspedes y CTA. Resultado: el contador de huéspedes cambia con sus botones.
- [x] 5.7 Implementar `ReviewsSummary` y `ReviewList` con reseñas mock. Resultado: muestra valoración y reseñas del alojamiento.
- [x] 5.8 Implementar `ServiceGrid` con iconos y etiquetas. Resultado: muestra los servicios del alojamiento.
- [x] 5.9 Implementar `HostInfo` y `Description`. Resultado: muestran el anfitrión y la descripción mock.
- [x] 5.10 Implementar la navegación entre meses en `AvailabilityCalendar` (Client). Resultado: cambia de mes y bloquea las fechas pasadas.
- [x] 5.11 Implementar la selección de entrada y salida en `AvailabilityCalendar`. Resultado: resalta el intervalo seleccionado.
- [x] 5.12 Integrar `MapPlaceholder`, `Footer` y `Navbar` en el detalle. Resultado: la vista completa muestra las secciones en el orden de `specs/spec.md`.

## Fase 6. Responsive y ajustes visuales

- [x] 6.1 Revisar Home, Catálogo y Detalle a 375px. Resultado: una columna, márgenes de 24px y separación de 24 a 32px entre secciones.
- [x] 6.2 Adaptar Home y Catálogo desde 768px. Resultado: cuadrícula en Home y mapa a la derecha en Catálogo.
- [x] 6.3 Adaptar Detalle desde 768px. Resultado: dos columnas con tarjeta de reserva sticky a la derecha.
- [x] 6.4 Aplicar los tokens de `specs/spec.md` (sección 0) en todos los componentes. Resultado: colores, tipografía Inter y radios de 12 a 16px coinciden con la especificación.

## Fase 7. Pruebas y revisión final

- [x] 7.1 Verificar la navegación Home, Detalle y Catálogo. Resultado: los enlaces llevan a la ruta correcta sin recarga completa.
- [x] 7.2 Verificar los favoritos. Resultado: cambiar uno no altera otros y se conserva al navegar.
- [x] 7.3 Verificar los estados de carga en Home, Catálogo y Detalle. Resultado: placeholders durante 1 s y después el contenido.
- [x] 7.4 Verificar el calendario. Resultado: las fechas pasadas están deshabilitadas y el rango se resalta.
- [x] 7.5 Verificar que ningún componente supera 80 líneas y que el proyecto compila sin errores. Resultado: el build termina sin errores.
