# 1. Usamos una imagen ligera de Node
FROM node:18-slim

# 2. Creamos la carpeta de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos los archivos de dependencias primero (para optimizar caché)
COPY package*.json ./

# 4. Instalamos las librerías
RUN npm install

# 5. Copiamos el resto del código
COPY . .

# 6. Exponemos el puerto 3000
EXPOSE 3000

# 7. Comando para arrancar la app
CMD ["node", "index.js"]