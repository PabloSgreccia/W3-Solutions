### Pasos para levantar el servidor:
    0. Asegurarse tener instalado: NodeJs, Angular-CLI, y acceso a alguna base de datos SQL.
    1. Descargar el código
    2. Instalar dependencias necesarias: 
        2.1. En consola, pararse en la carpeta "backend" y ejecutar "npm i". 
        2.2. En consola, pararse en la carpeta "frontend" y ejecutar "npm i".
    3. Configurar variables de entorno del backend:
        3.1: Crear un archivo llamado ".env" dentro de la carpeta "backend".
        3.1: Agregar las variables necesarias, usando como ejemplo el documento ubicado en './env-example.txt' como referencia.
    4. Validar tener acceso a una base de datos SQL (yo utilice phpMyAdmin con Xampp).
    5. Preparar base de datos: En consola, pararse en la carpeta "backend" y ejecutar "npm run inicio"... Esto creará la base de datos, con sus migraciones y seeders. 
    6. Ejecutar servidor de backend: En consola, pararse en la carpeta "backend" ejecutar "npm start" (o "npm run dev").
    7. Ejecutar servidor de frontend: En consola, pararse en la carpeta "frontend" y ejecutar "ng serve".
    8. Abrir un navegador de internet (ejemplo Google Chrome) y colocar "http://localhost:4200" en la URL.

### Pasos para testear la aplicación:
    0. Garantizar haber realizado hasta el punto 5 (incluído) del listado anterior.
    1. En consola, pararse en la carpeta "backend" ejecutar "npm run test".

### Docker (solo para frontend)
    - Angular: colocar en consola: 
        1. docker build -t angulardocker .
        2. docker run -d -it -p 4200:80 --name angulardocker angulardocker

### Tecnologías utilizadas:
    - Backend: NodeJs + (Javascript, Express)
    - Frontend: Angular + (HTML, CSS, Typescript)
    - Base de datos SQL +  Sequelize (ORM)
    - Testing: jest + supertest

