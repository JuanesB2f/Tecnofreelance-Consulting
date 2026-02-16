# Tecnofreelance Consulting - SPA Corporativa

Single Page Application (SPA) tipo brochure web corporativo para Tecnofreelance Consulting, desarrollada con React, Vite y Tailwind CSS.

## 🚀 Características

- **100% Responsive** - Diseño mobile-first optimizado para todos los dispositivos
- **Animaciones Fluidas** - Implementadas con Framer Motion
- **Carruseles Interactivos** - Portafolio visual con Swiper
- **Modales Informativos** - Perfiles detallados del equipo
- **Formulario de Contacto** - Interfaz intuitiva y validación
- **Optimizado para Producción** - Listo para desplegar en Netlify

## 🛠️ Stack Tecnológico

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **Swiper** - Carruseles responsive
- **React Router** - Navegación (preparado para futuras expansiones)
- **Lucide React** - Iconos modernos

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm 9+

### Pasos

1. **Clonar o descargar el proyecto**

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   ```
   http://localhost:5173
   ```

## 🏗️ Build de Producción

Para generar la build de producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

Para previsualizar la build de producción localmente:

```bash
npm run preview
```

## 🚢 Despliegue en Netlify

### Opción 1: Despliegue Automático (Recomendado)

1. **Conectar repositorio Git:**
   - Sube tu código a GitHub, GitLab o Bitbucket
   - En Netlify, selecciona "New site from Git"
   - Conecta tu repositorio

2. **Configuración automática:**
   - Netlify detectará automáticamente la configuración desde `netlify.toml`
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Desplegar:**
   - Netlify construirá y desplegará automáticamente

### Opción 2: Despliegue Manual

1. **Generar build:**
   ```bash
   npm run build
   ```

2. **Desplegar carpeta dist:**
   - En Netlify, selecciona "Add new site" → "Deploy manually"
   - Arrastra la carpeta `dist` a la interfaz de Netlify

### Configuración de Netlify

El archivo `netlify.toml` ya está configurado con:
- Comando de build: `npm run build`
- Directorio de publicación: `dist`
- Redirects para SPA (todas las rutas redirigen a `index.html`)

## 📁 Estructura del Proyecto

```
tecnofreelance-consulting/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Servicios.jsx
│   │   ├── Equipo.jsx
│   │   ├── MemberModal.jsx
│   │   ├── Contacto.jsx
│   │   └── Footer.jsx
│   ├── data/              # Datos estáticos
│   │   ├── servicios.js
│   │   └── equipo.js
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml           # Configuración Netlify
└── README.md
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`. Puedes modificar la paleta en:

```js
colors: {
  primary: { ... },
  gray: { ... }
}
```

### Contenido

- **Servicios:** Edita `src/data/servicios.js`
- **Equipo:** Edita `src/data/equipo.js`
- **Información de contacto:** Edita `src/components/Contacto.jsx` y `src/components/Footer.jsx`

### Imágenes

Reemplaza las URLs de imágenes en:
- `src/data/equipo.js` (fotos del equipo y portafolio)
- Usa imágenes optimizadas (formato WebP recomendado)

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Genera build de producción
- `npm run preview` - Previsualiza build de producción
- `npm run lint` - Ejecuta el linter (si está configurado)

## 📝 Notas de Desarrollo

- **Formulario de Contacto:** Actualmente simula el envío. Para producción, integra con un servicio backend (Netlify Forms, Formspree, etc.)
- **Imágenes:** Las imágenes del equipo usan URLs de Unsplash como placeholder. Reemplázalas con imágenes reales.
- **SEO:** El `index.html` incluye meta tags básicos. Considera agregar más para mejor SEO.

## 🌐 Compatibilidad

- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Mobile)
- Optimizado para rendimiento (Lighthouse score > 90)

## 📄 Licencia

Este proyecto es propiedad de Tecnofreelance Consulting.

---

**Desarrollado con ❤️ para Tecnofreelance Consulting**

