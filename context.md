# Contexto del proyecto

## 1. Objetivo
Desarrollar un prototipo frontend inspirado en Airbnb, compuesto por tres vistas principales:
- Home.
- Catálogo de alojamientos.
- Detalle de alojamiento.

**Estado:** prototipo frontend implementado.

## 2. Tecnologías
- Next.js.
- React.
- TypeScript.
- Tailwind CSS (obligatorio para todos los estilos).

## 3. Arquitectura
Se respeta la estructura del proyecto, sin carpeta `src/`:
- `app/`: rutas y páginas.
- `components/`: componentes reutilizables.
- `types/`: interfaces y tipos TypeScript.
- `data/`: datos locales.
- `hooks/`: hooks personalizados.
- `public/`: imágenes y recursos estáticos.
- `specs/`: especificaciones y planificación.
- `img-references/`: referencias visuales del proyecto.

## 4. Funcionalidades implementadas
- Home con buscador y categorías.
- Catálogo de alojamientos con tarjetas y opciones de ordenación.
- Página de detalle de alojamiento.
- Galería de imágenes responsive.
- Información del alojamiento, anfitrión, servicios y reseñas.
- Sistema de favoritos.
- Calendario de disponibilidad visual.
- Tarjeta de reserva como elemento de interfaz.
- Navegación entre las distintas vistas.

Los requisitos funcionales y visuales se documentan en `specs/spec.md`.

## 5. Calidad y responsive
- Enfoque mobile-first.
- Diseño adaptado a móvil (375px), tablet (768px) y escritorio (1280px).
- Componentes funcionales declarados con `const`.
- Un archivo por componente en `components/`.
- Mantener los componentes pequeños y con una responsabilidad clara.
- Tipado mediante TypeScript.
- Estilos implementados con Tailwind CSS.
- Datos locales de prueba; sin backend ni reservas reales.

## 6. Referencias visuales
Se utilizan capturas de Airbnb y referencias visuales para definir la estructura y apariencia de las vistas.

Las referencias se encuentran en `img-references/` y los requisitos detallados en `specs/spec.md`.

## 7. Notas de desarrollo
- Antes de escribir código, consultar la documentación local de Next.js en `node_modules/next/dist/docs/`, siguiendo las indicaciones de `AGENTS.md`.
- Mantener la arquitectura existente.
- No añadir backend ni servicios externos de reservas en esta versión.
- Priorizar la fidelidad visual, la usabilidad y el diseño responsive.

## 8. Estado y cierre
- Implementación de las tres vistas principales completada.
- Componentes y datos locales implementados.
- Pendiente de validación final de compilación y creación del commit.

