# AIGENTS Web

Sitio construido con Vite y listo para despliegue estatico.

## Estructura

- index.html: estructura principal del sitio
- src/main.js: logica de UI (idioma, menu lateral, estado de botones)
- src/style.css: estilos globales adicionales
- public/: archivos publicos opcionales
- dist/: salida de build para subir al servidor

## Como abrir en local antes de publicar

1. Instalar dependencias:
	npm install
2. Levantar entorno de desarrollo:
	npm run dev
3. Abrir la URL que muestra Vite (normalmente http://localhost:5173).

## Como ver una version de prepublicacion en local

1. Generar build:
	npm run build
2. Servir build localmente:
	npm run preview
3. Abrir http://localhost:4173.

## Deploy automatizado a Spaceship (manual)

Este repositorio incluye la workflow de GitHub Actions en .github/workflows/deploy-spaceship.yml.

Caracteristicas:
- Trigger manual desde GitHub (workflow_dispatch).
- Build automatico con Node 22.
- Publicacion por FTP/FTPS de la carpeta dist/.
- Opcion de simulacion (dry run) para validar sin subir archivos.

### Secrets requeridos en GitHub

Configuralos en: Settings > Secrets and variables > Actions

- SPACESHIP_FTP_SERVER
- SPACESHIP_FTP_USERNAME
- SPACESHIP_FTP_PASSWORD
- SPACESHIP_FTP_SERVER_DIR (ejemplo: /public_html/)

### Ejecutar deploy manual

1. Ir a la pestana Actions en GitHub.
2. Abrir workflow Deploy Spaceship.
3. Clic en Run workflow.
4. Elegir dry_run=true para prueba o dry_run=false para publicar.

## Deploy manual alternativo

1. Ejecutar npm run build.
2. Subir el contenido de dist/ al document root del hosting en Spaceship.
3. Verificar que index.html quede en la raiz publica del dominio.
