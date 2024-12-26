# Usar una imagen de Nginx en Alpine para un contenedor ligero
FROM nginx:alpine

# Copiar los archivos compilados desde la carpeta dist a Nginx
COPY dist /usr/share/nginx/html

# Exponer el puerto 80 para Nginx
EXPOSE 80

# Comando por defecto para ejecutar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
