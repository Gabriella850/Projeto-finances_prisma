// delete-bank-service.ts
import { BankRepository } from '../../repositories/bank-interface-repository';

export class DeleteBankService {
  constructor(private bankRepo: BankRepository) {}

  async execute(id: string): Promise<void> {
    await this.bankRepo.delete(id);
  }
}
