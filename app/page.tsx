// app/page.tsx
'use client';
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/public/hero-image.png";
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-20 mx-auto md:flex-row max-w-7xl">
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          {isLoading ? (
            <>
              {/* Skeleton for subtitle */}
              <Skeleton className="h-5 w-[200px] mb-6 border-2 border-[var(--border)] shadow-[4px_4px_0px_0px_var(--border)]" />
              
              {/* Skeleton for title */}
              <div className="space-y-4">
                <Skeleton className="h-12 w-full border-2 border-[var(--border)] shadow-[4px_4px_0px_0px_var(--border)]" />
                <Skeleton className="h-12 w-3/4 border-2 border-[var(--border)] shadow-[4px_4px_0px_0px_var(--border)]" />
              </div>
              
              {/* Skeleton for description */}
              <Skeleton className="h-5 w-full border-2 border-[var(--border)] shadow-[4px_4px_0px_0px_var(--border)]" />
              <Skeleton className="h-5 w-2/3 border-2 border-[var(--border)] shadow-[4px_4px_0px_0px_var(--border)]" />
              
              {/* Skeleton for button */}
              <Skeleton className="h-12 w-[180px] border-2 border-[var(--border)] shadow-[4px_4px_0px_0px_var(--border)]" />
            </>
          ) : (
            <>
              {/* Subtitle */}
              <p className="text-sm font-medium uppercase text-[var(--main-foreground)] md:block hidden">
                Your go-to platform for 3D printing files
              </p>

              {/* Title */}
              <h1 className="text-4xl font-bold text-[var(--foreground)] md:text-6xl">
                Discover what&#039;s possible with 3D Printing
              </h1>

              {/* Description */}
              <p className="text-lg text-[var(--main-foreground)]">
                Join our community of creators and explore a vast library of
                user-submitted models.
              </p>

              {/* Call-to-Action Button */}
              <div className="flex justify-center md:justify-start gap-4">
                <Link
                  href="/3d-models"
                  className="px-8 py-4 text-[var(--foreground)] transition duration-300 bg-[var(--background)] border-2 border-[var(--border)] hover:bg-[var(--main)] hover:text-[var(--main-foreground)] shadow-[4px_4px_0px_0px_var(--border)]"
                >
                  Browse Models
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Hero Image */}
        <div className="relative w-full md:w-[650px] h-auto">
          {isLoading ? (
            <Skeleton className="w-full h-[400px] border-2 border-[var(--border)] shadow-[8px_8px_0px_0px_var(--border)] rounded-lg" />
          ) : (
            <Image
              src={HeroImage}
              alt="Hero Image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-lg shadow-[8px_8px_0px_0px_var(--border)]"
              priority
            />
          )}
        </div>
      </section>
    </main>
  );
}