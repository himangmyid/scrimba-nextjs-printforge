// /app/types/index.ts
import type { ReactNode } from "react";


export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};


export type RootLayoutProps = {
  children: ReactNode;
};


export type ModelDetailPageProps = {
  params: {
    id: string;
  };
};


export type ModelCardProps = {
  model: Model;
};

export type PillProps = {
  children: ReactNode;
  className?: string;
};


export type ModelsAPI = {
  getAllModels: () => Promise<Model[]>;
  getModelById: (id: string | number) => Promise<Model>;
};