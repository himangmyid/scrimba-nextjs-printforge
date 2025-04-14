import { getAllModels } from '@/lib/models';
import ModelsPageClient from './ModelsClient';

export default async function ModelsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const resolvedSearchParams = await searchParams;
  const { page: pageParam = '1' } = resolvedSearchParams || {};
  const page = parseInt(pageParam, 10);
  const models = await getAllModels();
  const itemsPerPage = 6;
  const totalPages = Math.ceil(models.length / itemsPerPage);

  // Extract unique categories from models
  const categories = ['All', ...new Set(models.map((model) => model.category))];

  return (
    <div className="models-page">
      {/* Models List with Client-side Filtering */}
      <ModelsPageClient
        initialModels={models}
        initialPage={page}
        totalPages={totalPages}
        categories={categories}
      />
    </div>
  );
}

