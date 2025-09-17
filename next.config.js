/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilitar React Strict Mode para identificar problemas potenciales
  reactStrictMode: true,
  
  // Configuración de imágenes
  images: {
    domains: [], // Añadir dominios externos para imágenes si es necesario
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permitir imágenes de cualquier dominio HTTPS
      },
    ],
  },
  
  // Configuración de entorno
  env: {
    // Variables de entorno públicas (accesibles en el cliente)
    APP_NAME: 'SONIR',
    APP_VERSION: '0.1.0',
  },
  
  // Configuración de rutas de API
  async headers() {
    return [
      {
        // Aplicar a todas las rutas de API
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ];
  },
  
  // Configuración de webpack (opcional)
  webpack: (config, { isServer }) => {
    // Ejemplo: añadir un alias para facilitar las importaciones
    config.resolve.alias = {
      ...config.resolve.alias,
      // Añadir alias adicionales si es necesario
    };
    
    return config;
  },
};

module.exports = nextConfig;