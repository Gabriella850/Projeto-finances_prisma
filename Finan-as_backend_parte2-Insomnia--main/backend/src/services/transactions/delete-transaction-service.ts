// delete-transaction-service.ts
import { TransactionRepository } from '../../repositories/transaction-interface-repository';

export class DeleteTransactionService {
  constructor(private repo: TransactionRepository) {}

  async execute(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
