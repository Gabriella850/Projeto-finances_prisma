import { CategoryRepository } from './category-interface-repository';
import { Category } from '../entities/categories';
import { randomUUID } from 'node:crypto';

export class InMemoryCategoryRepository implements CategoryRepository {
  private categories: Category[] = [];

  list() {
    return this.categories;
  }

  create(data: Omit<Category, 'id'>) {
    const category: Category = { id: randomUUID(), ...data };
    this.categories.push(category);
    return category;
  }

  update(id: string, data: Partial<Category>) {
    const index = this.categories.findIndex(c => c.id === id);
    if (index === -1) return null;
    this.categories[index] = { ...this.categories[index], ...data };
    return this.categories[index];
  }

  delete(id: string) {
    this.categories = this.categories.filter(c => c.id !== id);
  }
}
