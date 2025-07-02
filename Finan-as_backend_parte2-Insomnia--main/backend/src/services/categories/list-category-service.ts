// list-category-service.ts
import { CategoryRepository } from '../../repositories/category-interface-repository';

export class ListCategoryService {
  constructor(private repo: CategoryRepository) {}

  async execute(): Promise<any[]> {
    return await this.repo.list();
  }
}
