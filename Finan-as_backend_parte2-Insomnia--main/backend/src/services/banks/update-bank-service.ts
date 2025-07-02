// update-bank-service.ts
import { BankRepository } from '../../repositories/bank-interface-repository';
import { Bank } from '../../entities/bank';

export class UpdateBankService {
  constructor(private bankRepo: BankRepository) {}

  async execute(id: string, data: Partial<Omit<Bank, 'id'>>): Promise<Bank | null> {
    return await this.bankRepo.update(id, data);
  }
}
