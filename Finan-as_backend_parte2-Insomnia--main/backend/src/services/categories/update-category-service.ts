// update-category-service.ts
import { CategoryRepository } from '../../repositories/category-interface-repository';

export class UpdateCategoryService {
  constructor(private repo: CategoryRepository) {}

  async execute(id: string, data: Partial<{ name: string }>): Promise<any | null> {
    return await this.repo.update(id, data);
  }
}
