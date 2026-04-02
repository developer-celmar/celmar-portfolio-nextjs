import { Award } from "lucide-react";
import { awards } from "@/data/site";

export function AwardsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {awards.map((award) => (
        <div key={award.title} className="card p-6">
          <Award className="h-8 w-8 text-brand-700" />
          <h3 className="mt-4 text-xl font-semibold text-slate-950">{award.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{award.org}</p>
          <p className="mt-1 text-sm text-slate-500">{award.date}</p>
        </div>
      ))}
    </div>
  );
}
