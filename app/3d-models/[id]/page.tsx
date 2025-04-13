// app/3d-models/[id]/page.tsx
import Image from "next/image";
import { getModelById, getAllModels } from "@/lib/models";
import { notFound } from "next/navigation";

interface ModelDetailProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const models = await getAllModels();
  return models.map((model) => ({
    id: model.id.toString(),
  }));
}

export default async function ModelDetailPage({ params }: ModelDetailProps) {
  const { id } = await Promise.resolve(params);

  try {
    if (!id || isNaN(Number(id))) {
      throw new Error("Invalid model ID");
    }

    const model = await getModelById(id);

    if (!model) {
      notFound();
    }

    // Update the styling to follow a neobrutalism theme
    return (
      <main className="bg-[var(--background)] min-h-screen">
        <section className="container max-w-6xl px-4 py-12 mx-auto">
          {/* Header Section */}
          <div className="mb-8 text-center border-4 border-[var(--primary)] p-4 rounded-lg">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] mb-4">
              {model.category.replace("-", " ")}
            </span>
            <h1 className="text-4xl font-extrabold text-[var(--foreground)] mb-2 md:text-5xl">
              {model.name}
            </h1>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Added on {new Date(model.dateAdded).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>

          {/* Image and Content Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Image Section */}
            <div className="relative aspect-video border-4 border-[var(--primary)] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={model.image}
                alt={`3D model of ${model.name}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover hover:scale-110 transition-transform duration-500"
                priority
              />
              <div className="absolute bottom-4 right-4 bg-[var(--background)] text-[var(--foreground)] px-3 py-1 rounded-lg text-sm font-bold border-2 border-[var(--primary)]">
                <span>{model.likes} Likes</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 border-4 border-[var(--primary)] p-6 rounded-lg">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-extrabold text-[var(--foreground)] mb-4">About This Model</h2>
                <p className="text-[var(--main-foreground)] leading-relaxed">
                  {model.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[var(--background-light)] p-4 rounded-lg border-2 border-[var(--primary)]">
                  <h3 className="text-sm font-bold text-[var(--muted-foreground)] mb-1">Category</h3>
                  <p className="font-bold text-[var(--foreground)]">{model.category.replace("-", " ")}</p>
                </div>
                <div className="bg-[var(--background-light)] p-4 rounded-lg border-2 border-[var(--primary)]">
                  <h3 className="text-sm font-bold text-[var(--muted-foreground)] mb-1">File Format</h3>
                  <p className="font-bold text-[var(--foreground)]">STL, OBJ</p>
                </div>
                <div className="bg-[var(--background-light)] p-4 rounded-lg border-2 border-[var(--primary)]">
                  <h3 className="text-sm font-bold text-[var(--muted-foreground)] mb-1">Polygons</h3>
                  <p className="font-bold text-[var(--foreground)]">~50k</p>
                </div>
                <div className="bg-[var(--background-light)] p-4 rounded-lg border-2 border-[var(--primary)]">
                  <h3 className="text-sm font-bold text-[var(--muted-foreground)] mb-1">License</h3>
                  <p className="font-bold text-[var(--foreground)]">Creative Commons</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <button className="px-6 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg font-bold border-2 border-[var(--foreground)] hover:bg-[var(--primary-hover)] transition-colors">
                  Download Model
                </button>
                <button className="px-6 py-3 border-2 border-[var(--foreground)] rounded-lg font-bold hover:bg-[var(--background-light)] transition-colors">
                  Like
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error fetching model:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-[var(--background-light)] rounded-lg border border-[var(--border)] max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-2">Failed to load model</h2>
          <p className="text-[var(--muted-foreground)]">Please try again later or check if the model ID is correct.</p>
        </div>
      </div>
    );
  }
}