import { prisma } from '../../../lib/prisma';
import { Category } from '@prisma/client';
import { CategoryRepository } from '../category-interface-repository';

export class PrismaCategoryRepository implements CategoryRepository {
  async list(): Promise<Category[]> {
    return await prisma.category.findMany();
  }

  async create(data: Omit<Category, 'id'>): Promise<Category> {
    return await prisma.category.create({ data });
  }

  async update(id: string, data: Partial<Omit<Category, 'id'>>): Promise<Category | null> {
    try {
      return await prisma.category.update({
        where: { id },
        data,
      });
    } catch {
      return null;
    }
  }

  async delete(id: string): Promise<void> {
    await prisma.category.delete({ where: { id } });
  }
}
