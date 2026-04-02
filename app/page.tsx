import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppsShowcase } from "@/components/AppsShowcase";
import { AwardsGrid } from "@/components/AwardsGrid";
import { ProfilePhotoCard } from "@/components/ProfilePhotoCard";
import { ResumeButtons } from "@/components/ResumeButtons";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillsGrid } from "@/components/SkillsGrid";
import { AnimatedSection } from "@/components/AnimatedSection";
import { siteData, stats, experience } from "@/data/site";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="hero-glow one" />
      <div className="hero-glow two" />

      <section className="container-shell relative grid gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
        <AnimatedSection>
          <div>
            <p className="section-title">Executive-level portfolio</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              {siteData.name}
            </h1>
            <p className="mt-4 text-xl font-semibold text-brand-800">{siteData.title}</p>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">{siteData.summary}</p>
            <div className="mt-10">
              <ResumeButtons />
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="stat-card">
                  <p className="text-3xl font-bold text-slate-950">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ProfilePhotoCard />
        </AnimatedSection>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Skills / Tech Stack"
            title="Core technical and delivery capabilities."
            description="A concise executive presentation of the tools, platforms, and delivery methods used across public sector technology, app development, and project execution."
          />
          <div className="mt-10">
            <SkillsGrid />
          </div>
        </AnimatedSection>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Selected Experience"
            title="Professional leadership across government, technology, and delivery."
          />
          <div className="mt-10 grid gap-6">
            {experience.slice(0, 3).map((item) => (
              <div key={item.role + item.company} className="card p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
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
          <div className="mt-8">
            <Link href="/experience" className="btn-secondary">
              View full experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Awards & Recognitions"
            title="Recognition for service, performance, and professional contribution."
          />
          <div className="mt-10">
            <AwardsGrid />
          </div>
        </AnimatedSection>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Published Apps Showcase"
            title="A portfolio of shipped mobile applications."
          />
          <div className="mt-10">
            <AppsShowcase />
          </div>
          <div className="mt-8">
            <Link href="/projects" className="btn-secondary">
              Explore projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <section className="container-shell py-16">
        <AnimatedSection>
          <div className="card p-8 md:p-10">
            <SectionHeading
              eyebrow="Contact"
              title="Open to executive support, technology delivery, and project collaboration."
              description="The project includes a working contact form endpoint scaffold for Vercel deployment. You can later connect it to Resend, Formspree, or another mail provider."
            />
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Go to contact page
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
