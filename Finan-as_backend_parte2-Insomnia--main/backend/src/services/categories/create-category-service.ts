// create-category-service.ts
import { CategoryRepository } from '../../repositories/category-interface-repository';

export class CreateCategoryService {
  constructor(private repo: CategoryRepository) {}

  async execute(data: { name: string }): Promise<any> {
    return await this.repo.create(data);
  }
}
