import { skills } from "@/data/site";

export function SkillsGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {skills.map((skill) => (
        <div key={skill} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
          {skill}
        </div>
      ))}
    </div>
  );
}
