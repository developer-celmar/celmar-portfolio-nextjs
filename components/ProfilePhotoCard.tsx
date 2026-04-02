import { Camera } from "lucide-react";

export function ProfilePhotoCard() {
  return (
    <div className="card p-6">
      <div className="flex aspect-[4/5] items-center justify-center rounded-[2rem] border border-dashed border-slate-300 bg-slate-50">
        <div className="text-center text-slate-500">
          <Camera className="mx-auto h-10 w-10" />
          <p className="mt-4 text-sm font-medium">Professional photo placeholder</p>
          <p className="mt-2 max-w-xs text-sm">
            Replace this with an optimized headshot in <code>/public/profile.jpg</code> and switch
            the component to a real image.
          </p>
        </div>
      </div>
    </div>
  );
}
