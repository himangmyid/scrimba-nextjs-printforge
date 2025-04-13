import HeroImageSquare from "@/public/hero-image-square.png";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      {/* Section 1: About PrintForge */}
      <section className="max-w-4xl px-4 py-15 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center text-[var(--foreground)]">
          About PrintForge
        </h1>

        <div className="grid items-center gap-8 mb-12 md:mb-2 md:grid-cols-2">
          {/* Image with Shadow */}
          <div className="relative h-[300px] w-full">
            <Image
              src={HeroImageSquare}
              alt="PrintForge Community - A group of makers collaborating on 3D printing projects"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover rounded-lg shadow-[8px_8px_0px_0px_var(--border)]"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase text-[var(--main-foreground)]" aria-hidden="true">
              About PrintForge
            </p>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Empowering Makers Worldwide
            </h2>
            <p className="text-[var(--main-foreground)]">
              Founded in 2023, PrintForge has quickly become the go-to platform
              for 3D printing enthusiasts, makers, and professional designers to
              share and discover amazing STL files for 3D printing.
            </p>
            <p className="text-[var(--main-foreground)]">
              Our mission is to foster a vibrant community where creativity
              meets technology, enabling anyone to bring their ideas to life
              through 3D printing.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-[var(--border)]" aria-hidden="true" />

      {/* Section 2: Key Features */}
      <section className="py-12" aria-labelledby="key-features">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 id="key-features" className="sr-only">
            Key Features
          </h2>
          <div className="grid gap-6 md:gap-5 md:grid-cols-3">
            {/* Feature 1 */}
            <article className="p-6 bg-[var(--background)] border-2 border-[var(--border)] rounded-lg shadow-[4px_4px_0px_0px_var(--border)]">
              <h3 className="mb-3 text-xl font-semibold text-[var(--foreground)]">
                100K+ Models
              </h3>
              <p className="text-[var(--main-foreground)]">
                Access our vast library of community-created 3D models, from
                practical tools to artistic creations.
              </p>
            </article>

            {/* Feature 2 */}
            <article className="p-6 bg-[var(--background)] border-2 border-[var(--border)] rounded-lg shadow-[4px_4px_0px_0px_var(--border)]">
              <h3 className="mb-3 text-xl font-semibold text-[var(--foreground)]">
                Active Community
              </h3>
              <p className="text-[var(--main-foreground)]">
                Join thousands of makers who share tips, provide feedback, and
                collaborate on projects.
              </p>
            </article>

            {/* Feature 3 */}
            <article className="p-6 bg-[var(--background)] border-2 border-[var(--border)] rounded-lg shadow-[4px_4px_0px_0px_var(--border)]">
              <h3 className="mb-3 text-xl font-semibold text-[var(--foreground)]">
                Free to Use
              </h3>
              <p className="text-[var(--main-foreground)]">
                Most models are free to download, with optional premium features
                for power users.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-[var(--border)]" aria-hidden="true" />

      {/* Section 3: Our Vision */}
      <section className="container max-w-3xl px-4 py-8 mx-auto">
        <div className="prose max-w-none">
          <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
            Our Vision
          </h2>
          <p className="mb-4 text-[var(--main-foreground)]">
          At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what&#039;s possible with 3D printing.
          </p>
          <p className="text-[var(--main-foreground)]">
          Whether you&#039;re a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.
          </p>
        </div>
      </section>
    </main>
  );
}