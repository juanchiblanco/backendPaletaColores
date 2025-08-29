# 🎨 Backend - Paleta de Colores

Este proyecto es una API REST creada con **Node.js**, **Express** y **MongoDB**, que permite gestionar una paleta de colores.  

Cada color es un objeto que contiene:
- **código único (_id en MongoDB)**
- **nombre del color** (obligatorio)
- **código hexadecimal** (opcional)
- **código RGB o RGBA** (opcional)

---

## 🚀 Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/) para modelar la base de datos
- [Cors](https://www.npmjs.com/package/cors) para manejar peticiones externas
- [Express Validator](https://express-validator.github.io/) para validar los datos recibidos

---

## 📂 Estructura del proyecto

backend/
│── src/
│ ├── index.js # Punto de entrada del servidor
│ ├── database.js # Conexión a MongoDB
│ ├── routes/
│ │ └── colores.routes.js # Definición de endpoints
│ ├── controllers/
│ │ └── colores.controller.js # Lógica de negocio
│ ├── models/
│ │ └── Color.js # Modelo de Mongoose
│── package.json

yaml
Copiar código

---

## ⚙️ Instalación y configuración

1. Clonar el repositorio:

bash
git clone https://github.com/juanchiblanco/backendPaletaColores.git
cd paleta-colores-backend
Instalar dependencias:

bash
Copiar código
npm install
Asegúrate de tener MongoDB corriendo en tu máquina o configurar la URL de conexión en database.js.

Levantar el servidor:

bash
Copiar código
npm run dev
📡 Endpoints disponibles
🔹 Listar todos los colores
bash
Copiar código
GET /api/colores
🔹 Obtener un color por ID
bash
Copiar código
GET /api/colores/:id
🔹 Agregar un nuevo color
css
Copiar código
POST /api/colores
Body:
{
  "nombre": "Rojo",
  "hex": "#FF0000",
  "rgb": "rgb(255,0,0)"
}
🔹 Editar un color existente
bash
Copiar código
PUT /api/colores/:id
Body:
{
  "nombre": "Rojo brillante",
  "hex": "#FF1111"
}
🔹 Eliminar un color
bash
Copiar código
DELETE /api/colores/:id

## ✅ Validaciones
Antes de guardar o actualizar un color en la base de datos:

nombre: requerido, mínimo 3 caracteres y máximo 30.

hex: opcional, pero si existe debe ser un código hexadecimal válido (ejemplo: #FFFFFF).

rgb / rgba: opcional, pero si existe debe seguir el formato correcto (ejemplo: rgb(255,255,255) o rgba(255,255,255,0.5)).

Las validaciones se realizan con express-validator.

🛠 Scripts disponibles
npm start → Levanta el servidor en modo producción.

npm run dev → Levanta el servidor con nodemon para desarrollo.

## 📌 Notas
La base de datos puede ser local (MongoDB en tu PC) o remota (MongoDB Atlas).

No se requiere archivo .env, la conexión se configura directamente en database.js.

## 👨‍💻 Autor

Juan Manuel Blanco