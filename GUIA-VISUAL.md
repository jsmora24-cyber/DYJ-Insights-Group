# 🎯 GUÍA VISUAL PASO A PASO

## 🚀 OPCIÓN 1: LA MÁS FÁCIL (Doble Clic)

### Paso 1: Abre Windows Explorer
```
Navega a: C:\Pagina web DYJ\
```

### Paso 2: Haz doble clic en uno de estos archivos:
```
📄 ABRIR-PAGINA.bat  ← RECOMENDADO (Abre automáticamente)
📄 index.html        ← Abre directamente en el navegador
```

---

## 🌐 OPCIÓN 2: Con Servidor (Mejor para desarrollo)

### Paso 1: Abre PowerShell
- Presiona `Windows + X`
- Selecciona "Windows PowerShell"

### Paso 2: Copia y pega esto:
```powershell
cd "c:\Pagina web DYJ"
python -m http.server 8000
```

### Paso 3: Abre tu navegador
- Chrome, Firefox, Edge, o cualquier navegador
- Escribe en la barra: `http://localhost:8000`

---

## 📱 VER EN TU TELÉFONO

### Paso 1: Asegúrate que el servidor esté corriendo
```powershell
python -m http.server 8000
```

### Paso 2: Encuentra tu IP
```powershell
ipconfig
```
Busca algo como: `192.168.1.100`

### Paso 3: En tu teléfono
- Conéctate a la misma WiFi
- Abre el navegador
- Visita: `http://192.168.1.100:8000`

---

## 🎨 PERSONALIZAR EN 3 PASOS

### 1️⃣ CAMBIAR LOGO
```
📁 C:\Pagina web DYJ\images\logo.svg
```
- Reemplaza con tu logo
- Formatos: PNG, JPG, SVG
- Tamaño: 200x80 px

### 2️⃣ ACTUALIZAR FOTOS
```
📁 C:\Pagina web DYJ\images\
```
Reemplaza estos archivos:
- ✅ `hero-bg.svg` → Banner principal
- ✅ `about-team.svg` → Foto equipo
- ✅ `innovation.svg` → Innovación
- ✅ `collaboration.svg` → Colaboración
- ✅ `excellence.svg` → Excelencia
- ✅ `portfolio-1.svg` a `portfolio-6.svg` → Dashboards

### 3️⃣ CAMBIAR COLORES
```
📄 C:\Pagina web DYJ\css\styles.css
```
Busca las líneas 11-17 y cambia:
```css
--primary-color: #1e3a8a;      /* Tu color azul */
--secondary-color: #3b82f6;    /* Tu color secundario */
```

---

## 🌐 PUBLICAR EN INTERNET (GRATIS)

### Netlify (5 minutos) ⭐⭐⭐⭐⭐

#### Paso 1: Crea cuenta
- Ve a [www.netlify.com](https://www.netlify.com)
- Haz clic en "Sign up" (Gratis)

#### Paso 2: Sube el sitio
- Arrastra la carpeta `C:\Pagina web DYJ` al dashboard
- O usa "Add new site" → "Deploy manually"

#### Paso 3: ¡Listo!
- Tu sitio estará en: `tu-nombre.netlify.app`
- Puedes cambiar el nombre en "Site settings"

### GitHub Pages (10 minutos)

#### Paso 1: Crea repositorio
- Ve a [github.com](https://github.com)
- "New repository" → Nombra tu repo

#### Paso 2: Sube archivos
```powershell
cd "c:\Pagina web DYJ"
git init
git add .
git commit -m "Primera versión"
git remote add origin TU-URL-DE-GITHUB
git push -u origin main
```

#### Paso 3: Activa Pages
- Settings → Pages
- Source: main branch
- Save

---

## ✅ CHECKLIST ANTES DE PUBLICAR

```
[ ] Logo actualizado
[ ] Todas las fotos reemplazadas
[ ] Colores personalizados
[ ] Información de contacto correcta
[ ] Formulario de email configurado
[ ] Probado en Chrome
[ ] Probado en Firefox
[ ] Probado en móvil
[ ] Links funcionan
[ ] Sin errores en consola (F12)
```

---

## 🆘 PROBLEMAS COMUNES

### ❌ "python no se reconoce como comando"
**Solución:**
1. Instala Python: [python.org/downloads](https://python.org/downloads)
2. Durante instalación marca "Add Python to PATH"
3. Reinicia PowerShell

### ❌ Las imágenes no cargan
**Solución:**
- Verifica que estén en `C:\Pagina web DYJ\images\`
- Los nombres deben ser exactos (mayúsculas/minúsculas)
- Extensión correcta (.svg, .png, .jpg)

### ❌ El menú móvil no funciona
**Solución:**
1. Presiona F12 en el navegador
2. Busca errores en rojo
3. Verifica que `js/script.js` esté cargando
4. Limpia caché: Ctrl + Shift + R

### ❌ Los estilos no se aplican
**Solución:**
- Ctrl + Shift + R (Limpiar caché)
- Verifica que `css/styles.css` exista
- Revisa la consola (F12) por errores

---

## 📞 DATOS DE CONTACTO DEL SITIO

```
📱 WhatsApp: +57 322 345 9359
📧 Email: contacto@dyjinsights.com
📍 Ubicación: Bogotá, Colombia

📱 Instagram: @dyj_insights_group
👥 Facebook: D&J Insights Group
💼 LinkedIn: D&J Insights Group
```

---

## 🎓 RECURSOS ÚTILES

| Recurso | URL | Uso |
|---------|-----|-----|
| Optimizar Imágenes | tinypng.com | Reducir peso de fotos |
| Colores | coolors.co | Generar paletas |
| Iconos | fontawesome.com | Más iconos gratis |
| Fuentes | fonts.google.com | Tipografías |
| Hosting | netlify.com | Publicar gratis |
| Dominio | namecheap.com | Comprar dominio |

---

## 🎉 ¡FELICIDADES!

Tu sitio web profesional está listo.

**Próximo paso:** Abre `ABRIR-PAGINA.bat` para verlo.

---

**💡 TIP PRO:** Guarda esta guía en tus favoritos para futuras referencias.

**🌟 RECUERDA:** El sitio es 100% tuyo. Puedes modificarlo, copiarlo, y usarlo como quieras.