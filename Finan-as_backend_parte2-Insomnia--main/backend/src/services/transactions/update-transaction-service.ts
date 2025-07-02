// update-transaction-service.ts
import { Transaction } from '../../entities/transaction';
import { TransactionRepository } from '../../repositories/transaction-interface-repository';

export class UpdateTransactionService {
  constructor(private repo: TransactionRepository) {}

  async execute(id: string, data: Partial<Omit<Transaction, 'id'>>): Promise<Transaction | null> {
    return await this.repo.update(id, data);
  }
}
