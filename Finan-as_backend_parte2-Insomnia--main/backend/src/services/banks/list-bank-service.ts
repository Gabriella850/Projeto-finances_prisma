// list-bank-service.ts
import { Bank } from '../../entities/bank';
import { BankRepository } from '../../repositories/bank-interface-repository';

export class ListBankService {
  constructor(private bankRepo: BankRepository) {}

  async execute(): Promise<Bank[]> {
    return await this.bankRepo.list();
  }
}
