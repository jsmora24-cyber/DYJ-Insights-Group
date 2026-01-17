# D&J Insights Group - Sitio Web

Bienvenido al sitio web de **D&J Insights Group**, empresa especializada en Business Intelligence y soluciones con Power BI.

## 📋 Estructura del Proyecto

```
Pagina web DYJ/
│
├── index.html              # Página principal
├── servicios.html          # Página de servicios
├── acerca-de.html         # Sobre nosotros
├── portafolio.html        # Casos de éxito
├── contacto.html          # Formulario de contacto
├── politicas.html         # Políticas y términos
│
├── css/
│   └── styles.css         # Estilos personalizados
│
├── js/
│   └── script.js          # JavaScript para interactividad
│
└── images/                # Carpeta para imágenes
    ├── logo.png
    ├── hero-bg.jpg
    ├── about-team.jpg
    ├── innovation.jpg
    ├── collaboration.jpg
    ├── excellence.jpg
    └── portfolio-1 a 6.jpg
```

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente
1. Abre el archivo `index.html` en tu navegador web
2. Navega por las diferentes secciones

### Opción 2: Servidor Local (Recomendado)

**Usando Python:**
```bash
# Python 3
python -m http.server 8000

# Luego abre: http://localhost:8000
```

**Usando Node.js (si tienes instalado):**
```bash
npx http-server -p 8000
```

**Usando VS Code:**
- Instala la extensión "Live Server"
- Clic derecho en `index.html` → "Open with Live Server"

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `css/styles.css`:

```css
:root {
    --primary-color: #1e3a8a;      /* Azul principal */
    --secondary-color: #3b82f6;    /* Azul secundario */
    --accent-color: #60a5fa;       /* Azul claro */
}
```

### Agregar tu Logo
1. Coloca tu logo en la carpeta `images/` con el nombre `logo.png`
2. Tamaño recomendado: 200x80px (o proporcional)

### Cambiar Imágenes
Reemplaza las imágenes en la carpeta `images/` manteniendo los mismos nombres:
- `hero-bg.jpg` - Imagen de fondo del hero (1920x1080px)
- `about-team.jpg` - Foto del equipo (800x600px)
- `innovation.jpg`, `collaboration.jpg`, `excellence.jpg` - Valores (800x600px)
- `portfolio-1.jpg` a `portfolio-6.jpg` - Casos de éxito (800x600px)

## 📱 Características

✅ Diseño responsive (móvil, tablet, desktop)
✅ Menú hamburguesa para móviles
✅ Animaciones suaves al hacer scroll
✅ Formulario de contacto funcional
✅ Integración con redes sociales
✅ Optimizado para SEO
✅ Carga rápida

## 🌐 Preparar para Hosting

### 1. Antes de subir al servidor:
- Reemplaza todas las imágenes placeholder con tus imágenes reales
- Actualiza la información de contacto si es necesaria
- Prueba el formulario de contacto
- Verifica todos los enlaces

### 2. Opciones de Hosting Gratuito:

**Netlify (Recomendado):**
1. Crea una cuenta en [netlify.com](https://www.netlify.com)
2. Arrastra la carpeta completa al dashboard
3. Tu sitio estará en línea en segundos

**GitHub Pages:**
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Activa GitHub Pages en Settings

**Vercel:**
1. Crea cuenta en [vercel.com](https://vercel.com)
2. Conecta tu repositorio o sube archivos
3. Deploy automático

### 3. Dominio Personalizado:
Después de subir tu sitio, puedes conectar tu propio dominio:
- Compra un dominio en Namecheap, GoDaddy, etc.
- Configura los DNS según tu proveedor de hosting

## 📧 Configurar Formulario de Contacto

El formulario actualmente muestra un alert. Para hacerlo funcional:

### Opción 1: FormSubmit (Sin backend)
1. Ve a [formsubmit.co](https://formsubit.co)
2. Reemplaza en `js/script.js`:

```javascript
const response = await fetch('https://formsubit.co/TU-EMAIL', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
});
```

### Opción 2: EmailJS
1. Crea cuenta en [emailjs.com](https://www.emailjs.com)
2. Sigue su documentación para integrar

### Opción 3: Backend Propio
Crea un servidor Node.js, PHP, o Python para manejar los envíos.

## 🔧 Tecnologías Utilizadas

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript (Vanilla JS, ES6+)
- Font Awesome (Iconos)
- Google Fonts (Tipografía)

## 📊 Optimizaciones SEO Incluidas

- Meta tags descriptivos
- Títulos únicos por página
- Alt text en imágenes
- Estructura semántica HTML5
- URLs amigables
- Schema markup listo para agregar

## 🐛 Solución de Problemas

**Las imágenes no cargan:**
- Verifica que las imágenes estén en la carpeta `images/`
- Revisa que los nombres coincidan exactamente

**El menú móvil no funciona:**
- Asegúrate que `script.js` esté cargando correctamente
- Revisa la consola del navegador (F12)

**Los estilos no se aplican:**
- Verifica la ruta del archivo CSS
- Limpia el caché del navegador (Ctrl+F5)

## 📞 Información de Contacto

- **WhatsApp:** +57 322 345 9359
- **Email:** contacto@dyjinsights.com
- **Ubicación:** Bogotá, Colombia

## 📝 Licencia

Este sitio web fue desarrollado para D&J Insights Group. Todos los derechos reservados.

---

**Desarrollado con ❤️ para transformar datos en decisiones estratégicas**