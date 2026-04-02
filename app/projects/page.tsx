import { AppsShowcase } from "@/components/AppsShowcase";
import { SectionHeading } from "@/components/SectionHeading";

const projects = [
  {
    title: "Project Monitoring Web Application",
    description:
      "Developed as part of public sector work to support project oversight, coordination, and reporting.",
  },
  {
    title: "Mobile App Integration for Monitoring",
    description:
      "Integrated mobile workflows into monitoring systems to improve reporting accessibility and operational coordination.",
  },
  {
    title: "AR and Game Development Projects",
    description:
      "Built interactive mobile experiences using Unity, augmented reality, and platform deployment workflows.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="container-shell py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Selected systems, mobile products, and innovation work"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="card p-8">
            <h3 className="text-2xl font-semibold text-slate-950">{project.title}</h3>
            <p className="mt-4 leading-8 text-slate-600">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-16">
        <SectionHeading
          eyebrow="Apps"
          title="Published mobile applications"
        />
        <div className="mt-10">
          <AppsShowcase />
        </div>
      </div>
    </main>
  );
}
