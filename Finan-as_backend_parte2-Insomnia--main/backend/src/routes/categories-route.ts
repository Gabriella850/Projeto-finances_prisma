import { FastifyInstance } from 'fastify';
import { PrismaCategoryRepository } from '../repositories/prisma/prisma-category-repository';
import { CreateCategoryService } from '../services/categories/create-category-service';
import { ListCategoryService } from '../services/categories/list-category-service';
import { UpdateCategoryService } from '../services/categories/update-category-service';
import { DeleteCategoryService } from '../services/categories/delete-category-service';

export async function categoriesRoutes(app: FastifyInstance) {
  const categoryRepo = new PrismaCategoryRepository();

  app.get('/categories', async () => {
    const service = new ListCategoryService(categoryRepo);
    return await service.execute();
  });

  app.post('/categories', async (request, reply) => {
    const data = request.body as { name: string };
    const service = new CreateCategoryService(categoryRepo);
    const category = await service.execute(data);
    return reply.status(201).send(category);
  });

  app.patch('/categories/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const data = request.body as Partial<{ name: string }>;
    const service = new UpdateCategoryService(categoryRepo);
    const updated = await service.execute(id, data);
    if (!updated) {
      return reply.status(404).send({ error: 'Category not found' });
    }
    return reply.send(updated);
  });

  app.delete('/categories/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const service = new DeleteCategoryService(categoryRepo);
    await service.execute(id);
    return reply.status(204).send();
  });
}
