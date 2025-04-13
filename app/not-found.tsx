// app/not-found.tsx
'use client';
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  // Fungsi untuk menavigasi ke halaman utama
  const navigateToHome = () => {
    window.location.href = "/"; 
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full border-4 border-[var(--border)] bg-[var(--card)] p-8 shadow-shadow">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-9xl font-heading mb-4 text-[var(--main)]">404</h1>
          <h2 className="text-3xl font-heading uppercase">Page Not Found</h2>
          <div className="h-2 bg-[var(--main)] w-1/3 mx-auto mt-4"></div>
        </div>

        {/* Content */}
        <div className="mb-8 text-center">
          <p className="text-lg mb-6">
            The page you are looking for does not exist or has been moved.
          </p>
          <p className="text-sm text-[var(--muted-foreground)]">
            Maybe you mistyped the URL? Check the spelling and try again.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <button 
            onClick={navigateToHome} 
            className="px-6 py-3 border-2 border-[var(--border)] bg-[var(--background)] hover:bg-[var(--main)] hover:text-[var(--main-foreground)] font-base uppercase flex items-center gap-2 transition-all hover:translate-y-1"
          >
            <FiArrowLeft size={18} />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

     
      <div className="mt-12 flex gap-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 border-2 border-[var(--border)] bg-[var(--main)]"
            style={{
              transform: `rotate(${i * 15}deg)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}