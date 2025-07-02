// delete-category-service.ts
import { CategoryRepository } from '../../repositories/category-interface-repository';

export class DeleteCategoryService {
  constructor(private repo: CategoryRepository) {}

  async execute(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
