import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { siteData } from "@/data/site";

export default function ContactPage() {
  return (
    <main className="container-shell py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Start a conversation"
        description="Use the form or direct contact details below. This page is structured for Vercel deployment and can be connected to a production mail service."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="card p-8">
          <h3 className="text-2xl font-semibold text-slate-950">Direct Contact</h3>
          <dl className="mt-6 space-y-4 text-slate-600">
            <div>
              <dt className="text-sm font-medium text-slate-500">Email</dt>
              <dd className="mt-1">{siteData.email}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">LinkedIn</dt>
              <dd className="mt-1">
                <a href={siteData.linkedin} className="text-brand-700 hover:underline">
                  {siteData.linkedin.replace("https://", "")}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">Phone</dt>
              <dd className="mt-1">{siteData.phone}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">Location</dt>
              <dd className="mt-1">{siteData.location}</dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
