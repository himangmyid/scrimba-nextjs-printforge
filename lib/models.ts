// /lib/models.ts
import modelsData from "@/app/data/models.json";
import type { Model } from "@/app/types";

const normalizeId = (id: string | number): string => id.toString();

export async function getAllModels(): Promise<Model[]> {
  await new Promise(resolve => setTimeout(resolve, 100)); // Simulasi delay
  return modelsData;
}

export async function getModelById(id: string | number): Promise<Model> {
  const normalizedId = normalizeId(id);

  if (!normalizedId || isNaN(Number(normalizedId))) {
    throw new Error("Invalid model ID");
  }

  await new Promise(resolve => setTimeout(resolve, 100)); // Simulasi delay

  const foundModel = modelsData.find(
    (model) => normalizeId(model.id) === normalizedId
  );

  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`);
  }

  return foundModel;
}