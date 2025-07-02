import { FastifyInstance } from 'fastify';
import { Bank } from '../entities/bank';
import { PrismaBankRepository } from '../repositories/prisma/prisma-bank-repository';
import { CreateBankService } from '../services/banks/create-bank-service';
import { ListBankService } from '../services/banks/list-bank-service';
import { UpdateBankService } from '../services/banks/update-bank-service';
import { DeleteBankService } from '../services/banks/delete-bank-service';

export async function banksRoutes(app: FastifyInstance) {
  const bankRepo = new PrismaBankRepository();

  app.get('/banks', () => {
    const service = new ListBankService(bankRepo);
    return service.execute();
  });

  app.post('/banks', async (request, reply) => {
    const data = request.body as Omit<Bank, 'id'>;
    const service = new CreateBankService(bankRepo);
    const bank = await service.execute(data);
    return reply.status(201).send(bank);
  });

  app.patch('/banks/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const data = request.body as Partial<Omit<Bank, 'id'>>;
    const service = new UpdateBankService(bankRepo);
    const updated = await service.execute(id, data);
    if (!updated) return reply.status(404).send({ error: 'Bank not found' });
    return reply.send(updated);
  });

  app.delete('/banks/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const service = new DeleteBankService(bankRepo);
    await service.execute(id);
    return reply.status(204).send();
  });
}
