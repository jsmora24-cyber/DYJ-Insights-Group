# 🚀 INICIO RÁPIDO - D&J Insights Group

## Ver la Página Ahora Mismo

### Windows (PowerShell):
```powershell
cd "c:\Pagina web DYJ"
python -m http.server 8000
```

Luego abre tu navegador en: **http://localhost:8000**

---

## 📁 Estructura del Proyecto

```
Pagina web DYJ/
├── index.html          ← PÁGINA PRINCIPAL (abre esta)
├── servicios.html      ← Página de servicios
├── acerca-de.html      ← Sobre nosotros
├── portafolio.html     ← Casos de éxito
├── contacto.html       ← Formulario de contacto
├── politicas.html      ← Políticas legales
├── css/
│   └── styles.css      ← Todos los estilos
├── js/
│   └── script.js       ← Interactividad
└── images/             ← Todas las imágenes (SVG placeholders)
```

---

## 🎯 3 Pasos para Personalizar

### 1️⃣ Cambiar el Logo
- Reemplaza `images/logo.svg` con tu logo
- Formatos aceptados: PNG, SVG, JPG
- Tamaño: 200x80 px

### 2️⃣ Actualizar Imágenes
Reemplaza estos archivos en la carpeta `images/`:
- ✅ `hero-bg.svg` - Fondo del banner principal
- ✅ `about-team.svg` - Foto del equipo
- ✅ `innovation.svg` - Imagen innovación
- ✅ `collaboration.svg` - Imagen colaboración
- ✅ `excellence.svg` - Imagen excelencia
- ✅ `portfolio-1.svg` a `portfolio-6.svg` - Capturas de dashboards

**Tip:** Mantén los mismos nombres de archivo o actualiza las referencias en el HTML.

### 3️⃣ Configurar Email del Formulario
Edita `js/script.js` y busca la línea:
```javascript
// YOUR_API_ENDPOINT
```

Reemplaza con: `https://formsubmit.co/tu-email@gmail.com`

---

## 🌐 Publicar en Internet (GRATIS)

### Netlify (Lo Más Fácil) ⭐
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra toda la carpeta "Pagina web DYJ"
3. ¡Listo! Tu sitio está en línea

### GitHub Pages
1. Sube el proyecto a GitHub
2. Settings → Pages → Activa
3. URL: `tu-usuario.github.io/nombre-repo`

---

## ✅ CHECKLIST PRE-PUBLICACIÓN

- [ ] Logo reemplazado
- [ ] Todas las imágenes actualizadas
- [ ] Email del formulario configurado
- [ ] Probado en Chrome
- [ ] Probado en móvil
- [ ] Información de contacto correcta
- [ ] Todas las páginas funcionan

---

## 🆘 Ayuda Rápida

**¿No tienes Python?**
- Descarga: [python.org/downloads](https://python.org/downloads)
- O simplemente abre `index.html` haciendo doble clic

**¿Las imágenes no cargan?**
- Verifica que estén en la carpeta `images/`
- Los nombres deben coincidir exactamente

**¿El menú no funciona en móvil?**
- Limpia el caché: Ctrl + Shift + R
- Verifica que `js/script.js` esté cargando

---

## 📞 Contacto Original del Sitio

- **WhatsApp:** +57 322 345 9359
- **Email:** contacto@dyjinsights.com
- **Ubicación:** Bogotá, Colombia

---

## 🎨 Personalización de Colores

Edita `css/styles.css` - línea 11-17:

```css
--primary-color: #1e3a8a;     /* Azul principal */
--secondary-color: #3b82f6;   /* Azul secundario */
--accent-color: #60a5fa;      /* Azul claro */
```

---

**¡Tu sitio web profesional está listo! 🎉**

Solo personaliza las imágenes y publícalo.