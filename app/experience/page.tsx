import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/site";

export default function ExperiencePage() {
  return (
    <main className="container-shell py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Detailed professional timeline"
        description="This page presents the broader span of Celmar Galindez’s work across public sector systems, development, education, and project delivery."
      />
      <div className="mt-12 grid gap-6">
        {experience.map((item) => (
          <div key={item.role + item.company + item.period} className="card p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-950">{item.role}</h3>
                <p className="mt-1 text-slate-600">{item.company}</p>
              </div>
              <p className="text-sm font-medium text-slate-500">{item.period}</p>
            </div>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-600">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
