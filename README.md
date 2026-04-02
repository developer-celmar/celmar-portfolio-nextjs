# Celmar Galindez Portfolio

A Vercel-ready Next.js portfolio project built with the App Router, TypeScript, and Tailwind CSS.

## Included executive-level sections

- Resume download button
- Skills / Tech stack
- Awards & recognitions
- Published apps showcase
- Professional photo placeholder
- Contact form
- Vercel-ready Next.js deployment structure

## Project structure

```text
celmar-portfolio-nextjs/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── experience/page.tsx
│   ├── projects/page.tsx
│   ├── api/contact/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AppsShowcase.tsx
│   ├── AwardsGrid.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ProfilePhotoCard.tsx
│   ├── ResumeButtons.tsx
│   ├── SectionHeading.tsx
│   └── SkillsGrid.tsx
├── data/site.ts
├── public/CELMAR_GALINDEZ_CV.pdf
├── package.json
├── tailwind.config.ts
└── README.md
```

## Local development

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings.
4. Deploy.

## Notes

- The professional photo is currently a placeholder. Replace it with a real image in `/public/profile.jpg`.
- The contact form endpoint is a scaffold and should be connected to a production mail provider.
