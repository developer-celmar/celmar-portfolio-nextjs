import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { siteData } from "@/data/site";

export function ResumeButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <a href="/CELMAR_GALINDEZ_CV.pdf" download className="btn-primary">
        <Download className="mr-2 h-4 w-4" />
        Download Résumé
      </a>
      <Link href="/contact" className="btn-secondary">
        <Mail className="mr-2 h-4 w-4" />
        Contact {siteData.name.split(" ")[0]}
      </Link>
    </div>
  );
}
