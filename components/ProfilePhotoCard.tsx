import Image from "next/image";

export function ProfilePhotoCard() {
  return (
    <div className="card overflow-hidden p-3">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
        <Image
          src="/profile.png"
          alt="Profile photo of Celmar Galindez"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 420px"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/10 to-transparent" />
      </div>
    </div>
  );
}
