import { apps } from "@/data/site";

export function AppsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {apps.map((app) => (
        <div key={app} className="card p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">
            Published App
          </p>
          <h3 className="mt-3 text-xl font-semibold text-slate-950">{app}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Shipped as part of Celmar’s mobile development portfolio and published to major app platforms.
          </p>
        </div>
      ))}
    </div>
  );
}
