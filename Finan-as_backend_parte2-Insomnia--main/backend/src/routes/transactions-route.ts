import { FastifyInstance } from 'fastify';
import { Transaction } from '../entities/transaction';
import { PrismaTransactionRepository } from '../repositories/prisma/prisma-transaction-repository';
import { CreateTransactionService } from '../services/transactions/create-transaction-service';
import { ListTransactionService } from '../services/transactions/list-transaction-service';
import { UpdateTransactionService } from '../services/transactions/update-transaction-service';
import { DeleteTransactionService } from '../services/transactions/delete-transaction-service';

export async function transactionsRoutes(app: FastifyInstance) {
  const transactionRepo = new PrismaTransactionRepository();

  app.get('/transactions', async () => {
    const service = new ListTransactionService(transactionRepo);
    return await service.execute();
  });

  app.post('/transactions', async (request, reply) => {
    const data = request.body as Omit<Transaction, 'id'>;
    const service = new CreateTransactionService(transactionRepo);
    const transaction = await service.execute(data);
    return reply.status(201).send(transaction);
  });

  app.patch('/transactions/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const data = request.body as Partial<Omit<Transaction, 'id'>>;
    const service = new UpdateTransactionService(transactionRepo);
    const updated = await service.execute(id, data);
    if (!updated) return reply.status(404).send({ error: 'Transaction not found' });
    return reply.send(updated);
  });

  app.delete('/transactions/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const service = new DeleteTransactionService(transactionRepo);
    await service.execute(id);
    return reply.status(204).send();
  });
}
