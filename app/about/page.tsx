import { SectionHeading } from "@/components/SectionHeading";
import { siteData, education, affiliations } from "@/data/site";

export default function AboutPage() {
  return (
    <main className="container-shell py-20">
      <SectionHeading
        eyebrow="About"
        title="Executive profile"
        description={siteData.objective}
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="card p-8">
          <h3 className="text-2xl font-semibold text-slate-950">Professional Summary</h3>
          <p className="mt-4 leading-8 text-slate-600">{siteData.summary}</p>
        </div>
        <div className="card p-8">
          <h3 className="text-2xl font-semibold text-slate-950">Education</h3>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-600">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 card p-8">
        <h3 className="text-2xl font-semibold text-slate-950">Affiliations</h3>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-600">
          {affiliations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
