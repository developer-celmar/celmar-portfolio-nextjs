import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { siteData, education, affiliations } from "@/data/site";

export default function AboutPage() {
  return (
    <main className="container-shell py-20">
      <SectionHeading
        eyebrow="About"
        title="Executive profile with a personal touch"
        description={siteData.objective}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card overflow-hidden p-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/about-photo.png"
              alt="Outdoor portrait of Celmar Galindez"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>
        </div>

        <div className="space-y-8">
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
