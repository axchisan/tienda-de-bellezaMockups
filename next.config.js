/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilitar standalone para Docker
  output: "standalone",

  // Optimizaciones para producción
  experimental: {
    optimizeCss: true,
  },

  // Configuración de imágenes
  images: {
    domains: ["localhost"],
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },

  // Headers de seguridad
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ]
  },

  // Configuración de compresión
  compress: true,

  // Variables de entorno públicas
  env: {
    CUSTOM_KEY: "beauty-store-colombia",
  },

  // Ignorar errores durante la construcción
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
