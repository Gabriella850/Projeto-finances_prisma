// create-transaction-service.ts
import { Transaction } from '../../entities/transaction';
import { TransactionRepository } from '../../repositories/transaction-interface-repository';

export class CreateTransactionService {
  constructor(private repo: TransactionRepository) {}

  async execute(data: Omit<Transaction, 'id'>): Promise<Transaction> {
    return await this.repo.create(data);
  }
}
