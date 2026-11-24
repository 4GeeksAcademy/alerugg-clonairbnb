# Especificaciones de vistas

Referencia: `context.md`. Las referencias visuales son orientativas. Los requisitos funcionales se marcan como **[Req]** (requisito funcional), **[Ref]** (observado en la captura) o **[No verificado]**.

## 0. Sistema visual (decisiones)

- **[Dec]** Colores: fondo `#FFFFFF`, texto `#222222`, texto secundario `#717171`, bordes `#EBEBEB`, acento `#FF385C`.
- **[Dec]** Tipografía sans-serif, preferiblemente Inter.
- **[Dec]** Móvil: márgenes laterales de 24px; separación entre secciones de 24–32px; tarjetas con radio de 12–16px.
- **[Dec]** Estilos con Tailwind CSS.

## 1. Home

**Estructura y jerarquía**
1. Navbar: logo, buscador, iconos de usuario. [Req] [Ref]
2. Categorías horizontales con iconos y etiquetas, seleccionables. [Req] [Ref]
3. Sección de alojamientos con tarjetas en cuadrícula. [Req] [Ref]

**Componentes**
- `Navbar`, `SearchBar`, `CategoryList`, `CategoryItem`, `PropertyCard` (reutilizable en Catálogo).

**Interacciones y estados**
- Búsqueda en tiempo real con `useState`. [Req]
- Categoría seleccionable con `useState`. [Req]
- Carga simulada con `useEffect` y `setTimeout` de 1 s. [Req]
- Estado de carga con placeholders grises. [Dec]
- Favoritos en tarjeta: corazón que alterna entre vacío y relleno con `useState`, sin backend. [Ref] [Dec]

**Responsive**
- 375px: una columna de tarjetas. [Req]
- 768px o más: varias columnas. [Req]

## 2. Catálogo

**Estructura y jerarquía (móvil, [Ref])**
1. Número de resultados. [Req]
2. Ordenación por precio ascendente y descendente. [Req]
3. Listado vertical de tarjetas, una columna, con fotografía grande y bordes redondeados. [Ref]
4. Bajo cada imagen: información del alojamiento. [Ref]
5. Indicadores de posición de las fotografías. [Ref]
6. Algunas secciones horizontales con alojamientos. [Ref] (fuera del MVP) [Dec]
7. Separación visual entre grupos de resultados. [Ref]

**Componentes**
- `PropertyCard` (reutilizado), `SortSelect`, `ResultsCount`, `MapPlaceholder`, `PhotoIndicator`. Secciones horizontales: fuera del MVP. [Dec]

**Estilos**
- Fotografías con bordes redondeados. [Ref]

**Interacciones y estados**
- Ordenación con `useState`. [Req]
- Búsqueda de alojamientos con `useState`. [Dec]
- Botón de favoritos en tarjeta, igual que en Home. [Ref] [Dec]
- Placeholders grises: solo para estados de carga o error, no como diseño definitivo. [Dec]

**Responsive**
- 375px: listado vertical; mapa debajo de las tarjetas. [Req]
- 768px o más: mapa a la derecha. [Req]

## 3. Detalle del alojamiento

**Orden de secciones (móvil, [Ref])**
1. Galería de fotografías. [Req: placeholders con navegación anterior/siguiente]
2. Título, ubicación, acciones de compartir y guardar. [Req (título, ubicación)] [Ref (acciones)]
3. Características del alojamiento y anfitrión. [Ref]
4. Resumen de características. [Ref]
5. Tarjeta de reserva con precio, contador de huéspedes y CTA. [Req]
6. Valoración y reseñas. [Req]
7. Fotografías adicionales, reutilizando `Gallery`. [Ref] [Dec]
8. Cuadrícula de servicios con iconos y etiquetas. [Req]
9. Mapa y ubicación. [Ref]
10. Calendario de disponibilidad. [Ref] [Dec]
11. Perfil del anfitrión. [Req: información del anfitrión]
12. Descripción y detalles adicionales. [Ref]
13. Secciones inferiores y footer. [Ref]

**Componentes**
- `Gallery`, `ReservationCard`, `ReviewsSummary`, `ReviewList`, `ServiceGrid`, `HostInfo`, `MapPlaceholder` (reutilizado), `Footer` (reutilizable), `BackToCatalogButton`.
- `AvailabilityCalendar`: navegación entre meses, selección de entrada y salida, intervalo resaltado y bloqueo de fechas pasadas. [Dec]
- `Description`: texto simulado en datos locales. [Dec]

**Interacciones y estados**
- Carga por ID de URL con `useEffect` y `setTimeout` de 1 s. [Req]
- Galería anterior/siguiente con `useState`. [Req]
- Contador de huéspedes con `useState`. [Req]
- Enlace para volver al catálogo con `Link`. [Req]
- Compartir con `navigator.share()` si está disponible; si no, copiar el enlace. [Dec]
- Guardar con corazón interactivo mediante `useState`, sin backend. [Dec]
- Calendario: selección de fechas con `useState`, fechas pasadas deshabilitadas. [Dec]

**Responsive**
- 375px: secciones en columna. [Req]
- 768px o más: dos columnas; galería superior, contenido principal y tarjeta de reserva lateral sticky. [Dec]

## 4. Componentes reutilizables

| Componente | Vistas |
|---|---|
| `PropertyCard` | Home, Catálogo |
| `MapPlaceholder` | Catálogo, Detalle |
| `Navbar` | Home, Catálogo, Detalle |
| `Footer` | Home, Catálogo, Detalle |

## 5. Decisiones de implementación

Los requisitos funcionales se marcan [Req]; las decisiones de implementación, [Dec].

- Catálogo: listado vertical, búsqueda, ordenación y mapa. Secciones horizontales fuera del MVP.
- Compartir: `navigator.share()` si está disponible; si no, copiar el enlace.
- Guardar: corazón interactivo con `useState`, sin backend.
- `Description`: texto simulado en datos locales.
- Fotografías adicionales: imágenes del mismo alojamiento, reutilizando `Gallery`.
- `Navbar` y `Footer`: componentes compartidos en Home, Catálogo y Detalle, adaptados a móvil.
