import Link from "next/link";
import { siteData } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <div>
          <Link href="/" className="text-lg font-bold tracking-tight text-slate-950">
            {siteData.name}
          </Link>
          <p className="text-xs text-slate-500">{siteData.title}</p>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <a href="/CELMAR_GALINDEZ_CV.pdf" className="btn-primary" download>
            Download Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
