import { prisma } from '../../../lib/prisma';
import { Transaction } from '../../entities/transaction';
import { TransactionRepository } from '../transaction-interface-repository';

export class PrismaTransactionRepository implements TransactionRepository {
  async list(): Promise<Transaction[]> {
    const transactions = await prisma.transaction.findMany();
    return transactions.map(t => ({
      ...t,
      type: t.type === 'income' ? 'income' : 'expense',
      date: t.date.toISOString(),
    }));
  }

  async create(data: Omit<Transaction, 'id'>): Promise<Transaction> {
    const transaction = await prisma.transaction.create({
      data: {
        ...data,
        date: new Date(data.date), // converte string para Date antes de salvar
      },
    });
    return {
      ...transaction,
      type: transaction.type === 'income' ? 'income' : 'expense',
      date: transaction.date.toISOString(),
    };
  }

  async update(id: string, data: Partial<Omit<Transaction, 'id'>>): Promise<Transaction | null> {
    try {
      const transaction = await prisma.transaction.update({
        where: { id },
        data: {
          ...data,
          ...(data.date ? { date: new Date(data.date) } : {}),
        },
      });
      return {
        ...transaction,
        type: transaction.type === 'income' ? 'income' : 'expense',
        date: transaction.date.toISOString(),
      };
    } catch {
      return null;
    }
  }

  async delete(id: string): Promise<void> {
    await prisma.transaction.delete({ where: { id } });
  }
}