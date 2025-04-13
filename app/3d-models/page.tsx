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

  return (
    <ModelsPageClient
      initialModels={models}
      initialPage={page}
      totalPages={totalPages}
    />
  );
}

