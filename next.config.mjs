/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Genera versión estática para hosting tipo cPanel / Hostinger
  output: "export",

  // ⚙️ Optimización del build
  reactStrictMode: true,
  swcMinify: true,

  // ✅ Evita errores por optimización de imágenes (Next/Image no se usa)
  images: {
    unoptimized: true,
  },

  // ✅ Asegura rutas correctas para sitios estáticos (terminan con /)
  trailingSlash: true,
};

export default nextConfig;
