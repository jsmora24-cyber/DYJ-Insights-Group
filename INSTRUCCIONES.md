# GUÍA DE INSTRUCCIONES - D&J Insights Group Website

## 🎯 Cómo Abrir y Visualizar la Página

### Método 1: Abrir Directamente (Más Simple)
1. Navega a la carpeta `Pagina web DYJ`
2. Haz doble clic en el archivo `index.html`
3. Se abrirá en tu navegador predeterminado

### Método 2: Servidor Local con Python (Recomendado)
```powershell
# En PowerShell, navega a la carpeta del proyecto
cd "c:\Pagina web DYJ"

# Inicia el servidor (Python 3)
python -m http.server 8000

# Abre tu navegador y visita:
# http://localhost:8000
```

### Método 3: Servidor Local con VS Code
1. Abre la carpeta en VS Code
2. Instala la extensión "Live Server"
3. Clic derecho en `index.html` → "Open with Live Server"

## 📝 Próximos Pasos para Personalizar

### 1. Reemplazar el Logo
- El logo actual es un placeholder SVG
- Reemplaza `images/logo.svg` con tu logo real (PNG, SVG, o JPG)
- Tamaño recomendado: 200x80 píxeles

### 2. Actualizar Imágenes
Reemplaza los archivos SVG placeholder por imágenes reales:
- `images/hero-bg.svg` → Imagen de fondo hero (1920x1080px)
- `images/about-team.svg` → Foto del equipo (800x600px)
- `images/innovation.svg` → Imagen innovación (800x600px)
- `images/collaboration.svg` → Imagen colaboración (800x600px)
- `images/excellence.svg` → Imagen excelencia (800x600px)
- `images/portfolio-1.svg` hasta `portfolio-6.svg` → Capturas de dashboards reales

**Nota:** Puedes usar archivos .jpg, .png, o .svg. Solo actualiza la extensión en el HTML.

### 3. Configurar el Formulario de Contacto

#### Opción A: FormSubmit (Gratis, Sin Código)
1. Abre `js/script.js`
2. Busca la sección comentada del formulario
3. Descomenta el código de fetch
4. Reemplaza `YOUR_API_ENDPOINT` con: `https://formsubmit.co/TU-EMAIL@gmail.com`

#### Opción B: Configurar tu Propio Backend
Si tienes conocimientos de backend, puedes crear tu propia API para procesar los formularios.

### 4. Actualizar Información de Contacto
Si necesitas cambiar teléfono, email, o dirección:
- Busca en todos los archivos HTML el texto actual
- Reemplázalo con tu información
- Verifica el footer en todas las páginas

## 🚀 Publicar en Internet

### Opción 1: Netlify (Recomendada - Gratis)
1. Ve a [www.netlify.com](https://www.netlify.com)
2. Crea una cuenta gratuita
3. Arrastra la carpeta completa al dashboard
4. ¡Tu sitio estará en línea en segundos!
5. URL gratuita: `tu-sitio.netlify.app`

### Opción 2: GitHub Pages (Gratis)
1. Crea una cuenta en [github.com](https://github.com)
2. Crea un nuevo repositorio
3. Sube todos los archivos del proyecto
4. Ve a Settings → Pages
5. Selecciona la rama main y guarda
6. URL: `tu-usuario.github.io/nombre-repositorio`

### Opción 3: Vercel (Gratis)
1. Ve a [vercel.com](https://vercel.com)
2. Importa el proyecto desde GitHub o sube archivos
3. Deploy automático

### Opción 4: Hosting Tradicional
Si tienes un hosting pago (Hostinger, GoDaddy, etc):
1. Usa FileZilla o el panel de control
2. Sube todos los archivos a la carpeta `public_html` o `www`
3. Accede via tu dominio

## 🎨 Personalización de Colores

Para cambiar los colores de la marca, edita `css/styles.css`:

```css
:root {
    --primary-color: #1e3a8a;      /* Azul oscuro principal */
    --secondary-color: #3b82f6;    /* Azul medio */
    --accent-color: #60a5fa;       /* Azul claro */
    --dark-color: #1e293b;         /* Gris oscuro */
    --light-color: #f8fafc;        /* Gris muy claro */
    --text-color: #334155;         /* Color texto */
}
```

## 📱 Probar en Móvil

1. Asegúrate de que el servidor local esté corriendo
2. En tu teléfono, conéctate a la misma red WiFi
3. En PowerShell, escribe: `ipconfig`
4. Busca tu IPv4 (ejemplo: 192.168.1.100)
5. En el móvil, visita: `http://192.168.1.100:8000`

## ✅ Checklist Antes de Publicar

- [ ] Reemplazar todas las imágenes placeholder
- [ ] Actualizar el logo con tu logo real
- [ ] Verificar información de contacto
- [ ] Configurar el formulario de contacto
- [ ] Probar en diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Probar en móvil y tablet
- [ ] Verificar todos los enlaces
- [ ] Optimizar imágenes para web (reducir peso)
- [ ] Revisar textos por errores ortográficos

## 🔧 Solución de Problemas Comunes

**Problema: Las imágenes no cargan**
- Solución: Verifica que las imágenes estén en la carpeta `images/`
- Verifica que los nombres coincidan exactamente (mayúsculas/minúsculas)

**Problema: El menú móvil no funciona**
- Solución: Asegúrate que `js/script.js` está cargando
- Abre la consola del navegador (F12) y busca errores

**Problema: Los estilos no se aplican**
- Solución: Limpia el caché del navegador (Ctrl + Shift + R)
- Verifica que la ruta a `css/styles.css` sea correcta

## 📞 Soporte

Si necesitas ayuda adicional:
- Revisa el archivo `README.md` para información técnica
- Consulta la documentación de HTML/CSS en [MDN Web Docs](https://developer.mozilla.org)

## 🎓 Recursos Adicionales

- **Optimizar Imágenes:** [TinyPNG](https://tinypng.com)
- **Iconos Gratis:** [Font Awesome](https://fontawesome.com)
- **Colores:** [Coolors](https://coolors.co)
- **Fuentes:** [Google Fonts](https://fonts.google.com)

---

**¡Tu sitio web está listo! Solo necesitas personalizarlo y publicarlo. 🚀**