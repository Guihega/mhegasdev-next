import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, Tooltip);

const data = {
  labels: ["Laravel", "Blazor", "Docker", "React", ".NET", "SQL Server"],
  datasets: [
    {
      label: "Nivel de dominio",
      data: [95, 90, 85, 88, 92, 94],
      backgroundColor: "rgba(37, 99, 235, 0.7)",
      borderRadius: 8,
    },
  ],
};

const options = {
  scales: {
    y: { beginAtZero: true, max: 100 },
  },
  plugins: { legend: { display: false } },
};

export default function SkillsChart() {
  return (
    <section id="skills" className="bg-background text-text py-20 transition-colors duration-500 px-8 md:px-16">
      <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
        Habilidades técnicas
      </h2>
      <div className="max-w-4xl mx-auto bg-[#1e293b] p-6 rounded-xl">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
}
