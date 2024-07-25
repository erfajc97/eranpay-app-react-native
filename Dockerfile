# Usar una imagen base con Node.js
FROM node:20

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de configuración de tu proyecto que son específicos para Node, TypeScript y Tailwind
COPY package.json package-lock.json app.json babel.config.js tsconfig.json tailwind.config.js eas.json expo-env.d.ts ./

# Instalar dependencias del proyecto
RUN npm install

# Copiar el resto del código fuente del proyecto
COPY . .

# Expo utiliza el puerto 19000 por defecto para el servidor de desarrollo
# y otros puertos para servicios relacionados
EXPOSE 19000 19001 19002

# Comando para iniciar la aplicación cuando el contenedor esté corriendo
CMD ["npx", "expo", "start"]
