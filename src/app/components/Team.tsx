export default function Team() {
  const members = [
    {
      name: "Guillermo Herrera",
      role: "Desarrollador Full Stack / Fundador",
      img: "/images/team/guillermo.webp",
    },
    {
      name: "Colaborador IA / DevOps",
      role: "Integraciones y despliegue automatizado",
      img: "/images/team/assistant.webp",
    },
  ];

  return (
    <section id="team" className="py-24 text-center bg-background">
      <h2 className="text-4xl font-bold mb-12 text-primary">Nuestro Equipo</h2>
      <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
        {members.map((m, i) => (
          <div
            key={i}
            className="p-6 bg-backgroundSecondary border border-border rounded-xl shadow-md hover:shadow-glow transition"
          >
            <img
              src={m.img}
              alt={m.name}
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">{m.name}</h3>
            <p className="text-muted">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
