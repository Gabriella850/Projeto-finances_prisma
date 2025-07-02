import { Category } from '../entities/categories';

export interface CategoryRepository {
  list(): Promise<Category[]>;
  create(data: Omit<Category, 'id'>): Promise<Category>;
  update(id: string, data: Partial<Category>): Promise<Category | null>;
  delete(id: string): Promise<void>;
}
