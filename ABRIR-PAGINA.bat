@echo off
REM ================================================================
REM   ABRIR PÁGINA WEB - D&J Insights Group
REM ================================================================

echo.
echo ================================================================
echo      INICIANDO SERVIDOR WEB LOCAL
echo ================================================================
echo.
echo Abriendo navegador en http://localhost:8000
echo.
echo PARA ACTUALIZAR LA PAGINA:
echo   - Guarda tus cambios (Ctrl+S)
echo   - En el navegador presiona: Ctrl + Shift + R
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

REM Abrir el navegador predeterminado
start http://localhost:8000

REM Iniciar servidor Python
cd /d "%~dp0"
python -m http.server 8000

pause