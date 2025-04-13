// Pindahkan pagination ke client component untuk menghindari masalah dengan searchParams
'use client';

import { useState, useEffect } from 'react';
import { Model } from '@/app/types';
import ModelCard from './Ccomponents';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import { useRouter, useSearchParams } from 'next/navigation';

interface ModelsClientProps {
  initialModels: Model[];
  initialPage: number;
  totalPages: number;
}

export default function ModelsPageClient({ 
  initialModels, 
  initialPage, 
  totalPages 
}: ModelsClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [models] = useState(initialModels);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`/3d-models?page=${page}`);
  };

  useEffect(() => {
    // Update page when URL changes
    const page = searchParams.get('page') || '1';
    setCurrentPage(parseInt(page, 10));
  }, [searchParams]);

  const itemsPerPage = 6;
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages || 1));

  const paginatedModels = models.slice(
    (validCurrentPage - 1) * itemsPerPage,
    validCurrentPage * itemsPerPage
  );

  return (
    <main>
      <section className="container max-w-7xl px-6 py-12 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-[var(--foreground)]">
          Explore 3D Models
        </h1>

        <div 
          className="grid grid-cols-1 mb-5 md:mb-10 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {paginatedModels.map((model, index) => (
            <ModelCard 
              key={model.id} 
              model={model} 
              isPriority={index < 3}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent
              totalPages={totalPages}
              currentPage={validCurrentPage}
            >
              <PaginationItem>
                <a
                  href="#"
                  className="flex h-10 items-center justify-center gap-1 pl-2.5 pr-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(Math.max(1, validCurrentPage - 1));
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  <span>Previous</span>
                </a>
              </PaginationItem>
              
              {/* Generate numbered pagination links */}
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i} className={validCurrentPage === i + 1 ? "block" : (i < 2 || i > totalPages - 3 || Math.abs(i + 1 - validCurrentPage) <= 1) ? "block" : "hidden md:block"}>
                  <a
                    href="#"
                    className={`flex h-10 w-10 items-center justify-center rounded-md ${
                      validCurrentPage === i + 1
                        ? "bg-black text-white"
                        : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(i + 1);
                    }}
                  >
                    {i + 1}
                  </a>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <a
                  href="#"
                  className="flex h-10 items-center justify-center gap-1 pl-3 pr-2.5 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(Math.min(totalPages, validCurrentPage + 1));
                  }}
                >
                  <span>Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </main>
  );
}