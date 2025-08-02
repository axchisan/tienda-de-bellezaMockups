#!/bin/bash

# Script de despliegue para Beauty Store
echo "🚀 Iniciando despliegue de Beauty Store..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para logging
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
}

warning() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

# Verificar si Docker está instalado
if ! command -v docker &> /dev/null; then
    error "Docker no está instalado. Por favor instala Docker primero."
    exit 1
fi

# Verificar si Docker Compose está instalado
if ! command -v docker-compose &> /dev/null; then
    error "Docker Compose no está instalado. Por favor instala Docker Compose primero."
    exit 1
fi

# Detener contenedores existentes
log "Deteniendo contenedores existentes..."
docker-compose down --remove-orphans

# Limpiar imágenes antiguas (opcional)
read -p "¿Deseas limpiar imágenes Docker antiguas? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    log "Limpiando imágenes antiguas..."
    docker system prune -f
    docker image prune -f
fi

# Construir y ejecutar
log "Construyendo y ejecutando la aplicación..."
docker-compose up --build -d

# Verificar que los contenedores estén corriendo
log "Verificando estado de los contenedores..."
sleep 10

if docker-compose ps | grep -q "Up"; then
    log "✅ Despliegue exitoso!"
    log "La aplicación está disponible en:"
    log "  - HTTP: http://localhost"
    log "  - Aplicación directa: http://localhost:3000"
    
    # Mostrar logs en tiempo real
    read -p "¿Deseas ver los logs en tiempo real? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        docker-compose logs -f
    fi
else
    error "❌ El despliegue falló. Verificando logs..."
    docker-compose logs
    exit 1
fi

log "🎉 Beauty Store desplegado exitosamente!"
