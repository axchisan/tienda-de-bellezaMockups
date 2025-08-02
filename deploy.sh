#!/bin/bash

# Script de despliegue para Contabo + Coolify
echo "🚀 Iniciando despliegue de Beauty Store..."

# Verificar que Docker esté instalado
if ! command -v docker &> /dev/null; then
    echo "❌ Docker no está instalado"
    exit 1
fi

# Verificar que docker-compose esté instalado
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose no está instalado"
    exit 1
fi

# Construir la imagen
echo "🔨 Construyendo imagen Docker..."
docker build -t beauty-store:latest .

# Verificar que la construcción fue exitosa
if [ $? -eq 0 ]; then
    echo "✅ Imagen construida exitosamente"
else
    echo "❌ Error al construir la imagen"
    exit 1
fi

# Detener contenedores existentes
echo "🛑 Deteniendo contenedores existentes..."
docker-compose down

# Iniciar los servicios
echo "🚀 Iniciando servicios..."
docker-compose up -d

# Verificar que los servicios estén corriendo
echo "🔍 Verificando servicios..."
sleep 10

if docker-compose ps | grep -q "Up"; then
    echo "✅ Servicios iniciados correctamente"
    echo "🌐 La aplicación está disponible en http://localhost:3000"
else
    echo "❌ Error al iniciar los servicios"
    docker-compose logs
    exit 1
fi

echo "🎉 Despliegue completado exitosamente!"
