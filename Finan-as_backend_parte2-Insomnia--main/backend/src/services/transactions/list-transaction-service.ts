// list-transaction-service.ts
import { Transaction } from '../../entities/transaction';
import { TransactionRepository } from '../../repositories/transaction-interface-repository';

export class ListTransactionService {
  constructor(private repo: TransactionRepository) {}

  async execute(): Promise<Transaction[]> {
    return await this.repo.list();
  }
}
