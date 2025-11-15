import prisma from './client';
import { CulturalEdition, BaseProduct } from '@prisma/client';

export type EditionWithProduct = CulturalEdition & {
  baseProduct: BaseProduct;
};

export async function getEditionsByCountry(country: string) {
  return prisma.culturalEdition.findMany({
    where: { country },
    include: {
      baseProduct: true,
      abTests: {
        where: { status: 'ACTIVE' },
        take: 3,
      },
      surveys: {
        where: { status: 'ACTIVE' },
        take: 3,
      },
    },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getAllEditions() {
  return prisma.culturalEdition.findMany({
    include: {
      baseProduct: true,
    },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getEditionBySlug(slug: string) {
  return prisma.culturalEdition.findUnique({
    where: { slug },
    include: {
      baseProduct: true,
      abTests: {
        orderBy: { createdAt: 'desc' },
      },
      surveys: {
        orderBy: { createdAt: 'desc' },
      },
      crowdfunding: true,
      complianceChecks: {
        orderBy: { createdAt: 'desc' },
      },
    },
  });
}

export async function createEdition(data: {
  baseProductId: string;
  country: string;
  nameLocal: string;
  slug: string;
  price: number;
  currency?: string;
}) {
  return prisma.culturalEdition.create({
    data: {
      ...data,
      status: 'RESEARCH',
    },
    include: {
      baseProduct: true,
    },
  });
}

export async function updateEdition(
  id: string,
  data: Partial<CulturalEdition>
) {
  return prisma.culturalEdition.update({
    where: { id },
    data,
    include: {
      baseProduct: true,
    },
  });
}

export function calculateProgress(edition: CulturalEdition): number {
  const steps = [
    edition.step1FgdCompleted,
    edition.step2PrototypeReady,
    edition.step3AbTestCompleted,
    edition.step4DesignFinalized,
    edition.step5FundingLaunched,
  ];
  
  const completed = steps.filter(Boolean).length;
  return (completed / steps.length) * 100;
}
