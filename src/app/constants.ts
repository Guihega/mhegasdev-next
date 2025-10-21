/* ======================================================
   🌐 MHEGASDEV — DATOS GLOBALES DEL SITIO
   ====================================================== */

// 🏠 Información general de la empresa
export const COMPANY_INFO = {
  name: "MhegasDev",
  slogan: "Soluciones tecnológicas inteligentes para tu negocio.",
  description:
    "MhegasDev es una empresa especializada en el desarrollo de software, sitios web y soluciones digitales personalizadas. Nuestro objetivo es impulsar la transformación tecnológica de tu negocio mediante innovación, calidad y soporte constante.",
  founded: "2024",
  location: {
    address: "Av. Independencia 104, Tehuacán, Puebla, México",
    mapLink: "https://goo.gl/maps/3zBbFZrjvKx4K1cD9",
  },
  contact: {
    phone: "+52 238 132 9200",
    email: "contacto@mhegasdev.com",
    whatsapp: "https://wa.me/522381329200",
  },
};

// 📱 Redes sociales oficiales
export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://facebook.com/mhegasdev",
    icon: "FaFacebookF", // react-icons/fa
    color: "#1877F2",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/mhegasdev",
    icon: "FaInstagram",
    color: "#E4405F",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/mhegasdev",
    icon: "FaLinkedinIn",
    color: "#0077B5",
  },
  {
    name: "GitHub",
    url: "https://github.com/mhegasdev",
    icon: "FaGithub",
    color: "#ffffff",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@mhegasdev",
    icon: "FaYoutube",
    color: "#FF0000",
  },
];

// 🧭 Elementos del menú principal
export const NAV_ITEMS = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Tecnologías", href: "#technologies" },
  { label: "Proyectos", href: "#projects" },
  { label: "Clientes", href: "#clients" },
  { label: "Contacto", href: "#contact" },
];

// 🧾 Enlaces útiles (footer)
export const FOOTER_LINKS = [
  {
    category: "Empresa",
    links: [
      { name: "Nosotros", href: "#about" },
      { name: "Servicios", href: "#services" },
      { name: "Proyectos", href: "#projects" },
      { name: "Clientes", href: "#clients" },
    ],
  },
  {
    category: "Recursos",
    links: [
      { name: "Blog", href: "#blog" },
      { name: "Certificaciones", href: "#certifications" },
      { name: "Aviso de Privacidad", href: "#" },
      { name: "Términos y Condiciones", href: "#" },
    ],
  },
  {
    category: "Soporte",
    links: [
      { name: "Centro de ayuda", href: "#contact" },
      { name: "Asesoría técnica", href: "#contact" },
      { name: "Reportar un problema", href: "#contact" },
    ],
  },
];

// 🧠 Tecnologías destacadas
export const TECH_STACK = [
  { name: "React", icon: "SiReact", color: "#61DAFB" },
  { name: "TailwindCSS", icon: "SiTailwindcss", color: "#06B6D4" },
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
  { name: "Laravel", icon: "SiLaravel", color: "#FF2D20" },
  { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
  { name: "Docker", icon: "SiDocker", color: "#2496ED" },
  { name: "Node.js", icon: "SiNodedotjs", color: "#68A063" },
  { name: "GitHub", icon: "SiGithub", color: "#fff" },
];
