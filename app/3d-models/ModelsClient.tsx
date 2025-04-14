// Pindahkan pagination ke client component untuk menghindari masalah dengan searchParams
'use client';

import { useState } from 'react';
import { Model } from '@/app/types';
import ModelCard from './Ccomponents';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import { useRouter } from 'next/navigation';

interface ModelsClientProps {
  initialModels: Model[];
  initialPage: number;
  totalPages: number;
  categories: string[];
}

export default function ModelsPageClient({ 
  initialModels, 
  initialPage, 
  totalPages,
  categories
}: ModelsClientProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [models] = useState(initialModels);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`/3d-models?page=${page}`);
  };

  // Filter models by selected category
  const filteredModels = selectedCategory === 'All'
    ? models
    : models.filter((model) => model.category === selectedCategory);

  const itemsPerPage = 6;
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages || 1));

  const paginatedModels = filteredModels.slice(
    (validCurrentPage - 1) * itemsPerPage,
    validCurrentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col lg:flex-row w-full gap-6">
      {/* Desktop Sidebar Filter - Left side for desktop */}
      <aside className="hidden lg:flex w-56 self-start sticky top-24 h-[calc(100vh-150px)] border-r border-[var(--border)] pr-4 pb-6 items-center">
        <ul className="space-y-3 text-center w-full">
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`py-2 px-3 transition-colors duration-300 ${
                  selectedCategory === category 
                    ? 'text-[var(--main)] font-medium' 
                    : 'text-[var(--foreground)] hover:text-[var(--main)]'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.replace("-", " ").toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1">
        <section className="container max-w-7xl px-6 py-12 mx-auto lg:px-4">
          <h1 className="mb-8 text-4xl font-bold text-center text-[var(--foreground)]">
            Explore 3D Models
          </h1>

          {/* Mobile Filter - Horizontal scrollable for mobile and tablet */}
          <div className="lg:hidden mb-6 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 min-w-max px-0.5">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`py-2 whitespace-nowrap transition-colors duration-300 ${
                    selectedCategory === category 
                      ? 'text-[var(--main)] font-medium border-b-2 border-[var(--main)]' 
                      : 'text-[var(--foreground)] hover:text-[var(--main)]'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.replace("-", " ").toUpperCase()}
                </button>
              ))}
            </div>
          </div>

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
                    className="flex h-10 items-center justify-center gap-1 pl-2.5 pr-3 border-4 border-[var(--border)] bg-[var(--secondary-background)] text-[var(--foreground)] hover:bg-[var(--main)] hover:text-[var(--main-foreground)] hover:border-[var(--main)] rounded-md transition-colors duration-300"
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
                      className={`flex h-10 w-10 items-center justify-center rounded-md border-4 transition-colors duration-300 ${
                        validCurrentPage === i + 1
                          ? "bg-[var(--main)] text-[var(--main-foreground)] border-[var(--main)]"
                          : "border-[var(--border)] bg-[var(--secondary-background)] text-[var(--foreground)] hover:bg-[var(--main)] hover:text-[var(--main-foreground)] hover:border-[var(--main)]"
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
                    className="flex h-10 items-center justify-center gap-1 pl-3 pr-2.5 border-4 border-[var(--border)] bg-[var(--secondary-background)] text-[var(--foreground)] hover:bg-[var(--main)] hover:text-[var(--main-foreground)] hover:border-[var(--main)] rounded-md transition-colors duration-300"
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
    </div>
  );
}