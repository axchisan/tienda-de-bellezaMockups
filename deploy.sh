#!/bin/bash

# Script de despliegue para Beauty Store
set -e

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
    exit 1
}

warning() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

# Verificar que Docker esté instalado
if ! command -v docker &> /dev/null; then
    error "Docker no está instalado. Por favor instala Docker primero."
fi

# Verificar que Docker Compose esté instalado
if ! command -v docker-compose &> /dev/null; then
    error "Docker Compose no está instalado. Por favor instala Docker Compose primero."
fi

# Detener contenedores existentes
log "Deteniendo contenedores existentes..."
docker-compose down --remove-orphans || warning "No hay contenedores existentes para detener"

# Limpiar imágenes antiguas
log "Limpiando imágenes antiguas..."
docker system prune -f

# Construir nuevas imágenes
log "Construyendo nuevas imágenes..."
docker-compose build --no-cache

# Iniciar servicios
log "Iniciando servicios..."
docker-compose up -d

# Esperar a que los servicios estén listos
log "Esperando a que los servicios estén listos..."
sleep 30

# Verificar health check
log "Verificando health check..."
for i in {1..10}; do
    if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
        log "✅ Aplicación desplegada exitosamente!"
        log "🌐 La aplicación está disponible en: http://localhost:3000"
        break
    else
        if [ $i -eq 10 ]; then
            error "❌ La aplicación no responde después de 10 intentos"
        fi
        warning "Intento $i/10: La aplicación aún no está lista, esperando..."
        sleep 10
    fi
done

# Mostrar logs
log "Mostrando logs recientes..."
docker-compose logs --tail=50

log "🎉 Despliegue completado!"
log "📊 Para ver logs en tiempo real: docker-compose logs -f"
log "🛑 Para detener la aplicación: docker-compose down"
