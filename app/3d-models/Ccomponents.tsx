// app/3d-models/Ccomponents.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import type { Model } from "@/app/types";

export default function ModelCard({ model, isPriority = false }: { model: Model, isPriority?: boolean }) {
  return (
    <Link 
      href={`/3d-models/${model.id}`}
      className="block group"
      aria-label={`View ${model.name} details`}
    >
      <div className="p-4 bg-[var(--background)] border-2 border-[var(--border)] rounded-lg 
        shadow-[8px_8px_0px_0px_var(--border)] transition-all duration-300 
        hover:shadow-[12px_12px_0px_0px_var(--border)] hover:translate-y-[-4px]">
        
        <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
          <Image
            src={model.image}
            alt={`Preview of ${model.name}`}
            fill
            priority={isPriority}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-[var(--foreground)] line-clamp-1">
            {model.name}
          </h2>
          <p className="text-sm text-[var(--main-foreground)] line-clamp-2">
            {model.description}
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs font-medium text-[var(--main-foreground)]">
              ❤️ {model.likes}
            </span>
            <span className="text-xs font-medium text-[var(--main)] uppercase">
              {model.category.replace("-", " ")}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}